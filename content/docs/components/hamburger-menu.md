---
title: Hamburger Menu - Inkline
description: Inkline's hamburger menu is used to control opening and closing elements using various animation options.
---

# Hamburger Menu
## Inkline's hamburger menu is used to control opening and closing elements using various animation options.

### Basic Example
Here’s an example of a basic use case for the `<i-hamburger-menu>` component. This component is usually used together with the <router-link :to="{ name: 'docs-components-navbar' }">Navbar Component</router-link> and <router-link to="{ name: 'docs-components-sidebar' }">Sidebar Component</router-link> to control their collapsed state.

::ContentTabs
#preview
:ContentPreview{src="/components/IHamburgerMenu/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHamburgerMenu/examples/basic.vue" lang="vue"} -->
::

### Color Variants
You can set the style of a `<i-hamburger-menu>` using the `color` property, which can have a value of `light` or `dark`. By default, hamburger menus have the `light` color variant.

::ContentTabs
#preview
:ContentPreview{src="/components/IHamburgerMenu/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHamburgerMenu/examples/color-variants.vue" lang="vue"} -->
::

### Animation
The `<i-hamburger-menu>` menu component supports various closed state animations. You can choose a closed state icon using the `animation` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IHamburgerMenu/examples/animation"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHamburgerMenu/examples/animation.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IHamburgerMenu"}
::

### Events
::ContentComponentEvents{component="IHamburgerMenu"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IHamburgerMenu"}
::
