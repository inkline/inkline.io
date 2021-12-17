---
title: Select - Inkline
description: Form component used for selecting a value from a large list of options, with autocomplete and pagination support. 
---

<script setup>
import {
    ISelectBasicExample,
    ISelectColorVariantsExample,
    ISelectClearableExample,
    ISelectDisabledExample,
    ISelectDisabledOptionExample,
    ISelectHeaderFooterExample,
    ISelectMarkupExample,
    ISelectSizeVariantsExample,
    ISelectPrependAppendTextExample,
    ISelectPrependAppendButtonExample,
    ISelectPrefixSuffixExample,
    ISelectReadonlyExample,
} from '@inkline/inkline/components/ISelect/examples';
import { default as ISelectBasicExampleHTML } from '@inkline/inkline/components/ISelect/examples/basic.html?raw';
import { default as ISelectBasicExampleJS } from '@inkline/inkline/components/ISelect/examples/basic.js?raw';
import { default as ISelectColorVariantsExampleHTML } from '@inkline/inkline/components/ISelect/examples/color-variants.html?raw';
import { default as ISelectColorVariantsExampleJS } from '@inkline/inkline/components/ISelect/examples/color-variants.js?raw';
import { default as ISelectClearableExampleHTML } from '@inkline/inkline/components/ISelect/examples/clearable.html?raw';
import { default as ISelectClearableExampleJS } from '@inkline/inkline/components/ISelect/examples/clearable.js?raw';
import { default as ISelectDisabledExampleHTML } from '@inkline/inkline/components/ISelect/examples/disabled.html?raw';
import { default as ISelectDisabledExampleJS } from '@inkline/inkline/components/ISelect/examples/disabled.js?raw';
import { default as ISelectDisabledOptionExampleHTML } from '@inkline/inkline/components/ISelect/examples/disabled-option.html?raw';
import { default as ISelectDisabledOptionExampleJS } from '@inkline/inkline/components/ISelect/examples/disabled-option.js?raw';
import { default as ISelectHeaderFooterExampleHTML } from '@inkline/inkline/components/ISelect/examples/header-and-footer.html?raw';
import { default as ISelectHeaderFooterExampleJS } from '@inkline/inkline/components/ISelect/examples/header-and-footer.js?raw';
import { default as ISelectMarkupExampleHTML } from '@inkline/inkline/components/ISelect/examples/markup.html?raw';
import { default as ISelectMarkupExampleJS } from '@inkline/inkline/components/ISelect/examples/markup.js?raw';
import { default as ISelectSizeVariantsExampleHTML } from '@inkline/inkline/components/ISelect/examples/size-variants.html?raw';
import { default as ISelectSizeVariantsExampleJS } from '@inkline/inkline/components/ISelect/examples/size-variants.js?raw';
import { default as ISelectPrependAppendTextExampleHTML } from '@inkline/inkline/components/ISelect/examples/prepend-append-text.html?raw';
import { default as ISelectPrependAppendTextExampleJS } from '@inkline/inkline/components/ISelect/examples/prepend-append-text.js?raw';
import { default as ISelectPrependAppendButtonExampleHTML } from '@inkline/inkline/components/ISelect/examples/prepend-append-button.html?raw';
import { default as ISelectPrependAppendButtonExampleJS } from '@inkline/inkline/components/ISelect/examples/prepend-append-button.js?raw';
import { default as ISelectPrefixSuffixExampleHTML } from '@inkline/inkline/components/ISelect/examples/prefix-suffix.html?raw';
import { default as ISelectPrefixSuffixExampleJS } from '@inkline/inkline/components/ISelect/examples/prefix-suffix.js?raw';
import { default as ISelectReadonlyExampleHTML } from '@inkline/inkline/components/ISelect/examples/readonly.html?raw';
import { default as ISelectReadonlyExampleJS } from '@inkline/inkline/components/ISelect/examples/readonly.js?raw';
</script>


# Select
## Form component used for selecting a value from a large list of options, with autocomplete and pagination support

### Basic Example
The most basic use case for a select component is to have all the select options predefined using the `options` property. This component allows you to easily choose from a set of values and display a computed option label of your choice.

Here are some considerations to be made:
- Each option must be an Object `{}`
- Each option must have a unique identifier field, such as `id`
- The `selected` value will be the option itself

<example :component="ISelectBasicExample" :html="ISelectBasicExampleHTML" :js="ISelectBasicExampleJS"></example>

### Disabled State
Setting the `disabled` property will disable all interactions with the select component.

<example :component="ISelectDisabledExample" :html="ISelectDisabledExampleHTML" :js="ISelectDisabledExampleJS"></example>

You can also disable individual options by setting the option's `disabled` field to `true`.

<example :component="ISelectDisabledOptionExample" :html="ISelectDisabledOptionExampleHTML" :js="ISelectDisabledOptionExampleJS"></example>

### Readonly State
Setting the `readonly` property will disable all interactions with the select component, except being able to focus the select.

<example :component="ISelectReadonlyExample" :html="ISelectReadonlyExampleHTML" :js="ISelectReadonlyExampleJS"></example>

### Clearable Variant
If you need to be able to quickly clear the value of an select, you can add the `clearable` property to the select component.

<example :component="ISelectClearableExample" :html="ISelectClearableExampleHTML" :js="ISelectClearableExampleJS"></example>

### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your select. Using prefixes and suffixes you can, for example, indicate 
your select type using an icon or text. 

<example :component="ISelectPrefixSuffixExample" :html="ISelectPrefixSuffixExampleHTML" :js="ISelectPrefixSuffixExampleJS"></example>

### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the select by using the prepend and append slots.

<example :component="ISelectPrependAppendTextExample" :html="ISelectPrependAppendTextExampleHTML" :js="ISelectPrependAppendTextExampleJS"></example>

<example :component="ISelectPrependAppendButtonExample" :html="ISelectPrependAppendButtonExampleHTML" :js="ISelectPrependAppendButtonExampleJS"></example>

### Colors
You can use the `color` property to set a `light` or `dark` color for your select.

<example :component="ISelectColorVariantsExample" :html="ISelectColorVariantsExampleHTML" :js="ISelectColorVariantsExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of your select, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="ISelectSizeVariantsExample" :html="ISelectSizeVariantsExampleHTML" :js="ISelectSizeVariantsExampleJS"></example>

### Header and Footer
You can provide a custom header and footer for the select menu using the `header` and `footer` slots.

<example :component="ISelectHeaderFooterExample" :html="ISelectHeaderFooterExampleHTML" :js="ISelectHeaderFooterExampleJS"></example>

### Markup Example
The old way to write the select input is still viable, although it doesn't support the more advanced features that the Inkline 3 Select has to offer.

<example :component="ISelectMarkupExample" :html="ISelectMarkupExampleHTML" :js="ISelectMarkupExampleJS"></example>




