---
title: Form Error - Inkline
description: Form component used to display form validation errors.
---

# Form Error
## Form component used to display form validation errors.

::ContentAlert
This component should be used only together with Inkline's [Form Validation](/docs/forms/validation) feature. 
::

The Form Error component is used to display form validation errors. Similar to the Form Label component, it connects to a `schema` field using the `for` prop.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/error-visibility"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/error-visibility.raw.vue" lang="vue"} -->
::

By default, error messages are only displayed when the field is `touched`, `dirty`, and `invalid`. You can change the error visibility conditions by using the `visible` field. The property that can be either an array of string values (multiple conditions), or a simple string (single condition).

[Read more about Form Validation](/docs/forms/validation)

### Props
::ContentComponentProps{component="IFormError"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IFormError"}
::
