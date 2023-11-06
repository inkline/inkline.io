---
title: Form Validation - Serialization - Inkline
description: The serialized form schema is an object that contains the current value of each form input.
---

:ContentHeading{ title="Serialization" subtitle="Form Validation" }
## The serialized form schema is an object that contains the current value of each form input.

The serialized `form` is returned by the `useForm()` composable alongside the form schema. The serialized schema is a computed ref and will be kept up-to-date when an input value changes.

```ts
const { form } = useForm<{
    field: number;
    group: {
        a: string;
        b: string;
    };
    array: string[];
}>({
    field: {
        value: 42
    },
    group: {
        a: {
            value: 'Group Field A'
        },
        b: {
            value: 'Group Field B'
        }
    },
    array: [
        {
            value: 'Item 1'
        },
        {
            value: 'Item 2'
        }
    ]
});
```

##### Serialized Schema
The serialized `form` schema object looks as follows:

```ts
{
    field: 42,
    group: {
        a: 'Group Field A',
        b: 'Group Field B'
    },
    array: [
        'Item 1',
        'Item 2'
    ]
}
```
