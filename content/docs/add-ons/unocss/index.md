---
title: Unocss Preset
description: The Inkline Unocss preset brings the flexibility of Unocss, a powerful utility-first CSS engine, to your Inkline projects, allowing you to generate atomic CSS utility classes on the fly.
---

# Unocss Preset
## This preset brings the flexibility of Unocss, a powerful utility-first CSS engine, to your Inkline projects, allowing you to generate atomic CSS utility classes on the fly.

# Installation

Follow the installation guide for your specific development environment to get started:

::ContentLinkCard{ to="/docs/add-ons/unocss/vite" title="Unocss Preset Installation for Vite.js" icon="logos:vitejs" }
::
::ContentLinkCard{ to="/docs/add-ons/unocss/nuxt" title="Unocss Preset Installation for Nuxt" icon="logos:nuxt-icon" }
::
::ContentLinkCard{ to="/docs/add-ons/unocss/webpack" title="Unocss Preset Installation for Webpack.js" icon="logos:webpack" }
::

## Usage

With the Inkline preset for Uno.css, you can create CSS utility classes in the following format:

- `_property:value`
- `_modifier:property:value`

### Examples

```html
<div class="_color:red">This div has red colored text.</div>
<div class="_background:primary">This div has a primary background color.</div>
<div class="_xs:margin-top:0">This div has a margin-top of 0 when on extra-small screens.</div>
```

**Note:** Always ensure the values used correspond to your theme configuration in `inkline.config.ts`.
