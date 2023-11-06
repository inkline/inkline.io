---
title: Form Validation - Schema - Grouped Fields - Inkline
description: Grouped fields are abstract form validation schema objects that represent the validation state of a group of form inputs.
---

:ContentHeading{ title="Grouped Fields" subtitle="Form Validation Schema" }
## Grouped fields are abstract form validation schema objects that represent the validation state of a group of form inputs.

A form schema group is defined as an object containing other form schema fields or nested groups. 

```ts
const { schema } = useForm<{ 
    address: {
        country: string;
        city: string;
    }
}>({
    address: {
        country: {
            value: '',
        },
        city: {
            value: '',
        }
    }
});
```

The schema group validation state is computed based on the validation state of the fields it contains and does not get connected directly to the form input components.

##### Resolved Schema
The resolved `schema` object looks as follows:

```ts
{
    address: {
        country: {
            value: '',
            valid: true,
            invalid: false,
            touched: false,
            untouched: true,
            dirty: false,
            pristine: true,
            errors: [],
            validators: []
        },
        city: {
            value: '',
            valid: true,
            invalid: false,
            touched: false,
            untouched: true,
            dirty: false,
            pristine: true,
            errors: [],
            validators: []
        },
        valid: true,
        invalid: false,
        touched: false,
        untouched: true,
        dirty: false,
        pristine: true,
        errors: []
    },
    valid: true,
    invalid: false,
    touched: false,
    untouched: true,
    dirty: false,
    pristine: true,
    errors: []
}
```

### Connecting Grouped Fields to Form Inputs
The field key is now nested inside a group. We will use the field **key path** to connect to the form input components using the `name` prop.

```vue
<script lang="ts" setup>
const { schema } = useForm<{ 
    address: {
        country: string;
        city: string;
    }
}>({
    address: {
        country: {
            value: '',
        },
        city: {
            value: '',
        }
    }
});
</script>

<template>
    <IForm v-model="schema">
        <IFormGroup>
            <IInput name="address.country" />
        </IFormGroup>
        <IFormGroup>
            <IInput name="address.city" />
        </IFormGroup>
    </IForm>
</template>
```

### Grouped Fields Operations
You can add a new field in the form schema group or root by assigning a resolved field schema to the object. Groups can be nested indefinitely and can contain any type of field.

To resolve a field schema, you can use the following methods:
- Field schemas are resolved using the `createFormFieldSchema()` method
- Grouped field schemas are resolved using the `createSchema()` method
- Repeater field schemas are resolved using the `createFormArraySchema()` method

~~~ts
schema.value.group[field] = createFormFieldSchema(fieldSchema);
~~~

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/methods/groups-object"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/methods/groups-object.raw.vue" lang="vue"} -->
::

You can use `options.group` to specify whether the value being set is a group of fields. If not specified or set to `false`, the field will be a standalone field.
