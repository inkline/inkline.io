---
title: UnoCSS Preset - Inkline
description: The Inkline UnoCSS preset brings the flexibility of UnoCSS, a powerful utility-first CSS engine, to your projects, allowing you to generate atomic Inkline CSS Utility Classes on the fly.
---

# UnoCSS Preset
## This preset brings the flexibility of UnoCSS, a powerful utility-first CSS engine, to your projects, allowing you to generate atomic Inkline CSS Utility Classes on the fly.

[UnoCSS](https://unocss.dev/) has made a name for itself in the realm of utility-first CSS libraries, and we at Inkline are all for it. With UnoCSS's unique approach to CSS utility classes and Inkline's focus on delivering a seamless Vue.js Design System, this is an integration that packs a punch!

## Installation

Follow the installation guide for your specific development environment to get started:

::ContentLinkCard{ to="/docs/add-ons/unocss/vite" title="UnoCSS Preset Installation for Vite.js" icon="logos:vitejs" }
::
::ContentLinkCard{ to="/docs/add-ons/unocss/nuxt" title="UnoCSS Preset Installation for Nuxt" icon="logos:nuxt-icon" }
::
::ContentLinkCard{ to="/docs/add-ons/unocss/webpack" title="UnoCSS Preset Installation for Webpack.js" icon="logos:webpack" }
::

## Usage

With the Inkline preset for UnoCSS, you can create CSS utility classes in the following format:

- `_{property}:{value}`
- `_{modifier}:{property}:{value}`

### Examples

```html
<div class="_color:red">This div has red colored text.</div>
<div class="_background:primary">This div has a primary background color.</div>
<div class="_xs:margin-top:0">This div has a margin-top of 0 when on extra-small screens.</div>
```

**Note:** Ensure the values used correspond to your theme configuration in `inkline.config.ts`.

### Variants

#### Breakpoint Variant
You can apply breakpoint modifiers to any utility class by prefixing the breakpoint name to the class name. The following breakpoints are available:

```
_{breakpoint}:{property}:{value}
```

```html
<div class="_xs:margin-top:0">This div has a margin-top of 0 when on extra-small screens.</div>
<div class="_sm:margin-top:0">This div has a margin-top of 0 when on small screens.</div>
<div class="_md:margin-top:0">This div has a margin-top of 0 when on medium screens.</div>
<div class="_lg:margin-top:0">This div has a margin-top of 0 when on large screens.</div>
<div class="_xl:margin-top:0">This div has a margin-top of 0 when on extra-large screens.</div>
<div class="_2xl:margin-top:0">This div has a margin-top of 0 when on extra-extra-large screens.</div>
```

#### Important Variant
You can apply the important modifiers to any utility class by suffixing the class with an exclamation mark `!`:

```
_{property}:{value}!
```

```html
<div class="_margin-top:0!">This div has a margin-top of 0 with an !important marker.</div>
```

#### Print Variant
You can apply the print media modifier to any utility class by prefixing the class with `print:`:

```
_print:{property}:{value}!
```

```html
<div class="_margin-top:0">This div has a margin-top of 0 with an !important marker.</div>
```
