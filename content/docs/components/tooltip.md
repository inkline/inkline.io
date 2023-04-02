---
title: Tooltip - Inkline
description: Tooltips are useful for conveying information when an user hovers over an element.
---

# Tooltip
## Tooltips are useful for conveying information when an user hovers over an element.

Wrap the trigger element (such as an `<i-button>`) and provide a `<template #body>` inside an `<i-tooltip>` component to create a tooltip.

::ContentTabs
#preview
:ContentPreview{src="/components/ITooltip/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITooltip/examples/basic.vue" lang="vue"} -->
::

### Placement
Trigger tooltips at the `top`, `bottom`, `left` or `right` of elements by using the `placement` property. 

Each position also has a `-start` or `-end` variant that sets the tooltip to the start or end of the placement instead of centering it. The possible placements are:

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
:ContentPreview{src="/components/ITooltip/examples/placement"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITooltip/examples/placement.vue" lang="vue"} -->
::

### Freeform
Tooltips can contain text of virtually any size. You can control the wrapping and the maximum width of the tooltip by setting `white-space: normal` and a fixed `width` property on the tooltip content.

::ContentTabs
#preview
:ContentPreview{src="/components/ITooltip/examples/freeform"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITooltip/examples/freeform.vue" lang="vue"} -->
::

### Trigger Type
You can use the `trigger` property to trigger the tooltip on `hover` or `click`. By default, tooltips are triggered on `hover`, a design decision made to improve user experience.

::ContentTabs
#preview
:ContentPreview{src="/components/ITooltip/examples/trigger"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITooltip/examples/trigger.vue" lang="vue"} -->
::

### Color Variants
You can choose a light or dark color for your tooltip using the `color` modifier.

::ContentTabs
#preview
:ContentPreview{src="/components/ITooltip/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITooltip/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your tooltips, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ITooltip/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITooltip/examples/size-variants.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="ITooltip"}
::

### Slots
::ContentComponentSlots{component="ITooltip"}
::

### Events
::ContentComponentEvents{component="ITooltip"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ITooltip"}
::
