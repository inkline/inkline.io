---
title: Input - Inkline
description: Form component used for inputting data directly from the keyboard. 
---

# Input
## Form component used for inputting data directly from the keyboard. 

Inputs are the simplest and most used type of form control. Inkline provides you with simple solutions for all the scenarios you will encounter when creating input forms.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/basic.vue" lang="vue"} -->
::

### Input Type
Behind the scenes, Inkline uses a native HTML `<input>` element, meaning that you can use the `type` property to define the type of the input, such as `text`, `password`, `date`, `email`, `number`, and so on. By default, the input type is set to `text`.

Keep in mind that native input types look and are treated differently in each browser, which is why you should use a custom component to achieve consistency.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/type"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/type.vue" lang="vue"} -->
::

### Disabled State
Setting the `disabled` property will disable all interactions with the input component.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/disabled.vue" lang="vue"} -->
::

### Readonly State
Setting the `readonly` property will disable all interactions with the input component, except being able to focus the input.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/readonly.vue" lang="vue"} -->
::

### Clearable
If you need to be able to quickly clear the value of an input, you can add the `clearable` property to the input component.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/clearable"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/clearable.vue" lang="vue"} -->
::

### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your inputs. Using prefixes and suffixes you can, for example, indicate the input type using an icon or text. 

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/prefix-suffix"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/prefix-suffix.vue" lang="vue"} -->
::

### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the input by using the prepend and append slots.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/prepend-append-text"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/prepend-append-text.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/prepend-append-button"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/prepend-append-button.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/prepend-append-dropdown"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/prepend-append-dropdown.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/IInput/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IInput/examples/size-variants.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="IInput"}
::

### Slots
::ContentComponentSlots{component="IInput"}
::

### Events
::ContentComponentEvents{component="IInput"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IInput"}
::
