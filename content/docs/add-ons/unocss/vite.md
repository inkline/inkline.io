---
title: Unocss Preset Installation - Vite.js
description: Install the Inkline Preset for Unocss in any Vite.js application.
layout: docs
---

# Unocss Preset Installation - Vite.js
## Install the Inkline Preset for Unocss in any Vite.js application.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Install dependencies</div> 

```bash
npm install -D unocss @inkline/unocss
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

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Add Unocss to your Vite.js Configuration</div>

Next, open your `vite.config.ts` file and add the following to the `plugins` array:

```ts
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
      unocss()
  ]
});
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

[Read more about the Unocss Preset](/docs/add-ons/unocss)

</div>

