import { createRequire } from 'module';
import { readFile } from 'fs/promises';

export default defineNitroPlugin((nitroApp) => {
    const autodocsRegEx = /<!--\s*Autodocs\s*\{(.+)\}\s*-->/g;
    const paramsRegEx = /(\w+)="([^"]+)"/g;
    let require = createRequire(import.meta.url);

    nitroApp.hooks.hook('content:file:beforeParse', async (file) => {
        if (file._id.endsWith('.md')) {
            let match;
            while ((match = autodocsRegEx.exec(file.body))) {
                const rawParams = match[1];
                const params = [...rawParams.matchAll(paramsRegEx)].reduce<Record<string, string>>(
                    (acc, [, propertyName, propertyValue]) => {
                        acc[propertyName] = propertyValue;

                        return acc;
                    },
                    {}
                );

                let sourceFilePath;
                try {
                    sourceFilePath = require.resolve(params.src);
                } catch (e) {
                    require = createRequire(import.meta.url);
                    sourceFilePath = require.resolve(params.src);
                }

                const code = await readFile(sourceFilePath, 'utf-8');
                file.body = file.body.replace(match[0], `~~~${params.lang}\n${code}\n~~~`);
            }
        }
    });
});
