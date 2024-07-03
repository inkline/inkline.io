---
title: Form Validation - Schema - Inkline
description: The form validation schema defines state of the form fields, groups, validation rules, and how they work together.
---

:ContentHeading{ title="Schema" subtitle="Form Validation" }
## The form validation schema defines state of the form fields, groups, validation rules, and how they work together.

To initialize form validation, you first provide a raw, unresolved schema to the `useForm` composable function. The composable enhances the user-provided schema with validation state fields, and then returns the resolved `schema` object ref.

```ts
const { schema } = useForm<{ field: string; }>({
    field: {
        value: 'example',
        validators: [
            { 
                name: 'required', 
                message: 'This field is required' 
            }
        ]
    }
});
```

After initialization, the resolved `schema` object is a reactive object ref, and will update the field value, errors, and validation state for the whole schema when an input value changes. 

The `schema` object provides you with all the information you need about the current form state:
- The `value` field represents the current value of the field
- The `validators` field represents an array of validators to be used to validate the field input
- The `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` fields represent the current validation state of the field, group, or form root
- The `errors` field represents an array of errors that are currently affecting the field


##### Resolved Schema
The resolved `schema` object looks as follows:

```ts
{
    field: {
        value: 'example',
        valid: true,
        invalid: false,
        touched: false,
        untouched: true,
        dirty: false,
        pristine: true,
        errors: [],
        validators: [ ... ]
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

