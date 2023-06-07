---
title: Form Validation - Schema - Inkline
description:  The validation schema defines the form input fields, groups and how they work together.
---

# Form Validation - Schema
## The validation schema defines the form input fields, groups and how they work together.

From the [Overview](/docs/forms/validation) page we've learned:
- The schema object provides form validation status fields such as `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`
- The form component handles field value changes using the `v-model` directive
- Each field name inside the defined schema connects to an input using the `name` property in your template
- Using the `validators` field, you can specify an array of validators to be used on the field input

### Default Field Value
Providing a default value for a validation schema field can be done using the `value` field:

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/default-value"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/default-value.raw.vue" lang="vue"} -->
::


### Validation Message
Each validator accepts a custom error message using the `message` field. This allows you to easily use i18n to display custom error messages.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/validation-message"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/validation-message.raw.vue" lang="vue"} -->
::


### Error Visibility
The `<IFormError>` component has a `visible` property that can be either an array of string values (multiple conditions), or a simple string (single condition). 

The string values refer to the schema fields that have to be true before displaying the error (i.e. setting a value of `invalid` will show the error message when the field becomes invalid). By default, it is set to `['touched', 'dirty', 'invalid']`.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/error-visibility"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/error-visibility.raw.vue" lang="vue"} -->
::

The default field validation events can be configured globally when initializing Inkline or by updating the value of `this.$inkline.options.validateOn`.


### Validation Event
By using the `validateOn` field you can specify the event that triggers the validation. By default, fields get validated on both `input` and `blur`.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/validation-event"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/validation-event.raw.vue" lang="vue"} -->
::


The default field validation events can be configured globally when initializing Inkline or by updating the value of `inkline.options.validateOn`.

### Schema Groups
You can define schema groups to access the validation result of a group of inputs.

#### Object Schema Groups
Objects that aren't empty and don't have a `value` or `validators` field are treated as schema groups. Schema groups can be used to see the validation status of multiple related fields. You can also assign the schema group to an `<IFormGroup>` component to simulate form nesting.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/groups-object"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/groups-object.raw.vue" lang="vue"} -->
::


#### Array Schema Groups
Form groups can also be an `Array` of fields, allowing you to loop over them using` v-for`.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/groups-array"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/groups-array.raw.vue" lang="vue"} -->
::

