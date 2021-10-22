import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import glob from 'glob';
import { languages } from '../src/config';

export function toKebabCase(string: string) {
    const regExp = /([A-Z])/g;

    return string.replace(regExp, (match, p) => '-' + p.toLowerCase());
}


const remap: Record<string, { target: string }> = {
    'components/layout': {
        target: 'core/layout'
    },
    'components/table': {
        target: 'core/tables'
    },
    'components/checkbox': {
        target: 'forms/checkbox'
    },
    'components/input': {
        target: 'forms/input'
    },
    'components/number-input': {
        target: 'forms/number-input'
    },
    'components/radio': {
        target: 'forms/radio'
    },
    'components/textarea': {
        target: 'forms/textarea'
    },
    'components/toggle': {
        target: 'forms/toggle'
    },
    'components/form': {
        target: 'forms/form'
    },
    'components/form/form-group': {
        target: 'forms/form-group'
    },
    'components/form/form-label': {
        target: 'forms/form-label'
    },
    'components/select': {
        target: 'forms/select'
    },
    'components/select/advanced': {
        target: 'forms/select/advanced'
    },
    'components/select/autocomplete': {
        target: 'forms/select/autocomplete'
    },
    'components/select/pagination': {
        target: 'forms/select/pagination'
    },
    'components/select/rendering': {
        target: 'forms/select/rendering'
    },
};

const examplesImportRegEx = /import \* as examples from ['"].+['"];/;

const sourceDir = path.resolve(__dirname, '..', 'node_modules', '@inkline', 'inkline');
const examplesDir = path.resolve(__dirname, '..', 'src', 'examples');
const pagesDir = path.resolve(__dirname, '..', 'src', 'pages');

/**
 * Clean up generated files and folders
 */
[
    examplesDir,
    path.resolve(pagesDir, 'docs'),
    ...languages.map((lang) => path.resolve(pagesDir, lang, 'docs'))
].forEach((dir) => fs.rmdirSync(dir, { recursive: true }));

/**
 * Generate documentation pages that belong to a specific component
 *
 * @source ./node_modules/@inkline/inkline/src/*.md
 */
glob(path.resolve(sourceDir, '!(src)/**/en.md'), async (err: Error | null, files: string[]) => {
    const targetFiles = files.map((file) => {
        const docsPath = file
            .replace(`${sourceDir}${path.sep}`, '')
            .split(path.sep)
            .filter((part) => !['docs'].includes(part))
            .filter((part, index) => !(['docs', 'components', 'en.md'].includes(part) && index > 0))
            .map((p) => toKebabCase(p).replace('-i-', ''))
            .join(path.sep);

        return {
            target: docsPath,
            source: file
        };
    });

    for (const file of targetFiles) {
        const index = targetFiles.filter((f) => f.target.includes(`${file.target}${path.sep}`)).length > 1;
        const isComponent = file.source.includes('components');
        const target = remap[file.target]?.target || file.target;

        const examplesFromPath = file.source.replace(isComponent ? /docs\/.*en\.md/ : 'en.md', 'examples');
        const examplesToPath = path.join(examplesDir, isComponent ? target.replace(/(components\/[\w-]+)\/.+/, '$1') : target);

        if (fs.existsSync(examplesFromPath)) {
            await fse.copy(examplesFromPath, examplesToPath);
        }

        for (const language of languages) {
            const fromPath = file.source.replace('en.md', `${language}.md`);
            const from = fs.existsSync(fromPath) ? fromPath : file.source;
            const toPath = index ? path.join(target, 'index.md') : `${target}.md`;
            const to = path.resolve(pagesDir, language, 'docs', toPath);
            const fromBuffer = await fs.promises.readFile(from);

            await fs.promises.mkdir(path.dirname(to), { recursive: true });
            const content = fromBuffer.toString().replace(
                examplesImportRegEx,
                `import * as examples from '${path.relative(to, examplesToPath).replace('../', '')}'`
            );
            await fs.promises.writeFile(to, content);

            if (language === 'en') {
                const toDefault = path.resolve(pagesDir, 'docs', toPath);

                await fs.promises.mkdir(path.dirname(toDefault), { recursive: true });
                const content = fromBuffer.toString().replace(
                    examplesImportRegEx,
                    `import * as examples from '${path.relative(toDefault, examplesToPath).replace('../', '')}'`
                );
                await fs.promises.writeFile(toDefault, content);
            }
        }

        console.log(`Generating ${index ? `${target}/index.md` : `${target}.md`}`);
    }
});
