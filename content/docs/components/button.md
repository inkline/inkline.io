---
title: Button
description: Buttons can represent actions, links, or routes within the application and represent one of the core building blocks of an application. 
---

# Button
## Buttons can represent actions, links, or routes within the application and represent one of the core building blocks of an application.

Inkline provides you with custom button styles with support for multiple colors, sizes, states, and more. Buttons can represent actions, links, or routes within the application. Inkline provides out of the box support for all scenarios.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes several predefined button colors, each serving its own semantic purpose, with a few extra color variants available for more control.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/color-variants.raw.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` modifier to control the size of your buttons, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/size-variants.raw.vue" lang="vue"} -->
::


### Button Type
The `<IButton>` component creates a `<button>` element behind the scenes. Therefore, you can assign a type to it, just like with the `<button>` element.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/button-type"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/button-type.raw.vue" lang="vue"} -->
::

If you need to change the `<button>` node used to render the component, you can use the `tag` property to change it.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/button-tag"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/button-tag.raw.vue" lang="vue"} -->
::


### Outline Variant
Sometimes, buttons should not stand out so much. Replace the default look and feel using the `outline` property to remove the background on any button unless you interact with it.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/outline"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/outline.raw.vue" lang="vue"} -->
::


### Link Variant
You can create link buttons that look like normal links. Use the `color` property to set the color of the link.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/link"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/link.raw.vue" lang="vue"} -->
::

### Circle Variant
Circle buttons are very common when working with icons. You can transform your button into a circle using the `circle` property. You're also able to use the `size` modifier to control the size of your circle buttons. 

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/circle"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/circle.raw.vue" lang="vue"} -->
::

### Block Variant
You can create block level buttons that span the full width of a parent by adding the `block` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/block"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/block.raw.vue" lang="vue"} -->
::


### Button Icon
You can easily use the `IButton` component together with any icon component (i.e. FontAwesome, IcoMoon), including the [Icon Component](/docs/components/icon).

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/icon"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/icon.raw.vue" lang="vue"} -->
::

### Active State
Buttons will appear pressed when active. You can force a button to have an active appearance with the `active` property (this will also add the `aria-pressed="true"` accessibility attribute).

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/state-active"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/state-active.raw.vue" lang="vue"} -->
::


### Disabled State
You can make buttons look inactive or disabled by adding the `disabled` boolean property.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/state-disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/state-disabled.raw.vue" lang="vue"} -->
::


### Loading State
You can add a loading state to the button by setting the `loading` boolean property. 

By default, the button will display a standard Inkline Loader Component. You can provide custom loading state by providing a `loading` slot.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/state-loading"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/state-loading.raw.vue" lang="vue"} -->
::


### Linking and Routing
Buttons will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<IButton>` component is also integrated with the [Vue Router](https://router.vuejs.org) plugin and will be converted to a `<RouterLink>` or `<NuxtLink>` when using the `to` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IButton/examples/routing"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButton/examples/routing.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IButton"}
::

### Slots
::ContentComponentSlots{component="IButton"}
::

### Events
::ContentComponentEvents{component="IButton"} 
::

### Design Tokens
::ContentComponentDesignTokens{component="IButton"}
::
