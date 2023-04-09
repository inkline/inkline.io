---
title: Hamburger Menu - Inkline
description: Inkline's hamburger menu is used to control opening and closing elements using various animation options.
---

# Hamburger Menu
## Inkline's hamburger menu is used to control opening and closing elements using various animation options.

Here’s an example of a basic use case for the `<IHamburgerMenu>` component. This component is usually used together with the [Navbar Component](/docs/components/navbar) and [Sidebar Component](/docs/components/sidebar) to control their collapsed state.

::ContentTabs
#preview
:ContentPreview{src="/components/IHamburgerMenu/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHamburgerMenu/examples/basic.vue" lang="vue"} -->
::

### Color Variants
You can set the style of a `<IHamburgerMenu>` using the `color` property, which can have a value of `light` or `dark`. By default, hamburger menus have the `light` color variant.

::ContentTabs
#preview
:ContentPreview{src="/components/IHamburgerMenu/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHamburgerMenu/examples/color-variants.vue" lang="vue"} -->
::

### Animation
The `<IHamburgerMenu>` component supports various closed state animations. You can choose a closed state icon using the `animation` property.

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
