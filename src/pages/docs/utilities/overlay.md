---
title: Overlay Utilities - Inkline
description: Make an element overlay its container by adding overlay utilities. 
---

<script setup>
import {
    OverlayBasicExample,
    OverlayLinkExample
} from '@inkline/inkline/stories/utilities/overlay/index.mjs';
import { default as OverlayBasicExampleHTML } from '@inkline/inkline/stories/utilities/overlay/basic.html?raw';
import { default as OverlayLinkExampleHTML } from '@inkline/inkline/stories/utilities/overlay/link.html?raw';
</script>

# Overlay Utilities

## Make an element overlay its container by adding overlay utilities. 

### Basic Example
Add the `._overlay` utility class to an element to make it cover the entire containing block. The containing block refers to a parent element with `position: relative;`.

<example :component="OverlayBasicExample" :html="OverlayBasicExampleHTML"></example>

### Overlay Link

Add the `._overlay-link` utility class to a link to make the entire containing block clickable using a `::after` pseudo element. In most cases, the containing block refers to the parent element with `position: relative;`.

<example type="card" :component="OverlayLinkExample" :html="OverlayLinkExampleHTML"></example>
