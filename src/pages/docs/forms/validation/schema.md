---
title: Form Validation - Schema - Inkline
description:  The validation schema defines the form input fields, groups and how they work together.
---

<script setup>
import {
    IFormValidationSchemaDefaultValueExample,
    IFormValidationSchemaValidationMessageExample,
    IFormValidationSchemaValidationEventExample,
    IFormValidationSchemaErrorVisibilityExample,
    IFormValidationSchemaGroupsObjectExample,
    IFormValidationSchemaGroupsArrayExample
} from '@inkline/inkline/stories/forms/validation/schema/index.mjs';
import { default as IFormValidationSchemaDefaultValueExampleHTML } from '@inkline/inkline/stories/forms/validation/schema/default-value.html?raw';
import { default as IFormValidationSchemaDefaultValueExampleJS } from '@inkline/inkline/stories/forms/validation/schema/default-value.mjs?raw';
import { default as IFormValidationSchemaValidationMessageExampleHTML } from '@inkline/inkline/stories/forms/validation/schema/validation-message.html?raw';
import { default as IFormValidationSchemaValidationMessageExampleJS } from '@inkline/inkline/stories/forms/validation/schema/validation-message.mjs?raw';
import { default as IFormValidationSchemaValidationEventExampleHTML } from '@inkline/inkline/stories/forms/validation/schema/validation-event.html?raw';
import { default as IFormValidationSchemaValidationEventExampleJS } from '@inkline/inkline/stories/forms/validation/schema/validation-event.mjs?raw';
import { default as IFormValidationSchemaErrorVisibilityExampleHTML } from '@inkline/inkline/stories/forms/validation/schema/error-visibility.html?raw';
import { default as IFormValidationSchemaErrorVisibilityExampleJS } from '@inkline/inkline/stories/forms/validation/schema/error-visibility.mjs?raw';
import { default as IFormValidationSchemaGroupsObjectExampleHTML } from '@inkline/inkline/stories/forms/validation/schema/groups-object.html?raw';
import { default as IFormValidationSchemaGroupsObjectExampleJS } from '@inkline/inkline/stories/forms/validation/schema/groups-object.mjs?raw';
import { default as IFormValidationSchemaGroupsArrayExampleHTML } from '@inkline/inkline/stories/forms/validation/schema/groups-array.html?raw';
import { default as IFormValidationSchemaGroupsArrayExampleJS } from '@inkline/inkline/stories/forms/validation/schema/groups-array.mjs?raw';
</script>

# Form Validation - Schema
## The validation schema defines the form input fields, groups and how they work together.

From the <router-link :to="{ name: 'docs-forms-validation' }">Overview</router-link> page we've learned:
- The schema object provides form validation status fields such as `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`
- The form component handles field value changes using the `v-model` directive
- Each field name inside the defined schema connects to an input using the `name` property in your template
- Using the `validators` field, you can specify an array of validators to be used on the field input

### Default Field Value
Providing a default value for a validation schema field can be done using the `value` field:

<example :component="IFormValidationSchemaDefaultValueExample" :html="IFormValidationSchemaDefaultValueExampleHTML" :js="IFormValidationSchemaDefaultValueExampleJS"></example>

### Validation Message
Each validator accepts a custom error message using the `message` field. This allows you to easily use i18n to display custom error messages.

<example :component="IFormValidationSchemaValidationMessageExample" :html="IFormValidationSchemaValidationMessageExampleHTML" :js="IFormValidationSchemaValidationMessageExampleJS"></example>

### Error Visibility
The `<i-form-error>` component has a `visible` property that can be either an array of string values (multiple conditions), or a simple string (single condition). 

The string values refer to the schema fields that have to be true before displaying the error (i.e. setting a value of `invalid` will show the error message when the field becomes invalid). By default, it is set to `['touched', 'dirty', 'invalid']`.

<example :component="IFormValidationSchemaErrorVisibilityExample" :html="IFormValidationSchemaErrorVisibilityExampleHTML" :js="IFormValidationSchemaErrorVisibilityExampleJS"></example>

The default field validation events can be configured globally when initializing Inkline or by updating the value of `this.$inkline.options.validateOn`.

### Validation Event
By using the `validateOn` field you can specify the event that triggers the validation. By default, fields get validated on both `input` and `blur`.

<example :component="IFormValidationSchemaValidationEventExample" :html="IFormValidationSchemaValidationEventExampleHTML" :js="IFormValidationSchemaValidationEventExampleJS"></example>

The default field validation events can be configured globally when initializing Inkline or by updating the value of `this.$inkline.options.validateOn`.

### Schema Groups
You can define schema groups to access the validation result of a group of inputs.

#### Object Schema Groups
Objects that aren't empty and don't have a `value` or `validators` field are treated as schema groups. Schema groups can be used to see the validation status of multiple related fields. You can also assign the schema group to an `<i-form-group>` component to simulate form nesting.

<example :component="IFormValidationSchemaGroupsObjectExample" :html="IFormValidationSchemaGroupsObjectExampleHTML" :js="IFormValidationSchemaGroupsObjectExampleJS"></example>

#### Array Schema Groups
Form groups can also be an `Array` of fields, allowing you to loop over them using` v-for`.

<example :component="IFormValidationSchemaGroupsArrayExample" :html="IFormValidationSchemaGroupsArrayExampleHTML" :js="IFormValidationSchemaGroupsArrayExampleJS"></example>
