---
title: Utilities - Flex
description: Use flexbox utilities to modify the layout, alignment, and sizing of components and more. 
---

# Flex Utilities
## Use flexbox utilities to modify the layout, alignment, and sizing of components and more. 

Apply `display: flex` using CSS or the `_display:flex` helper to create a flexbox container and transform direct children elements into flex items. 

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/inline-flex"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/inline-flex.vue" lang="vue"} -->
::


Flexbox utilities can also be applied responsively. Here are the available helper classes::

- `._display:flex`
- `._display:inline-flex`

### Flex Direction
Set the direction of flex items in a flex container with direction utilities. The browser default is `flex-direction: row`, therefore the row helper won't be always necessary. However, when targeting various screen sizes, you may encounter situations where you needed to explicitly set this value.

#### Row Direction
Setting a row direction will cause the flexbox items to flow horizontally.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex-direction-row"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex-direction-row.vue" lang="vue"} -->
::


#### Column Direction
Setting a column direction will cause the flexbox items to flow vertically.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex-direction-column"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex-direction-column.vue" lang="vue"} -->
::

Flexbox direction utilities can also be applied responsively. Here are the available helper classes::

- `._flex-direction:row`
- `._flex-direction:row-reverse`
- `._flex-direction:column`
- `._flex-direction:column-reverse`

### Justify Content
Use `_justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis if `flex-direction: row`, y-axis if `flex-direction: column`).

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/justify-content"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/justify-content.vue" lang="vue"} -->
::

Flexbox justify content utilities can also be applied responsively. Here are the available helper classes::

- `._justify-content:start` or `._justify-content:flex-start`
- `._justify-content:end` or `._justify-content:flex-end`
- `._justify-content:center`
- `._justify-content:space-between`
- `._justify-content:space-around`

### Align Items
Use `_align-items` utilities on flexbox containers to change the alignment of flex items on the secondary axis (the y-axis if `flex-direction: row`, x-axis if `flex-direction: column`). 

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/align-items"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/align-items.vue" lang="vue"} -->
::

**Note:** The wrappers of the items above have a fixed height.

Flexbox align items utilities can also be applied responsively. Here are the available helper classes::

- `._align-items:start` or `._align-items:flex-start`
- `._align-items:end` or `._align-items:flex-end`
- `._align-items:center`
- `._align-items:baseline`
- `._align-items:stretch`

### Align Self
Use `_align-self` utilities on a flexbox item to change the alignment of the item on the secondary axis (the y-axis if `flex-direction: row`, x-axis if `flex-direction: column`).

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/align-self"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/align-self.vue" lang="vue"} -->
::

Flexbox align self utilities can also be applied responsively. Here are the available helper classes::

- `._align-self:start` or `._align-self:flex-start`
- `._align-self:end` or `._align-self:flex-end`
- `._align-self:center`
- `._align-self:baseline`
- `._align-self:stretch`

### Align Content
Use `_align-content` utilities on flexbox containers to align flex content on the secondary axis. You can use one of `start`, `end`, `center`, `between`, `around`, or `stretch`.

For demonstration purposes, the examples below use `._flex-wrap:wrap`, an increased `height`, and large number of items.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/align-content"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/align-content.vue" lang="vue"} -->
::

Flexbox shrink and grow utilities can also be applied responsively. Here are the available helper classes::

- `._align-content:start` or `._align-content:flex-start`
- `._align-content:center` or `._align-content:flex-center`
- `._align-content:end`
- `._align-content:space-between`
- `._align-content:space-around`
- `._align-content:space-stretch`

### Fill
Use `_flex:fill` utilities on a series of flexbox items to force them into widths equal to their content.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex-fill"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex-fill.vue" lang="vue"} -->
::

Flexbox fill utilities can also be applied responsively. Here are the available helper classes::

- `._flex:fill`

### Grow and shrink
Use `_flex-grow:1` and `_flex-grow:0` utilities to toggle a flex item’s ability to grow to fill available space. In the example below. A value of `1` uses all available space it can, while allowing the remaining two flex items their necessary space.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex-grow"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex-grow.vue" lang="vue"} -->
::

Use the `_flex-shrink:1` and `_flex-shrink:0` utilities to toggle a flex item’s ability to shrink if necessary. This can be used together with a `width: 100%` div to make some flex items cover as little space as possible.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex-shrink"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex-shrink.vue" lang="vue"} -->
::

Flexbox shrink and grow utilities can also be applied responsively. Here are the available helper classes::

- `._flex-grow:0`
- `._flex-grow:1`
- `._flex-shrink:0`
- `._flex-shrink:1`

### Auto Margins
When you mix flex alignments with auto margins you can obtain some pretty unique and useful layouts.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/margin-auto"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/margin-auto.vue" lang="vue"} -->
::

### Wrapping
Change how flex items wrap in a flex container. To have wrapping disabled (browser default) use `_flex-wrap:nowrap`. To enable wrapping, use `_flex-wrap:wrap`, or reverse wrapping with `_flex-wrap:wrap-reverse`.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/flex-wrap"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/flex-wrap.vue" lang="vue"} -->
::

Flexbox shrink and grow utilities can also be applied responsively. Here are the available helper classes::

- `._flex-wrap:wrap` or `_flex:wrap`
- `._flex-wrap:wrap-reverse` or `_flex:wrap-reverse`
- `._flex-wrap:nowrap` or `_flex:nowrap`

### Order
You can change the order of flex items with a handful of order utilities. You can use `_order:first` to make an item first or `_order:last` to make an item last. You can use `_order:{value}` (where value can be a number from `0` to `12`) to change the order of elements to a specific position.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/flex/order"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/flex/order.vue" lang="vue"} -->
::

Flexbox shrink and grow utilities can also be applied responsively. Here are the available helper classes::

- `._order:first`
- `._order:last`
- `._order:{0-12}`
