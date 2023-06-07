---
title: Collapsible - Inkline
description: Collapsible elements are used to show and hide content using a smooth reveal transition. 
---

# Collapsible
## Collapsible elements are used to show and hide content using a smooth reveal transition. 

Collapsing an element will animate the height from zero to its default value. This component is useful for creating clearly separated content sections such as FAQ pages.

::ContentTabs
#preview
:ContentPreview{src="/components/ICollapsible/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICollapsible/examples/basic.raw.vue" lang="vue"} -->
::

### Item Header
You can use the `header` slot to provide a custom title for the collapsible panel's heading. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICollapsible/examples/header"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICollapsible/examples/header.raw.vue" lang="vue"} -->
::

### Default Open Panels
Panels can be opened by default, on page load, using the `v-model` directive of the `<ICollapsible>` component. First, you'll need to assign an `id` to the `<ICollapsibleItem>` components which will identify the open panels.

::ContentTabs
#preview
:ContentPreview{src="/components/ICollapsible/examples/default-open"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICollapsible/examples/default-open.raw.vue" lang="vue"} -->
::

### Accordion
Accordion collapsible groups can have only one content panel open at a single time. This behaviour can be set using the `accordion` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICollapsible/examples/accordion"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICollapsible/examples/accordion.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes basic predefined collapsible colors that you can use within your application. You can apply a style using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICollapsible/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICollapsible/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your collapsible, using one of the available sizes: `sm`, `md`, and `lg`.
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ICollapsible/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICollapsible/examples/size-variants.raw.vue" lang="vue"} -->
::

### Props
##### ICollapsible
::ContentComponentProps{component="ICollapsible"}
::
##### ICollapsibleItem
::ContentComponentProps{component="ICollapsibleItem"}
::

### Slots
##### ICollapsible
::ContentComponentSlots{component="ICollapsible"}
::
##### ICollapsibleItem
::ContentComponentSlots{component="ICollapsibleItem"}
::

### Events
##### ICollapsible
::ContentComponentEvents{component="ICollapsible"}
::

### Design Tokens
##### ICollapsible
::ContentComponentDesignTokens{component="ICollapsible"}
::
##### ICollapsibleItem
::ContentComponentDesignTokens{component="ICollapsibleItem"}
::
