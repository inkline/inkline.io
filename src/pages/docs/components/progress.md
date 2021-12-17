---
title: Progress - Inkline
description: A custom component for displaying progress with support for stacked progress bars.
---

<script setup>
import {
    IProgressBasicExample,
    IProgressBarColorVariantsExample,
    IProgressColorVariantsExample,
    IProgressSizeVariantsExample,
    IProgressStackedExample,
    IProgressValueExample
} from '@inkline/inkline/components/IProgress/examples';
import { default as IProgressBasicExampleHTML } from '@inkline/inkline/components/IProgress/examples/basic.html?raw';
import { default as IProgressBarColorVariantsExampleHTML } from '@inkline/inkline/components/IProgress/examples/bar-color-variants.html?raw';
import { default as IProgressColorVariantsExampleHTML } from '@inkline/inkline/components/IProgress/examples/color-variants.html?raw';
import { default as IProgressSizeVariantsExampleHTML } from '@inkline/inkline/components/IProgress/examples/size-variants.html?raw';
import { default as IProgressStackedExampleHTML } from '@inkline/inkline/components/IProgress/examples/stacked.html?raw';
import { default as IProgressValueExampleHTML } from '@inkline/inkline/components/IProgress/examples/value.html?raw';
</script>

# Progress
## A custom component for displaying progress with support for stacked progress bars.

### Basic Example
Progress components are built with two components: a wrapper `<i-progress>` and at least one `<i-progress-bar>`. You can set the width of a progress bar by setting its `value` property.

<example :component="IProgressBasicExample" :html="IProgressBasicExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your progress, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example :component="IProgressSizeVariantsExample" :html="IProgressSizeVariantsExampleHTML"></example>

### Color Variants
Inkline includes multiple progress styles. You set the wrapper `<i-progress>` background using the `color` property.

<example :component="IProgressColorVariantsExample" :html="IProgressColorVariantsExampleHTML"></example>

More importantly, you can change the color of an `<i-progress-bar>` using the `color` property.

<example :component="IProgressBarColorVariantsExample" :html="IProgressBarColorVariantsExampleHTML"></example>

### Value
Inkline allows you to set a `min` and `max` modifier to calculate the progress based on a meaningful value. The new `min` will represent `0%` and the `max` will represent `100%`.

<example :component="IProgressValueExample" :html="IProgressValueExampleHTML"></example>

### Stacked Bars
You can add multiple `<i-progress-bar>` inside the `<i-progress>` component to stack them, adding them up to `100%`.

<example :component="IProgressStackedExample" :html="IProgressStackedExampleHTML"></example>
