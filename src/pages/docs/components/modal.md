---
title: Modal - Inkline
description: Modals are dialogs that can be used for user notifications, lightboxes, or completely custom content.
---

<script setup>
import {
    IModalBasicExample,
    IModalColorVariantsExample,
    IModalSizeVariantsExample
} from '@inkline/inkline/components/IModal/examples';
import { default as IModalBasicExampleHTML } from '@inkline/inkline/components/IModal/examples/basic.html?raw';
import { default as IModalBasicExampleJS } from '@inkline/inkline/components/IModal/examples/basic.js?raw';
import { default as IModalColorVariantsExampleHTML } from '@inkline/inkline/components/IModal/examples/color-variants.html?raw';
import { default as IModalColorVariantsExampleJS } from '@inkline/inkline/components/IModal/examples/color-variants.js?raw';
import { default as IModalSizeVariantsExampleHTML } from '@inkline/inkline/components/IModal/examples/size-variants.html?raw';
import { default as IModalSizeVariantsExampleJS } from '@inkline/inkline/components/IModal/examples/size-variants.js?raw';
</script>



# Modal
## Modals are dialogs that can be used for lightboxes, user notifications, or completely custom content.

### Example
To create a modal, create an element (such as an `<i-button>`) as a trigger and the `v-model` on an `<i-modal>` component to control its visibility. Everything inside the `<i-modal>` is rendered as the modal body. Optionally, you can provide a modal header and footer using `#header` and `#footer` slots.

<example type="modal" :component="IModalBasicExample" :html="IModalBasicExampleHTML" :js="IModalBasicExampleJS"></example>

### Size Variants
You're able to use the `size` property to control the size of your modals, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example type="modal" :component="IModalSizeVariantsExample" :html="IModalSizeVariantsExampleHTML" :js="IModalBasicExampleJS"></example>

### Color Variants
Inkline includes multiple predefined modal styles, each serving its own semantic purpose. You can set the style of a `<i-modal>` using the `color` property. By default, modals use the `light` variant.

<example type="modal" :component="IModalColorVariantsExample" :html="IModalColorVariantsExampleHTML" :js="IModalBasicExampleJS"></example>
