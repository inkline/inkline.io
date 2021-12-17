---
title: Layout - Inkline
description: Build basic layouts using Inkline's built-in layout components. 
---

<script setup>
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
} from '@inkline/inkline/components/ILayout/examples';
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
- `<i-layout>` is the main layout wrapper in which `i-layout-header`, `i-layout-aside`, `i-layout-content`, `i-layout-footer`, or `i-layout` itself can be nested, and can be placed in any parent container.
- `<i-layout-header>` is the header area that can also serve as navigation
- `<i-layout-aside>` is a container for side sections (usually a side nav).
- `<i-layout-content>` is the main content container
- `<i-layout-footer>` is a container for footer elements

### Common Layouts

The previewed layouts are styled for documentation purposes only. When using the components, they will only 
provide the correct element positioning without colors and paddings.

Layouts are based on flexbox, so please make sure your browser fully supports it. 

<example type="layout" :component="ILayoutBasicExample" :html="ILayoutBasicExampleHTML"></example>

<example type="layout" :component="ILayoutContentHeaderExample" :html="ILayoutContentHeaderHTML"></example>

<example type="layout" :component="ILayoutContentHeaderFooterExample" :html="ILayoutContentHeaderFooterHTML"></example>

<example type="layout" :component="ILayoutContentWithLeftAsideHeaderFooterExample" :html="ILayoutContentWithLeftAsideHeaderFooterHTML"></example>

<example type="layout" :component="ILayoutContentWithRightAsideHeaderFooterExample" :html="ILayoutContentWithRightAsideHeaderFooterHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutContentWithLeftAndRightAsidesHeaderFooterExample" :html="ILayoutContentWithLeftAndRightAsidesHeaderFooterHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutLeftAsideWithContentHeaderFooterExample" :html="ILayoutLeftAsideWithContentHeaderFooterHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutRightAsideWithContentHeaderFooterExample" :html="ILayoutRightAsideWithContentHeaderFooterHTML" :css="ILayoutWithAsideExampleCSS"></example>

<example type="layout" :component="ILayoutLeftAndRightAsidesWithContentHeaderFooterExample" :html="ILayoutLeftAndRightAsidesWithContentHeaderFooterHTML" :css="ILayoutWithAsideExampleCSS"></example>
