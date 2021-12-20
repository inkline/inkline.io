import path from 'path';
import glob from 'glob';
import fs from 'fs';
import sharp, { FormatEnum } from 'sharp';

const distPath = path.resolve(__dirname, '..', 'dist');
const distImagesPath = path.resolve(distPath, 'assets', 'images');

glob(path.join(distImagesPath, '**', '*.{jpg,jpeg,png}'), (error, imagePaths) => {
    if (error) {
        throw error;
    }

    imagePaths.forEach(async (imagePath) => {
        // console.log(`Optimizing "${imagePath.replace(`${distImagesPath}/`, '')}".`);

        const extension = path.extname(imagePath);
        const sourcePath = imagePath.replace(extension, `.source${extension}`);

        await fs.promises.rename(imagePath, sourcePath);
        await sharp(sourcePath)
            .toFormat(extension.replace('.', '') as keyof FormatEnum, {
                progressive: true,
                quality: 90
            })
            .toFile(imagePath, (error: Error) => {
                if (error) {
                    throw error;
                }
            });
        await fs.promises.rm(sourcePath);
    });
});
