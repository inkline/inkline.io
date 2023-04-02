---
title: Radio - Inkline
description: Radio inputs allow the user to select multiple options from a set. 
---

# Radio
## Radio inputs allow the user to select multiple options from a set. 

Using the `i-radio` component together with a `i-radio-group` allows you to choose a value from multiple choices using a single model binding:

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/basic.vue" lang="vue"} -->
::

### Disabled State
You can disable a radio using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/disabled.vue" lang="vue"} -->
::

### Readonly State
You can make a radio readonly using the `readonly` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/readonly.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` property to control the size of your radio, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/size-variants.vue" lang="vue"} -->
::


### Custom vs. Native
Inkline uses a custom radio design by default. You can use the `native` property to use native browser radio indicators.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/native"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/native.vue" lang="vue"} -->
::


### Group Disabled State
You can disable an entire radio group using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/group-disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/group-disabled.vue" lang="vue"} -->
::


### Group Color Variants
You can use the `color` property to set a `light` or `dark` color for your radios.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/color-variants.vue" lang="vue"} -->
::


### Group Size Variants
You're able to use the `size` property to control the size of your radio group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

The chosen size will be applied to all of its child inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadio/examples/group-size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadio/examples/group-size-variants.vue" lang="vue"} -->
::


### Props
##### IRadio
::ContentComponentProps{component="IRadio"}
::
##### IRadioGroup
::ContentComponentProps{component="IRadioGroup"}
::

### Slots
##### IRadio
::ContentComponentSlots{component="IRadio"}
::
##### IRadioGroup
::ContentComponentSlots{component="IRadioGroup"}
::

### Events
##### IRadio
::ContentComponentEvents{component="IRadio"}
::
##### IRadioGroup
::ContentComponentEvents{component="IRadioGroup"}
::

### Design Tokens
##### IRadio
::ContentComponentDesignTokens{component="IRadio"}
::
##### IRadioGroup
::ContentComponentDesignTokens{component="IRadioGroup"}
::
