---
title: Form Label - Inkline
description: Form component used to add text labels to form groups. 
---

<script setup>
import {
    IFormLabelBasicExample,
    IFormLabelPlacementExample,
    IFormLabelRequiredExample,
    IFormLabelSizeVariantsExample
} from '@inkline/inkline/components/IForm/components/IFormLabel/examples';
import { default as IFormLabelBasicExampleHTML } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/basic.html?raw';
import { default as IFormLabelBasicExampleJS } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/basic.js?raw';
import { default as IFormLabelPlacementExampleHTML } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/placement.html?raw';
import { default as IFormLabelPlacementExampleJS } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/placement.js?raw';
import { default as IFormLabelRequiredExampleHTML } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/required.html?raw';
import { default as IFormLabelRequiredExampleJS } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/required.js?raw';
import { default as IFormLabelSizeVariantsExampleHTML } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/size-variants.html?raw';
import { default as IFormLabelSizeVariantsExampleJS } from '@inkline/inkline/components/IForm/components/IFormLabel/examples/size-variants.js?raw';
</script>

# Form Label
## Form component used to add text labels to form groups. 

### Basic Example
You can add a label to your input by grouping an `<i-form-label>` and any input component inside an `<i-form-group>`. 

<example :component="IFormLabelBasicExample" :html="IFormLabelBasicExampleHTML" :js="IFormLabelBasicExampleJS"></example>

### Required Example
You can add the `required` property to a parent form group to add a red asterisk `*` to the form label. 

<example :component="IFormLabelRequiredExample" :html="IFormLabelRequiredExampleHTML" :js="IFormLabelRequiredExampleJS"></example>

### Placement
You can add labels to either side of your input, and position it using the optional `inline` form group and `placement` form label properties.

<example :component="IFormLabelPlacementExample" :html="IFormLabelPlacementExampleHTML" :js="IFormLabelPlacementExampleJS"></example>

### Size
You're able to use the `size` property to control the size of your form labels, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. Setting the size on a `<i-form-group>` will also affect form labels.

<example :component="IFormLabelSizeVariantsExample" :html="IFormLabelSizeVariantsExampleHTML" :js="IFormLabelSizeVariantsExampleJS"></example>
