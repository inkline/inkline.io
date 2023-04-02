---
title: Form - Inkline
description: Forms are the main wrapper components for form elements, with powerful customization and validation options. 
---


# Form
## Forms are the main wrapper components for form elements, with powerful customization and validation options. 

The `<i-form>` component is a wrapper that provides proper handling of form validation and form grouping. Here are some things that are good to know:

- All nested form components will inherit the form's `disabled` and `readonly` state
- All nested form components will inherit the form's `size` variant
- You can use the `@submit` binding to handle the submit event

::ContentTabs
#preview
:ContentPreview{src="/components/IForm/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IForm/examples/basic.vue" lang="vue"} -->
::


### Disabled State
Setting a form as `disabled` will cause all of its child inputs to be disabled. When disabled, the form cannot be submitted.

::ContentTabs
#preview
:ContentPreview{src="/components/IForm/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IForm/examples/disabled.vue" lang="vue"} -->
::


### Readonly State
Setting a form as `readonly` will cause all of its child inputs to be readonly. When readonly, the form can still be submitted.

::ContentTabs
#preview
:ContentPreview{src="/components/IForm/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IForm/examples/readonly.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` modifier to control the size of your `<i-form>`, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

All of the form components inside the `<i-form>` will inherit the parent form group's size.

::ContentTabs
#preview
:ContentPreview{src="/components/IForm/examples/size-variants-sm"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IForm/examples/size-variants-sm.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IForm/examples/size-variants-md"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IForm/examples/size-variants-md.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/IForm/examples/size-variants-lg"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IForm/examples/size-variants-lg.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IForm"}
::

### Slots
::ContentComponentSlots{component="IForm"}
::

### Events
::ContentComponentEvents{component="IForm"}
::
