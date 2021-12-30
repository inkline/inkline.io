---
title: Tooltip - Inkline
description: Tooltips are useful for conveying information when an user hovers over an element.
---

<script setup>
import { manifest } from '@inkline/inkline/components/ITooltip/manifest';
import {
    ITooltipBasicExample,
    ITooltipColorVariantsExample,
    ITooltipSizeVariantsExample,
    ITooltipFreeformExample,
    ITooltipPlacementExample,
    ITooltipTriggerExample
} from '@inkline/inkline/components/ITooltip/examples';
import { default as ITooltipBasicExampleHTML } from '@inkline/inkline/components/ITooltip/examples/basic.html?raw';
import { default as ITooltipColorVariantsExampleHTML } from '@inkline/inkline/components/ITooltip/examples/color-variants.html?raw';
import { default as ITooltipSizeVariantsExampleHTML } from '@inkline/inkline/components/ITooltip/examples/size-variants.html?raw';
import { default as ITooltipFreeformExampleHTML } from '@inkline/inkline/components/ITooltip/examples/freeform.html?raw';
import { default as ITooltipPlacementExampleHTML } from '@inkline/inkline/components/ITooltip/examples/placement.html?raw';
import { default as ITooltipTriggerExampleHTML } from '@inkline/inkline/components/ITooltip/examples/trigger.html?raw';
import { default as ITooltipTriggerExampleJS } from '@inkline/inkline/components/ITooltip/examples/trigger.js?raw';
</script>

# Tooltip
## Tooltips are useful for conveying information when an user hovers over an element.

### Basic Example
Wrap the trigger element (such as an `<i-button>`) and provide a `<template #body>` inside an `<i-tooltip>` component to create a tooltip.

<example :component="ITooltipBasicExample" :html="ITooltipBasicExampleHTML"></example>

### Placement
Trigger tooltips at the `top`, `bottom`, `left` or `right` of elements by using the `placement` property. 

Each position also has a `-start` or `-end` variant that sets the tooltip to the start or end of the placement instead of centering it. The possible placements are:

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

<example :component="ITooltipPlacementExample" :html="ITooltipPlacementExampleHTML"></example>

### Freeform
Tooltips can contain text of virtually any size. You can control the wrapping and the maximum width of the tooltip by setting `white-space: normal` and a fixed `width` property on the tooltip content.

<example :component="ITooltipFreeformExample" :html="ITooltipFreeformExampleHTML"></example>

### Trigger Type
You can use the `trigger` property to trigger the tooltip on `hover` or `click`. By default, tooltips are triggered on `hover`, a design decision made to improve user experience.

<example :component="ITooltipTriggerExample" :html="ITooltipTriggerExampleHTML" :js="ITooltipTriggerExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your tooltips, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example :component="ITooltipSizeVariantsExample" :html="ITooltipSizeVariantsExampleHTML"></example>

### Color Variants
You can choose a light or dark color for your tooltip using the `color` modifier.

<example :component="ITooltipColorVariantsExample" :html="ITooltipColorVariantsExampleHTML"></example>


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
