---
title: Alert - Inkline
description: Provide contextual feedback messages for typical user actions using the alert component.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IAlert/manifest';
import { 
    IAlertColorVariantsExample,
    IAlertDismissibleExample,
    IAlertContentExample,
    IAlertIconExample,
    IAlertSizeVariantsExample
} from '@inkline/inkline/components/IAlert/examples';
import { default as IAlertColorVariantsExampleHTML } from '@inkline/inkline/components/IAlert/examples/color-variants.html?raw';
import { default as IAlertDismissibleExampleHTML } from '@inkline/inkline/components/IAlert/examples/dismissible.html?raw';
import { default as IAlertDismissibleExampleJS } from '@inkline/inkline/components/IAlert/examples/dismissible.js?raw';
import { default as IAlertContentExampleHTML } from '@inkline/inkline/components/IAlert/examples/content.html?raw';
import { default as IAlertIconExampleHTML } from '@inkline/inkline/components/IAlert/examples/icon.html?raw';
import { default as IAlertSizeVariantsExampleHTML } from '@inkline/inkline/components/IAlert/examples/size-variants.html?raw';
</script>

# Alert

## Provide contextual feedback messages for typical user actions using the alert component.

### Color Variants

Alerts are contextual feedback messages usable for any length of text, and can have an optional dismiss button. By default, alerts are set to have `width: 100%`, fully spanning the width of the parent container. For choosing the context of the alert, use the `color` property.

<example :component="IAlertColorVariantsExample" :html="IAlertColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your alerts, using one of the available sizes: `sm`, `md`, and `lg`. 

<example :component="IAlertSizeVariantsExample" :html="IAlertSizeVariantsExampleHTML"></example>

### Icon
It's very common for alerts to have an associated icon to help the user understand the significance of the alert. 

<example :component="IAlertIconExample" :html="IAlertIconExampleHTML"></example>

### Content
Your alerts accept any kind of content, giving you the flexibility to create great looking contextual messages.

You can also add an icon to the `<i-alert>` component by providing an `icon` slot. The following example makes use of the bundled Inkline icons, but you can use any icon font that you like:

<example :component="IAlertContentExample" :html="IAlertContentExampleHTML"></example>

### Dismissible
You can dismiss alerts using a combination of the provided `dismissible` property and `v-model` directive. The `dismissible` property will be used to show the dismiss icon. The `v-model` directive will show or hide the alert, resetting dismissed alerts when needed.

<example :component="IAlertDismissibleExample" :html="IAlertDismissibleExampleHTML" :js="IAlertDismissibleExampleJS"></example>

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
