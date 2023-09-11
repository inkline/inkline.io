---
title: Modal Service - Inkline
description: Learn how to create and manage dialogs that can be used for user dialogs, lightboxes, or completely custom content.
additionalProps:
    -   name: id
        default: uid()
        type: String
        description: The unique identifier of the modal instance, used together with the modal service
---

# Modal Service
## Create and manage dialogs that can be used for user dialogs, lightboxes, or completely custom content.

The Modal Service allows you to programmatically control modals in your application. It provides a composable `useModal()` function that returns methods for showing, hiding, and hiding all modals.

Inkline automatically injects an `<IModalContainer>` component within your application, used to display on-demand modals using the modal service.


### Usage
Use the `useModal()` composable in your components to show or hide modal dialogs.

- `show({ id, ...props })` - Shows a modal with the provided options
- `hide({ id })` - Hides a modal with the provided id
- `hideAll()` - Hides all currently displayed modals.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes several predefined modal colors that you can use within your application. You can apply a style using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your modals, using one of the available sizes: `sm`, `md`, and `lg`.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/size-variants.raw.vue" lang="vue"} -->
::

### Controlled modals
Controlled modals offer a higher level of flexibility in managing your dialogs. By using unique ids, timed, and sticky durations, you can tailor the behavior of each modal to fit your application's specific needs. 

#### Hide by ID
To individually control the visibility of a modal, assign a unique id property when creating it. By doing so, you can easily target specific modals and hide them using the `hide()` method. 

This approach is helpful when managing multiple modals simultaneously, and you need to dismiss a particular modal without affecting others.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/hide"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/hide.raw.vue" lang="vue"} -->
::

#### Hide All
In cases where you want to dismiss all displayed modals at once, the `hideAll()` method comes in handy. This method clears all modals from the screen, providing a clean slate for subsequent dialogs. 

This is particularly useful in situations where you need to reset the dialog stack or prepare the interface for a new user action.

### Rendering
Inkline's modal dialogs allow you to fully customize the content displayed, including icons, titles, and messages. By utilizing hoisting, you can render your own custom elements, giving you complete control over the look and feel of your modals. 

This level of customization ensures that your dialogs align seamlessly with your application's design and branding, enhancing the overall user experience.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/vnode"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/vnode.raw.vue" lang="vue"} -->
::

### Built-in Modals
Inkline provides several built-in modals that you can use to display common dialogs in your application. These modals are designed to be used with the modal service, allowing you to easily handle them as promises.

#### Alert
The alert modal is a simple dialog that displays a message and an optional title. It's useful for displaying information to the user without requiring any action.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/alert"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/alert.raw.vue" lang="vue"} -->
::

#### Confirm
The confirm modal is a dialog that displays a message and an optional title, along with a confirmation and cancel button. It's useful for asking the user to confirm or cancel an action.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/confirm"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/confirm.raw.vue" lang="vue"} -->
::

#### Prompt
The prompt modal is a dialog that displays a message and an optional title, along with a text input and a confirmation and cancel button. It's useful for asking the user to confirm or cancel an action, along with providing additional information.

::ContentTabs
#preview
:ContentPreview{src="/components/IModalContainer/examples/prompt"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IModalContainer/examples/prompt.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IModal" :additionalProps="additionalProps"}
::

### Slots
These slots are used internally for dynamically rendering the modal content.

::ContentComponentSlots{component="IModal"}
::

### Events
These events are used internally to handle the modal dialog visibility.

::ContentComponentEvents{component="IModal"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IModal"}
::
