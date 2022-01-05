---
title: Sizing Utilities - Inkline
description: Make an element as wide or as tall as you need using width and height utilities. 
---

<script setup>
import {
    SizingHeightExample,
    SizingMaxHeightExample,
    SizingMaxWidthExample,
    SizingWidthExample
} from '@inkline/inkline/stories/utilities/sizing/index.mjs';
import { default as SizingHeightExampleHTML } from '@inkline/inkline/stories/utilities/sizing/height.html?raw';
import { default as SizingMaxHeightExampleHTML } from '@inkline/inkline/stories/utilities/sizing/max-height.html?raw';
import { default as SizingMaxWidthExampleHTML } from '@inkline/inkline/stories/utilities/sizing/max-width.html?raw';
import { default as SizingWidthExampleHTML } from '@inkline/inkline/stories/utilities/sizing/width.html?raw';
</script>

# Sizing Utilities

## Make an element as wide or as tall as you need using width and height utilities. 

Width and height utilities provide support for `25%`, `50%`, `75%`, `100%`, and auto by default.

### Width

<example type="sizing" :component="SizingWidthExample" :html="SizingWidthExampleHTML"></example>

### Height

<example type="sizing -vertical" :component="SizingHeightExample" :html="SizingHeightExampleHTML"></example>

### Max Width

<example type="sizing" :component="SizingMaxWidthExample" :html="SizingMaxWidthExampleHTML"></example>

### Max Height

<example type="sizing -vertical" :component="SizingMaxHeightExample" :html="SizingMaxHeightExampleHTML"></example>

### Viewport Relative Sizing
You can also use utilities to set the width and height relative to the viewport.

~~~html
<div class="_width:100vw">100% Viewport Width</div>

<div class="_height:100vh">100% Viewport Height</div>

<div class="_max-width:100vw">100% Viewport Max Width</div>

<div class="_max-height:100vh">100% Viewport Max Height</div>
~~~
