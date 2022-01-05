---
title: Form - Inkline
description: Forms are the main wrapper components for form elements, with powerful customization and validation options. 
---

<script setup>
import { manifest } from '@inkline/inkline/components/IForm/manifest.mjs';
import {
    IFormBasicExample,
    IFormDisabledExample,
    IFormReadonlyExample,
    IFormSizeVariantsSmExample,
    IFormSizeVariantsMdExample,
    IFormSizeVariantsLgExample
} from '@inkline/inkline/components/IForm/examples/index.mjs';
import { default as IFormBasicExampleHTML } from '@inkline/inkline/components/IForm/examples/basic.html?raw';
import { default as IFormBasicExampleJS } from '@inkline/inkline/components/IForm/examples/basic.mjs?raw';
import { default as IFormDisabledExampleHTML } from '@inkline/inkline/components/IForm/examples/disabled.html?raw';
import { default as IFormDisabledExampleJS } from '@inkline/inkline/components/IForm/examples/disabled.mjs?raw';
import { default as IFormReadonlyExampleHTML } from '@inkline/inkline/components/IForm/examples/readonly.html?raw';
import { default as IFormReadonlyExampleJS } from '@inkline/inkline/components/IForm/examples/readonly.mjs?raw';
import { default as IFormSizeVariantsSmExampleHTML } from '@inkline/inkline/components/IForm/examples/size-variants-sm.html?raw';
import { default as IFormSizeVariantsSmExampleJS } from '@inkline/inkline/components/IForm/examples/size-variants-sm.mjs?raw';
import { default as IFormSizeVariantsMdExampleHTML } from '@inkline/inkline/components/IForm/examples/size-variants-md.html?raw';
import { default as IFormSizeVariantsMdExampleJS } from '@inkline/inkline/components/IForm/examples/size-variants-md.mjs?raw';
import { default as IFormSizeVariantsLgExampleHTML } from '@inkline/inkline/components/IForm/examples/size-variants-lg.html?raw';
import { default as IFormSizeVariantsLgExampleJS } from '@inkline/inkline/components/IForm/examples/size-variants-lg.mjs?raw';
</script>

# Form
## Forms are the main wrapper components for form elements, with powerful customization and validation options. 

### Basic Example

The `<i-form>` component is a wrapper that provides proper handling of form validation and form grouping. Here are some things that are good to know:

- All nested form components will inherit the form's `disabled` and `readonly` state
- All nested form components will inherit the form's `size` variant
- You can use the `@submit` binding to handle the submit event

<example :component="IFormBasicExample" :html="IFormBasicExampleHTML" :js="IFormBasicExampleJS"></example>

### Disabled State
Setting a form as `disabled` will cause all of its child inputs to be disabled. When disabled, the form cannot be submitted.

<example :component="IFormDisabledExample" :html="IFormDisabledExampleHTML" :js="IFormDisabledExampleJS"></example>

### Readonly State
Setting a form as `readonly` will cause all of its child inputs to be readonly. When readonly, the form can still be submitted.

<example :component="IFormReadonlyExample" :html="IFormReadonlyExampleHTML" :js="IFormReadonlyExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of your `<i-form>`, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

All of the form components inside the `<i-form>` will inherit the parent form group's size.

<example :component="IFormSizeVariantsSmExample" :html="IFormSizeVariantsSmExampleHTML" :js="IFormSizeVariantsSmExampleJS"></example>

<example :component="IFormSizeVariantsMdExample" :html="IFormSizeVariantsMdExampleHTML" :js="IFormSizeVariantsMdExampleJS"></example>

<example :component="IFormSizeVariantsLgExample" :html="IFormSizeVariantsLgExampleHTML" :js="IFormSizeVariantsLgExampleJS"></example>

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
