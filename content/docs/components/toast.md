---
title: Toast - Inkline
description: Toasts are small, non-intrusive notifications that appear on the screen to inform users of a specific event or action.
---

# Toast
## Toasts are small, non-intrusive notifications that appear on the screen to inform users of a specific event or action.

Toasts are designed to be brief and concise, providing users with relevant information without interrupting their workflow.

::ContentAlert{ color="warning" }
To create a toast notification programmatically, please use the [Toast Service](/docs/services/toast). This documentation page exists for component reference purposes only.
::

### Color Variants
Inkline includes several predefined toast colors that you can use within your application. You can apply a style using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IToast/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToast/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your toasts, using one of the available sizes: `sm`, `md`, and `lg`.

::ContentTabs
#preview
:ContentPreview{src="/components/IToast/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToast/examples/size-variants.raw.vue" lang="vue"} -->
::

### Dismissible
You can dismiss toast notification using the `dismissible` property. Dismissible toasts have a dismiss button that can be clicked to manually hide them.

::ContentTabs
#preview
:ContentPreview{src="/components/IToast/examples/dismissible"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToast/examples/dismissible.raw.vue" lang="vue"} -->
::

### Rendering
Inkline's toast notifications allow you to fully customize the content displayed, including icons, titles, and messages. By utilizing hoisting, you can render your own custom elements, giving you complete control over the look and feel of your toasts. 

This level of customization ensures that your notifications align seamlessly with your application's design and branding, enhancing the overall user experience.

::ContentTabs
#preview
:ContentPreview{src="/components/IToast/examples/vnode"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToast/examples/vnode.raw.vue" lang="vue"} -->
::


### Props
#### IToastContainer
::ContentComponentProps{component="IToastContainer"}
::
#### IToast
::ContentComponentProps{component="IToast"}
::

### Slots
#### IToast
::ContentComponentSlots{component="IToast"}
::

### Events
#### IToast
::ContentComponentEvents{component="IToast"}
::

### Design Tokens
#### IToastContainer
::ContentComponentDesignTokens{component="IToastContainer"}
::
#### IToast
::ContentComponentDesignTokens{component="IToast"}
::
