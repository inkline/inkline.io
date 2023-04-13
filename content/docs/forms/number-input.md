---
title: Number Input
description: Number Inputs are form components used to for easily inputting and manipulating numbers.
---

# Number Input
## Number Inputs are form components used to for easily inputting and manipulating numbers.

Inkline provides you with simple solutions for all the scenarios you will encounter when you need your user to input a number.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/basic.vue" lang="vue"} -->
::

### Minimum and Maximum Value
Setting the `min` and `max` properties will restrict the value within the given range.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/minmax"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/minmax.vue" lang="vue"} -->
::


### Precision
You can set the number `precision` using the precision property, allowing you to enter floating point number values.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/precision"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/precision.vue" lang="vue"} -->
::


### Step Size
You can set the value to increment / decrement by using the `step` property. The step size is `1` by default.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/step-size"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/step-size.vue" lang="vue"} -->
::


### Disabled State
Setting the `disabled` property will disable all interactions with the number input component.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/disabled.vue" lang="vue"} -->
::


### Readonly State
Setting the `readonly` property will disable all interactions with the number input component, except being able to focus the number input.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/readonly.vue" lang="vue"} -->
::


### Clearable Variant
If you need to be able to quickly clear the value of a number input, you can add the `clearable` property to the number input component.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/clearable"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/clearable.vue" lang="vue"} -->
::


### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your number inputs. Using prefixes and suffixes you can, for example, indicate your number input type using an icon or text. 

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/prefix-suffix"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/prefix-suffix.vue" lang="vue"} -->
::


### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the number input by using the prepend and append slots.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/prepend-append-text"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/prepend-append-text.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/prepend-append-button"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/prepend-append-button.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/prepend-append-dropdown"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/prepend-append-dropdown.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your number inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/color-variants.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` modifier to control the size of your number inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/INumberInput/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/INumberInput/examples/size-variants.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="INumberInput"}
::

### Slots
::ContentComponentSlots{component="INumberInput"}
::

### Events
::ContentComponentEvents{component="INumberInput"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IInput"}
::
