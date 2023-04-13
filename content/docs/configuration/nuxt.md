---
title: Module Options - Nuxt
description: Effortlessly customize Inkline's Configuration using the Nuxt Module options.
layout: docs
---

# Module Options - Nuxt
## Effortlessly customize Inkline's Configuration using the Nuxt Module options.

Here are the **default configuration options**:

::ContentTabs
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        /**
         * @inkline/config
         * @description provides configuration file specific options
         */

        configFile: resolve(process.cwd(), 'inkline.config.ts'),
        extName: '.scss',
        outputDir: resolve(__dirname, '.inkline/css'),

        /**
         * @inkline/inkline
         * @description provides configuration file specific options
         */

        globals: {
            color: '',
            colorMode: 'system',
            colorModeStrategy: 'localStorage',
            componentOptions: {},
            locale: 'en',
            size: '',
            validateOn: ['input', 'blur']
        },

        /**
         * @inkline/plugin
         * @description provides import specific options
         */

        import: {
            mode: 'auto',
            scripts: true,
            styles: true,
            utilities: true
        }
    }
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
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        configFile: resolve(process.cwd(), 'inkline.config.ts')
    }
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
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        extName: '.scss'
    }
});
~~~
::
::


::ContentConfigurationProperty
#name
### globals
#type
`InklinePluginOptions`
#value
`{...}`
#default
Used to configure the Inkline [Plugin Options](/docs/configuration/plugin).

::ContentTabs
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        globals: {
            color: '',
            colorMode: 'system',
            colorModeStrategy: 'localStorage',
            componentOptions: {},
            locale: 'en',
            size: '',
            validateOn: ['input', 'blur']
        }
    }
});
~~~
::
::


::ContentConfigurationProperty
#name
### import.mode
#type
`'global' | 'auto'`
#value
`'auto'`
#default
Sets the component import mode. When using the `'global'` mode, all components will be imported globally. When using the `'auto'` mode, components will be imported on demand.

::ContentTabs
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        import: {
            mode: 'auto'
        }
    }
});
~~~
::
::


::ContentConfigurationProperty
#name
### import.scripts
#type
`boolean`
#value
`true`
#default
Sets whether to import Inkline's scripts. When set to `false`, you will need to import the scripts manually.

::ContentTabs
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        import: {
            scripts: true
        }
    }
});
~~~
::
::


::ContentConfigurationProperty
#name
### import.styles
#type
`boolean`
#value
`true`
#default
Sets whether to import Inkline's styles. When set to `false`, you will need to import the styles manually.

::ContentTabs
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        import: {
            styles: true
        }
    }
});
~~~
::
::


::ContentConfigurationProperty
#name
### import.utilities
#type
`boolean`
#value
`true`
#default
Sets whether to import Inkline's utilities. When set to `false`, you will need to import the utilities manually.

::ContentTabs
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        import: {
            utilities: true
        }
    }
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
#nuxt
~~~ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: ['@inkline/plugin/nuxt'],
    inkline: {
        outputDir: resolve(__dirname, 'src/css/variables')
    }
});
~~~
::
::
