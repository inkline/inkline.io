import * as path from 'path';
import * as fs from 'fs';
import glob from 'glob';
import { languages } from '../src/config';

export function toKebabCase(string: string) {
    const regExp = /([A-Z])/g;

    return string.replace(regExp, (match, p) => '-' + p.toLowerCase());
}

/**
 * Generate documentation pages that belong to a specific component
 *
 * @source ./node_modules/@inkline/inkline/src/*.md
 */

const sourceDir = path.resolve(__dirname, '..', 'node_modules/@inkline/inkline/src');

glob(path.resolve(sourceDir, '**/en.md'), async (err: Error | null, files: string[]) => {
    const targetFiles = files.map((file) => {
        const docsPath = file
            .replace(`${sourceDir}${path.sep}`, '')
            .split(path.sep)
            .filter((part, index) => !['docs'].includes(part))
            .filter((part, index) => !(['docs', 'components', 'en.md'].includes(part) && index > 0))
            .map((p) => toKebabCase(p).replace('-i-', ''))
            .join(path.sep)

        return {
            target: docsPath,
            source: file
        };
    });

    for (const file of targetFiles) {
        const index = targetFiles.filter((f) => f.target.includes(`${file.target}${path.sep}`)).length > 1;

        for (const language of languages) {
            const fromPath = file.source.replace('en.md', `${language}.md`);
            const from = fs.existsSync(fromPath) ? fromPath : file.source;
            const toPath = index ? path.join(file.target, 'index.md') : `${file.target}.md`
            const to = path.resolve(__dirname, '..', 'src', 'pages', language, 'docs', toPath);

            await fs.promises.mkdir(path.dirname(to), { recursive: true });
            await fs.promises.copyFile(from, to);

            if (language === 'en') {
                const toDefault = path.resolve(__dirname, '..', 'src', 'pages', 'docs', toPath);

                await fs.promises.mkdir(path.dirname(toDefault), { recursive: true });
                await fs.promises.copyFile(from, toDefault);
            }
        }

        console.log(`Generating ${index ? `${file.target}/index.md` : `${file.target}.md`}`);
    }
});
