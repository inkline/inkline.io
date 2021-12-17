---
title: Form Group - Inkline
description: Form groups are the easiest way to add structure and spacing to form elements. 
---

<script setup>
import {
    IFormGroupBasicExample,
    IFormGroupDisabledExample,
    IFormGroupNestingExample,
    IFormGroupNestingDisabledExample,
    IFormGroupNestingReadonlyExample,
    IFormGroupNestingSizeVariantsLgExample,
    IFormGroupSizeVariantsSmExample,
    IFormGroupSizeVariantsMdExample,
    IFormGroupSizeVariantsLgExample
} from '@inkline/inkline/components/IForm/components/IFormGroup/examples';
import { default as IFormGroupBasicExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/basic.html?raw';
import { default as IFormGroupBasicExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/basic.js?raw';
import { default as IFormGroupDisabledExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/disabled.html?raw';
import { default as IFormGroupDisabledExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/disabled.js?raw';
import { default as IFormGroupNestingExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting.html?raw';
import { default as IFormGroupNestingExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting.js?raw';
import { default as IFormGroupNestingDisabledExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting-disabled.html?raw';
import { default as IFormGroupNestingDisabledExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting-disabled.js?raw';
import { default as IFormGroupNestingReadonlyExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting-readonly.html?raw';
import { default as IFormGroupNestingReadonlyExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting-readonly.js?raw';
import { default as IFormGroupNestingSizeVariantsLgExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting-size-variants-lg.html?raw';
import { default as IFormGroupNestingSizeVariantsLgExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/nesting-size-variants-lg.js?raw';
import { default as IFormGroupSizeVariantsSmExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/size-variants-sm.html?raw';
import { default as IFormGroupSizeVariantsSmExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/size-variants-sm.js?raw';
import { default as IFormGroupSizeVariantsMdExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/size-variants-md.html?raw';
import { default as IFormGroupSizeVariantsMdExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/size-variants-md.js?raw';
import { default as IFormGroupSizeVariantsLgExampleHTML } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/size-variants-lg.html?raw';
import { default as IFormGroupSizeVariantsLgExampleJS } from '@inkline/inkline/components/IForm/components/IFormGroup/examples/size-variants-lg.js?raw';
</script>

# Form Group
## Form groups are the easiest way to add structure and spacing to form elements. 

### Example
The `<i-form-group>` component is a wrapper that provides proper grouping of labels, input, help text, and form validation messaging. By default, form groups add spacing between them.

<example :component="IFormGroupBasicExample" :html="IFormGroupBasicExampleHTML" :js="IFormGroupBasicExampleJS"></example>

### Disabled State
Setting a form group as `disabled` will cause all of its child form components to be disabled.

<example :component="IFormGroupDisabledExample" :html="IFormGroupDisabledExampleHTML" :js="IFormGroupDisabledExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of the form components inside your `<i-form-group>`, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

All of the components inside the `<i-form-group>` will inherit the parent form group's size.

<example :component="IFormGroupSizeVariantsSmExample" :html="IFormGroupSizeVariantsSmExampleHTML" :js="IFormGroupSizeVariantsSmExampleJS"></example>

<example :component="IFormGroupSizeVariantsMdExample" :html="IFormGroupSizeVariantsMdExampleHTML" :js="IFormGroupSizeVariantsMdExampleJS"></example>

<example :component="IFormGroupSizeVariantsLgExample" :html="IFormGroupSizeVariantsLgExampleHTML" :js="IFormGroupSizeVariantsLgExampleJS"></example>

### Form Group Nesting
You can nest form groups in order to control the `disabled`, `readonly` and `size` properties of multiple form components at once. All the child inputs of the parent form group will inherit the property.

<example :component="IFormGroupNestingExample" :html="IFormGroupNestingExampleHTML" :js="IFormGroupNestingExampleJS"></example>

<example :component="IFormGroupNestingDisabledExample" :html="IFormGroupNestingDisabledExampleHTML" :js="IFormGroupNestingDisabledExampleJS"></example>

<example :component="IFormGroupNestingReadonlyExample" :html="IFormGroupNestingReadonlyExampleHTML" :js="IFormGroupNestingReadonlyExampleJS"></example>

<example :component="IFormGroupNestingSizeVariantsLgExample" :html="IFormGroupNestingSizeVariantsLgExampleHTML" :js="IFormGroupNestingSizeVariantsLgExampleJS"></example>
