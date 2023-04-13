---
title: Plugin Options
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
To configure Plugin Options for Nuxt, read the [Module Configuration Reference](https://github.com/inkline/plugin#nuxtjs).
::


::ContentConfigurationProperty
#name
### color
#type
`'light' | 'dark' | string`
#value
`''`
#default
Sets the default `color` property value to use for components. When left empty, the prop default value will change from **light** to **dark** according to the chosen `colorMode`.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    color: ''
});
~~~
::
::


::ContentConfigurationProperty
#name
### colorMode
#type
`'system' | 'light' | 'dark' | string`
#value
`'system'`
#default
Sets the preferred color mode to the chosen option. When set to **`system`**, it will use `prefers-color-scheme: dark` to determine **`light`** or **`dark`** mode.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    colorMode: 'system'
});
~~~
::
::


::ContentConfigurationProperty
#name
### colorModeStrategy
#type
`'localStorage' | null`
#value
`'localStorage'`
#default
Sets the caching mechanism for storing the `colorMode`.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    colorModeStrategy: 'localStorage'
});
~~~
::
::


::ContentConfigurationProperty
#name
### components
#type
`Record<string, Component>`
#value
`{}`
#default
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
::


::ContentConfigurationProperty
#name
### componentOptions
#type
`Record<string, Record<string, any>>`
#value
`{}`
#default
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
::


::ContentConfigurationProperty
#name
### icons
#type
`Record<string, Svgson>`
#value
`{}`
#default
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
::


::ContentConfigurationProperty
#name
### locale
#type
`'en' | string`
#value
`'en'`
#default
Sets the locale to be used for generic messages such as validation errors.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    locale: 'en'
});
~~~
::
::


::ContentConfigurationProperty
#name
### renderMode
#type
`'client' | 'universal'`
#value
`'client'`
#default
Set the render mode to **Client** or **Universal (SSR/SSG)**. This is mainly used for storing the preferred `colorMode` correctly and is handled automatically by our available integrations.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    renderMode: 'client'
});
~~~
::
::


::ContentConfigurationProperty
#name
### routerComponent
#type
`Component | string`
#value
`'client'`
#default
Sets the routing component to be used for `Linkable` components such as `<IButton>`, `<IListGroupItem>`, `<INavItem>` and `<INavbarBrand>`. When using a string type, the component must be registered globally.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    routerComponent: 'RouterLink'
});
~~~
::
::


::ContentConfigurationProperty
#name
### size
#type
`'sm' | 'md' | 'lg' | string`
#value
`''`
#default
Sets the default `size` property value to use for components. When left empty, the prop default value will fallback to `md` (medium) size.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    size: ''
});
~~~
::
::


::ContentConfigurationProperty
#name
### validateOn
#type
`Array<'input' | 'blur' | string>`
#value
`['input', 'blur']`
#default
Sets the events that trigger the form validation.

::ContentTabs
#main
~~~js
app.use(Inkline, {
    validateOn: ['blur']
});
~~~
::
::
