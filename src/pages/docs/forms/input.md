---
title: Input - Inkline
description: Form component used for inputting data directly from the keyboard. 
---

<script setup>
import {
    IInputBasicExample,
    IInputColorVariantsExample,
    IInputClearableExample,
    IInputDisabledExample,
    IInputReadonlyExample,
    IInputSizeVariantsExample,
    IInputPrependAppendTextExample,
    IInputPrependAppendButtonExample,
    IInputPrependAppendDropdownExample,
    IInputPrefixSuffixExample,
    IInputTypeExample
} from '@inkline/inkline/components/IInput/examples';
import { default as IInputBasicExampleHTML } from '@inkline/inkline/components/IInput/examples/basic.html?raw';
import { default as IInputBasicExampleJS } from '@inkline/inkline/components/IInput/examples/basic.js?raw';
import { default as IInputColorVariantsExampleHTML } from '@inkline/inkline/components/IInput/examples/color-variants.html?raw';
import { default as IInputColorVariantsExampleJS } from '@inkline/inkline/components/IInput/examples/color-variants.js?raw';
import { default as IInputClearableExampleHTML } from '@inkline/inkline/components/IInput/examples/clearable.html?raw';
import { default as IInputClearableExampleJS } from '@inkline/inkline/components/IInput/examples/clearable.js?raw';
import { default as IInputDisabledExampleHTML } from '@inkline/inkline/components/IInput/examples/disabled.html?raw';
import { default as IInputDisabledExampleJS } from '@inkline/inkline/components/IInput/examples/disabled.js?raw';
import { default as IInputReadonlyExampleHTML } from '@inkline/inkline/components/IInput/examples/readonly.html?raw';
import { default as IInputReadonlyExampleJS } from '@inkline/inkline/components/IInput/examples/readonly.js?raw';
import { default as IInputSizeVariantsExampleHTML } from '@inkline/inkline/components/IInput/examples/size-variants.html?raw';
import { default as IInputSizeVariantsExampleJS } from '@inkline/inkline/components/IInput/examples/size-variants.js?raw';
import { default as IInputPrependAppendTextExampleHTML } from '@inkline/inkline/components/IInput/examples/prepend-append-text.html?raw';
import { default as IInputPrependAppendTextExampleJS } from '@inkline/inkline/components/IInput/examples/prepend-append-text.js?raw';
import { default as IInputPrependAppendButtonExampleHTML } from '@inkline/inkline/components/IInput/examples/prepend-append-button.html?raw';
import { default as IInputPrependAppendButtonExampleJS } from '@inkline/inkline/components/IInput/examples/prepend-append-button.js?raw';
import { default as IInputPrependAppendDropdownExampleHTML } from '@inkline/inkline/components/IInput/examples/prepend-append-dropdown.html?raw';
import { default as IInputPrependAppendDropdownExampleJS } from '@inkline/inkline/components/IInput/examples/prepend-append-dropdown.js?raw';
import { default as IInputPrefixSuffixExampleHTML } from '@inkline/inkline/components/IInput/examples/prefix-suffix.html?raw';
import { default as IInputPrefixSuffixExampleJS } from '@inkline/inkline/components/IInput/examples/prefix-suffix.js?raw';
import { default as IInputTypeExampleHTML } from '@inkline/inkline/components/IInput/examples/type.html?raw';
import { default as IInputTypeExampleJS } from '@inkline/inkline/components/IInput/examples/type.js?raw';
</script>


# Input
## Form component used for inputting data directly from the keyboard. 

### Basic Example
Inputs are the simplest and most used type of form control. Inkline provides you with simple solutions for all the scenarios you will encounter when creating input forms.

<example :component="IInputBasicExample" :html="IInputBasicExampleHTML" :js="IInputBasicExampleJS"></example>

### Input Type
Behind the scenes, Inkline uses a native HTML `<input>` element, meaning that you can use the `type` property to define the type of the input, such as `text`, `password`, `date`, `email`, `number`, and so on. By default, the input type is set to `text`.

Keep in mind that native input types look and are treated differently in each browser, which is why you should use a custom component to achieve consistency.

<example :component="IInputTypeExample" :html="IInputTypeExampleHTML" :js="IInputTypeExampleJS"></example>

### Disabled State
Setting the `disabled` property will disable all interactions with the input component.

<example :component="IInputDisabledExample" :html="IInputDisabledExampleHTML" :js="IInputDisabledExampleJS"></example>

### Readonly State
Setting the `readonly` property will disable all interactions with the input component, except being able to focus the input.

<example :component="IInputReadonlyExample" :html="IInputReadonlyExampleHTML" :js="IInputReadonlyExampleJS"></example>

### Clearable Variant
If you need to be able to quickly clear the value of an input, you can add the `clearable` property to the input component.

<example :component="IInputClearableExample" :html="IInputClearableExampleHTML" :js="IInputClearableExampleJS"></example>

### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your inputs. Using prefixes and suffixes you can, for example, indicate the input type using an icon or text. 

<example :component="IInputPrefixSuffixExample" :html="IInputPrefixSuffixExampleHTML" :js="IInputPrefixSuffixExampleJS"></example>

### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the input by using the prepend and append slots.

<example :component="IInputPrependAppendTextExample" :html="IInputPrependAppendTextExampleHTML" :js="IInputPrependAppendTextExampleJS"></example>

<example :component="IInputPrependAppendButtonExample" :html="IInputPrependAppendButtonExampleHTML" :js="IInputPrependAppendButtonExampleJS"></example>

<example :component="IInputPrependAppendDropdownExample" :html="IInputPrependAppendDropdownExampleHTML" :js="IInputPrependAppendDropdownExampleJS"></example>

### Colors
You can use the `color` property to set a `light` or `dark` color for your inputs.

<example :component="IInputColorVariantsExample" :html="IInputColorVariantsExampleHTML" :js="IInputColorVariantsExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="IInputSizeVariantsExample" :html="IInputSizeVariantsExampleHTML" :js="IInputSizeVariantsExampleJS"></example>


