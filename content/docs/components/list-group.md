---
title: List Group
description: List groups are flexible components used for displaying a list of related content.
---

# List Group
## List groups are flexible components used for displaying a list of related content.

List groups support any content inside of them. Take advantage of their flexibility to display list of items, as well as vertical navigation.

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/basic.raw.vue" lang="vue"} -->
::

Behind the scenes, the `<IListGroupItem>` is converted into a `<RouterLink>` if it has the `:to` property, or a plain `<a>` tag if it has a `href` property. Otherwise, it uses a simple `<div>` tag.

### Color Variants
The list group component comes with a predefined set of basic color variants. You can set the color of a list group using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the padding of your list groups, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/size-variants.raw.vue" lang="vue"} -->
::

### Active State
You can control the active state of your `<IListGroupItem>` using the `active` property. 

If you're providing a `to` property, the list group item will be converted into a `router-link` or `nuxt-link`. You can use the `active-class` and `exact-active-class` properties and set them to `-active` when using it as a routing component.

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/state-active"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/state-active.raw.vue" lang="vue"} -->
::

### Disabled State
You can control the disabled state of your `<IListGroupItem>` using the `disabled` property. 

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/state-disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/state-disabled.raw.vue" lang="vue"} -->
::

### Borderless Variant
You can disable the border of your list group by setting the `border` property to false. 

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/borderless"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/borderless.raw.vue" lang="vue"} -->
::

### Item Content
The `<IListGroupItem>` accepts any type of content, allowing you to create large sized list group items.

::ContentTabs
#preview
:ContentPreview{src="/components/IListGroup/examples/content"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IListGroup/examples/content.raw.vue" lang="vue"} -->
::

### Props
##### IListGroup
::ContentComponentProps{component="IListGroup"}
::
##### IListGroupItem
::ContentComponentProps{component="IListGroupItem"}
::

### Slots
##### IListGroup
::ContentComponentSlots{component="IListGroup"}
::
##### IListGroupItem
::ContentComponentSlots{component="IListGroupItem"}
::

### Design Tokens
##### IListGroup
::ContentComponentDesignTokens{component="IListGroup"}
::
##### IListGroupItem
::ContentComponentDesignTokens{component="IListGroupItem"}
::
