---
title: Nav - Inkline
description: Navs are basic navigation components that provide alignment and spacing between items.
---

<script setup>
import { manifest as navManifest } from '@inkline/inkline/components/INav/manifest.mjs';
import { manifest as navItemManifest } from '@inkline/inkline/components/INav/components/INavItem/manifest.mjs';
import {
    INavBasicExample,
    INavColorVariantsExample,
    INavRoutingExample,
    INavSizeVariantsExample,
    INavStateActiveExample,
    INavVerticalExample
} from '@inkline/inkline/components/INav/examples/index.mjs';
import { default as INavBasicExampleHTML } from '@inkline/inkline/components/INav/examples/basic.html?raw';
import { default as INavColorVariantsExampleHTML } from '@inkline/inkline/components/INav/examples/color-variants.html?raw';
import { default as INavRoutingExampleHTML } from '@inkline/inkline/components/INav/examples/routing.html?raw';
import { default as INavSizeVariantsExampleHTML } from '@inkline/inkline/components/INav/examples/size-variants.html?raw';
import { default as INavStateActiveExampleHTML } from '@inkline/inkline/components/INav/examples/state-active.html?raw';
import { default as INavVerticalExampleHTML } from '@inkline/inkline/components/INav/examples/vertical.html?raw';
</script>

# Nav
## Navs are basic navigation components that provide alignment and spacing between items.

### Example
Navigation components make use of the base `<i-nav>` component for building all types of navigation styles. 

<example :component="INavBasicExample" :html="INavBasicExampleHTML"></example>

Behind the scenes, the `<i-nav-item>` is converted into a `<router-link>` if it has the `:to` property, or a plain `<a>` tag if it has a `href` property. Otherwise, it uses a simple `<div>` tag.

### Vertical Variant
You can stack nav items into a vertical navigation component by setting the `vertical` property on your `<i-nav>`.

<example :component="INavVerticalExample" :html="INavVerticalExampleHTML"></example>

### Color Variants
You're able to use the `color` modifier to control the color of your navs, using one of the available variants: `light`, or `dark`. 

<example :component="INavColorVariantsExample" :html="INavColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your navs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="INavSizeVariantsExample" :html="INavSizeVariantsExampleHTML"></example>

### Linking and Routing
Nav items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-nav-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the `to` property.

<example :component="INavRoutingExample" :html="INavRoutingExampleHTML"></example>

#### Active State

You can control the active state of your `<i-nav-item>` using the `active` property. When you provide a `to` property you're converting the component into a `router-link`, therefore you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

<example :component="INavStateActiveExample" :html="INavStateActiveExampleHTML"></example>

### Configuration

#### Props
Use props to modify the component's design and behavior.

<div class="h5"><code>&lt;i-nav&gt;</code></div>
<props-table :manifest="navManifest"></props-table>

<div class="h5"><code>&lt;i-nav-item&gt;</code></div>
<props-table :manifest="navItemManifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<div class="h5"><code>&lt;i-nav&gt;</code></div>
<slots-table :manifest="navManifest"></slots-table>

<div class="h5"><code>&lt;i-nav-item&gt;</code></div>
<slots-table :manifest="navItemManifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="navManifest" type="local"></css-variables-table>
