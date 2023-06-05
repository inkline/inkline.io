---
title: Unocss Preset Installation - Nuxt
description: Install the Inkline Preset for Unocss in any Nuxt application.
layout: docs
---

# Unocss Preset Installation - Nuxt
## Install the Inkline Preset for Unocss in any Nuxt application.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Install dependencies</div> 

```bash
npm install -D unocss @unocss/nuxt @inkline/unocss
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
<div class="install-step-title"><span class="install-step-number">3</span> Add Unocss to your Nuxt Configuration</div>

Next, open your `nuxt.config.ts` file and make the following changes:
- set `utilities` to false in your Inkline module config 
- add `@unocss/nuxt` to the `modules` array

```ts
import { resolve } from 'path';

export default defineNuxtConfig({
    modules: [
        '@inkline/plugin/nuxt',
        '@unocss/nuxt'
    ],
    inkline: {
        import: {
            utilities: false
        }
    }
});
```

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Enjoy on-demand utility classes!</div>

That's it! You can now enjoy to ease and efficiency of on-demand utility classes in your Inkline project. 

[Read more about the Unocss Preset](/docs/add-ons/unocss)

</div>

