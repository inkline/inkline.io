const path = require('path');
const glob = require('glob');
const fs = require('fs');

const pkgName = 'patch-vue-directive-ssr';

[
    ...glob.sync(path.resolve(__dirname, '..', 'node_modules', '**', 'compiler-ssr.cjs.js')),
    ...glob.sync(path.resolve(__dirname, '..', 'node_modules', '**', 'compiler-sfc.esm-browser.js'))
].forEach((dependencyPath) => {
    const reg = /^(\s*const directiveTransform = context\.directiveTransforms\[prop\.name])(.*)$/m;
    const content = fs.readFileSync(dependencyPath, 'utf-8');

    let found = false;
    let replaced = false;

    const patched = content.replace(reg, (_, start, tail) => {
        found = true;

        if (tail.includes(pkgName)) { return; }

        replaced = true;
        return `${start} || compilerDom.noopDirectiveTransform /* ${pkgName} */${tail}`;
    });

    if (replaced) {
        fs.writeFileSync(dependencyPath, patched, 'utf-8');
        console.log(`[${pkgName}] patched successful`);
    } else if (!found) {
        console.error(`[${pkgName}] can't find entry to patch, lastest version tested is ${dependencyPath}@3.0.7. If you on longer face any build issues with directive SSR/SSG, you can remove this patch safely.`);
        process.exit(1);
    }
});
