---
title: Header - Inkline
description: A lightweight, responsive header component used for showcasing hero unit style content.
---

# Header
## A lightweight, responsive header component used for showcasing hero unit style content.

Here’s an example of a basic header component. Usually, this component is used on homepages and landing pages and has an attractive background image.

::ContentTabs
#preview
:ContentPreview{src="/components/IHeader/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHeader/examples/basic.vue" lang="vue"} -->
::

### Color Variants
You can set the style of a `<i-header>` using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IHeader/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHeader/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your header, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IHeader/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHeader/examples/size-variants.vue" lang="vue"} -->
::

### Fullscreen
You can make headers cover the whole screen width and height (using `vw` and `vh`) by adding the `fullscreen` property. The width and height do not overflow the size of the parent container.

::ContentTabs
#preview
:ContentPreview{src="/components/IHeader/examples/fullscreen"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHeader/examples/fullscreen.vue" lang="vue"} -->
::

### Cover Background
The goal of cover background images on a website is to cover the entire browser window at all times. Simply set a background for the header

::ContentTabs
#preview
:ContentPreview{src="/components/IHeader/examples/cover"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IHeader/examples/cover.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="IHeader"}
::

### Slots
::ContentComponentSlots{component="IHeader"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IHeader"}
::
