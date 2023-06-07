---
title: Alert - Inkline
description: Provide contextual feedback messages for typical user actions using the alert component.
---

# Alert
## Provide contextual feedback messages for typical user actions using the alert component.

### Color Variants
Alerts are contextual feedback messages usable for any length of text, and can have an optional dismiss button. For choosing the context of the alert, use the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IAlert/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IAlert/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your alerts, using one of the available sizes: `sm`, `md`, and `lg`.

::ContentTabs
#preview
:ContentPreview{src="/components/IAlert/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IAlert/examples/size-variants.raw.vue" lang="vue"} -->
::

### Icon
It's very common for alerts to have an associated icon to help the user understand the significance of the alert.

::ContentTabs
#preview
:ContentPreview{src="/components/IAlert/examples/icon"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IAlert/examples/icon.raw.vue" lang="vue"} -->
::

### Content
Your alerts accept any kind of content, giving you the flexibility to create great looking contextual messages.

You can also add an icon to the `<IAlert>` component by providing an `icon` slot. The following example makes use of the bundled Inkline icons, but you can use any icon font that you like:

::ContentTabs
#preview
:ContentPreview{src="/components/IAlert/examples/content"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IAlert/examples/content.raw.vue" lang="vue"} -->
::

### Dismissible
You can dismiss alerts using a combination of the provided `dismissible` property and `v-model` directive. The `dismissible` property will be used to show the dismiss icon. The `v-model` directive will show or hide the alert, resetting dismissed alerts when needed.

::ContentTabs
#preview
:ContentPreview{src="/components/IAlert/examples/dismissible"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IAlert/examples/dismissible.raw.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="IAlert"}
::

### Slots
::ContentComponentSlots{component="IAlert"}
::

### Events
::ContentComponentEvents{component="IAlert"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IAlert"}
::
