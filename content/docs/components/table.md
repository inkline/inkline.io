---
title: Tables - Inkline
description: Documentation and examples for opt-in styling of tables with Inkline.
---

# Tables
## Documentation and examples for opt-in styling of tables with Inkline.

### Basic Example
Using the most basic table markup, here’s how tables look in Inkline. All table styles are inherited in Inkline, meaning any nested tables will be styled in the same manner as the parent.

::ContentTabs
#preview
:ContentPreview{src="/components/ITable/examples/basic" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITable/examples/basic.vue" lang="vue"} -->
::

[//]: # (::ContentAlert)
[//]: # (If your tables require more features such as sorting, filtering and rendering, you might want to take a look at the [Datatable]&#40;/docs/components/datatable&#41; component.)
[//]: # (::)

### Border Variant
Add the `border` property for borders on all sides of the table and table cells.

::ContentTabs
#preview
:ContentPreview{src="/components/ITable/examples/bordered" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITable/examples/bordered.vue" lang="vue"} -->
::

### Striped Variant
Add the `striped` property to add zebra-striping to any table row within the table body.

::ContentTabs
#preview
:ContentPreview{src="/components/ITable/examples/striped" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITable/examples/striped.vue" lang="vue"} -->
::

### Hoverable Variant
Add the `hover` property to enable a hover state on table rows within a `<tbody>`.

::ContentTabs
#preview
:ContentPreview{src="/components/ITable/examples/hover" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITable/examples/hover.vue" lang="vue"} -->
::

### Responsive Table
Enable responsiveness by adding the `responsive` property. Responsive tables scroll horizontally on small devices. When viewing on anything larger, you will not see any difference in these tables.

You can target specific responsive breakpoints by setting a value to the `responsive` property: `responsive="<breakpoint>"`, where breakpoint is one of `xs`, `sm`, `md`, `lg` or `xl`.

::ContentTabs
#preview
:ContentPreview{src="/components/ITable/examples/responsive" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITable/examples/responsive.vue" lang="vue"} -->
::

### Color Variants
Tables can be themed using the `color` property. You can use colors such as `light`, `dark`, `primary`, `secondary`, `info`, `success`, `warning`, and `danger`. You can set a variant for the table as a whole or individual table elements. By default, tables have the `light` variant. You can use a variation of any of the above classes to create the table design you need.

::ContentTabs
#preview
:ContentPreview{src="/components/ITable/examples/color-variants" off="layout"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITable/examples/color-variants.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="ITable"}
::

### Slots
::ContentComponentSlots{component="ITable"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ITable"}
::
