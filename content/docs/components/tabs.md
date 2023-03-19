---
title: Tabs - Inkline
description: Tab elements are used to switch between multiple sections of related content. 
---

<script setup>
import { manifest } from '@inkline/inkline/components/ITabs/manifest.mjs';
import {
    ITabsBasicExample,
    ITabsColorVariantsExample,
    ITabsSizeVariantsExample,
    ITabsStretchExample
} from '@inkline/inkline/components/ITabs/examples/index.mjs';
import { default as ITabsBasicExampleHTML } from '@inkline/inkline/components/ITabs/examples/basic.html?raw';
import { default as ITabsBasicExampleJS } from '@inkline/inkline/components/ITabs/examples/basic.mjs?raw';
import { default as ITabsColorVariantsExampleHTML } from '@inkline/inkline/components/ITabs/examples/color-variants.html?raw';
import { default as ITabsColorVariantsExampleJS } from '@inkline/inkline/components/ITabs/examples/color-variants.mjs?raw';
import { default as ITabsSizeVariantsExampleHTML } from '@inkline/inkline/components/ITabs/examples/size-variants.html?raw';
import { default as ITabsSizeVariantsExampleJS } from '@inkline/inkline/components/ITabs/examples/size-variants.mjs?raw';
import { default as ITabsStretchExampleHTML } from '@inkline/inkline/components/ITabs/examples/stretch.html?raw';
import { default as ITabsStretchExampleJS } from '@inkline/inkline/components/ITabs/examples/stretch.mjs?raw';
</script>

# Tabs
## Tab elements are used to switch between multiple sections of related content. 

### Example
Switching between tabs will fade-in the content associated to the selected tab. Here are some things to keep in mind:
- A specific tab can be opened by default using the `v-model` directive
- You must to assign a tab `name` to the `<i-tab>` components
- You must reference the chosen tab name using the `for` property of the `<i-tab-title>` components

<example :component="ITabsBasicExample" :html="ITabsBasicExampleHTML" :js="ITabsBasicExampleJS"></example>

When you have a large number of tabs, the tabs header will scroll horizontally.

### Stretch Header
You can have a full width tabs header using the `stretch` property. Make sure you use it only when having a small number of tabs.

<example :component="ITabsStretchExample" :html="ITabsStretchExampleHTML" :js="ITabsStretchExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your tabs, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example :component="ITabsSizeVariantsExample" :html="ITabsSizeVariantsExampleHTML" :js="ITabsSizeVariantsExampleJS"></example>

### Color Variants
Inkline includes basic predefined tabs styles that you can use within your application. You can apply a style using the `color` property.

<example :component="ITabsColorVariantsExample" :html="ITabsColorVariantsExampleHTML" :js="ITabsColorVariantsExampleJS"></example>


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
