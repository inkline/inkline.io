---
title: Dropdown - Inkline
description: Dropdowns are contextual overlays toggled through clicking or hovering, usually used for displaying a list of links.
---

<script setup>
import {
    IDropdownBasicExample,
    IDropdownColorVariantsExample,
    IDropdownHeaderFooterExample,
    IDropdownSizeVariantsExample,
    IDropdownFreeformExample,
    IDropdownNestedExample,
    IDropdownPlacementExample,
    IDropdownRoutingExample,
    IDropdownStateActiveExample,
    IDropdownTriggerExample
} from '@inkline/inkline/components/IDropdown/examples';
import { default as IDropdownBasicExampleHTML } from '@inkline/inkline/components/IDropdown/examples/basic.html?raw';
import { default as IDropdownColorVariantsExampleHTML } from '@inkline/inkline/components/IDropdown/examples/color-variants.html?raw';
import { default as IDropdownHeaderFooterExampleHTML } from '@inkline/inkline/components/IDropdown/examples/header-footer.html?raw';
import { default as IDropdownSizeVariantsExampleHTML } from '@inkline/inkline/components/IDropdown/examples/size-variants.html?raw';
import { default as IDropdownFreeformExampleHTML } from '@inkline/inkline/components/IDropdown/examples/freeform.html?raw';
import { default as IDropdownNestedExampleHTML } from '@inkline/inkline/components/IDropdown/examples/nested.html?raw';
import { default as IDropdownPlacementExampleHTML } from '@inkline/inkline/components/IDropdown/examples/placement.html?raw';
import { default as IDropdownRoutingExampleHTML } from '@inkline/inkline/components/IDropdown/examples/routing.html?raw';
import { default as IDropdownStateActiveExampleHTML } from '@inkline/inkline/components/IDropdown/examples/state-active.html?raw';
import { default as IDropdownTriggerExampleHTML } from '@inkline/inkline/components/IDropdown/examples/trigger.html?raw';
import { default as IDropdownTriggerExampleJS } from '@inkline/inkline/components/IDropdown/examples/trigger.js?raw';
</script>

# Dropdown
## Dropdowns are contextual overlays toggled through clicking or hovering, usually used for displaying a list of links.

### Basic Example
Wrap the trigger element (such as an `<i-button>`) and provide a `<template #body>` inside an `<i-dropdown>` component to create a dropdown.

<example :component="IDropdownBasicExample" :html="IDropdownBasicExampleHTML"></example>

### Placement
Trigger dropdowns at the `top`, `bottom`, `left` or `right` of elements by using the `placement` property. 

Each position also has a `-start` or `-end` variant that sets the dropdown to the start or end of the placement instead of centering it. The possible placements are:

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

<example :component="IDropdownPlacementExample" :html="IDropdownPlacementExampleHTML"></example>

### Trigger Type
You can use the `trigger` property to trigger the dropdown on `hover` or `click`. By default, dropdowns are triggered on `hover`, a design decision made to improve user experience.

<example :component="IDropdownTriggerExample" :html="IDropdownTriggerExampleHTML" :js="IDropdownTriggerExampleJS"></example>

### Freeform Dropdown
You're not required to use any dropdown-specific components inside of the `<i-dropdown>` body. You can add your own HTML markup without any issues. You might need additional size styles to control the content width.

<example :component="IDropdownFreeformExample" :html="IDropdownFreeformExampleHTML"></example>

### Header and Footer
You can provide an optional header or footer for your dropdown menus using slots.

<example :component="IDropdownHeaderFooterExample" :html="IDropdownHeaderFooterExampleHTML"></example>

### Linking and Routing
Dropdown items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-dropdown-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the to property.

<example :component="IDropdownRoutingExample" :html="IDropdownRoutingExampleHTML"></example>

#### Active State

You can control the active state of your `<i-dropdown-item>` using the `active` property. If you're providing a `:to` property, converting it into a `router-link`, you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

<example :component="IDropdownStateActiveExample" :html="IDropdownStateActiveExampleHTML"></example>

### Size Variants
You're able to use the `size` property to control the size of your dropdowns, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example :component="IDropdownSizeVariantsExample" :html="IDropdownSizeVariantsExampleHTML"></example>

### Color Variants
You can choose a light or dark color for your dropdown using the `color` modifier.

<example :component="IDropdownColorVariantsExample" :html="IDropdownColorVariantsExampleHTML"></example>

### Nested Dropdowns
Inkline allows you to have virtually infinite recursive dropdown submenus structure by defining a `<i-dropdown>` inside of another dropdown's body. This awesome feature gives you great design flexibility.

<example :component="IDropdownNestedExample" :html="IDropdownNestedExampleHTML"></example>
