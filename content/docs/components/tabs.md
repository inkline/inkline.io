---
title: Tabs
description: Tab elements are used to switch between multiple sections of related content. 
---

# Tabs
## Tab elements are used to switch between multiple sections of related content. 

Switching between tabs will fade-in the content associated to the selected tab. Here are some things to keep in mind:
- A specific tab can be opened by default using the `v-model` directive
- You must to assign a tab `name` to the `<ITab>` components
- You must reference the chosen tab name using the `for` property of the `<ITabTitle>` components

When you have a large number of tabs, the tabs header will scroll horizontally.

::ContentTabs
#preview
:ContentPreview{src="/components/ITabs/examples/advanced"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITabs/examples/advanced.raw.vue" lang="vue"} -->
::

### Stretch Header
You can have a full width tabs header using the `stretch` property. Make sure you use it only when having a small number of tabs.

::ContentTabs
#preview
:ContentPreview{src="/components/ITabs/examples/stretch"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITabs/examples/stretch.raw.vue" lang="vue"} -->
::

### Color Variants
Inkline includes basic predefined tabs styles that you can use within your application. You can apply a style using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ITabs/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITabs/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your tabs, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ITabs/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITabs/examples/size-variants.raw.vue" lang="vue"} -->
::

### Disabling SSR
Inkline can infer your tabs definition automatically, however it will not work with Server Side Rendering. To use this approach with SSR, you will need to mark the component as `ClientOnly`. 

::ContentTabs
#preview
:ContentPreview{src="/components/ITabs/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITabs/examples/basic.raw.vue" lang="vue"} -->
::

### Props
##### ITabs
::ContentComponentProps{component="ITabs"}
::
##### ITab
::ContentComponentProps{component="ITab"}
::
##### ITabTitle
::ContentComponentProps{component="ITabTitle"}
::

### Slots
##### ITabs
::ContentComponentSlots{component="ITabs"}
::
##### ITab
::ContentComponentSlots{component="ITab"}
::
##### ITabTitle
::ContentComponentSlots{component="ITabTitle"}
::

### Events
##### ITabs
::ContentComponentEvents{component="ITabs"}
::

### Design Tokens
##### ITabs
::ContentComponentDesignTokens{component="ITabs"}
::
##### ITab
::ContentComponentDesignTokens{component="ITab"}
::
##### ITabTitle
::ContentComponentDesignTokens{component="ITabTitle"}
::
