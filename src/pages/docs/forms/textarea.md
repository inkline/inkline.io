---
title: Textarea - Inkline
description: Form components used for inputting data directly from the keyboard, on multiple lines.
---

<script setup>
import {
    ITextareaBasicExample,
    ITextareaColorVariantsExample,
    ITextareaClearableExample,
    ITextareaDisabledExample,
    ITextareaReadonlyExample,
    ITextareaSizeVariantsExample,
    ITextareaPrependAppendTextExample,
    ITextareaPrependAppendButtonExample,
    ITextareaPrependAppendDropdownExample,
    ITextareaPrefixSuffixExample
} from '@inkline/inkline/components/ITextarea/examples';
import { default as ITextareaBasicExampleHTML } from '@inkline/inkline/components/ITextarea/examples/basic.html?raw';
import { default as ITextareaBasicExampleJS } from '@inkline/inkline/components/ITextarea/examples/basic.js?raw';
import { default as ITextareaColorVariantsExampleHTML } from '@inkline/inkline/components/ITextarea/examples/color-variants.html?raw';
import { default as ITextareaColorVariantsExampleJS } from '@inkline/inkline/components/ITextarea/examples/color-variants.js?raw';
import { default as ITextareaClearableExampleHTML } from '@inkline/inkline/components/ITextarea/examples/clearable.html?raw';
import { default as ITextareaClearableExampleJS } from '@inkline/inkline/components/ITextarea/examples/clearable.js?raw';
import { default as ITextareaDisabledExampleHTML } from '@inkline/inkline/components/ITextarea/examples/disabled.html?raw';
import { default as ITextareaDisabledExampleJS } from '@inkline/inkline/components/ITextarea/examples/disabled.js?raw';
import { default as ITextareaReadonlyExampleHTML } from '@inkline/inkline/components/ITextarea/examples/readonly.html?raw';
import { default as ITextareaReadonlyExampleJS } from '@inkline/inkline/components/ITextarea/examples/readonly.js?raw';
import { default as ITextareaSizeVariantsExampleHTML } from '@inkline/inkline/components/ITextarea/examples/size-variants.html?raw';
import { default as ITextareaSizeVariantsExampleJS } from '@inkline/inkline/components/ITextarea/examples/size-variants.js?raw';
import { default as ITextareaPrependAppendTextExampleHTML } from '@inkline/inkline/components/ITextarea/examples/prepend-append-text.html?raw';
import { default as ITextareaPrependAppendTextExampleJS } from '@inkline/inkline/components/ITextarea/examples/prepend-append-text.js?raw';
import { default as ITextareaPrependAppendButtonExampleHTML } from '@inkline/inkline/components/ITextarea/examples/prepend-append-button.html?raw';
import { default as ITextareaPrependAppendButtonExampleJS } from '@inkline/inkline/components/ITextarea/examples/prepend-append-button.js?raw';
import { default as ITextareaPrependAppendDropdownExampleHTML } from '@inkline/inkline/components/ITextarea/examples/prepend-append-dropdown.html?raw';
import { default as ITextareaPrependAppendDropdownExampleJS } from '@inkline/inkline/components/ITextarea/examples/prepend-append-dropdown.js?raw';
import { default as ITextareaPrefixSuffixExampleHTML } from '@inkline/inkline/components/ITextarea/examples/prefix-suffix.html?raw';
import { default as ITextareaPrefixSuffixExampleJS } from '@inkline/inkline/components/ITextarea/examples/prefix-suffix.js?raw';
</script>

# Textarea
## Form components used for inputting data directly from the keyboard, on multiple lines.

### Basic Example
Textareas are the form controls used for inputting multiple lines. Inkline provides you with simple solutions for all the scenarios you will encounter when creating textarea forms.

<example :component="ITextareaBasicExample" :html="ITextareaBasicExampleHTML" :js="ITextareaBasicExampleJS"></example>

### Disabled State
Setting the `disabled` property will disable all interactions with the textarea component.

<example :component="ITextareaDisabledExample" :html="ITextareaDisabledExampleHTML" :js="ITextareaDisabledExampleJS"></example>

### Readonly State
Setting the `readonly` property will disable all interactions with the textarea component, except being able to focus the textarea.

<example :component="ITextareaReadonlyExample" :html="ITextareaReadonlyExampleHTML" :js="ITextareaReadonlyExampleJS"></example>

### Clearable Variant
If you need to be able to quickly clear the value of an textarea, you can add the `clearable` property to the textarea component.

<example :component="ITextareaClearableExample" :html="ITextareaClearableExampleHTML" :js="ITextareaClearableExampleJS"></example>

### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your textareas. Using prefixes and suffixes you can, for example, indicate the textarea type using an icon or text. 

<example :component="ITextareaPrefixSuffixExample" :html="ITextareaPrefixSuffixExampleHTML" :js="ITextareaPrefixSuffixExampleJS"></example>

### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the textarea by using the prepend and append slots.

<example :component="ITextareaPrependAppendTextExample" :html="ITextareaPrependAppendTextExampleHTML" :js="ITextareaPrependAppendTextExampleJS"></example>

<example :component="ITextareaPrependAppendButtonExample" :html="ITextareaPrependAppendButtonExampleHTML" :js="ITextareaPrependAppendButtonExampleJS"></example>

<example :component="ITextareaPrependAppendDropdownExample" :html="ITextareaPrependAppendDropdownExampleHTML" :js="ITextareaPrependAppendDropdownExampleJS"></example>

### Colors
You can use the `color` property to set a `light` or `dark` color for your textareas.

<example :component="ITextareaColorVariantsExample" :html="ITextareaColorVariantsExampleHTML" :js="ITextareaColorVariantsExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of your textareas, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="ITextareaSizeVariantsExample" :html="ITextareaSizeVariantsExampleHTML" :js="ITextareaSizeVariantsExampleJS"></example>


