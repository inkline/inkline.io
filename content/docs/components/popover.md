---
title: Popover - Inkline
description: Popovers are useful for conveying information when an user clicks an element.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IPopover/manifest.mjs';
import {
    IPopoverBasicExample,
    IPopoverColorVariantsExample,
    IPopoverSizeVariantsExample,
    IPopoverPlacementExample,
    IPopoverTriggerExample
} from '@inkline/inkline/components/IPopover/examples/index.mjs';
import { default as IPopoverBasicExampleHTML } from '@inkline/inkline/components/IPopover/examples/basic.html?raw';
import { default as IPopoverColorVariantsExampleHTML } from '@inkline/inkline/components/IPopover/examples/color-variants.html?raw';
import { default as IPopoverSizeVariantsExampleHTML } from '@inkline/inkline/components/IPopover/examples/size-variants.html?raw';
import { default as IPopoverPlacementExampleHTML } from '@inkline/inkline/components/IPopover/examples/placement.html?raw';
import { default as IPopoverTriggerExampleHTML } from '@inkline/inkline/components/IPopover/examples/trigger.html?raw';
import { default as IPopoverTriggerExampleJS } from '@inkline/inkline/components/IPopover/examples/trigger.mjs?raw';
</script>

# Popover
## Popovers are useful for conveying information when an user clicks an element.

### Basic Example
Wrap the trigger element (such as an `<i-button>`) and provide a `<template #body>` inside an `<i-popover>` component to create a popover.

Optionally, you can provide a popover `header` and `footer` using slots.

<example :component="IPopoverBasicExample" :html="IPopoverBasicExampleHTML"></example>

### Placement
Trigger popovers at the `top`, `bottom`, `left` or `right` of elements by using the `placement` property. 

Each position also has a `-start` or `-end` variant that sets the popover to the start or end of the placement instead of centering it. The possible placements are:

- `top`
- `top-start`
- `top-end`
- `bottom`
- `bottom-start`
- `bottom-end`
- `left`
- `left-start`
- `left-end`
- `right`
- `right-start`
- `right-end`

<example :component="IPopoverPlacementExample" :html="IPopoverPlacementExampleHTML"></example>

### Trigger Type
You can use the `trigger` property to trigger the popover on `hover` or `click`. By default, popovers are triggered on `hover`, a design decision made to improve user experience.

<example :component="IPopoverTriggerExample" :html="IPopoverTriggerExampleHTML" :js="IPopoverTriggerExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your popovers, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example :component="IPopoverSizeVariantsExample" :html="IPopoverSizeVariantsExampleHTML"></example>

### Color Variants
You can choose a light or dark color for your popover using the `color` modifier.

<example :component="IPopoverColorVariantsExample" :html="IPopoverColorVariantsExampleHTML"></example>

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

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
