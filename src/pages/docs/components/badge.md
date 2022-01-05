---
title: Badge - Inkline
description: Documentation and examples for badges, a small component used for counting and labeling.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IBadge/manifest.mjs';
import {
    IBadgeBasicExample,
    IBadgeColorVariantsExample,
    IBadgeHeadingExample,
    IBadgeSizeVariantsExample
} from '@inkline/inkline/components/IBadge/examples/index.mjs';
import { default as IBadgeBasicExampleHTML } from '@inkline/inkline/components/IBadge/examples/basic.html?raw';
import { default as IBadgeColorVariantsExampleHTML } from '@inkline/inkline/components/IBadge/examples/color-variants.html?raw';
import { default as IBadgeHeadingExampleHTML } from '@inkline/inkline/components/IBadge/examples/heading.html?raw';
import { default as IBadgeSizeVariantsExampleHTML } from '@inkline/inkline/components/IBadge/examples/size-variants.html?raw';
</script>

# Badge

## Documentation and examples for badges, a small component used for counting and labeling.

Badges are simple components used for counting, notifications, and labeling items. They're small, colorful and can easily draw attention to them.

<example :component="IBadgeBasicExample" :html="IBadgeBasicExampleHTML"></example>

### Color Variants

Inkline includes several predefined badge color variants, each serving its own semantic purpose, which you can control using the `color` property.

<example :component="IBadgeColorVariantsExample" :html="IBadgeColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your badges, using one of the available sizes: `sm`, `md`, and `lg`. 

<example :component="IBadgeSizeVariantsExample" :html="IBadgeSizeVariantsExampleHTML"></example>

### Relative Size

Badges always match the size of the immediate parent element by using relative font sizing and `em` units.

<example :component="IBadgeHeadingExample" :html="IBadgeHeadingExampleHTML"></example>


### Configuration

#### Props
Use props to modify the component's design and behavior.

<props-table :manifest="manifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<slots-table :manifest="manifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
