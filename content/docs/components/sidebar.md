---
title: Sidebar
description: A responsive navigation sidebar that includes support for branding, navigation, forms and more.
---

# Sidebar
## A responsive navigation sidebar that includes support for branding, navigation, forms and more.

Here’s an example on how to use the `<ISidebar>` inside a dashboard layout. The sidebar automatically collapses responsively.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/basic" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes two predefined sidebar styles. You can set the style of a `<ISidebar>` using the `variant` property, which can have a value of `light` or `dark`. By default, modals use the `light` variant.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/color-variants" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your sidebar, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/size-variants" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/size-variants.raw.vue" lang="vue"} -->
::

### Placement
You can easily place your sidebar on the `left` or `right` side of a layout by setting the `placement` property . By default, sidebars are on the left side.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/placement" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/placement.raw.vue" lang="vue"} -->
::

### Collapsible Menu
You can use an `<ICollapsible>` component with one or more `<ICollapsibleItem>` components inside the `<INav>` component to create a contextual sidebar menu. [Learn more about the Collapsible component.](/docs/components/collapsible)

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/collapsible" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/collapsible.raw.vue" lang="vue"} -->
::

### Sidebar Collapsing
You can control at which breakpoint your sidebar will collapse at using the `collapse` property. By default, the sidebar will collapse on the `md` screen size, but you can use any breakpoint value.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/collapse-breakpoint" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/collapse-breakpoint.raw.vue" lang="vue"} -->
::

#### Always Collapsible
Besides the breakpoint values, you can use a boolean value to set your sidebar to be always collapsible, or never collapsible.

Setting a `collapse` value of `true` will set the sidebar to be always collapsible.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/collapse-true" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/collapse-true.raw.vue" lang="vue"} -->
::

#### Never Collapsible
Setting a `collapse` value of `false` will set the sidebar to never be collapsible.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/collapse-false" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/collapse-false.raw.vue" lang="vue"} -->
::

### Collapse Position
Using the `collapse-position` property you can set the collapsed sidebar position to 
- `relative`
- `absolute`
- `fixed`

This property allows you to control whether the sidebar will affect the content that it is next to it when reaching the collapse breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/collapse-position" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/collapse-position.raw.vue" lang="vue"} -->
::

### Linking and Routing
Nav items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<INavItem>` component is well integrated with the Vue Router plugin and will be converted to a `<RouterLink>` when using the `to` property. [Learn more about the Nav Item component.](/docs/components/nav)

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/routing" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/routing.raw.vue" lang="vue"} -->
::

#### Active State
You can control the active state of your `<INavItem>` using the `active` property. When you provide a `to` property you're converting the component into a `router-link`, therefore you can use the `active-class` and `exact-active-class` properties and set them to `-active`. [Learn more about the Nav Item component.](/docs/components/nav)

::ContentTabs
#preview
:ContentPreview{src="/components/ISidebar/examples/routing-active" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISidebar/examples/routing-active.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="ISidebar"}
::

### Slots
::ContentComponentSlots{component="ISidebar"}
::

### Events
::ContentComponentEvents{component="ISidebar"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ISidebar"}
::
