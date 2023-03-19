---
title: Hamburger Menu - Inkline
description: Inkline's hamburger menu is used to control opening and closing elements using various animation options.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IHamburgerMenu/manifest.mjs';
import {
    IHamburgerMenuAnimationExample,
    IHamburgerMenuBasicExample,
    IHamburgerMenuColorVariantsExample
} from '@inkline/inkline/components/IHamburgerMenu/examples/index.mjs';
import { default as IHamburgerMenuAnimationExampleHTML } from '@inkline/inkline/components/IHamburgerMenu/examples/animation.html?raw';
import { default as IHamburgerMenuAnimationExampleJS } from '@inkline/inkline/components/IHamburgerMenu/examples/animation.mjs?raw';
import { default as IHamburgerMenuBasicExampleHTML } from '@inkline/inkline/components/IHamburgerMenu/examples/basic.html?raw';
import { default as IHamburgerMenuBasicExampleJS } from '@inkline/inkline/components/IHamburgerMenu/examples/basic.mjs?raw';
import { default as IHamburgerMenuColorVariantsExampleHTML } from '@inkline/inkline/components/IHamburgerMenu/examples/color-variants.html?raw';
import { default as IHamburgerMenuColorVariantsExampleJS } from '@inkline/inkline/components/IHamburgerMenu/examples/color-variants.mjs?raw';
</script>

# Hamburger Menu

## Inkline's hamburger menu is used to control opening and closing elements using various animation options.

### Basic Example
Here’s an example of a basic use case for the `<i-hamburger-menu>` component. This component is usually used together with the <router-link :to="{ name: 'docs-components-navbar' }">Navbar Component</router-link> and <router-link to="{ name: 'docs-components-sidebar' }">Sidebar Component</router-link> to control their collapsed state.

<example :component="IHamburgerMenuBasicExample" :html="IHamburgerMenuBasicExampleHTML" :js="IHamburgerMenuBasicExampleJS"></example>

### Color Variants
You can set the style of a `<i-hamburger-menu>` using the `color` property, which can have a value of `light` or `dark`. By default, hamburger menus have the `light` color variant.

<example :component="IHamburgerMenuColorVariantsExample" :html="IHamburgerMenuColorVariantsExampleHTML" :js="IHamburgerMenuColorVariantsExampleJS"></example>

### Animation
The `<i-hamburger-menu>` menu component supports various closed state animations. You can choose a closed state icon using the `animation` property.

<example :component="IHamburgerMenuAnimationExample" :html="IHamburgerMenuAnimationExampleHTML" :js="IHamburgerMenuAnimationExampleJS"></example>

### Configuration

#### Props
Use props to modify the component's design and behavior.

<props-table :manifest="manifest"></props-table>

#### Events
Use events to react to something happening inside the component.

<events-table :manifest="manifest"></events-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
