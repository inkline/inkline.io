---
title: Sidebar - Inkline
description: A responsive navigation sidebar that includes support for branding, navigation, forms and more.
---

<script setup>
import { manifest } from '@inkline/inkline/components/ISidebar/manifest.mjs';
import {
    ISidebarBasicExample,
    ISidebarCollapseBreakpointExample,
    ISidebarCollapseTrueExample,
    ISidebarCollapseFalseExample,
    ISidebarColorVariantsExample,
    ISidebarCollapsePositionExample,
    ISidebarCollapsibleExample,
    ISidebarSizeVariantsExample,
    ISidebarPlacementExample,
    ISidebarRoutingExample,
    ISidebarRoutingActiveExample
} from '@inkline/inkline/components/ISidebar/examples/index.mjs';
import { default as ISidebarBasicExampleHTML } from '@inkline/inkline/components/ISidebar/examples/basic.html?raw';
import { default as ISidebarBasicExampleJS } from '@inkline/inkline/components/ISidebar/examples/basic.mjs?raw';
import { default as ISidebarCollapseBreakpointExampleHTML } from '@inkline/inkline/components/ISidebar/examples/collapse-breakpoint.html?raw';
import { default as ISidebarCollapseBreakpointExampleJS } from '@inkline/inkline/components/ISidebar/examples/collapse-breakpoint.mjs?raw';
import { default as ISidebarCollapseTrueExampleHTML } from '@inkline/inkline/components/ISidebar/examples/collapse-true.html?raw';
import { default as ISidebarCollapseFalseExampleHTML } from '@inkline/inkline/components/ISidebar/examples/collapse-false.html?raw';
import { default as ISidebarColorVariantsExampleHTML } from '@inkline/inkline/components/ISidebar/examples/color-variants.html?raw';
import { default as ISidebarColorVariantsExampleJS } from '@inkline/inkline/components/ISidebar/examples/color-variants.mjs?raw';
import { default as ISidebarCollapsePositionExampleHTML } from '@inkline/inkline/components/ISidebar/examples/collapse-position.html?raw';
import { default as ISidebarCollapsePositionExampleJS } from '@inkline/inkline/components/ISidebar/examples/collapse-position.mjs?raw';
import { default as ISidebarCollapsibleExampleHTML } from '@inkline/inkline/components/ISidebar/examples/collapsible.html?raw';
import { default as ISidebarCollapsibleExampleJS } from '@inkline/inkline/components/ISidebar/examples/collapsible.mjs?raw';
import { default as ISidebarSizeVariantsExampleHTML } from '@inkline/inkline/components/ISidebar/examples/size-variants.html?raw';
import { default as ISidebarSizeVariantsExampleJS } from '@inkline/inkline/components/ISidebar/examples/size-variants.mjs?raw';
import { default as ISidebarPlacementExampleHTML } from '@inkline/inkline/components/ISidebar/examples/placement.html?raw';
import { default as ISidebarPlacementExampleJS } from '@inkline/inkline/components/ISidebar/examples/placement.mjs?raw';
import { default as ISidebarRoutingExampleHTML } from '@inkline/inkline/components/ISidebar/examples/routing.html?raw';
import { default as ISidebarRoutingExampleJS } from '@inkline/inkline/components/ISidebar/examples/routing.mjs?raw';
import { default as ISidebarRoutingActiveExampleHTML } from '@inkline/inkline/components/ISidebar/examples/routing-active.html?raw';
import { default as ISidebarRoutingActiveExampleJS } from '@inkline/inkline/components/ISidebar/examples/routing-active.mjs?raw';
</script>


# Sidebar
## A responsive navigation sidebar that includes support for branding, navigation, forms and more.

### Basic Example
Here’s an example on how to use the `<i-sidebar>` inside a dashboard layout. The sidebar automatically collapses responsively.

<example type="sidebar" :component="ISidebarBasicExample" :html="ISidebarBasicExampleHTML" :js="ISidebarBasicExampleJS"></example>

### Sizes
You're able to use the `size` modifier to control the size of your sidebar, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example type="sidebar" :component="ISidebarSizeVariantsExample" :html="ISidebarSizeVariantsExampleHTML" :js="ISidebarSizeVariantsExampleJS"></example>

### Variants
Inkline includes two predefined sidebar styles. You can set the style of a `<i-sidebar>` using the `variant` property, which can have a value of `light` or `dark`. By default, modals use the `light` variant.

<example type="sidebar" :component="ISidebarColorVariantsExample" :html="ISidebarColorVariantsExampleHTML" :js="ISidebarColorVariantsExampleJS"></example>

### Placement
You can easily place your sidebar on the `left` or `right` side of a layout by setting the `placement` property . By default, sidebars are on the left side.

<example type="sidebar" :component="ISidebarPlacementExample" :html="ISidebarPlacementExampleHTML" :js="ISidebarPlacementExampleJS"></example>

### Collapsible Menu
You can use an `<i-collapsible>` component with one or more `<i-collapsible-item>` components inside the `<i-nav>` component to create a contextual sidebar menu. 

<router-link :to="{ name: 'docs-components-collapsible' }">Learn more about the Collapsible component.</router-link>

<example type="sidebar" :component="ISidebarCollapsibleExample" :html="ISidebarCollapsibleExampleHTML" :js="ISidebarCollapsibleExampleJS"></example>

### Sidebar Collapsing
You can control at which breakpoint your sidebar will collapse at using the `collapse` property. By default, the sidebar will collapse on the `md` screen size, but you can use any breakpoint value.

<example type="sidebar" :component="ISidebarCollapseBreakpointExample" :html="ISidebarCollapseBreakpointExampleHTML" :js="ISidebarCollapseBreakpointExampleJS"></example>

#### Always or Never Collapsible

Besides the breakpoint values, you can use a boolean value to set your sidebar to be always collapsible, or never collapsible.

Setting a `collapse` value of `true` will set the sidebar to be always collapsible.

<example type="sidebar" :component="ISidebarCollapseTrueExample" :html="ISidebarCollapseTrueExampleHTML"></example>

Setting a `collapse` value of `false` will set the sidebar to never be collapsible.

<example type="sidebar" :component="ISidebarCollapseFalseExample" :html="ISidebarCollapseFalseExampleHTML"></example>

### Collapse Position
You can set the collapsed sidebar position to `relative`, `absolute` or `fixed` using the `collapse-position` property.

This property allows you to control whether the sidebar will affect the content that it is next to it when reaching the collapse breakpoint.

<example type="sidebar" :component="ISidebarCollapsePositionExample" :html="ISidebarCollapsePositionExampleHTML" :js="ISidebarCollapsePositionExampleJS"></example>

### Linking and Routing
Nav items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-nav-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the `to` property.

<router-link :to="{ name: 'docs-components-nav' }">Learn more about the Nav Item component.</router-link>

<example type="sidebar" :component="ISidebarRoutingExample" :html="ISidebarRoutingExampleHTML"></example>

#### Active State

You can control the active state of your `<i-nav-item>` using the `active` property. When you provide a `to` property you're converting the component into a `router-link`, therefore you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

<router-link :to="{ name: 'docs-components-nav' }">Learn more about the Nav Item component.</router-link>

<example type="sidebar" :component="ISidebarRoutingActiveExample" :html="ISidebarRoutingActiveExampleHTML"></example>


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
