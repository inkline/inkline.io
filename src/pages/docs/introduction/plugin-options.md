---
title: Plugin Options - Inkline
description: Make Inkline your own by changing its many global configuration options.
---

# Plugin Options
## Make Inkline your own by changing its many global configuration options.

You can configure some of Inkline's behaviour globally using the `config` field of the Vue Plugin integration. Here are the default configuration options:

~~~js
app.use(Inkline, {
    components: {},
    icons: {},
    colorMode: 'system',
    locale: 'en',
    validateOn: ['input', 'blur'],
    color: '',
    size: '',
    routerComponent: 'router-link',
    componentOptions: {}
});
~~~

##### components
- **Type**: `object`
- **Default**: `{}`
- **Usage**: 

    ~~~js
    import { IButton } from '@inkline/inkline/components';
    
    app.use(Inkline, {
        components: {
            IButton
        }
    });
    ~~~
    
    Register components globally during plugin installation.

##### icons
- **Type**: `object`
- **Default**: `{}`
- **Usage**: 

    ~~~js
    import * as inklineIcons from '@inkline/icons/packs/inkline';
    import { fasCircle } from '@inkline/icons/packs/fontawesome';

    app.use(Inkline, {
        icons: {
            ...inklineIcons,
            fasCircle
        }
    });
    ~~~
    
    Register icons to be available within the `<i-icon>` component.

    ~~~html
    <i-icon name="fas-circle" />
    ~~~

##### colorMode
- **Type**: `'system' | 'light' | 'dark' | string`
- **Default**: `'system'`
- **Usage**: 

    ~~~js
    app.use(Inkline, {
        colorMode: 'system'
    });
    ~~~
    
    Sets the preferred color mode to the chosen option. When set to `'system'`, it will use `prefers-color-scheme: dark` to determine **light** or **dark** mode.

##### locale
- **Type**: `'en' | string`
- **Default**: `'en'`
- **Usage**: 

    ~~~js
    app.use(Inkline, {
        locale: 'en'
    });
    ~~~
    
    Sets the locale to be used for generic messages such as validation errors.

##### validateOn
- **Type**: `Array<'input' | 'blur' | string>`
- **Default**: `['input', 'blur']`
- **Usage**: 

    ~~~js
    app.use(Inkline, {
        validateOn: ['blur']
    });
    ~~~
    
    Sets the events that trigger the form validation.

##### color
- **Type**: `'light' | 'dark' | string`
- **Default**: `''`
- **Usage**: 

    ~~~js
    app.use(Inkline, {
        color: ''
    });
    ~~~
    
    Sets the default `color` property value to use for components. When left empty, the prop default value will change from **light** to **dark** according to the chosen `colorMode`. 

##### size
- **Type**: `'sm' | 'md' | 'lg' | string`
- **Default**: `''`
- **Usage**: 

    ~~~js
    app.use(Inkline, {
        size: ''
    });
    ~~~
    
    Sets the default `size` property value to use for components. When left empty, the prop default value will fallback to `md` (medium) size. 

##### routerComponent
- **Type**: `string`
- **Default**: `'router-link'`
- **Usage**: 

    ~~~js
    app.use(Inkline, {
        routerComponent: 'router-link'
    });
    ~~~
    
    Sets the routing component to be used for `Linkable` components such as `<i-button>`, `<i-list-group-item>`, `<i-nav-item>` and `<i-navbar-brand>`.

##### componentOptions
- **Type**: `object`
- **Default**: `{}`
- **Usage**: 

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
    
    Used to override the `color` and `size` prop default values of specific components.
