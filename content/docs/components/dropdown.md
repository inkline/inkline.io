---
title: Dropdown
description: Dropdowns are contextual overlays toggled through clicking or hovering, usually used for displaying a list of links.
---

# Dropdown
## Dropdowns are contextual overlays toggled through clicking or hovering, usually used for displaying a list of links.

Wrap the trigger element (such as an `<IButton>`) and provide a `<template #body>` inside an `<IDropdown>` component to create a dropdown.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/basic.raw.vue" lang="vue"} -->
::

### Placement
Trigger dropdowns at the `top`, `bottom`, `left` or `right` of elements by using the `placement` property. 

Each position also has a `-start` or `-end` variant that sets the dropdown to the start or end of the placement instead of centering it. The possible placements are:

- `top`
- `top-start`
- `top-end`
- `bottom`
- `bottom-start`
- `bottom-end`
- `left`
- `left-start`
- `left-end`
- `right`
- `right-start`
- `right-end`

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/placement"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/placement.raw.vue" lang="vue"} -->
::

### Trigger Type
You can use the `trigger` property to trigger the dropdown on `hover` or `click`. By default, dropdowns are triggered on `hover`, a design decision made to improve user experience.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/trigger"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/trigger.raw.vue" lang="vue"} -->
::

### Freeform Dropdown
You're not required to use any dropdown-specific components inside of the `<IDropdown>` body. You can add your own HTML markup without any issues. You might need additional size styles to control the content width.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/freeform"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/freeform.raw.vue" lang="vue"} -->
::

### Header and Footer
You can provide an optional header or footer for your dropdown menus using slots.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/header-footer.raw.vue" lang="vue"} -->
::

### Linking and Routing
Dropdown items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<IDropdownItem>` component is well integrated with the Vue Router plugin and will be converted to a `<RouterLink>` when using the to property.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/routing"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/routing.raw.vue" lang="vue"} -->
::

#### Active State
You can control the active state of your `<IDropdownItem>` using the `active` property. If you're providing a `:to` property, converting it into a `router-link`, you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/state-active"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/state-active.raw.vue" lang="vue"} -->
::

### Color Variants
You can choose a light or dark color for your dropdown using the `color` modifier.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your dropdowns, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/size-variants.raw.vue" lang="vue"} -->
::

### Nested Dropdowns
Inkline allows you to have virtually infinite recursive dropdown submenus structure by defining a `<IDropdown>` inside of another dropdown's body. This awesome feature gives you great design flexibility.

::ContentTabs
#preview
:ContentPreview{src="/components/IDropdown/examples/nested"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IDropdown/examples/nested.raw.vue" lang="vue"} -->
::


### Props
##### IDropdown
::ContentComponentProps{component="IDropdown"}
::
##### IDropdownItem
::ContentComponentProps{component="IDropdownItem"}
::

### Slots
##### IDropdown
::ContentComponentSlots{component="IDropdown"}
::
##### IDropdownItem
::ContentComponentSlots{component="IDropdownItem"}
::

### Events
##### IDropdown
::ContentComponentEvents{component="IDropdown"}
::


### Design Tokens
##### IDropdown
::ContentComponentDesignTokens{component="IDropdown"}
::
##### IDropdownItem
::ContentComponentDesignTokens{component="IDropdownItem"}
::
##### IDropdownDivider
::ContentComponentDesignTokens{component="IDropdownDivider"}
::
