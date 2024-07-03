---
title: UnoCSS Preset Installation - Webpack.js - Inkline
description: Install the Inkline Preset for UnoCSS in any Webpack.js application.
layout: docs
---

:ContentHeading{ title="Installation - Webpack.js" subtitle="UnoCSS Preset" }
## Install the Inkline Preset for UnoCSS in any Webpack.js application.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Install dependencies</div> 

```bash
npm install -D unocss @unocss/webpack @inkline/unocss
```

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Create Configuration File</div>

Create a `uno.config.ts` file and add the Inkline preset to it.

```ts
import { defineConfig } from 'unocss';
import { createPreset } from '@inkline/unocss';

export default (async () => {
    const presetInkline = await createPreset();

    return defineConfig({
        presets: [presetInkline]
    });
})();
```

::ContentAlert
If you're using a custom Inkline config file path, make sure to provide it as an options argument to the `createPreset()` function.
::

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Add UnoCSS to your Webpack.js Configuration</div>

Next, open your `webpack.config.ts` file and add the following to the `plugins` array:

```ts
const inkline = require('@inkline/plugin/webpack');
const unocss = require('@unocss/webpack').default;

module.exports = {
    plugins: [
        inkline(),
        unocss()
    ],
    optimization: {
        realContentHash: true
    }
};
```

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Replace utilities import</div>

If existing, replace the `utilities.scss` import from your `main.ts` file with the `uno.css` import.

```ts
- import '@inkline/inkline/css/utilities.scss?inline';
+ import 'uno.css';
```

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">5</span> Enjoy on-demand utility classes!</div>

That's it! You can now enjoy to ease and efficiency of on-demand utility classes in your Inkline project. 

[Read more about the UnoCSS Preset](/docs/add-ons/unocss)

</div>

