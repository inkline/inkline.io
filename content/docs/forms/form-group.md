---
title: Form Group - Inkline
description: Form groups are the easiest way to add structure and spacing to form elements. 
---

# Form Group
## Form groups are the easiest way to add structure and spacing to form elements. 

The `<i-form-group>` component is a wrapper that provides proper grouping of labels, input, help text, and form validation messaging. By default, form groups add spacing between them.

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/basic.vue" lang="vue"} -->
::

### Disabled State
Setting a form group as `disabled` will cause all of its child form components to be disabled.

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/disabled.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the size of the form components inside your `<i-form-group>`, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

All of the components inside the `<i-form-group>` will inherit the parent form group's size.


::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/size-variants-sm"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/size-variants-sm.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/size-variants-md"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/size-variants-md.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/size-variants-lg"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/size-variants-lg.vue" lang="vue"} -->
::

### Form Group Nesting
You can nest form groups in order to control the `disabled`, `readonly` and `size` properties of multiple form components at once. All the child inputs of the parent form group will inherit the property.


::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/nesting"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/nesting.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/nesting-disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/nesting-disabled.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/nesting-readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/nesting-readonly.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IFormGroup/examples/nesting-size-variants-lg"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormGroup/examples/nesting-size-variants-lg.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IFormGroup"}
::

### Slots
::ContentComponentSlots{component="IFormGroup"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IFormGroup"}
::
