import path from 'path';
import fs from 'fs/promises';

const baseUrl = 'https://inkline.io';

const sitemapTemplate = ({ entries }: { entries: string[] }) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

const sitemapEntryTemplate = ({ path, lastModified }: { path: string; lastModified: Date; }) => `    <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${lastModified.toISOString()}</lastmod>
    </url>`;

export const sitemapResolver = async (routes: { path: string; component: string; }[]) => {
    const entries = [];

    for (const route of routes.filter((route) => !route.component.includes('['))) {
        const lastModified = (await fs.stat(path.resolve(__dirname, '..', route.component.replace('/', '')))).mtime;

        entries.push(sitemapEntryTemplate({
            path: route.path,
            lastModified
        }));
    }

    const sitemap = sitemapTemplate({ entries });
    await fs.writeFile(path.resolve(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
};
