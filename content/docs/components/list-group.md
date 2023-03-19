---
title: List Group - Inkline
description: List groups are flexible components used for displaying a list of related content.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IListGroup/manifest.mjs';
import {
    IListGroupBasicExample,
    IListGroupBorderlessExample,
    IListGroupContentExample,
    IListGroupColorVariantsExample,
    IListGroupSizeVariantsExample,
    IListGroupStateActiveExample,
    IListGroupStateDisabledExample
} from '@inkline/inkline/components/IListGroup/examples/index.mjs';
import { default as IListGroupBasicExampleHTML } from '@inkline/inkline/components/IListGroup/examples/basic.html?raw';
import { default as IListGroupBorderlessExampleHTML } from '@inkline/inkline/components/IListGroup/examples/borderless.html?raw';
import { default as IListGroupContentExampleHTML } from '@inkline/inkline/components/IListGroup/examples/content.html?raw';
import { default as IListGroupColorVariantsExampleHTML } from '@inkline/inkline/components/IListGroup/examples/color-variants.html?raw';
import { default as IListGroupSizeVariantsExampleHTML } from '@inkline/inkline/components/IListGroup/examples/size-variants.html?raw';
import { default as IListGroupStateActiveExampleHTML } from '@inkline/inkline/components/IListGroup/examples/state-active.html?raw';
import { default as IListGroupStateDisabledExampleHTML } from '@inkline/inkline/components/IListGroup/examples/state-disabled.html?raw';
</script>

# List Group

## List groups are flexible components used for displaying a list of related content.

### Basic Example
List groups support any content inside of them. Take advantage of their flexibility to display list of items, as well as vertical navigation.

<example type="icon" :component="IListGroupBasicExample" :html="IListGroupBasicExampleHTML"></example>

Behind the scenes, the `<i-list-group-item>` is converted into a `<router-link>` if it has the `:to` property, or a plain `<a>` tag if it has a `href` property. Otherwise, it uses a simple `<div>` tag.

### Color Variants
The list group component comes with a predefined set of basic color variants. You can set the color of a list group using the `color` property.

<example type="icon" :component="IListGroupColorVariantsExample" :html="IListGroupColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the padding of your list groups, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example type="icon" :component="IListGroupSizeVariantsExample" :html="IListGroupSizeVariantsExampleHTML"></example>

### Active State
You can control the active state of your `<i-list-group-item>` using the `active` property. 

If you're providing a `to` property, the list group item will be converted into a `router-link` or `nuxt-link`. You can use the `active-class` and `exact-active-class` properties and set them to `-active` when using it as a routing component.

<example type="icon" :component="IListGroupStateActiveExample" :html="IListGroupStateActiveExampleHTML"></example>

### Disabled State
You can control the disabled state of your `<i-list-group-item>` using the `disabled` property. 

<example type="icon" :component="IListGroupStateDisabledExample" :html="IListGroupStateDisabledExampleHTML"></example>

### Borderless Variant
You can disable the border of your list group by setting the `border` property to false. 

<example type="icon" :component="IListGroupBorderlessExample" :html="IListGroupBorderlessExampleHTML"></example>

### Item Content
The `<i-list-group-item>` accepts any type of content, allowing you to create large sized list group items.

<example type="icon" :component="IListGroupContentExample" :html="IListGroupContentExampleHTML"></example>

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
