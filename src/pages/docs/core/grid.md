---
title: Grid - Inkline
description: Inkline's grid system is modelled as a 12 columns layout using flexbox, with equally divided columns, separated by a small gutter. 
---

<script setup>
import { manifest as columnManifest } from '@inkline/inkline/components/IColumn/manifest';
import {
    IColumnAutoWidthExample,
    IColumnNestedExample,
    IColumnOffsetExample,
    IColumnOffsetResetExample,
    IColumnPushPullExample,
    IColumnReorderingFirstExample,
    IColumnReorderingLastExample,
    IColumnResponsiveExample,
    IColumnWidthExample
} from '@inkline/inkline/components/IColumn/examples';
import { default as IColumnAutoWidthExampleHTML } from '@inkline/inkline/components/IColumn/examples/auto-width.html?raw';
import { default as IColumnNestedExampleHTML } from '@inkline/inkline/components/IColumn/examples/nested.html?raw';
import { default as IColumnOffsetExampleHTML } from '@inkline/inkline/components/IColumn/examples/offset.html?raw';
import { default as IColumnOffsetResetExampleHTML } from '@inkline/inkline/components/IColumn/examples/offset-reset.html?raw';
import { default as IColumnPushPullExampleHTML } from '@inkline/inkline/components/IColumn/examples/push-pull.html?raw';
import { default as IColumnReorderingFirstExampleHTML } from '@inkline/inkline/components/IColumn/examples/reordering-first.html?raw';
import { default as IColumnReorderingLastExampleHTML } from '@inkline/inkline/components/IColumn/examples/reordering-last.html?raw';
import { default as IColumnResponsiveExampleHTML } from '@inkline/inkline/components/IColumn/examples/responsive.html?raw';
import { default as IColumnWidthExampleHTML } from '@inkline/inkline/components/IColumn/examples/width.html?raw';

import { manifest as rowManifest } from '@inkline/inkline/components/IRow/manifest';
import {
    IRowDistributionAroundExample,
    IRowDistributionBetweenExample,
    IRowHorizontalAlignmentStartExample,
    IRowHorizontalAlignmentCenterExample,
    IRowHorizontalAlignmentEndExample,
    IRowReorderingReverseExample,
    IRowVerticalAlignmentTopExample,
    IRowVerticalAlignmentMiddleExample,
    IRowVerticalAlignmentBottomExample
} from '@inkline/inkline/components/IRow/examples';
import { default as IRowDistributionAroundExampleHTML } from '@inkline/inkline/components/IRow/examples/distribution-around.html?raw';
import { default as IRowDistributionBetweenExampleHTML } from '@inkline/inkline/components/IRow/examples/distribution-between.html?raw';
import { default as IRowHorizontalAlignmentStartExampleHTML } from '@inkline/inkline/components/IRow/examples/horizontal-alignment-start.html?raw';
import { default as IRowHorizontalAlignmentCenterExampleHTML } from '@inkline/inkline/components/IRow/examples/horizontal-alignment-center.html?raw';
import { default as IRowHorizontalAlignmentEndExampleHTML } from '@inkline/inkline/components/IRow/examples/horizontal-alignment-end.html?raw';
import { default as IRowReorderingReverseExampleHTML } from '@inkline/inkline/components/IRow/examples/reordering-reverse.html?raw';
import { default as IRowVerticalAlignmentTopExampleHTML } from '@inkline/inkline/components/IRow/examples/vertical-alignment-top.html?raw';
import { default as IRowVerticalAlignmentMiddleExampleHTML } from '@inkline/inkline/components/IRow/examples/vertical-alignment-middle.html?raw';
import { default as IRowVerticalAlignmentBottomExampleHTML } from '@inkline/inkline/components/IRow/examples/vertical-alignment-bottom.html?raw';

import { manifest as containerManifest } from '@inkline/inkline/components/IContainer/manifest';
import {
    IContainerFluidExample
} from '@inkline/inkline/components/IContainer/examples';
import { default as IContainerFluidExampleHTML } from '@inkline/inkline/components/IContainer/examples/fluid.html?raw';
</script>

# Grid

## Inkline's grid system is modelled as a 12 columns layout using flexbox, with equally divided columns, separated by a small gutter. 
 
The grid system uses percentage widths, so that it is usable at any nesting level.

The grid system is defined using `<i-container>`, `<i-row>` and `<i-column>` components, with each one having specific responsive modifiers. Here's how it works:

- First, we define a row with a set of columns inside of it.
- Your content elements should be placed directly in a `<i-column>`, and only `<i-column>` should be placed directly inside an `<i-row>` component
- The column width takes a value of 1-12 at each responsive breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`).
- If the sum of `column` widths in a row is more than 12, then the overflowing column will start on a new line.

### Basic Example
Create basic grid layout using columns.

<example type="grid" :component="IColumnWidthExample" :html="IColumnWidthExampleHTML"></example>

### Grid Offset
Grid offsets are used to move a column to the right without creating an empty column next to it.

<example type="grid" :component="IColumnOffsetExample" :html="IColumnOffsetExampleHTML"></example>

You may need to use `offset="0"` and `offset-{breakpoint}="0"` to clear an offset. See this in action in the grid example below.

<example type="grid" :component="IColumnOffsetResetExample" :html="IColumnOffsetResetExampleHTML"></example>

### Grid Push / Pull
Code-wise, the columns have a different order.

<example type="grid" :component="IColumnPushPullExample" :html="IColumnPushPullExampleHTML"></example>

You may need to use `push="0"`, `push-{breakpoint}="0"`, `pull="0"`, `pull-{breakpoint}="0"` to clear a push or pull.

### Auto Width
The grid will automatically fit any number of auto sizing columns to a row.

<example type="grid" :component="IColumnAutoWidthExample" :html="IColumnAutoWidthExampleHTML"></example>

### Nested Grid
Inkline allows you to nest up to 12 columns inside a row. Row can also be nested inside any column, 
giving you virtually endless layout possibilities. You can place rows only inside a container or a column, 
while you can place columns only inside a row.

<example type="grid -nested-example" :component="IColumnNestedExample" :html="IColumnNestedExampleHTML"></example>

### Horizontal Alignment
You can align columns horizontally to the start, center, or end of a row.

#### `start`

<example type="grid" :component="IRowHorizontalAlignmentStartExample" :html="IRowHorizontalAlignmentStartExampleHTML"></example>

You can use `start-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `center`

<example type="grid" :component="IRowHorizontalAlignmentCenterExample" :html="IRowHorizontalAlignmentCenterExampleHTML"></example>

You can use `center-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `end`

<example type="grid" :component="IRowHorizontalAlignmentEndExample" :html="IRowHorizontalAlignmentEndExampleHTML"></example>

You can use `end-{breakpoint}` to target screen sizes starting from a specific breakpoint.

### Vertical Alignment
You can align columns vertically to the top, middle or bottom of the row.

#### `top`

<example type="grid -vertical-alignment-example" :component="IRowVerticalAlignmentTopExample" :html="IRowVerticalAlignmentTopExampleHTML"></example>

You can use `top-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `middle`

<example type="grid -vertical-alignment-example" :component="IRowVerticalAlignmentMiddleExample" :html="IRowVerticalAlignmentMiddleExampleHTML"></example>

You can use `middle-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `bottom`

<example type="grid -vertical-alignment-example" :component="IRowVerticalAlignmentBottomExample" :html="IRowVerticalAlignmentBottomExampleHTML"></example>

You can use `bottom-{breakpoint}` to target screen sizes starting from a specific breakpoint.

### Distribution
Distribute the spacing between the columns of a row.

#### `around`

<example type="grid" :component="IRowDistributionAroundExample" :html="IRowDistributionAroundExampleHTML"></example>

You can use `around-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `between`

<example type="grid" :component="IRowDistributionBetweenExample" :html="IRowDistributionBetweenExampleHTML"></example>

You can use `between-{breakpoint}` to target screen sizes starting from a specific breakpoint.

### Reordering
Reorder columns using helper classes.

#### `reverse`

<example type="grid" :component="IRowReorderingReverseExample" :html="IRowReorderingReverseExampleHTML"></example>

You can use `reverse-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `first`

<example type="grid" :component="IColumnReorderingFirstExample" :html="IColumnReorderingFirstExampleHTML"></example>

You can use `first-{breakpoint}` to target screen sizes starting from a specific breakpoint.

#### `last`

<example type="grid" :component="IColumnReorderingLastExample" :html="IColumnReorderingLastExampleHTML"></example>

You can use `last-{breakpoint}` to target screen sizes starting from a specific breakpoint.

### Responsive Width
You can specify column counts for each breakpoint. Try to resize your browser window!

<example type="grid" :component="IColumnResponsiveExample" :html="IColumnResponsiveExampleHTML"></example>

### Fluid Container
You can make the `<i-container>` component fill the whole width of the parent element using the `fluid` property. 

<example type="grid" :component="IContainerFluidExample" :html="IContainerFluidExampleHTML"></example>

### Configuration

#### Props
Use props to modify the component's design and behavior.

<div class="h5"><code>&lt;i-container&gt;</code></div>
<props-table :manifest="containerManifest"></props-table>

<div class="h5"><code>&lt;i-row&gt;</code></div>
<props-table :manifest="rowManifest"></props-table>

<div class="h5"><code>&lt;i-column&gt;</code></div>
<props-table :manifest="columnManifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<div class="h5"><code>&lt;i-container&gt;</code></div>
<slots-table :manifest="containerManifest"></slots-table>

<div class="h5"><code>&lt;i-row&gt;</code></div>
<slots-table :manifest="rowManifest"></slots-table>

<div class="h5"><code>&lt;i-column&gt;</code></div>
<slots-table :manifest="columnManifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<div class="h5"><code>&lt;i-container&gt;</code></div>
<css-variables-table :manifest="containerManifest"></css-variables-table>
