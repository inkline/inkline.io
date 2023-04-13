---
title: Badge
description: Documentation and examples for badges, a small component used for counting and labeling.
---

# Badge
## Documentation and examples for badges, a small component used for counting and labeling.

Badges are simple components used for counting, notifications, and labeling items. They're small, colorful and can easily draw attention to them.

::ContentTabs
#preview
:ContentPreview{src="/components/IBadge/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBadge/examples/basic.vue" lang="vue"} -->
::

### Color Variants

Inkline includes several predefined badge color variants, each serving its own semantic purpose, which you can control using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IBadge/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBadge/examples/color-variants.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your badges, using one of the available sizes: `sm`, `md`, and `lg`. 

::ContentTabs
#preview
:ContentPreview{src="/components/IBadge/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBadge/examples/size-variants.vue" lang="vue"} -->
::

### Relative Size

Badges always match the size of the immediate parent element by using relative font sizing and `em` units.

::ContentTabs
#preview
:ContentPreview{src="/components/IBadge/examples/heading"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBadge/examples/heading.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IBadge"}
::

### Slots
::ContentComponentSlots{component="IBadge"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IBadge"}
::

