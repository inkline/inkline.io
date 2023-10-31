---
title: Form Validation - Methods - Inkline
description: The form validation framework wouldn't be complete without dynamically added fields and groups.
---

:ContentHeading{ title="Methods" subtitle="Form Validation" }
## The form validation framework wouldn't be complete without dynamically added fields and groups.

Inkline provides a simple API for adding and removing fields.

### Object Group Operations
Objects can be manipulated and kept up to date using the standard Object API. 

To enable error handling and reactivity, we'll need to call `useForm()` or `this.$inkline.form()` for the newly added schema.

**Composition API**
~~~ts
form.value.group[field] = useForm(fieldSchema);
~~~

**Options API**
~~~js
this.form.group[field] = this.$inkline.form(fieldSchema);
~~~

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/methods/groups-object"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/methods/groups-object.raw.vue" lang="vue"} -->
::

You can use `options.group` to specify whether the value being set is a group of fields. If not specified or set to `false`, the field will be a standalone field.

### Array Group Operations
Inkline allows you to use standard Array methods for Array group operations, such as `push` and`splice`. These two methods will take care of registering events and making sure your form schema is always up to date.

**Composition API**
~~~ts
form.value.group.push(useForm(fieldSchema));
form.value.group.splice(0, 1, useForm(fieldSchema));
~~~

**Options API**
~~~ts
this.form.group.push(this.$inkline.form(fieldSchema));
this.form.group.splice(0, 1, this.$inkline.form(fieldSchema));
~~~

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/methods/groups-array"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/methods/groups-array.raw.vue" lang="vue"} -->
::

You can use `options.group` to specify whether the value being added is a group of fields. If not specified or set to `false`, the field will be a standalone field.
