---
title: Form Validation - Schema - Individual Fields - Inkline
description: Individual fields are form validation schema objects that represent the validation state of a single form input.
---

:ContentHeading{ title="Individual Fields" subtitle="Form Validation Schema" }
## Individual fields are form validation schema objects that represent the validation state of a single form input.

A form schema field is defined as an object with a `value` or `validators` field, or an empty object. 

```ts
const { schema } = useForm<{ 
    username: string; 
    password: string; 
}>({
    username: {
        value: '',
        validators: [
            { name: 'required' }
        ]
    },
    password: {
        validators: [
            { name: 'required' },
            { name: 'minLength', value: 8 }
        ]
    }
});
```

##### Resolved Schema
The resolved `schema` object looks as follows:

```ts
{
    username: {
        value: '',
        valid: true,
        invalid: false,
        touched: false,
        untouched: true,
        dirty: false,
        pristine: true,
        errors: [],
        validators: [ ... ]
    },
    password: {
        value: '',
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

### Connecting Fields to Form Inputs

The field **key** is used to connect to the form input components using the `name` prop.

```vue
<script lang="ts" setup>
import { useForm } from '@inkline/inkline';
    
const { schema } = useForm<{ 
    username: string; 
    password: string; 
}>({
    username: {},
    password: {}
});
</script>

<template>
    <IForm v-model="schema">
        <IFormGroup>
            <IInput name="username" />
        </IFormGroup>
        <IFormGroup>
            <IInput name="password" type="password" />
        </IFormGroup>
    </IForm>
</template>
```

### Initial Field Value
Providing a default initial value for a validation schema field can be done by providing a value for the `value` field:

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/default-value"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/default-value.raw.vue" lang="vue"} -->
::


### Validators 
Validators are defined as an array of objects or strings. Each validator has specific properties that can be used to configure the validation rule.

[See the list of available validators.](/docs/forms/validation/validators)


```ts
const { schema } = useForm<{ field: string; }>({
    username: {
        validators: [
            'required'
        ]
    },
});
```

```ts
const { schema } = useForm<{ field: string; }>({
    password: {
        validators: [
            'required',
            { name: 'minLength', value: 8 },
        ]
    },
});
```



#### Custom Validator Error Message
Each validator accepts a custom validation error message using the `message` field. This allows you to easily use `i18n` to display custom translated error messages.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/validation-message"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/validation-message.raw.vue" lang="vue"} -->
::

### Validation Event
By using the `validateOn` field you can specify the event that triggers the validation. By default, fields get validated on both `input` and `blur`.

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/schema/validation-event"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/schema/validation-event.raw.vue" lang="vue"} -->
::

The default field validation events can be configured globally when initializing Inkline or by updating the value of `useInkline().options.validateOn`.
