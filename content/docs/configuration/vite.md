---
title: Module Options - Vite.js - Inkline
description: Effortlessly customize Inkline's Configuration using the Vite.js Plugin options.
layout: docs
---

# Module Options - Vite.js
## Effortlessly customize Inkline's Configuration using the Vite.js Plugin options.

Here are the **default configuration options**:

::ContentTabs
#vite
~~~ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { inkline } from '@inkline/plugin/vite';

export default defineConfig({
    plugins: [
        inkline({
            configFile: resolve(process.cwd(), 'inkline.config.ts'),
            extName: '.scss',
            outputDir: resolve(__dirname, '.inkline/css')
        })
    ]
});
~~~
::


::ContentConfigurationProperty
#name
### configFile
#type
`string`
#value
`path.resolve(process.cwd(), 'inkline.config.ts')`
#default
Sets the path to the Inkline configuration file, relative to the project root. The default value automatically determines the file extension.

::ContentTabs
#vite
~~~ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { inkline } from '@inkline/plugin/vite';

export default defineConfig({
    plugins: [
        inkline({
            configFile: resolve(process.cwd(), 'inkline.config.ts'),
        })
    ]
});
~~~
::
::


::ContentConfigurationProperty
#name
### extName
#type
`'.scss' | '.css'`
#value
`.scss`
#default
Sets the extension of the generated CSS Variables files. By default, Inkline requires the `.scss` extension, but you can generate `.css` files for your own needs.

::ContentTabs
#vite
~~~ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { inkline } from '@inkline/plugin/vite';

export default defineConfig({
    plugins: [
        inkline({
            outputDir: resolve(__dirname, 'src/css/variables'),
        })
    ]
});
~~~
::
::


::ContentConfigurationProperty
#name
### outputDir
#type
`string`
#value
`path.resolve(process.cwd(), 'inkline.config.ts')`
#default
Sets the output directory for the generated CSS Variables files, relative to the config file. The files are generated using the [@inkline/config](https://github.com/inkline/config) package.

::ContentTabs
#vite
~~~ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { inkline } from '@inkline/plugin/vite';

export default defineConfig({
    plugins: [
        inkline({
            outputDir: resolve(__dirname, 'src/css/variables'),
        })
    ]
});
~~~
::
::
