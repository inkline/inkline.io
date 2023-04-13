---
title: Grid
description: Create responsive layouts with Inkline's 12-column grid system. Built with flexbox, featuring equally divided columns separated by a small gutter.
---

# Grid
## Create responsive layouts with Inkline's 12-column grid system. Built with flexbox, featuring equally divided columns separated by a small gutter.

Inkline's grid system is highly flexible, allowing you to create complex responsive layouts with ease. It uses percentage widths, therefore you can nest rows and columns inside each other to create sophisticated designs, and use the provided modifiers to adjust the layout at different breakpoints.

The grid system is defined using `<IContainer>`, `<IRow>` and `<IColumn>` components, with each one having specific responsive modifiers. Here's how it works:

- Create a container using the `<IContainer>` component.
- Inside the container, define a row using the `<IRow>` component, and add columns using the `<IColumn>` component.
- Place your content elements directly in a `<IColumn>`. Only `<IColumn>` should be placed directly inside an `<IRow>` component.
- Set the column width using values of `1-12` or `true` at each responsive breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`).
- If the sum of column widths in a row is more than `12`, the overflowing column will start on a new line.

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/basic.vue" lang="vue"} -->
::

### Basic Grid
Create basic grid layout using columns.

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/width"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/width.vue" lang="vue"} -->
::

### Nested Grid
With Inkline's grid system, you can nest up to 12 columns inside a row. Rows can also be nested inside any column, providing virtually endless layout possibilities.

::ContentAlert
You can place rows only inside a container or a column, and columns only inside a row.
::

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/nested"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/nested.vue" lang="vue"} -->
::

### Column Offset
Grid offsets are used to move a column to the right without creating an empty column next to it.

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/offset"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/offset.vue" lang="vue"} -->
::

You may need to use `offset="0"` and `offset-{breakpoint}="0"` to clear an offset. See this in action in the example below.

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/offset-reset"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/offset-reset.vue" lang="vue"} -->
::

### Column Push / Pull
Inkline's grid system provides push and pull props that allow you to shift columns left or right, respectively. The push and pull props reorder columns within a row and are available for each responsive breakpoint. 

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/push-pull"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/push-pull.vue" lang="vue"} -->
::

You may need to use `push="0"`, `push-{breakpoint}="0"`, `pull="0"`, `pull-{breakpoint}="0"` to clear a push or pull.

### Column Auto Width
The grid will automatically fit any number of auto sizing columns to a row.


::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/auto-width"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/auto-width.vue" lang="vue"} -->
::

### Row Horizontal Alignment
You can align columns horizontally inside the `IRow` component using the `start`, `center`, or `end` props.

#### Row Start
The `start` prop of the row component can be used to align columns inside it at the start of the row. You can use `start-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/horizontal-alignment-start"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/horizontal-alignment-start.vue" lang="vue"} -->
::

#### Row Center
The `center` prop of the row component can be used to align columns inside it at the center of the row. You can use `center-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/horizontal-alignment-center"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/horizontal-alignment-center.vue" lang="vue"} -->
::

#### Row End
The `end` prop of the row component can be used to align columns inside it at the end of the row. You can use `end-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/horizontal-alignment-end"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/horizontal-alignment-end.vue" lang="vue"} -->
::


### Row Vertical Alignment
You can align columns vertically inside the `IRow` component using the `top`, `middle`, or `bottom` props.

#### Row Top
The `top` prop of the row component can be used to align columns inside it at the top of the row. You can use `top-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/vertical-alignment-top"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/vertical-alignment-top.vue" lang="vue"} -->
::

#### Row Middle
The `middle` prop of the row component can be used to align columns inside it at the middle of the row. You can use `middle-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/vertical-alignment-middle"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/vertical-alignment-middle.vue" lang="vue"} -->
::

#### Row Bottom
The `bottom` prop of the row component can be used to align columns inside it at the bottom of the row. You can use `bottom-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/vertical-alignment-bottom"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/vertical-alignment-bottom.vue" lang="vue"} -->
::


### Row Distribution
Distribute the spacing between the columns of a row using the `around`, or `between` props.

#### Space around
The `around` prop for the row component distributes columns evenly with equal space around them. This means that there will be space between the first and last columns and the edge of the row, as well as between each column. You can use `around-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/distribution-around"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/distribution-around.vue" lang="vue"} -->
::

#### Space between
The `between` prop for the row component distributes columns evenly with equal space between them. This means that there will be space only between each column, not between the columns and the edge of the row. You can use `between-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/distribution-between"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/distribution-between.vue" lang="vue"} -->
::

### Reordering
Column reordering allows you to change the visual order of columns without modifying the source order.

#### Reverse order
The `reverse` prop of the row component can be used to reverse the order of columns inside it. You can use `reverse-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IRow/examples/reordering-reverse"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRow/examples/reordering-reverse.vue" lang="vue"} -->
::

#### First in order
The `first` prop of the column component can be used to order the column as the first one in the row, regardless of its position in the source code. You can use `first-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/reordering-first"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/reordering-first.vue" lang="vue"} -->
::

#### Last in order
The `last` prop of the column component can be used to order the column as the last one in the row, regardless of its position in the source code. You can use `last-{breakpoint}` to target screen sizes starting from a specific breakpoint.

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/reordering-last"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/reordering-last.vue" lang="vue"} -->
::

### Responsive Column Width
With Inkline's grid system, you can specify different column widths for each breakpoint, allowing you to create layouts that adapt to different screen sizes.

Try to resize your browser window!

::ContentTabs
#preview
:ContentPreview{src="/components/IColumn/examples/responsive"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IColumn/examples/responsive.vue" lang="vue"} -->
::

::ContentAlert
If you specify a boolean breakpoint prop without a column count , such as `<IColumn sm>`, the column will automatically adjust its width based on the available space at that breakpoint.
::

### Fluid Container
You can make the `IContainer` component fill the whole width of the parent element using the `fluid` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IContainer/examples/fluid"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IContainer/examples/fluid.vue" lang="vue"} -->
::

### Props

##### IContainer
::ContentComponentProps{component="IContainer"}
::

##### IRow
::ContentComponentProps{component="IRow"}
::

##### IColumn
::ContentComponentProps{component="IColumn"}
::

### Slots

##### IContainer
::ContentComponentSlots{component="IContainer"}
::

##### IRow
::ContentComponentSlots{component="IRow"}
::

##### IColumn
::ContentComponentSlots{component="IColumn"}
::
