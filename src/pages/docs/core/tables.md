---
title: Tables - Inkline
description: Documentation and examples for opt-in styling of tables with Inkline. 
---

<script setup>
import { manifest } from '@inkline/inkline/components/ITable/manifest';
import {
    ITableBasicExample,
    ITableBorderedExample,
    ITableColorVariantsExample,
    ITableHoverExample,
    ITableResponsiveExample,
    ITableStripedExample
} from '@inkline/inkline/components/ITable/examples';
import { default as ITableBasicExampleHTML } from '@inkline/inkline/components/ITable/examples/basic.html?raw';
import { default as ITableBorderedExampleHTML } from '@inkline/inkline/components/ITable/examples/bordered.html?raw';
import { default as ITableColorVariantsExampleHTML } from '@inkline/inkline/components/ITable/examples/color-variants.html?raw';
import { default as ITableHoverExampleHTML } from '@inkline/inkline/components/ITable/examples/hover.html?raw';
import { default as ITableResponsiveExampleHTML } from '@inkline/inkline/components/ITable/examples/responsive.html?raw';
import { default as ITableStripedExampleHTML } from '@inkline/inkline/components/ITable/examples/striped.html?raw';
</script>

# Tables

## Documentation and examples for opt-in styling of tables with Inkline. 

### Basic Example
Using the most basic table markup, here’s how tables look in Inkline. All table styles are inherited in Inkline, meaning any nested tables will be styled in the same manner as the parent.

<example :component="ITableBasicExample" :html="ITableBasicExampleHTML"></example>

<i-alert color="info" class="_margin-top:1">
    <template #icon><i-icon name="ink-info" class="h4"></i-icon></template>
    <p>If your tables require more features such as sorting, filtering and rendering, you might want to take a look at the <router-link :to="{ name: 'docs-components-datatable' }">Datatable</router-link> component.</p>
</i-alert>


### Border Variant
Add the `border` property for borders on all sides of the table and table cells.

<example :component="ITableBorderedExample" :html="ITableBorderedExampleHTML"></example>

### Striped Variant
Add the `striped` property to add zebra-striping to any table row within the table body.

<example :component="ITableStripedExample" :html="ITableStripedExampleHTML"></example>

### Hoverable Variant
Add the `hover` property to enable a hover state on table rows within a `<tbody>`.

<example :component="ITableHoverExample" :html="ITableHoverExampleHTML"></example>

### Responsive Table
Enable responsiveness by adding the `responsive` property. Responsive tables scroll horizontally on small devices. When viewing on anything larger, you will not see any difference in these tables.

You can target specific responsive breakpoints by setting a value to the `responsive` property: `responsive="<breakpoint>"`, where breakpoint is one of `xs`, `sm`, `md`, `lg` or `xl`.

<example :component="ITableResponsiveExample" :html="ITableResponsiveExampleHTML"></example>

### Color Variants
Tables can be themed using the `color` property. You can use colors such as `light`, `dark`, `primary`, `secondary`, `info`, `success`, `warning`, and `danger`. You can set a variant for the table as a whole or individual table elements. By default, tables have the `light` variant. You can use a variation of any of the above classes to create the table design you need.

<example :component="ITableColorVariantsExample" :html="ITableColorVariantsExampleHTML"></example>

### Configuration

#### Props
Use props to modify the component's design and behavior.

<props-table :manifest="manifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<slots-table :manifest="manifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
