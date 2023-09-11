---
title: Modal - Inkline
description: Modals are dialogs that can be used for user notifications, lightboxes, or completely custom content.
---

# Modal
## Modals are dialogs that can be used for lightboxes, user notifications, or completely custom content.

::ContentAlert
To create a modal programmatically, you can use the [Modal Service](/docs/services/modal).
::

To create a modal, create an a trigger element (such as a button), and use the modal component's `v-model` binding to control its visibility. 

Everything inside the `<IModal>` is rendered as the modal body. Optionally, you can provide a modal header and footer using `#header` and `#footer` slots.


::ContentTabs
#preview
:ContentPreview{src="/components/IModal/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModal/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes multiple predefined modal styles, each serving its own semantic purpose. You can set the style of a `<IModal>` using the `color` property. By default, modals use the `light` variant.

::ContentTabs
#preview
:ContentPreview{src="/components/IModal/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModal/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your modals, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IModal/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModal/examples/size-variants.raw.vue" lang="vue"} -->
::

### Icon
You can easily add an icon to your modal header using the `icon` slot or property. The icon will be displayed on the left side of the body.

::ContentTabs
#preview
:ContentPreview{src="/components/IModal/examples/icon"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModal/examples/icon.raw.vue" lang="vue"} -->
::

### Fullscreen
You can set the `fullscreen` property to `true` to display the modal as a fullscreen overlay.

::ContentTabs
#preview
:ContentPreview{src="/components/IModal/examples/fullscreen"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModal/examples/fullscreen.raw.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="IModal"}
::

### Slots
::ContentComponentSlots{component="IModal"}
::

### Events
::ContentComponentEvents{component="IModal"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IModal"}
::
