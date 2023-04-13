---
title: Popover
description: Popovers are useful for conveying information when an user clicks an element.
---

# Popover
## Popovers are useful for conveying information when an user clicks an element.

Wrap the trigger element (such as an `<IButton>`) and provide a `<template #body>` inside an `<IPopover>` component to create a popover.

Optionally, you can provide a popover `header` and `footer` using slots.

::ContentTabs
#preview
:ContentPreview{src="/components/IPopover/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPopover/examples/basic.vue" lang="vue"} -->
::

### Placement
Trigger popovers at the `top`, `bottom`, `left` or `right` of elements by using the `placement` property. 

Each position also has a `-start` or `-end` variant that sets the popover to the start or end of the placement instead of centering it. The possible placements are:

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
:ContentPreview{src="/components/IPopover/examples/placement"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPopover/examples/placement.vue" lang="vue"} -->
::

### Trigger Type
You can use the `trigger` property to trigger the popover on `hover` or `click`. By default, popovers are triggered on `hover`, a design decision made to improve user experience.

::ContentTabs
#preview
:ContentPreview{src="/components/IPopover/examples/trigger"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPopover/examples/trigger.vue" lang="vue"} -->
::

### Color Variants
You can choose a light or dark color for your popover using the `color` modifier.

::ContentTabs
#preview
:ContentPreview{src="/components/IPopover/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPopover/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your popovers, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IPopover/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPopover/examples/size-variants.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="IPopover"}
::

### Slots
::ContentComponentSlots{component="IPopover"}
::

### Events
::ContentComponentEvents{component="IPopover"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IPopover"}
::
