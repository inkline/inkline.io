/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import fs from 'fs';
import glob from 'fast-glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const srcBlogImages = path.join(root, 'assets', 'images', 'blog');
const distBlogImages = path.join(root, 'public', 'assets', 'images', 'blog');

if (!fs.existsSync(distBlogImages)) {
    fs.mkdirSync(distBlogImages, { recursive: true });
}

glob(`${srcBlogImages}/**/*`).then((files: string[]) => {
    files.forEach((file) => {
        const relative = path.relative(srcBlogImages, file);
        const target = path.join(distBlogImages, relative);

        console.log(`Copying ${path.relative(root, file)} -> ${path.relative(root, target)}`);
        fs.copyFileSync(file, target);
    });
});
