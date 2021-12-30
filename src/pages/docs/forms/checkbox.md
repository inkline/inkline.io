---
title: Checkbox - Inkline
description: Checkbox inputs allow the user to select multiple options from a set. 
---

<script setup>
import { manifest } from '@inkline/inkline/components/ICheckbox/manifest';
import {
    ICheckboxBasicExample,
    ICheckboxColorVariantsExample,
    ICheckboxDisabledExample,
    ICheckboxGroupExample,
    ICheckboxGroupDisabledExample,
    ICheckboxGroupSizeVariantsExample,
    ICheckboxGroupColorVariantsExample,
    ICheckboxIndeterminateExample,
    ICheckboxNativeExample,
    ICheckboxReadonlyExample,
    ICheckboxSizeVariantsExample
} from '@inkline/inkline/components/ICheckbox/examples';
import { default as ICheckboxBasicExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/basic.html?raw';
import { default as ICheckboxBasicExampleJS } from '@inkline/inkline/components/ICheckbox/examples/basic.js?raw';
import { default as ICheckboxColorVariantsExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/color-variants.html?raw';
import { default as ICheckboxColorVariantsExampleJS } from '@inkline/inkline/components/ICheckbox/examples/color-variants.js?raw';
import { default as ICheckboxDisabledExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/disabled.html?raw';
import { default as ICheckboxDisabledExampleJS } from '@inkline/inkline/components/ICheckbox/examples/disabled.js?raw';
import { default as ICheckboxGroupExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/group.html?raw';
import { default as ICheckboxGroupExampleJS } from '@inkline/inkline/components/ICheckbox/examples/group.js?raw';
import { default as ICheckboxGroupDisabledExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/group-disabled.html?raw';
import { default as ICheckboxGroupDisabledExampleJS } from '@inkline/inkline/components/ICheckbox/examples/group-disabled.js?raw';
import { default as ICheckboxGroupSizeVariantsExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/group-size-variants.html?raw';
import { default as ICheckboxGroupSizeVariantsExampleJS } from '@inkline/inkline/components/ICheckbox/examples/group-size-variants.js?raw';
import { default as ICheckboxGroupColorVariantsExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/group-color-variants.html?raw';
import { default as ICheckboxGroupColorVariantsExampleJS } from '@inkline/inkline/components/ICheckbox/examples/group-color-variants.js?raw';
import { default as ICheckboxIndeterminateExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/indeterminate.html?raw';
import { default as ICheckboxIndeterminateExampleJS } from '@inkline/inkline/components/ICheckbox/examples/indeterminate.js?raw';
import { default as ICheckboxNativeExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/native.html?raw';
import { default as ICheckboxNativeExampleJS } from '@inkline/inkline/components/ICheckbox/examples/native.js?raw';
import { default as ICheckboxReadonlyExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/readonly.html?raw';
import { default as ICheckboxReadonlyExampleJS } from '@inkline/inkline/components/ICheckbox/examples/readonly.js?raw';
import { default as ICheckboxSizeVariantsExampleHTML } from '@inkline/inkline/components/ICheckbox/examples/size-variants.html?raw';
import { default as ICheckboxSizeVariantsExampleJS } from '@inkline/inkline/components/ICheckbox/examples/size-variants.js?raw';
</script>

# Checkbox
## Checkbox inputs allow the user to select multiple options from a set. 

### Basic Example

Using the `i-checkbox` component to determine a boolean value is very straightforward:

<example :component="ICheckboxBasicExample" :html="ICheckboxBasicExampleHTML" :js="ICheckboxBasicExampleJS"></example>

### Disabled State

You can disable a checkbox using the `disabled` property.

<example :component="ICheckboxDisabledExample" :html="ICheckboxDisabledExampleHTML" :js="ICheckboxDisabledExampleJS"></example>

### Readonly State

You can make a checkbox readonly using the `readonly` property.

<example :component="ICheckboxReadonlyExample" :html="ICheckboxReadonlyExampleHTML" :js="ICheckboxReadonlyExampleJS"></example>

### Indeterminate State
You can set the state of a `<i-checkbox>` to be indeterminate by using the `indeterminate` property. 

<example :component="ICheckboxIndeterminateExample" :html="ICheckboxIndeterminateExampleHTML" :js="ICheckboxIndeterminateExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your checkbox, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

<example :component="ICheckboxSizeVariantsExample" :html="ICheckboxSizeVariantsExampleHTML" :js="ICheckboxSizeVariantsExampleJS"></example>


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

<example :component="ICheckboxColorVariantsExample" :html="ICheckboxColorVariantsExampleHTML" :js="ICheckboxColorVariantsExampleJS"></example>

### Group Example

Using the `i-checkbox` component together with a `i-checkbox-group` allows you to control multiple selected values using a single binding.

<example :component="ICheckboxGroupExample" :html="ICheckboxGroupExampleHTML" :js="ICheckboxGroupExampleJS"></example>

### Group Disabled State

You can disable an entire checkbox group using the `disabled` property.

<example :component="ICheckboxGroupDisabledExample" :html="ICheckboxGroupDisabledExampleHTML" :js="ICheckboxGroupDisabledExampleJS"></example>

### Group Size Variants
You're able to use the `size` property to control the size of your checkbox group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

The chosen size will be applied to all of its child inputs.

<example :component="ICheckboxGroupSizeVariantsExample" :html="ICheckboxGroupSizeVariantsExampleHTML" :js="ICheckboxGroupSizeVariantsExampleJS"></example>

### Group Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

<example :component="ICheckboxGroupColorVariantsExample" :html="ICheckboxGroupColorVariantsExampleHTML" :js="ICheckboxGroupColorVariantsExampleJS"></example>

### Custom vs. Native
Inkline uses a custom checkbox design by default. You can use the `native` property to use native browser checkbox indicators.

<example :component="ICheckboxNativeExample" :html="ICheckboxNativeExampleHTML" :js="ICheckboxNativeExampleJS"></example>

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
