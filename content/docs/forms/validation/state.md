---
title: Form Validation - State - Inkline
description: The form validation schema defines state of the form fields, groups, validation rules, and how they work together.
---

:ContentHeading{ title="Validation State" subtitle="Form Validation" }
## The form validation schema defines state of the form fields, groups, validation rules, and how they work together.

After initialization, each field, group, and the root form contain form validation state fields `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`. 

These schema fields will be set to `true` when:

- `valid` - the input value is correct
- `invalid` - the input value is not correct
- `touched` - the input has been touched and blurred
- `untouched` - the input has not been touched
- `dirty` - the input value has been changed
- `pristine` - the input value has not been changed

```ts
const { schema } = useForm<{ field: string }>({
    field: {
        value: ''
    }
});
```

##### Resolved Schema
The resolved `schema` object looks as follows:

```ts
{
    field: {
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
}
```

### Validation Errors
Form validation errors provide useful feedback about the current state of the form to the user. 

The `errors` field is an array of objects containing the name of the validator, an error message, and the path of the field that triggered the error.

```ts
{
    errors: [
        {
            "name": "minLength",
            "message": "Please enter at least 8 characters.",
            "path": "password"
        }
    ]
}
```

Errors are displayed using the `IFormError` component. Just like the form input components, it connects to the schema using the `name` prop. 

[Read about the Form Error component](/docs/forms/components/form-error).

### Manual Schema Validation 
You can re-compute the validation state of the form schema manually by using the `validate()` method of the `useForm()` composable.

```ts
const { schema, validate } = useForm<{ field: string }>({
    field: {
        value: '',
        validators: [
            { name: 'required' }
        ]
    }
});

async function onSubmit() {
    await validate();
    
    if (schema.value.valid) {
        // Submit form
    }
}
```
