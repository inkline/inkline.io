---
title: Button Group - Inkline
description: Group multiple buttons together on a single line using a button group. 
---

# Button Group
## Group multiple buttons together on a single line using a button group. 

### Basic Example
You can group a series of `<IButton>` components inside a `<IButtonGroup>` to display them inline, conveying additional meaning.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/basic.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your button group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/size-variants.vue" lang="vue"} -->
::

### Block Variant
You can create block button groups that span the full width of a parent by adding the `block` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/block"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/block.vue" lang="vue"} -->
::

### Vertical Basic Example
Using the `vertical` property, you can stack a set of buttons vertically rather than horizontally.


::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/vertical"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/vertical.vue" lang="vue"} -->
::

### Vertical Size Variants
Just like horizontal button groups, the size of vertical button groups can also be controlled using the `size` modifier. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/vertical-size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/vertical-size-variants.vue" lang="vue"} -->
::

### Vertical Block 
Just like horizontal block button groups, you can also set vertical button groups to span full width of its parent by adding the `block` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/vertical-block"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/vertical-block.vue" lang="vue"} -->
::

### Nested
When placing a `<i-button-group>` inside another `<i-button-group>`, you'll get a mixed series of buttons that will render seamlessly.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/nested"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/nested.vue" lang="vue"} -->
::

### Nested Block
You can also nest `block` button groups.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/nested-block"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/nested-block.vue" lang="vue"} -->
::


### Disabled
You can make button groups look inactive or disabled by adding the `disabled` boolean property.

::ContentTabs
#preview
:ContentPreview{src="/components/IButtonGroup/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IButtonGroup/examples/disabled.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IButtonGroup"}
::

### Slots
::ContentComponentSlots{component="IButtonGroup"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IButtonGroup"}
::
