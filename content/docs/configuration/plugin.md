---
title: Plugin Options - Inkline
description: Make Inkline your own by changing its many global configuration options.
layout: docs
---

# Plugin Options
## Make Inkline your own by changing its many global configuration options.

You can configure some of Inkline's behaviour globally using the `config` field of the Vue Plugin integration. 

Here are the **default configuration options**:

::ContentTabs
#main
~~~js
import { Inkline, components } from '@inkline/inkline';

app.use(Inkline, {
    color: '',
    colorMode: 'system',
    colorModeStrategy: 'localStorage',
    components,
    componentOptions: {},
    icons: {},
    locale: 'en',
    renderMode: 'client',
    routerComponent: 'RouterLink',
    size: '',
    validateOn: ['input', 'blur']
});
~~~
::

::ContentAlert{type="info"}
To configure Plugin Options for Nuxt.js, read the [Module Configuration Reference](https://github.com/inkline/plugin#nuxtjs).
::

### color
- **Type**: `'light' | 'dark' | string`
- **Default**: `''`
- **Usage**:

Sets the default `color` property value to use for components. When left empty, the prop default value will change from **light** to **dark** according to the chosen `colorMode`.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    color: ''
});
~~~
::


### colorMode
- **Type**: `'system' | 'light' | 'dark' | string`
- **Default**: `'system'`
- **Usage**:

Sets the preferred color mode to the chosen option. When set to **`system`**, it will use `prefers-color-scheme: dark` to determine **`light`** or **`dark`** mode.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    colorMode: 'system'
});
~~~
::

### colorModeStrategy
- **Type**: `'localStorage' | null`
- **Default**: `'localStorage'`
- **Usage**:

Sets the caching mechanism for storing the `colorMode`.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    colorModeStrategy: 'localStorage'
});
~~~
::

### components
- **Type**: `object`
- **Default**: `{}`
- **Usage**:

Register components globally during plugin installation.

::ContentTabs
#main
~~~js
import { IButton } from '@inkline/inkline/components';

app.use(Inkline, {
    components: {
        IButton
    }
});
~~~
::

### componentOptions
- **Type**: `object`
- **Default**: `{}`
- **Usage**:

Used to override the `color` and `size` prop default values of specific components.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    componentOptions: {
        IButton: {
            color: 'primary',
            size: 'lg'
        }
    }
});
~~~
::


### icons
- **Type**: `object`
- **Default**: `{}`
- **Usage**:

This is defined in [Svgson](https://www.npmjs.com/package/svgson) format and used for internal Inkline icons only. We would recommend using a tool like [unplugin-icons](https://github.com/antfu/unplugin-icons) for dynamically loading thousands of individual icons.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    icons: {
        inkCaretDown: { name: 'svg', type: 'element', value: '', attributes: { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '28', viewBox: '0 0 16 28', fill: 'currentColor' }, children: [{ name: 'title', type: 'element', value: '', attributes: {}, children: [{ name: '', type: 'text', value: 'caret-down', attributes: {}, children: [] }] }, { name: 'path', type: 'element', value: '', attributes: { d: 'M16 11c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1z' }, children: [] }] };
    }
});
~~~
::

### locale
- **Type**: `'en' | string`
- **Default**: `'en'`
- **Usage**:

Sets the locale to be used for generic messages such as validation errors.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    locale: 'en'
});
~~~
::


### renderMode
- **Type**: `'client' | 'universal'`
- **Default**: `'en'`
- **Usage**:

Set the render mode to **Client** or **Universal (SSR/SSG)**. This is mainly used for storing the preferred `colorMode` correctly and is handled automatically by our available integrations.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    locale: 'en'
});
~~~
::

### routerComponent
- **Type**: VueComponent | `string`
- **Default**: `'router-link'`
- **Usage**:

Sets the routing component to be used for `Linkable` components such as `<i-button>`, `<i-list-group-item>`, `<i-nav-item>` and `<i-navbar-brand>`.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    routerComponent: 'RouterLink'
});
~~~
::


### size
- **Type**: `'sm' | 'md' | 'lg' | string`
- **Default**: `''`
- **Usage**:

Sets the default `size` property value to use for components. When left empty, the prop default value will fallback to `md` (medium) size.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    size: ''
});
~~~
::


### validateOn
- **Type**: `Array<'input' | 'blur' | string>`
- **Default**: `['input', 'blur']`
- **Usage**:

Sets the events that trigger the form validation.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    validateOn: ['blur']
});
~~~
::

