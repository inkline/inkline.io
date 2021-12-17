---
title: Loader - Inkline
description: Provide a loading state for a component or page using a customizable loading spinner. 
---

<script setup>
import {
    ILoaderBasicExample,
    ILoaderColorVariantsExample,
    ILoaderSizeAutoExample,
    ILoaderSizeVariantsExample,
    ILoaderTextExample
} from '@inkline/inkline/components/ILoader/examples';
import { default as ILoaderBasicExampleHTML } from '@inkline/inkline/components/ILoader/examples/basic.html?raw';
import { default as ILoaderColorVariantsExampleHTML } from '@inkline/inkline/components/ILoader/examples/color-variants.html?raw';
import { default as ILoaderSizeAutoExampleHTML } from '@inkline/inkline/components/ILoader/examples/size-auto.html?raw';
import { default as ILoaderSizeVariantsExampleHTML } from '@inkline/inkline/components/ILoader/examples/size-variants.html?raw';
import { default as ILoaderTextExampleHTML } from '@inkline/inkline/components/ILoader/examples/text.html?raw';
</script>

# Loader

## Provide a loading state for a component or page using a customizable loading spinner. 

### Basic Example
Use the loader component whenever you have an action that requires the user to wait for its completion. The loader component is very versatile and can be adapted to any container size.

<example type="icon" :component="ILoaderBasicExample" :html="ILoaderBasicExampleHTML"></example>

### Color Variants
The loader component is available in a `light` or `dark` color, which you can choose using the `color` property.

<example type="icon" :component="ILoaderColorVariantsExample" :html="ILoaderColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your loader component, using one of the available sizes: `sm`, `md`, and `lg`.

<example type="icon" :component="ILoaderSizeVariantsExample" :html="ILoaderSizeVariantsExampleHTML"></example>

If you set the `size` property to `auto`, the loader will fit the container that it is in. Make sure to use the same height and width to keep the correct aspect ratio.

<example type="icon" :component="ILoaderSizeAutoExample" :html="ILoaderSizeAutoExampleHTML"></example>

### Text Example
You're able to provide some additional text by using the `default` loader slot.

<example type="icon" :component="ILoaderTextExample" :html="ILoaderTextExampleHTML"></example>
