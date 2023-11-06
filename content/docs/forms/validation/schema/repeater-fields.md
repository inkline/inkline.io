---
title: Form Validation - Schema - Repeater Fields - Inkline
description: Grouped fields are abstract form validation schema objects that represent the validation state of a group of form inputs.
---

:ContentHeading{ title="Repeater Fields" subtitle="Form Validation Schema" }
## Repeater fields are abstract form validation schema objects that represent the validation state of an array of form inputs.

A form schema repeater field group is defined as an array containing other form schema fields or groups. 

```ts
const { schema } = useForm<{ 
    items: string[]
}>({
    items: [
        {
            value: '',
        }
    ]
});
```

##### Resolved Schema
The resolved `schema` object looks as follows:

```ts
{
    items: [
        {
            value: '',
            valid: true,
            invalid: false,
            touched: false,
            untouched: true,
            dirty: false,
            pristine: true,
            errors: [],
            validators: []
        }
    ],
    valid: true,
    invalid: false,
    touched: false,
    untouched: true,
    dirty: false,
    pristine: true,
    errors: []
}
```

### Connecting Repeater Fields to Form Inputs
The field key is now the item index of the array. We will use the field **key path** to connect to the form input components using the `name` prop.

```vue
<script lang="ts" setup>
const { schema } = useForm<{
    items: string[]
}>({
    items: [
        {
            value: '',
        }
    ]
});
</script>

<template>
    <IForm v-model="schema">
        <IFormGroup v-for="(item, index) in items" :key="index">
            <IInput :name="`items.${index}`" />
        </IFormGroup>
    </IForm>
</template>
```

### Repeater Fields Operations
To update repeater field items, you can use standard array methods. These two methods will take care of registering events and making sure your form schema is always up-to-date:

- `push` to add a resolved field schema to the array
~~~ts
schema.value.items.push(createFormFieldSchema(fieldSchema));
~~~

- `splice` to remove or replace resolved form field schemas from the array. 
~~~ts
schema.value.items.splice(0, 1, createFormFieldSchema(fieldSchema));
~~~
  

Repeater fields can contain both fields and groups. To resolve a field schema, you can use the following methods:
- Field schemas are resolved using the `createFormFieldSchema()` method
- Grouped field schemas are resolved using the `createSchema()` method
- Repeater field schemas are resolved using the `createFormArraySchema()` method






::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/methods/groups-array"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/methods/groups-array.raw.vue" lang="vue"} -->
::
