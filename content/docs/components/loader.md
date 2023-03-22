---
title: Loader - Inkline
description: Provide a loading state for a component or page using a customizable loading spinner. 
---

# Loader
## Provide a loading state for a component or page using a customizable loading spinner. 

### Basic Example
Use the loader component whenever you have an action that requires the user to wait for its completion. The loader component is very versatile and can be adapted to any container size.

::ContentTabs
#preview
:ContentPreview{src="/components/ILoader/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILoader/examples/basic.vue" lang="vue"} -->
::

### Color Variants
The loader component is available in a `light` or `dark` color, which you can choose using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ILoader/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILoader/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your loader component, using one of the available sizes: `sm`, `md`, and `lg`.

::ContentTabs
#preview
:ContentPreview{src="/components/ILoader/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILoader/examples/size-variants.vue" lang="vue"} -->
::

If you set the `size` property to `auto`, the loader will fit the container that it is in. Make sure to use the same height and width to keep the correct aspect ratio.

::ContentTabs
#preview
:ContentPreview{src="/components/ILoader/examples/size-auto"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILoader/examples/size-auto.vue" lang="vue"} -->
::

### Text Example
You're able to provide some additional text by using the `default` loader slot.

::ContentTabs
#preview
:ContentPreview{src="/components/ILoader/examples/text"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILoader/examples/text.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="ILoader"}
::

### Slots
::ContentComponentSlots{component="ILoader"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ILoader"}
::
