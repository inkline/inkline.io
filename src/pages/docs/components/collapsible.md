---
title: Collapsible - Inkline
description: Collapsible elements are used to show and hide content using a smooth reveal transition. 
---

<script setup>
import {
    ICollapsibleAccordionExample,
    ICollapsibleBasicExample,
    ICollapsibleColorVariantsExample,
    ICollapsibleDefaultOpenExample,
    ICollapsibleHeaderExample,
    ICollapsibleSizeVariantsExample
} from '@inkline/inkline/components/ICollapsible/examples';
import { default as ICollapsibleAccordionExampleHTML } from '@inkline/inkline/components/ICollapsible/examples/accordion.html?raw';
import { default as ICollapsibleBasicExampleHTML } from '@inkline/inkline/components/ICollapsible/examples/basic.html?raw';
import { default as ICollapsibleColorVariantsExampleHTML } from '@inkline/inkline/components/ICollapsible/examples/color-variants.html?raw';
import { default as ICollapsibleDefaultOpenExampleHTML } from '@inkline/inkline/components/ICollapsible/examples/default-open.html?raw';
import { default as ICollapsibleDefaultOpenExampleJS } from '@inkline/inkline/components/ICollapsible/examples/default-open.js?raw';
import { default as ICollapsibleHeaderExampleHTML } from '@inkline/inkline/components/ICollapsible/examples/header.html?raw';
import { default as ICollapsibleSizeVariantsExampleHTML } from '@inkline/inkline/components/ICollapsible/examples/size-variants.html?raw';
</script>

# Collapsible

## Collapsible elements are used to show and hide content using a smooth reveal transition. 

### Basic Example
Collapsing an element will animate the height from zero to its default value. This component is useful for creating clearly separated content sections such as FAQ pages.

<example :component="ICollapsibleBasicExample" :html="ICollapsibleBasicExampleHTML"></example>

### Item Header
You can use the `header` slot to provide a custom title for the collapsible panel's heading. 

<example :component="ICollapsibleHeaderExample" :html="ICollapsibleHeaderExampleHTML"></example>

### Default Open Panels
Panels can be opened by default, on page load, using the `v-model` directive of the `<i-collapsible>` component. First, you'll need to assign an `id` to the `<i-collapsible-item>` components which will identify the open panels.
 
 <example :component="ICollapsibleDefaultOpenExample" :html="ICollapsibleDefaultOpenExampleHTML" :js="ICollapsibleDefaultOpenExampleJS"></example>

### Accordion
Accordion collapsible groups can have only one content panel open at a single time. This behaviour can be set using the `accordion` property.

<example :component="ICollapsibleAccordionExample" :html="ICollapsibleAccordionExampleHTML"></example>

### Color Variants
Inkline includes basic predefined collapsible colors that you can use within your application. You can apply a style using the `color` property.

<example :component="ICollapsibleColorVariantsExample" :html="ICollapsibleColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your collapsible, using one of the available sizes: `sm`, `md`, and `lg`.
The default size is set to `md`.

<example :component="ICollapsibleSizeVariantsExample" :html="ICollapsibleSizeVariantsExampleHTML"></example>
