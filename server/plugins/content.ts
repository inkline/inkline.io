import type { NitroAppPlugin } from 'nitropack';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import glob from 'fast-glob';

const rootDirPath = process.cwd();
const nodeModulesPath = resolve(rootDirPath, 'node_modules');
const inklineConfigPath = resolve(nodeModulesPath, '@inkline', 'config');
const inklinePath = resolve(nodeModulesPath, '@inkline', 'inkline');
const codeCache = new Map<string, string>();
const codeFilePaths = [
    resolve(inklineConfigPath, 'examples', 'defaults.ts'),
    ...glob.sync(resolve(rootDirPath, 'content', '_partials', '**', '*.md')),
    ...glob.sync(resolve(inklinePath, 'stories', '**', '*.raw.vue')),
    ...glob.sync(resolve(inklinePath, 'components', '**', 'examples', '*.raw.vue'))
];

codeFilePaths.forEach((filePath) => {
    const keyName = filePath.substring(nodeModulesPath.length + 1);
    codeCache.set(keyName, readFileSync(filePath, 'utf-8'));
});

const autodocsRegEx = /<!--\s*Autodocs\s*\{(.+)}\s*-->/g;
const paramsRegEx = /(\w+)="([^"]+)"/g;

export default <NitroAppPlugin>function (nitroApp) {
    nitroApp.hooks.hook('content:file:beforeParse', (file) => {
        if (file._id.endsWith('.md')) {
            let match;
            let body = file.body;

            do {
                match = autodocsRegEx.exec(body);

                if (match) {
                    const rawParams = match[1];
                    const params = [...rawParams.matchAll(paramsRegEx)].reduce<
                        Record<string, string>
                    >((acc, [, propertyName, propertyValue]) => {
                        acc[propertyName] = propertyValue;

                        return acc;
                    }, {});

                    const code = codeCache.get(params.src);
                    const codeBlock = `~~~${params.lang}\n${code}\n~~~`;

                    if (code) {
                        body = body.replace(match[0], codeBlock);
                    } else {
                        console.error(`Could not find code for ${params.src}`);
                    }
                }
            } while (match);

            file.body = body;
        }
    });
};
