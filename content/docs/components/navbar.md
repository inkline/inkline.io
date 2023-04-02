---
title: Navbar - Inkline
description: A responsive navigation header that includes support for branding, navigation, forms and more.
---

# Navbar
## A responsive navigation header that includes support for branding, navigation, forms and more.

Here’s an example of the basic components included in a  `<i-navbar>` that automatically collapses responsively.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/basic.vue" lang="vue"} -->
::

### Color Variants
Inkline includes two predefined navbar styles. You can set the style of a `<i-navbar>` using the `variant` property, which can have a value of `light` or `dark`. By default, modals use the `light` variant.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your navbar, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/size-variants.vue" lang="vue"} -->
::

### Dropdown
You can use an `<i-dropdown>` component inside the `<i-nav>` component to create a contextual navbar menu. [Learn more about the Dropdown component.](/docs/components/dropdown)

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/dropdown"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/dropdown.vue" lang="vue"} -->
::

### Nav Placement
You can position the `<i-nav>` component to the `start`, `end`, or `center` of the `<i-navbar-collapsible>` component using flexbox utilities. [Learn more about the Nav component.](/docs/components/nav)

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/nav-placement"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/nav-placement.vue" lang="vue"} -->
::

### Navbar Collapsing
You can control at which breakpoint your navbar will collapse at using the `collapse` property. By default, the navbar will collapse on the `md` screen size, but you can use any breakpoint value.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/collapse-breakpoint"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/collapse-breakpoint.vue" lang="vue"} -->
::

#### Always Collapsible

Besides the breakpoint values, you can use a boolean value to set your navbar to be always collapsible, or never collapsible.

Setting a `collapse` value of `true` will set the navbar to be always collapsible.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/collapse-true"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/collapse-true.vue" lang="vue"} -->
::

#### Never Collapsible

Setting a `collapse` value of `false` will set the navbar to never be collapsible.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/collapse-false"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/collapse-false.vue" lang="vue"} -->
::

#### Manual Collapse
Sometimes, it's necessary to control whether the collapsed Navbar is open or not programmatically. Fort that, you can use the `v-model` directive.

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/collapsed-state"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/collapsed-state.vue" lang="vue"} -->
::

### Linking and Routing
Nav items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-nav-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the `to` property. [Learn more about the Nav Item component.](/docs/components/nav)


::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/routing"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/routing.vue" lang="vue"} -->
::

#### Active State
You can control the active state of your `<i-nav-item>` using the `active` property. When you provide a `to` property you're converting the component into a `router-link`, therefore you can use the `active-class` and `exact-active-class` properties and set them to `-active`. [Learn more about the Nav Item component.](/docs/components/nav)

::ContentTabs
#preview
:ContentPreview{src="/components/INavbar/examples/routing-active"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INavbar/examples/routing-active.vue" lang="vue"} -->
::

### Props
##### INavbar
::ContentComponentProps{component="INavbar"}
::
##### INavbarBrand
::ContentComponentProps{component="INavbarBrand"}
::

### Slots
##### INavbar
::ContentComponentSlots{component="INavbar"}
::
##### INavbarBrand
::ContentComponentSlots{component="INavbarBrand"}
::
##### INavbarCollapsible
::ContentComponentSlots{component="INavbarCollapsible"}
::

### Events
##### INavbar
::ContentComponentEvents{component="INavbar"}
::
##### INavbarCollapsible
::ContentComponentSlots{component="INavbarCollapsible"}
::

### Design Tokens
##### INavbar
::ContentComponentDesignTokens{component="INavbar"}
::
##### INavbarBrand
::ContentComponentDesignTokens{component="INavbarBrand"}
::
##### INavbarCollapsible
::ContentComponentDesignTokens{component="INavbarCollapsible"}
::
