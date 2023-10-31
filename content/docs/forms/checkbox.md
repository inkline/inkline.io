---
title: Checkbox - Inkline
description: Checkbox inputs allow the user to set a true or false value. 
---

# Checkbox
## Checkbox inputs allow the user to select multiple options from a set. 

Using the `ICheckbox` component to determine a boolean value is very straightforward:

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/basic.raw.vue" lang="vue"} -->
::

### Disabled State

You can disable a checkbox using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/disabled.raw.vue" lang="vue"} -->
::

### Readonly State

You can make a checkbox readonly using the `readonly` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/readonly.raw.vue" lang="vue"} -->
::

### Indeterminate State
You can set the state of a `<ICheckbox>` to be indeterminate by using the `indeterminate` property. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/indeterminate"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/indeterminate.raw.vue" lang="vue"} -->
::

### Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/color-variants.raw.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` property to control the size of your checkbox, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/size-variants.raw.vue" lang="vue"} -->
::

### Custom vs. Native
Inkline uses a custom checkbox design by default. You can use the `native` property to use native browser checkbox indicators.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckbox/examples/native"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckbox/examples/native.raw.vue" lang="vue"} -->
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
