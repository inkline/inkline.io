---
title: Form Validation - Methods - Inkline
description: The form validation framework wouldn't be complete without dynamically added fields and groups.
---

<script setup>
import {
    IFormValidationMethodsGroupsObjectExample,
    IFormValidationMethodsGroupsArrayExample
} from '@inkline/inkline/stories/forms/validation/methods/index.mjs';
import { default as IFormValidationMethodsGroupsObjectExampleHTML } from '@inkline/inkline/stories/forms/validation/methods/groups-object.html?raw';
import { default as IFormValidationMethodsGroupsObjectExampleJS } from '@inkline/inkline/stories/forms/validation/methods/groups-object.mjs?raw';
import { default as IFormValidationMethodsGroupsArrayExampleHTML } from '@inkline/inkline/stories/forms/validation/methods/groups-array.html?raw';
import { default as IFormValidationMethodsGroupsArrayExampleJS } from '@inkline/inkline/stories/forms/validation/methods/groups-array.mjs?raw';
</script>

# Form Validation - Methods
## The form validation framework wouldn't be complete without dynamically added fields and groups.

Inkline provides a simple API for adding and removing fields.

### Object Group Operations
Objects can be manipulated and kept up to date using the standard Object API. 

To enable error handling and reactivity, we'll need to call `this.$inkline.form()` or `useForm()` for the newly added schema.

~~~js
this.form.group[field] = this.$inkline.form(fieldSchema);
this.form.group[field] = useForm(fieldSchema);
~~~

<example :component="IFormValidationMethodsGroupsObjectExample" :html="IFormValidationMethodsGroupsObjectExampleHTML" :js="IFormValidationMethodsGroupsObjectExampleJS"></example>

You can use `options.group` to specify whether the value being set is a group of fields. If not specified or set to `false`, the field will be a standalone field.

### Array Group Operations
Inkline allows you to use standard Array methods for Array group operations, such as `push` and`splice`. These two methods will take care of registering events and making sure your form schema is always up to date.

~~~js
this.form.group.push(this.$inkline.form(fieldSchema));
this.form.group.push(useForm(fieldSchema));

this.form.group.splice(0, 1, this.$inkline.form(fieldSchema));
this.form.group.splice(0, 1, useForm(fieldSchema));
~~~

<example :component="IFormValidationMethodsGroupsArrayExample" :html="IFormValidationMethodsGroupsArrayExampleHTML" :js="IFormValidationMethodsGroupsArrayExampleJS"></example>

You can use `options.group` to specify whether the value being added is a group of fields. If not specified or set to `false`, the field will be a standalone field.
