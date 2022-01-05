---
title: Pagination - Inkline
description: Pagination provides navigation for large series of related content.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IPagination/manifest.mjs';
import {
    IPaginationBasicExample,
    IPaginationColorVariantsExample,
    IPaginationLimitExample,
    IPaginationLimitResponsiveExample,
    IPaginationQuickLinksExample,
    IPaginationSizeVariantsExample
} from '@inkline/inkline/components/IPagination/examples/index.mjs';
import { default as IPaginationBasicExampleHTML } from '@inkline/inkline/components/IPagination/examples/basic.html?raw';
import { default as IPaginationBasicExampleJS } from '@inkline/inkline/components/IPagination/examples/basic.mjs?raw';
import { default as IPaginationColorVariantsExampleHTML } from '@inkline/inkline/components/IPagination/examples/color-variants.html?raw';
import { default as IPaginationColorVariantsExampleJS } from '@inkline/inkline/components/IPagination/examples/color-variants.mjs?raw';
import { default as IPaginationLimitExampleHTML } from '@inkline/inkline/components/IPagination/examples/limit.html?raw';
import { default as IPaginationLimitExampleJS } from '@inkline/inkline/components/IPagination/examples/limit.mjs?raw';
import { default as IPaginationLimitResponsiveExampleHTML } from '@inkline/inkline/components/IPagination/examples/limit-responsive.html?raw';
import { default as IPaginationLimitResponsiveExampleJS } from '@inkline/inkline/components/IPagination/examples/limit-responsive.mjs?raw';
import { default as IPaginationQuickLinksExampleHTML } from '@inkline/inkline/components/IPagination/examples/quick-links.html?raw';
import { default as IPaginationQuickLinksExampleJS } from '@inkline/inkline/components/IPagination/examples/quick-links.mjs?raw';
import { default as IPaginationSizeVariantsExampleHTML } from '@inkline/inkline/components/IPagination/examples/size-variants.html?raw';
import { default as IPaginationSizeVariantsExampleJS } from '@inkline/inkline/components/IPagination/examples/size-variants.mjs?raw';
</script>


# Pagination
## Pagination provides navigation for large series of related content.

### Basic Example
Pagination items are automatically generated based on the `items-total` and the `items-per-page` properties. The currently selected page is accessible using `v-model`.

<example :component="IPaginationBasicExample" :html="IPaginationBasicExampleHTML" :js="IPaginationBasicExampleJS"></example>

### Color Variants
Inkline comes with two predefined pagination styles. You can set the color style of the `<i-pagination>` component using the `color` property, which can be `light` or `dark`. By default, pagination uses the `light` color.

<example :component="IPaginationColorVariantsExample" :html="IPaginationColorVariantsExampleHTML" :js="IPaginationColorVariantsExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your pagination items, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="IPaginationSizeVariantsExample" :html="IPaginationSizeVariantsExampleHTML" :js="IPaginationSizeVariantsExampleJS"></example>

### Limit
You're able to use the `limit` modifier to control how many items to show besides the first and last items, including the two ellipsis pagination items. 

Make sure this value is an `odd number` to have the active item centered.

<example :component="IPaginationLimitExample" :html="IPaginationLimitExampleHTML" :js="IPaginationLimitExampleJS"></example>

To make things even better, you can responsively control the number of items at each breakpoint, to make sure your design always looks great.

<example :component="IPaginationLimitResponsiveExample" :html="IPaginationLimitResponsiveExampleHTML" :js="IPaginationLimitResponsiveExampleJS"></example>


### Quick Links
You're able to use the `quickLink` property to allow the user to click the `…` item to quickly jump through pages, a number of items equal to `limit` at a time. 

<example :component="IPaginationQuickLinksExample" :html="IPaginationQuickLinksExampleHTML" :js="IPaginationQuickLinksExampleJS"></example>

### Configuration

#### Props
Use props to modify the component's design and behavior.

<props-table :manifest="manifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<slots-table :manifest="manifest"></slots-table>

#### Events
Use events to react to something happening inside the component.

<events-table :manifest="manifest"></events-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
