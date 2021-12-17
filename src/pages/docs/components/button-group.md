---
title: Button Group - Inkline
description: Group multiple buttons together on a single line using a button group. 
---

<script setup>
import {
    IButtonGroupBasicExample,
    IButtonGroupBlockExample,
    IButtonGroupDisabledExample,
    IButtonGroupNestedExample,
    IButtonGroupNestedBlockExample,
    IButtonGroupSizeVariantsExample,
    IButtonGroupVerticalExample,
    IButtonGroupVerticalBlockExample,
    IButtonGroupVerticalSizeVariantsExample
} from '@inkline/inkline/components/IButtonGroup/examples';
import { default as IButtonGroupBasicExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/basic.html?raw';
import { default as IButtonGroupBlockExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/block.html?raw';
import { default as IButtonGroupDisabledExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/disabled.html?raw';
import { default as IButtonGroupNestedExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/nested.html?raw';
import { default as IButtonGroupNestedBlockExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/nested-block.html?raw';
import { default as IButtonGroupSizeVariantsExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/size-variants.html?raw';
import { default as IButtonGroupVerticalExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/vertical.html?raw';
import { default as IButtonGroupVerticalBlockExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/vertical-block.html?raw';
import { default as IButtonGroupVerticalSizeVariantsExampleHTML } from '@inkline/inkline/components/IButtonGroup/examples/vertical-size-variants.html?raw';
</script>

# Button Group

## Group multiple buttons together on a single line using a button group. 

### Basic Example
You can group a series of `<i-button>` components inside a `<i-button-group>` to display them inline, conveying additional meaning.

<example :component="IButtonGroupBasicExample" :html="IButtonGroupBasicExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your button group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="IButtonGroupSizeVariantsExample" :html="IButtonGroupSizeVariantsExampleHTML"></example>

### Block Variant
You can create block button groups that span the full width of a parent by adding the `block` property.

<example :component="IButtonGroupBlockExample" :html="IButtonGroupBlockExampleHTML"></example>

### Vertical Basic Example
Using the `vertical` property, you can stack a set of buttons vertically rather than horizontally.

<example :component="IButtonGroupVerticalExample" :html="IButtonGroupVerticalExampleHTML"></example>

### Vertical Size Variants
Just like horizontal button groups, the size of vertical button groups can also be controlled using the `size` modifier. The default size is set to `md`.

<example :component="IButtonGroupVerticalSizeVariantsExample" :html="IButtonGroupVerticalSizeVariantsExampleHTML"></example>

### Vertical Block 
Just like horizontal block button groups, you can also set vertical button groups to span full width of its parent by adding the `block` property.

<example :component="IButtonGroupVerticalBlockExample" :html="IButtonGroupVerticalBlockExampleHTML"></example>

### Nested
When placing a `<i-button-group>` inside another `<i-button-group>`, you'll get a mixed series of buttons that will render seamlessly.

<example :component="IButtonGroupNestedExample" :html="IButtonGroupNestedExampleHTML"></example>

### Nested Block
You can also nest `block` button groups.

<example :component="IButtonGroupNestedBlockExample" :html="IButtonGroupNestedBlockExampleHTML"></example>

### Disabled
You can make button groups look inactive or disabled by adding the `disabled` boolean property.

<example :component="IButtonGroupDisabledExample" :html="IButtonGroupDisabledExampleHTML"></example>
