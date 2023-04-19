---
title: Textarea
description: Form components used for inputting data directly from the keyboard, on multiple lines.
---

# Textarea
## Form components used for inputting data directly from the keyboard, on multiple lines.

Textareas are the form controls used for inputting multiple lines. Inkline provides you with simple solutions for all the scenarios you will encounter when creating textarea forms.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/basic.raw.vue" lang="vue"} -->
::

### Disabled State
Setting the `disabled` property will disable all interactions with the textarea component.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/disabled.raw.vue" lang="vue"} -->
::


### Readonly State
Setting the `readonly` property will disable all interactions with the textarea component, except being able to focus the textarea.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/readonly.raw.vue" lang="vue"} -->
::


### Clearable Variant
If you need to be able to quickly clear the value of an textarea, you can add the `clearable` property to the textarea component.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/clearable"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/clearable.raw.vue" lang="vue"} -->
::


### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your textareas. Using prefixes and suffixes you can, for example, indicate the textarea type using an icon or text. 

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/prefix-suffix"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/prefix-suffix.raw.vue" lang="vue"} -->
::


### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the textarea by using the prepend and append slots.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/prepend-append-text"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/prepend-append-text.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/prepend-append-button"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/prepend-append-button.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/prepend-append-dropdown"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/prepend-append-dropdown.raw.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your textareas.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/color-variants.raw.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` modifier to control the size of your textareas, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ITextarea/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ITextarea/examples/size-variants.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="ITextarea"}
::

### Slots
::ContentComponentSlots{component="ITextarea"}
::

### Events
::ContentComponentEvents{component="ITextarea"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IInput"}
::
