---
title: Nav - Inkline
description: Navs are basic navigation components that provide alignment and spacing between items.
---

# Nav
## Navs are basic navigation components that provide alignment and spacing between items.

Navigation components make use of the base `<i-nav>` component for building all types of navigation styles. 

::ContentTabs
#preview
:ContentPreview{src="/components/INav/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INav/examples/basic.vue" lang="vue"} -->
::

Behind the scenes, the `<i-nav-item>` is converted into a `<router-link>` if it has the `:to` property, or a plain `<a>` tag if it has a `href` property. Otherwise, it uses a simple `<div>` tag.

### Vertical Variant
You can stack nav items into a vertical navigation component by setting the `vertical` property on your `<i-nav>`.

::ContentTabs
#preview
:ContentPreview{src="/components/INav/examples/vertical"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INav/examples/vertical.vue" lang="vue"} -->
::

### Color Variants
You're able to use the `color` modifier to control the color of your navs, using one of the available variants: `light`, or `dark`. 

::ContentTabs
#preview
:ContentPreview{src="/components/INav/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INav/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your navs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/INav/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INav/examples/size-variants.vue" lang="vue"} -->
::

### Linking and Routing
Nav items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-nav-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the `to` property.

::ContentTabs
#preview
:ContentPreview{src="/components/INav/examples/routing"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INav/examples/routing.vue" lang="vue"} -->
::

#### Active State

You can control the active state of your `<i-nav-item>` using the `active` property. When you provide a `to` property you're converting the component into a `router-link`, therefore you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

::ContentTabs
#preview
:ContentPreview{src="/components/INav/examples/state-active"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INav/examples/state-active.vue" lang="vue"} -->
::

### Props
##### INav
::ContentComponentProps{component="INav"}
::
##### INavItem
::ContentComponentProps{component="INavItem"}
::

### Slots
##### INav
::ContentComponentSlots{component="INav"}
::
##### INavItem
::ContentComponentSlots{component="INavItem"}
::

### Design Tokens
##### INavItem
::ContentComponentDesignTokens{component="INavItem"}
::
