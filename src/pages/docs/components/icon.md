---
title: Icon - Inkline
description: Inkline comes bundled with a lightweight icon component that provides you with the most commonly used icons.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IIcon/manifest.mjs';
import {
    IIconIconsExample,
    IIconColorVariantsExample,
    IIconSizeVariantsExample
} from '@inkline/inkline/components/IIcon/examples/index.mjs';
import { default as IIconColorVariantsExampleHTML } from '@inkline/inkline/components/IIcon/examples/color-variants.html?raw';
import { default as IIconIconsExampleHTML } from '@inkline/inkline/components/IIcon/examples/icons.html?raw';
import { default as IIconSizeVariantsExampleHTML } from '@inkline/inkline/components/IIcon/examples/size-variants.html?raw';
</script>

# Icon

## Inkline comes bundled with a lightweight icon component that provides you with the most commonly used icons.

### Basic Example

Here’s an example of the basic icons included with the `<i-icon>` component.

<example type="icon" :component="IIconIconsExample" :html="IIconIconsExampleHTML"></example>

### Color Variants
You can use text color utility classes to set the color of Inkline's icons.

<example type="icon" :component="IIconColorVariantsExample" :html="IIconColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your icon, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

You can also use text size utility classes to set the size of Inkline's icons.

<example type="icon" :component="IIconSizeVariantsExample" :html="IIconSizeVariantsExampleHTML"></example>

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
