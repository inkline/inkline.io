---
title: Layout - Inkline
description: Build basic layouts using Inkline's built-in layout components. 
---

<script setup>
import { manifest as layoutManifest } from '@inkline/inkline/components/ILayout/manifest.mjs';
import { manifest as layoutHeaderManifest } from '@inkline/inkline/components/ILayout/components/ILayoutHeader/manifest.mjs';
import { manifest as layoutContentManifest } from '@inkline/inkline/components/ILayout/components/ILayoutContent/manifest.mjs';
import { manifest as layoutAsideManifest } from '@inkline/inkline/components/ILayout/components/ILayoutAside/manifest.mjs';
import { manifest as layoutFooterManifest } from '@inkline/inkline/components/ILayout/components/ILayoutFooter/manifest.mjs';
import {
    ILayoutBasicExample,
    ILayoutContentHeaderExample,
    ILayoutContentHeaderFooterExample,
    ILayoutContentWithLeftAsideHeaderFooterExample,
    ILayoutContentWithLeftAndRightAsidesHeaderFooterExample,
    ILayoutContentWithRightAsideHeaderFooterExample,
    ILayoutLeftAndRightAsidesWithContentHeaderFooterExample,
    ILayoutLeftAsideWithContentHeaderFooterExample,
    ILayoutRightAsideWithContentHeaderFooterExample
} from '@inkline/inkline/components/ILayout/examples/index.mjs';
import { default as ILayoutBasicExampleHTML } from '@inkline/inkline/components/ILayout/examples/basic.html?raw';
import { default as ILayoutContentHeaderExampleHTML } from '@inkline/inkline/components/ILayout/examples/content-header.html?raw';
import { default as ILayoutContentHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/content-header-footer.html?raw';
import { default as ILayoutContentWithLeftAsideHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/content-with-left-aside-header-footer.html?raw';
import { default as ILayoutContentWithLeftAndRightAsidesHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/content-with-left-and-right-asides-header-footer.html?raw';
import { default as ILayoutContentWithRightAsideHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/content-with-right-aside-header-footer.html?raw';
import { default as ILayoutLeftAndRightAsidesWithContentHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/left-and-right-asides-with-content-header-footer.html?raw';
import { default as ILayoutLeftAsideWithContentHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/left-aside-with-content-header-footer.html?raw';
import { default as ILayoutRightAsideWithContentHeaderFooterExampleHTML } from '@inkline/inkline/components/ILayout/examples/right-aside-with-content-header-footer.html?raw';
import { default as ILayoutWithAsideExampleCSS } from '@inkline/inkline/components/ILayout/examples/with-aside.scss';
</script>

# Layout

## Build basic layouts using Inkline's built-in layout components. 

The layout components are used for scaffolding the basic structure of the page:
- `<i-layout>` is the main layout wrapper in which `i-layout-header`, `i-layout-aside`, `i-layout-content`, `i-layout-footer`, or another `i-layout` can be nested, and can be placed in any parent container.
- `<i-layout-header>` is the header area that can also serve as navigation
- `<i-layout-aside>` is a container for side sections (usually a side nav).
- `<i-layout-content>` is the main content container
- `<i-layout-footer>` is a container for footer elements

### Common Layouts

The previewed layouts are styled for documentation purposes only. When using the components, they will only 
provide the correct element positioning without colors and paddings.

Layouts are based on flexbox, so please make sure your browser fully supports it. 

<example type="layout" :component="ILayoutBasicExample" :html="ILayoutBasicExampleHTML"></example>

<example type="layout" :component="ILayoutContentHeaderExample" :html="ILayoutContentHeaderExampleHTML"></example>

<example type="layout" :component="ILayoutContentHeaderFooterExample" :html="ILayoutContentHeaderFooterExampleHTML"></example>

<example type="layout" :component="ILayoutContentWithLeftAsideHeaderFooterExample" :html="ILayoutContentWithLeftAsideHeaderFooterExampleHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutContentWithRightAsideHeaderFooterExample" :html="ILayoutContentWithRightAsideHeaderFooterExampleHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutContentWithLeftAndRightAsidesHeaderFooterExample" :html="ILayoutContentWithLeftAndRightAsidesHeaderFooterExampleHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutLeftAsideWithContentHeaderFooterExample" :html="ILayoutLeftAsideWithContentHeaderFooterExampleHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutRightAsideWithContentHeaderFooterExample" :html="ILayoutRightAsideWithContentHeaderFooterExampleHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutLeftAndRightAsidesWithContentHeaderFooterExample" :html="ILayoutLeftAndRightAsidesWithContentHeaderFooterExampleHTML" :css="ILayoutWithAsideExampleCSS"></example>

### Configuration

#### Props
Use props to modify the component's design and behavior.

<div class="h5"><code>&lt;i-layout&gt;</code></div>
<props-table :manifest="layoutManifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<div class="h5"><code>&lt;i-layout&gt;</code></div>
<slots-table :manifest="layoutManifest"></slots-table>

<div class="h5"><code>&lt;i-layout-header&gt;</code></div>
<slots-table :manifest="layoutHeaderManifest"></slots-table>

<div class="h5"><code>&lt;i-layout-content&gt;</code></div>
<slots-table :manifest="layoutContentManifest"></slots-table>

<div class="h5"><code>&lt;i-layout-aside&gt;</code></div>
<slots-table :manifest="layoutAsideManifest"></slots-table>

<div class="h5"><code>&lt;i-layout-footer&gt;</code></div>
<slots-table :manifest="layoutFooterManifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<div class="h5"><code>&lt;i-layout-aside&gt;</code></div>
<css-variables-table :manifest="layoutAsideManifest"></css-variables-table>
