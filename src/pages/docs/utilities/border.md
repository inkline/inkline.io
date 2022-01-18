---
title: Utilities - Border - Inkline
description: Use border utilities to quickly apply border styles to an element. Great for images, buttons, or any other element. 
---

<script setup>
import {
    BorderAddExample,
    BorderColorBrandExample,
    BorderColorNeutralExample,
    BorderColorStateExample,
    BorderRadiusExample,
    BorderRemoveExample
} from '@inkline/inkline/stories/utilities/border/index.mjs';
import { default as BorderAddExampleHTML } from '@inkline/inkline/stories/utilities/border/add.html?raw';
import { default as BorderColorBrandExampleHTML } from '@inkline/inkline/stories/utilities/border/color-brand.html?raw';
import { default as BorderColorNeutralExampleHTML } from '@inkline/inkline/stories/utilities/border/color-neutral.html?raw';
import { default as BorderColorStateExampleHTML } from '@inkline/inkline/stories/utilities/border/color-state.html?raw';
import { default as BorderRadiusExampleHTML } from '@inkline/inkline/stories/utilities/border/radius.html?raw';
import { default as BorderRemoveExampleHTML } from '@inkline/inkline/stories/utilities/border/remove.html?raw';
</script>


# Utilities - Border

## Use border utilities to quickly apply border styles to an element. Great for images, buttons, or any other element. 

### Adding Border
You can use border utilities to add borders on all sides or individually on an element.

<example type="border-utilities" :component="BorderAddExample" :html="BorderAddExampleHTML"></example>

### Removing Border
You can use border utilities to remove borders on all sides or individually on an element.

<example type="border-utilities -with-border" :component="BorderRemoveExample" :html="BorderRemoveExampleHTML"></example>

### Border Color
You can use border addition and removal utilities together with border color utilities to set their color.

<example type="border-utilities -with-border" :component="BorderColorBrandExample" :html="BorderColorBrandExampleHTML"></example>

<example type="border-utilities -with-border" :component="BorderColorStateExample" :html="BorderColorStateExampleHTML"></example>

<example type="border-utilities -with-border" :component="BorderColorNeutralExample" :html="BorderColorNeutralExampleHTML"></example>

Position specific border colors are also available. Use `_border-{position}-color:{variant}` to set the color of a specific border side (i.e. `_border-top-color:primary`). 

### Border Radius
You can use border radius utilities to add rounded corners to your elements.

<example type="border-utilities -with-border" :component="BorderRadiusExample" :html="BorderRadiusExampleHTML"></example>
