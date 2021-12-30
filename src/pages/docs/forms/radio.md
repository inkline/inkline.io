---
title: Radio - Inkline
description: Radio inputs allow the user to select multiple options from a set. 
---

<script setup>
import { manifest } from '@inkline/inkline/components/IRadio/manifest';
import {
    IRadioBasicExample,
    IRadioColorVariantsExample,
    IRadioDisabledExample,
    IRadioGroupDisabledExample,
    IRadioGroupSizeVariantsExample,
    IRadioNativeExample,
    IRadioReadonlyExample,
    IRadioSizeVariantsExample
} from '@inkline/inkline/components/IRadio/examples';
import { default as IRadioBasicExampleHTML } from '@inkline/inkline/components/IRadio/examples/basic.html?raw';
import { default as IRadioBasicExampleJS } from '@inkline/inkline/components/IRadio/examples/basic.js?raw';
import { default as IRadioColorVariantsExampleHTML } from '@inkline/inkline/components/IRadio/examples/color-variants.html?raw';
import { default as IRadioColorVariantsExampleJS } from '@inkline/inkline/components/IRadio/examples/color-variants.js?raw';
import { default as IRadioDisabledExampleHTML } from '@inkline/inkline/components/IRadio/examples/disabled.html?raw';
import { default as IRadioDisabledExampleJS } from '@inkline/inkline/components/IRadio/examples/disabled.js?raw';
import { default as IRadioGroupDisabledExampleHTML } from '@inkline/inkline/components/IRadio/examples/group-disabled.html?raw';
import { default as IRadioGroupDisabledExampleJS } from '@inkline/inkline/components/IRadio/examples/group-disabled.js?raw';
import { default as IRadioGroupSizeVariantsExampleHTML } from '@inkline/inkline/components/IRadio/examples/group-size-variants.html?raw';
import { default as IRadioGroupSizeVariantsExampleJS } from '@inkline/inkline/components/IRadio/examples/group-size-variants.js?raw';
import { default as IRadioNativeExampleHTML } from '@inkline/inkline/components/IRadio/examples/native.html?raw';
import { default as IRadioNativeExampleJS } from '@inkline/inkline/components/IRadio/examples/native.js?raw';
import { default as IRadioReadonlyExampleHTML } from '@inkline/inkline/components/IRadio/examples/readonly.html?raw';
import { default as IRadioReadonlyExampleJS } from '@inkline/inkline/components/IRadio/examples/readonly.js?raw';
import { default as IRadioSizeVariantsExampleHTML } from '@inkline/inkline/components/IRadio/examples/size-variants.html?raw';
import { default as IRadioSizeVariantsExampleJS } from '@inkline/inkline/components/IRadio/examples/size-variants.js?raw';
</script>

# Radio
## Radio inputs allow the user to select multiple options from a set. 

### Basic Example

Using the `i-radio` component together with a `i-radio-group` allows you to choose a value from multiple choices using a single model binding:

<example :component="IRadioBasicExample" :html="IRadioBasicExampleHTML" :js="IRadioBasicExampleJS"></example>

### Disabled State

You can disable a radio using the `disabled` property.

<example :component="IRadioDisabledExample" :html="IRadioDisabledExampleHTML" :js="IRadioDisabledExampleJS"></example>

### Readonly State

You can make a radio readonly using the `readonly` property.

<example :component="IRadioReadonlyExample" :html="IRadioReadonlyExampleHTML" :js="IRadioReadonlyExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your radio, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

<example :component="IRadioSizeVariantsExample" :html="IRadioSizeVariantsExampleHTML" :js="IRadioSizeVariantsExampleJS"></example>

### Group Disabled State

You can disable an entire radio group using the `disabled` property.

<example :component="IRadioGroupDisabledExample" :html="IRadioGroupDisabledExampleHTML" :js="IRadioGroupDisabledExampleJS"></example>

### Group Size Variants
You're able to use the `size` property to control the size of your radio group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

The chosen size will be applied to all of its child inputs.

<example :component="IRadioGroupSizeVariantsExample" :html="IRadioGroupSizeVariantsExampleHTML" :js="IRadioGroupSizeVariantsExampleJS"></example>

### Group Color Variants
You can use the `color` property to set a `light` or `dark` color for your radios.

<example :component="IRadioColorVariantsExample" :html="IRadioColorVariantsExampleHTML" :js="IRadioColorVariantsExampleJS"></example>

### Custom vs. Native
Inkline uses a custom radio design by default. You can use the `native` property to use native browser radio indicators.

<example :component="IRadioNativeExample" :html="IRadioNativeExampleHTML" :js="IRadioNativeExampleJS"></example>


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
