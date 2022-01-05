---
title: Number Input - Inkline
description: Number Inputs are form components used to for easily inputting and manipulating numbers.
---

<script setup>
import { manifest } from '@inkline/inkline/components/INumberInput/manifest.mjs';
import { manifest as inputManifest } from '@inkline/inkline/components/IInput/manifest.mjs';
import {
    INumberInputBasicExample,
    INumberInputColorVariantsExample,
    INumberInputClearableExample,
    INumberInputDisabledExample,
    INumberInputMinMaxExample,
    INumberInputPrecisionExample,
    INumberInputReadonlyExample,
    INumberInputSizeVariantsExample,
    INumberInputStepSizeExample,
    INumberInputPrependAppendTextExample,
    INumberInputPrependAppendButtonExample,
    INumberInputPrependAppendDropdownExample,
    INumberInputPrefixSuffixExample
} from '@inkline/inkline/components/INumberInput/examples/index.mjs';
import { default as INumberInputBasicExampleHTML } from '@inkline/inkline/components/INumberInput/examples/basic.html?raw';
import { default as INumberInputBasicExampleJS } from '@inkline/inkline/components/INumberInput/examples/basic.mjs?raw';
import { default as INumberInputColorVariantsExampleHTML } from '@inkline/inkline/components/INumberInput/examples/color-variants.html?raw';
import { default as INumberInputColorVariantsExampleJS } from '@inkline/inkline/components/INumberInput/examples/color-variants.mjs?raw';
import { default as INumberInputClearableExampleHTML } from '@inkline/inkline/components/INumberInput/examples/clearable.html?raw';
import { default as INumberInputClearableExampleJS } from '@inkline/inkline/components/INumberInput/examples/clearable.mjs?raw';
import { default as INumberInputDisabledExampleHTML } from '@inkline/inkline/components/INumberInput/examples/disabled.html?raw';
import { default as INumberInputDisabledExampleJS } from '@inkline/inkline/components/INumberInput/examples/disabled.mjs?raw';
import { default as INumberInputMinMaxExampleHTML } from '@inkline/inkline/components/INumberInput/examples/minmax.html?raw';
import { default as INumberInputMinMaxExampleJS } from '@inkline/inkline/components/INumberInput/examples/minmax.mjs?raw';
import { default as INumberInputPrecisionExampleHTML } from '@inkline/inkline/components/INumberInput/examples/precision.html?raw';
import { default as INumberInputPrecisionExampleJS } from '@inkline/inkline/components/INumberInput/examples/precision.mjs?raw';
import { default as INumberInputReadonlyExampleHTML } from '@inkline/inkline/components/INumberInput/examples/readonly.html?raw';
import { default as INumberInputReadonlyExampleJS } from '@inkline/inkline/components/INumberInput/examples/readonly.mjs?raw';
import { default as INumberInputSizeVariantsExampleHTML } from '@inkline/inkline/components/INumberInput/examples/size-variants.html?raw';
import { default as INumberInputSizeVariantsExampleJS } from '@inkline/inkline/components/INumberInput/examples/size-variants.mjs?raw';
import { default as INumberInputStepSizeExampleHTML } from '@inkline/inkline/components/INumberInput/examples/step-size.html?raw';
import { default as INumberInputStepSizeExampleJS } from '@inkline/inkline/components/INumberInput/examples/step-size.mjs?raw';
import { default as INumberInputPrependAppendTextExampleHTML } from '@inkline/inkline/components/INumberInput/examples/prepend-append-text.html?raw';
import { default as INumberInputPrependAppendTextExampleJS } from '@inkline/inkline/components/INumberInput/examples/prepend-append-text.mjs?raw';
import { default as INumberInputPrependAppendButtonExampleHTML } from '@inkline/inkline/components/INumberInput/examples/prepend-append-button.html?raw';
import { default as INumberInputPrependAppendButtonExampleJS } from '@inkline/inkline/components/INumberInput/examples/prepend-append-button.mjs?raw';
import { default as INumberInputPrependAppendDropdownExampleHTML } from '@inkline/inkline/components/INumberInput/examples/prepend-append-dropdown.html?raw';
import { default as INumberInputPrependAppendDropdownExampleJS } from '@inkline/inkline/components/INumberInput/examples/prepend-append-dropdown.mjs?raw';
import { default as INumberInputPrefixSuffixExampleHTML } from '@inkline/inkline/components/INumberInput/examples/prefix-suffix.html?raw';
import { default as INumberInputPrefixSuffixExampleJS } from '@inkline/inkline/components/INumberInput/examples/prefix-suffix.mjs?raw';
</script>

# Number Input
## Number Inputs are form components used to for easily inputting and manipulating numbers.

### Basic Example
Inkline provides you with simple solutions for all the scenarios you will encounter when you need your user to input a number.

<example :component="INumberInputBasicExample" :html="INumberInputBasicExampleHTML" :js="INumberInputBasicExampleJS"></example>

### Minimum and Maximum Value
Setting the `min` and `max` properties will restrict the value within the given range.

<example :component="INumberInputMinMaxExample" :html="INumberInputMinMaxExampleHTML" :js="INumberInputMinMaxExampleJS"></example>

### Precision
You can set the number `precision` using the precision property, allowing you to enter floating point number values.

<example :component="INumberInputPrecisionExample" :html="INumberInputPrecisionExampleHTML" :js="INumberInputPrecisionExampleJS"></example>

### Step Size
You can set the value to increment / decrement by using the `step` property. The step size is `1` by default.

<example :component="INumberInputStepSizeExample" :html="INumberInputStepSizeExampleHTML" :js="INumberInputStepSizeExampleJS"></example>

### Disabled State
Setting the `disabled` property will disable all interactions with the number input component.

<example :component="INumberInputDisabledExample" :html="INumberInputDisabledExampleHTML" :js="INumberInputDisabledExampleJS"></example>

### Readonly State
Setting the `readonly` property will disable all interactions with the number input component, except being able to focus the number input.

<example :component="INumberInputReadonlyExample" :html="INumberInputReadonlyExampleHTML" :js="INumberInputReadonlyExampleJS"></example>

### Clearable Variant
If you need to be able to quickly clear the value of a number input, you can add the `clearable` property to the number input component.

<example :component="INumberInputClearableExample" :html="INumberInputClearableExampleHTML" :js="INumberInputClearableExampleJS"></example>

### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your number inputs. Using prefixes and suffixes you can, for example, indicate your number input type using an icon or text. 

<example :component="INumberInputPrefixSuffixExample" :html="INumberInputPrefixSuffixExampleHTML" :js="INumberInputPrefixSuffixExampleJS"></example>

### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the number input by using the prepend and append slots.

<example :component="INumberInputPrependAppendTextExample" :html="INumberInputPrependAppendTextExampleHTML" :js="INumberInputPrependAppendTextExampleJS"></example>

<example :component="INumberInputPrependAppendButtonExample" :html="INumberInputPrependAppendButtonExampleHTML" :js="INumberInputPrependAppendButtonExampleJS"></example>

<example :component="INumberInputPrependAppendDropdownExample" :html="INumberInputPrependAppendDropdownExampleHTML" :js="INumberInputPrependAppendDropdownExampleJS"></example>

### Colors
You can use the `color` property to set a `light` or `dark` color for your number inputs.

<example :component="INumberInputColorVariantsExample" :html="INumberInputColorVariantsExampleHTML" :js="INumberInputColorVariantsExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of your number inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="INumberInputSizeVariantsExample" :html="INumberInputSizeVariantsExampleHTML" :js="INumberInputSizeVariantsExampleJS"></example>


### Configuration

#### Props
Use props to modify the component's design and behavior.

<props-table :manifest="manifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<slots-table :manifest="inputManifest"></slots-table>

#### Events
Use events to react to something happening inside the component.

<events-table :manifest="manifest"></events-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component. Changing the CSS Variables of the <router-link :to="{ name: 'docs-forms-input' }">Input Component</router-link> will directly affect the design of the Number Input Component as well.

<css-variables-table :manifest="inputManifest" type="local"></css-variables-table>
