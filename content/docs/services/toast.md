---
title: Toast Service - Inkline
description: Learn how to create and manage small, non-intrusive toast notifications that appear on the screen to inform users of a specific event or action.
additionalProps: 
    -   name: id
        default: uid()
        type: String
        description: The unique identifier of the toast instance, used together with the toast service
---

# Toast Service
## Create and manage small, non-intrusive toast notifications that appear on the screen to inform users of a specific event or action.

The Toast Service allows you to programmatically display brief messages such as success, warning, or error notifications. It provides a composable `useToast()` function that returns methods for showing, hiding, and hiding all toasts.

Inkline automatically injects an `<IToastContainer>` component within your application, used to display on-demand toast notifications in any of the 4 corners, and 4 sides of your screen, using the toast service.

### Usage
Use the `useToast()` composable in your components to show or hide toast notifications.

- `show({ id, ...props })` - Shows a toast with the provided options
- `hide({ id })` - Hides a toast with the provided id
- `hideAll()` - Hides all currently displayed toasts

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

### Position
You're able to use the `position` modifier to control the position of your toasts, using one of the available positions: 
- `top-left`
- `top`
- `top-right`
- `left`
- `bottom-right`
- `bottom`
- `bottom-left`
- `right`

::ContentTabs
#preview
:ContentPreview{src="/components/IToastContainer/examples/position"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IToastContainer/examples/position.raw.vue" lang="vue"} -->
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
::ContentComponentProps{component="IToast" :additionalProps="additionalProps"}
::

### Slots
These slots are used internally for dynamically rendering the toast content.

::ContentComponentSlots{component="IToast"}
::

### Events
These events are used internally to handle the toast notification visibility.

::ContentComponentEvents{component="IToast"}
::

### Design Tokens
#### IToastContainer
::ContentComponentDesignTokens{component="IToastContainer"}
::
#### IToast
::ContentComponentDesignTokens{component="IToast"}
::
