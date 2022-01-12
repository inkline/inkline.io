---
title: Navbar - Inkline
description: A responsive navigation header that includes support for branding, navigation, forms and more.
---

<script setup>
import { manifest } from '@inkline/inkline/components/INavbar/manifest.mjs';
import {
    INavbarBasicExample,
    INavbarCollapseBreakpointExample,
    INavbarCollapseTrueExample,
    INavbarCollapseFalseExample,
    INavbarCollapseManualExample,
    INavbarColorVariantsExample,
    INavbarDropdownExample,
    INavbarNavPlacementExample,
    INavbarSizeVariantsExample,
    INavbarRoutingExample,
    INavbarRoutingActiveExample
} from '@inkline/inkline/components/INavbar/examples/index.mjs';
import { default as INavbarBasicExampleHTML } from '@inkline/inkline/components/INavbar/examples/basic.html?raw';
import { default as INavbarCollapseBreakpointExampleHTML } from '@inkline/inkline/components/INavbar/examples/collapse-breakpoint.html?raw';
import { default as INavbarCollapseTrueExampleHTML } from '@inkline/inkline/components/INavbar/examples/collapse-true.html?raw';
import { default as INavbarCollapseFalseExampleHTML } from '@inkline/inkline/components/INavbar/examples/collapse-false.html?raw';
import { default as INavbarCollapseManualExampleHTML } from '@inkline/inkline/components/INavbar/examples/collapse-manual.html?raw';
import { default as INavbarCollapseManualExampleJS } from '@inkline/inkline/components/INavbar/examples/collapse-manual.mjs?raw';
import { default as INavbarColorVariantsExampleHTML } from '@inkline/inkline/components/INavbar/examples/color-variants.html?raw';
import { default as INavbarDropdownExampleHTML } from '@inkline/inkline/components/INavbar/examples/dropdown.html?raw';
import { default as INavbarNavPlacementExampleHTML } from '@inkline/inkline/components/INavbar/examples/nav-placement.html?raw';
import { default as INavbarSizeVariantsExampleHTML } from '@inkline/inkline/components/INavbar/examples/size-variants.html?raw';
import { default as INavbarRoutingExampleHTML } from '@inkline/inkline/components/INavbar/examples/routing.html?raw';
import { default as INavbarRoutingActiveExampleHTML } from '@inkline/inkline/components/INavbar/examples/routing-active.html?raw';
</script>

# Navbar
## A responsive navigation header that includes support for branding, navigation, forms and more.

### Basic Example
Here’s an example of the basic components included in a  `<i-navbar>` that automatically collapses responsively.

<example :component="INavbarBasicExample" :html="INavbarBasicExampleHTML"></example>

### Sizes
You're able to use the `size` modifier to control the size of your navbar, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example :component="INavbarSizeVariantsExample" :html="INavbarSizeVariantsExampleHTML"></example>

### Variants
Inkline includes two predefined navbar styles. You can set the style of a `<i-navbar>` using the `variant` property, which can have a value of `light` or `dark`. By default, modals use the `light` variant.

<example :component="INavbarColorVariantsExample" :html="INavbarColorVariantsExampleHTML"></example>

### Dropdown
You can use an `<i-dropdown>` component inside the `<i-nav>` component to create a contextual navbar menu. 

<router-link :to="{ name: 'docs-components-dropdown' }">Learn more about the Dropdown component.</router-link>

<example :component="INavbarDropdownExample" :html="INavbarDropdownExampleHTML"></example>

### Nav Placement
You can position the `<i-nav>` component to the `start`, `end`, or `center` of the `<i-navbar-collapsible>` component using flexbox utilities.

<router-link :to="{ name: 'docs-components-nav' }">Learn more about the Nav component.</router-link>

<example :component="INavbarNavPlacementExample" :html="INavbarNavPlacementExampleHTML"></example>

### Navbar Collapsing
You can control at which breakpoint your navbar will collapse at using the `collapse` property. By default, the navbar will collapse on the `md` screen size, but you can use any breakpoint value.

<example :component="INavbarCollapseBreakpointExample" :html="INavbarCollapseBreakpointExampleHTML"></example>

#### Always or Never Collapsible

Besides the breakpoint values, you can use a boolean value to set your navbar to be always collapsible, or never collapsible.

Setting a `collapse` value of `true` will set the navbar to be always collapsible.

<example :component="INavbarCollapseTrueExample" :html="INavbarCollapseTrueExampleHTML"></example>

Setting a `collapse` value of `false` will set the navbar to never be collapsible.

<example :component="INavbarCollapseFalseExample" :html="INavbarCollapseFalseExampleHTML"></example>

#### Manual Collapse
Sometimes, it's necessary to control whether the collapsed Navbar is open or not programmatically. Fort that, you can use the `v-model` directive.

<example :component="INavbarCollapseManualExample" :html="INavbarCollapseManualExampleHTML" :js="INavbarCollapseManualExampleJS"></example>

### Linking and Routing
Nav items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-nav-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the `to` property.

<router-link :to="{ name: 'docs-components-nav' }">Learn more about the Nav Item component.</router-link>

<example :component="INavbarRoutingExample" :html="INavbarRoutingExampleHTML"></example>

#### Active State

You can control the active state of your `<i-nav-item>` using the `active` property. When you provide a `to` property you're converting the component into a `router-link`, therefore you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

<router-link :to="{ name: 'docs-components-nav' }">Learn more about the Nav Item component.</router-link>

<example :component="INavbarRoutingActiveExample" :html="INavbarRoutingActiveExampleHTML"></example>

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
