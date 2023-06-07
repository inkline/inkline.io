---
title: Module Options - Webpack.js - Inkline
description: Effortlessly customize Inkline's Configuration using the Webpack.js Plugin options.
layout: docs
---

# Module Options - Webpack.js
## Effortlessly customize Inkline's Configuration using the Webpack.js Plugin options.

Here are the **default configuration options**:

::ContentTabs
#webpack
~~~ts
const { resolve } = require('path');
const inkline = require('@inkline/plugin/webpack');

module.exports = {
    plugins: [
        inkline({
            configFile: resolve(process.cwd(), 'inkline.config.ts'),
            extName: '.scss',
            outputDir: resolve(__dirname, '.inkline/css')
        })
    ]
};
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
#webpack
~~~ts
const { resolve } = require('path');
const inkline = require('@inkline/plugin/webpack');

module.exports = {
    plugins: [
        inkline({
            configFile: resolve(process.cwd(), 'inkline.config.ts')
        })
    ]
};
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
#webpack
~~~ts
const { resolve } = require('path');
const inkline = require('@inkline/plugin/webpack');

module.exports = {
    plugins: [
        inkline({
            extName: '.scss'
        })
    ]
};
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
#webpack
~~~ts
const { resolve } = require('path');
const inkline = require('@inkline/plugin/webpack');

module.exports = {
    plugins: [
        inkline({
            outputDir: resolve(__dirname, '.inkline/css')
        })
    ]
};
~~~
::
::
