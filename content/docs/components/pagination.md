---
title: Pagination
description: Pagination provides navigation for large series of related content.
---

# Pagination
## Pagination provides navigation for large series of related content.

Pagination items are automatically generated based on the `items-total` and the `items-per-page` properties. The currently selected page is accessible using `v-model`.

::ContentTabs
#preview
:ContentPreview{src="/components/IPagination/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPagination/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline comes with two predefined pagination styles. You can set the color style of the `<IPagination>` component using the `color` property, which can be `light` or `dark`. By default, pagination uses the `light` color.

::ContentTabs
#preview
:ContentPreview{src="/components/IPagination/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPagination/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your pagination items, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IPagination/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPagination/examples/size-variants.raw.vue" lang="vue"} -->
::

### Limit
You're able to use the `limit` modifier to control how many items to show besides the first and last items, including the two ellipsis pagination items. 

Make sure this value is an `odd number` to have the active item centered.

::ContentTabs
#preview
:ContentPreview{src="/components/IPagination/examples/limit"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPagination/examples/limit.raw.vue" lang="vue"} -->
::

To make things even better, you can responsively control the number of items at each breakpoint, to make sure your design always looks great.

::ContentTabs
#preview
:ContentPreview{src="/components/IPagination/examples/limit-responsive"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPagination/examples/limit-responsive.raw.vue" lang="vue"} -->
::

### Quick Links
You're able to use the `quickLink` property to allow the user to click the `…` item to quickly jump through pages, a number of items equal to `limit` at a time. 

::ContentTabs
#preview
:ContentPreview{src="/components/IPagination/examples/quick-links"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IPagination/examples/quick-links.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IPagination"}
::

### Slots
::ContentComponentSlots{component="IPagination"}
::

### Events
::ContentComponentEvents{component="IPagination"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IPagination"}
::
