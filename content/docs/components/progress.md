---
title: Progress
description: A custom component for displaying progress with support for stacked progress bars.
---

# Progress
## A custom component for displaying progress with support for stacked progress bars.

Progress components are built with two components: a wrapper `<IProgress>` and at least one `<IProgressBar>`. You can set the width of a progress bar by setting its `value` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IProgress/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IProgress/examples/basic.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes multiple progress styles. You set the wrapper `<IProgress>` background using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IProgress/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IProgress/examples/color-variants.raw.vue" lang="vue"} -->
::

More importantly, you can change the color of an `<IProgressBar>` using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IProgress/examples/bar-color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IProgress/examples/bar-color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your progress, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IProgress/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IProgress/examples/size-variants.raw.vue" lang="vue"} -->
::

### Value
Inkline allows you to set a `min` and `max` modifier to calculate the progress based on a meaningful value. The new `min` will represent `0%` and the `max` will represent `100%`.

::ContentTabs
#preview
:ContentPreview{src="/components/IProgress/examples/value"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IProgress/examples/value.raw.vue" lang="vue"} -->
::

### Stacked Bars
You can add multiple `<IProgressBar>` inside the `<IProgress>` component to stack them, adding them up to `100%`.

::ContentTabs
#preview
:ContentPreview{src="/components/IProgress/examples/stacked"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IProgress/examples/stacked.raw.vue" lang="vue"} -->
::


### Props
##### IProgress
::ContentComponentProps{component="IProgress"}
::
##### IProgressBar
::ContentComponentProps{component="IProgressBar"}
::

### Slots
##### IProgress
::ContentComponentSlots{component="IProgress"}
::
##### IProgressBar
::ContentComponentSlots{component="IProgressBar"}
::

### Design Tokens
##### IProgress
::ContentComponentDesignTokens{component="IProgress"}
::
##### IProgressBar
::ContentComponentDesignTokens{component="IProgressBar"}
::

