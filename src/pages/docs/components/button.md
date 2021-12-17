---
title: Button - Inkline
description: One of the core building blocks of an application. Buttons can represent actions, links, or routes within the application.
---

<script setup>
import {
    IButtonBasicExample,
    IButtonBlockExample,
    IButtonTagExample,
    IButtonTypeExample,
    IButtonCircleExample,
    IButtonColorVariantsExample,
    IButtonIconExample,
    IButtonLinkExample,
    IButtonOutlineExample,
    IButtonRoutingExample,
    IButtonSizeVariantsExample,
    IButtonSocialColorVariantsExample,
    IButtonStateActiveExample,
    IButtonStateDisabledExample,
    IButtonStateLoadingExample
} from '@inkline/inkline/components/IButton/examples';
import { default as IButtonBasicExampleHTML } from '@inkline/inkline/components/IButton/examples/basic.html?raw';
import { default as IButtonBlockExampleHTML } from '@inkline/inkline/components/IButton/examples/block.html?raw';
import { default as IButtonTagExampleHTML } from '@inkline/inkline/components/IButton/examples/button-tag.html?raw';
import { default as IButtonTypeExampleHTML } from '@inkline/inkline/components/IButton/examples/button-type.html?raw';
import { default as IButtonCircleExampleHTML } from '@inkline/inkline/components/IButton/examples/circle.html?raw';
import { default as IButtonColorVariantsExampleHTML } from '@inkline/inkline/components/IButton/examples/color-variants.html?raw';
import { default as IButtonIconExampleHTML } from '@inkline/inkline/components/IButton/examples/icon.html?raw';
import { default as IButtonLinkExampleHTML } from '@inkline/inkline/components/IButton/examples/link.html?raw';
import { default as IButtonOutlineExampleHTML } from '@inkline/inkline/components/IButton/examples/outline.html?raw';
import { default as IButtonRoutingExampleHTML } from '@inkline/inkline/components/IButton/examples/routing.html?raw';
import { default as IButtonSizeVariantsExampleHTML } from '@inkline/inkline/components/IButton/examples/size-variants.html?raw';
import { default as IButtonSocialColorVariantsExampleHTML } from '@inkline/inkline/components/IButton/examples/social-color-variants.html?raw';
import { default as IButtonStateActiveExampleHTML } from '@inkline/inkline/components/IButton/examples/state-active.html?raw';
import { default as IButtonStateDisabledExampleHTML } from '@inkline/inkline/components/IButton/examples/state-disabled.html?raw';
import { default as IButtonStateLoadingExampleHTML } from '@inkline/inkline/components/IButton/examples/state-loading.html?raw';
</script>

# Button

## One of the core building blocks of an application. Buttons can represent actions, links, or routes within the application.

Inkline provides you with custom button styles with support for multiple colors, sizes, states, and more. Buttons can represent actions, links, or routes within the application. Inkline provides out of the box support for all scenarios.

<example :component="IButtonBasicExample" :html="IButtonBasicExampleHTML"></example>

### Color Variants
Inkline includes several predefined button colors, each serving its own semantic purpose, with a few extra color variants available for more control.

<example :component="IButtonColorVariantsExample" :html="IButtonColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your buttons, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="IButtonSizeVariantsExample" :html="IButtonSizeVariantsExampleHTML"></example>

### Button Type
The `<i-button>` component creates a `<button>` element behind the scenes. Therefore, you can assign a type to it, just like with the `<button>` element.

<example :component="IButtonTypeExample" :html="IButtonTypeExampleHTML"></example>

If you need to change the `<button>` node used to render the component, you can use the `tag` property to change it.

<example :component="IButtonTagExample" :html="IButtonTagExampleHTML"></example>

### Outline Variant
Sometimes, buttons should not stand out so much. Replace the default look and feel using the `outline` property to remove the background on any button unless you interact with it.

<example :component="IButtonOutlineExample" :html="IButtonOutlineExampleHTML"></example>

### Link Variant
You can create link buttons that look like normal links. Use the `color` property to set the color of the link.

<example :component="IButtonLinkExample" :html="IButtonLinkExampleHTML"></example>

### Circle Variant
Circle buttons are very common when working with icons. You can transform your button into a circle using the `circle` property. You're also able to use the `size` modifier to control the size of your circle buttons. 

<example :component="IButtonCircleExample" :html="IButtonCircleExampleHTML"></example>

### Block Variant
You can create block level buttons that span the full width of a parent by adding the `block` property.

<example :component="IButtonBlockExample" :html="IButtonBlockExampleHTML"></example>

### Social Color Variants
You can use variants for the most common social login buttons out of the box. The examples below make use of the `block` modifier to have them full-width.

<example :component="IButtonSocialColorVariantsExample" :html="IButtonSocialColorVariantsExampleHTML"></example>

### Button Icon
You can easily use the `i-button` component together with any icon component (i.e. FontAwesome, IcoMoon), including the <router-link :to="{ name: 'docs-components-icon' }">Icon Component</router-link>.

<example :component="IButtonIconExample" :html="IButtonIconExampleHTML"></example>

### Active State
Buttons will appear pressed when active. You can force a button to have an active appearance with the `active` property (this will also add the `aria-pressed="true"` accessibility attribute).

<example :component="IButtonStateActiveExample" :html="IButtonStateActiveExampleHTML"></example>

### Disabled State
You can make buttons look inactive or disabled by adding the `disabled` boolean property.

<example :component="IButtonStateDisabledExample" :html="IButtonStateDisabledExampleHTML"></example>

### Loading State
You can add a loading state to the button by setting the `loading` boolean property. 

By default, the button will display a standard Inkline Loader Component. You can provide custom loading state by providing a `loading` slot.

<example :component="IButtonStateLoadingExample" :html="IButtonStateLoadingExampleHTML"></example>

### Linking and Routing
Buttons will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-button>` component is also integrated with the [Vue Router](https://router.vuejs.org) plugin and will be converted to a `<router-link>` or `<nuxt-link>` when using the `to` property.

<example :component="IButtonRoutingExample" :html="IButtonRoutingExampleHTML"></example>
