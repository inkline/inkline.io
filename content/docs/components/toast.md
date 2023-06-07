---
title: Toast - Inkline
description: Learn how to create and manage small, non-intrusive toast notifications that appear on the screen to inform users of a specific event or action.
---

# Toast
## Toast notifications are small, non-intrusive pop-up messages that appear on the screen to inform users of a specific event or action. 

They are typically used for displaying brief messages such as success, warning, or error notifications. Inkline provides a simple and effective way to handle toast notifications through the `<IToastContainer>` component and the `useToast` composable function. 

The toast container component displays toast notifications within your application, in any of the 4 corners, and 4 sides of your screen.

### Setup and Usage

1. Add the `<IToastContainer>` component to your project's root layout (usually `app.vue`). 

```vue
<template>
     <div id="app">
         <!-- Your other layout components -->
         <IToastContainer />
     </div>
</template>
```

2. Use the `useToast()` composable in your components to show or hide toast notifications.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes several predefined toast colors that you can use within your application. You can apply a style using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your toasts, using one of the available sizes: `sm`, `md`, and `lg`.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/size-variants.raw.vue" lang="vue"} -->
::

### Dismissible
You can dismiss toast notification using the `dismissible` property. Dismissible toasts have a dismiss button that can be clicked to manually hide them.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/dismissible"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/dismissible.raw.vue" lang="vue"} -->
::

### Duration
You can dismiss toast notification using the `dismissible` property. Dismissible toasts have a dismiss button that can be clicked to manually hide them.

#### Timed toasts
Timed toasts are designed to automatically disappear after a set duration, providing users with brief, non-intrusive notifications. They're ideal for conveying success messages, updates, or other time-sensitive information that doesn't require prolonged user attention.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/duration-timed"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/duration-timed.raw.vue" lang="vue"} -->
::

#### Sticky toasts
Sticky toasts remain visible on the screen until the user manually dismisses them. These notifications are suitable for important alerts, error messages, or other critical information that requires user acknowledgement to ensure they've been noticed and understood.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/duration-sticky"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/duration-sticky.raw.vue" lang="vue"} -->
::


### Controlled toasts
Controlled toasts offer a higher level of flexibility in managing your notifications. By using unique ids, timed, and sticky durations, you can tailor the behavior of each toast to fit your application's specific needs. 

#### Hide by ID
To individually control the visibility of a toast, assign a unique id property when creating it. By doing so, you can easily target specific toasts and hide them using the `hide()` method. 

This approach is helpful when managing multiple toasts simultaneously and you need to dismiss a particular toast without affecting others.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/hide"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/hide.raw.vue" lang="vue"} -->
::

#### Hide All
In cases where you want to dismiss all displayed toasts at once, the `hideAll()` method comes in handy. This method clears all toasts from the screen, providing a clean slate for subsequent notifications. 

This is particularly useful in situations where you need to reset the notification stack or prepare the interface for a new user action.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/hide-all"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/hide-all.raw.vue" lang="vue"} -->
::

### Rendering
Inkline's toast notifications allow you to fully customize the content displayed, including icons, titles, and messages. By utilizing hoisting, you can render your own custom elements, giving you complete control over the look and feel of your toasts. 

This level of customization ensures that your notifications align seamlessly with your application's design and branding, enhancing the overall user experience.

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/vnode"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/vnode.raw.vue" lang="vue"} -->
::


### Props

##### IToastContainer
::ContentComponentProps{component="IToastContainer"}
::

##### IToast
The component used inside the `<IToastContainer>` component. Any of these props can be used as options when showing a toast notification.

::ContentComponentProps{component="IToast"}
::

### Slots
##### IToast
These slots are used internally for dynamically rendering the toast content.

::ContentComponentSlots{component="IToast"}
::

### Events
##### IToast
These events are used internally to handle the toast notification visibility.

::ContentComponentEvents{component="IToast"}
::

### Design Tokens
##### IToast
::ContentComponentDesignTokens{component="IToast"}
::
