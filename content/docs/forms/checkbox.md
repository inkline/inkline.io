---
title: Checkbox - Inkline
description: Checkbox inputs allow the user to select multiple options from a set. 
---

# Checkbox
## Checkbox inputs allow the user to select multiple options from a set. 

Using the `ICheckbox` component to determine a boolean value is very straightforward:

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/basic.vue" lang="vue"} -->
::

### Disabled State

You can disable a checkbox using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/disabled.vue" lang="vue"} -->
::

### Readonly State

You can make a checkbox readonly using the `readonly` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/readonly.vue" lang="vue"} -->
::

### Indeterminate State
You can set the state of a `<i-checkbox>` to be indeterminate by using the `indeterminate` property. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/indeterminate"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/indeterminate.vue" lang="vue"} -->
::

### Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/color-variants.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` property to control the size of your checkbox, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/size-variants.vue" lang="vue"} -->
::

### Group Example
Using the `i-checkbox` component together with a `i-checkbox-group` allows you to control multiple selected values using a single binding.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/group"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/group.vue" lang="vue"} -->
::

### Group Disabled State
You can disable an entire checkbox group using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/group-disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/group-disabled.vue" lang="vue"} -->
::


### Group Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/group-color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/group-color-variants.vue" lang="vue"} -->
::

### Group Size Variants
You're able to use the `size` property to control the size of your checkbox group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

The chosen size will be applied to all of its child inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/group-size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/group-size-variants.vue" lang="vue"} -->
::

### Custom vs. Native
Inkline uses a custom checkbox design by default. You can use the `native` property to use native browser checkbox indicators.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/native"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/native.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="ICheckbox"}
::

### Slots
::ContentComponentSlots{component="ICheckbox"}
::

### Events
::ContentComponentEvents{component="ICheckbox"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ICheckbox"}
::
