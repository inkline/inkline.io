---
title: Toggle - Inkline
description: Toggles are boolean form components used for easily enabling or disabling features. 
---

<script setup>
import {
    IToggleBasicExample,
    IToggleColorVariantsExample,
    IToggleDisabledExample,
    IToggleReadonlyExample,
    IToggleSizeVariantsExample
} from '@inkline/inkline/components/IToggle/examples';
import { default as IToggleBasicExampleHTML } from '@inkline/inkline/components/IToggle/examples/basic.html?raw';
import { default as IToggleBasicExampleJS } from '@inkline/inkline/components/IToggle/examples/basic.js?raw';
import { default as IToggleColorVariantsExampleHTML } from '@inkline/inkline/components/IToggle/examples/color-variants.html?raw';
import { default as IToggleColorVariantsExampleJS } from '@inkline/inkline/components/IToggle/examples/color-variants.js?raw';
import { default as IToggleDisabledExampleHTML } from '@inkline/inkline/components/IToggle/examples/disabled.html?raw';
import { default as IToggleDisabledExampleJS } from '@inkline/inkline/components/IToggle/examples/disabled.js?raw';
import { default as IToggleReadonlyExampleHTML } from '@inkline/inkline/components/IToggle/examples/readonly.html?raw';
import { default as IToggleReadonlyExampleJS } from '@inkline/inkline/components/IToggle/examples/readonly.js?raw';
import { default as IToggleSizeVariantsExampleHTML } from '@inkline/inkline/components/IToggle/examples/size-variants.html?raw';
import { default as IToggleSizeVariantsExampleJS } from '@inkline/inkline/components/IToggle/examples/size-variants.js?raw';
</script>

# Toggle
## Toggles are boolean form components used for easily enabling or disabling features. 

### Basic Example

<example :component="IToggleBasicExample" :html="IToggleBasicExampleHTML" :js="IToggleBasicExampleJS"></example>

### Readonly State
You can set the toggle input to be readonly by using the `readonly` property.

<example :component="IToggleReadonlyExample" :html="IToggleReadonlyExampleHTML" :js="IToggleReadonlyExampleJS"></example>

### Disabled State
You can set the toggle input to be disabled by using the `disabled` property.

<example :component="IToggleDisabledExample" :html="IToggleDisabledExampleHTML" :js="IToggleDisabledExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

<example :component="IToggleSizeVariantsExample" :html="IToggleSizeVariantsExampleHTML" :js="IToggleSizeVariantsExampleJS"></example>

Applying the size `size` property to an `i-form-group` will also set the chosen size to all of its `i-toggle` inputs.

### Color Variants
You can use the `color` property to set a `light` or `dark` color for your toggle components.

<example :component="IToggleColorVariantsExample" :html="IToggleColorVariantsExampleHTML" :js="IToggleColorVariantsExampleJS"></example>



