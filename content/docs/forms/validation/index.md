---
title: Form Validation - Inkline
description: Inkline provides you with powerful form validation utilities. 
---

# Form Validation
## Inkline provides you with powerful form validation utilities. 

The built-in Form Validation package allows you to define a form validation schema which you will bind to your form components. 

Using this declarative approach has several advantages and allows for easy and intuitive form validation:
- maintainable form validation schema
- programmatically customizable and extendable
- schema nesting and nested form validation
- built-in validation status propagation
- easy serialization
- clean template markup

### Basic Example
Let's create a basic signup form that has a `username` and a `password` field. Validation for this kind of form is usually a headache, but Inkline makes it simple for you. Basic validation for these fields usually includes:
- The username is required
- The password is required
- The password is at least 8 characters long
- The password contains at least one uppercase character
- The password contains at least one lowercase character 
- The password contains at least one numeric character 
- The password contains at least one symbol

The form validation schema prototype is available for both the Options API and the Composition API. Choose the one that you prefer.

#### 1. Defining the form schema
First, we'll create our schema with two fields: `username` and `password`. 

The form schema prototype is created using the `useForm` utility inside components and will be used as the foundation for form validation schemas. The composable is type safe and requires a generic base type that determines the shape of your form. 

There are three values being returned by the `useForm` composable:
- `schema` - the resolved schema with all validation fields
- `form` - the serialized form values, computed based on the schema
- `validate` - a function to validate the schema on demand

~~~html
<script lang="ts" setup>
import { useForm } from '@inkline/inkline';

const { schema } = useForm<{
    username: string;
    password: string;
}>({
    username: {},
    password: {},
});
</script>
~~~

#### 2. Connecting the form schema to the form components

Next, the created `schema` object needs to be bound to the form input components inside your template as follows:
 - The form component handles field value changes using the `v-model` directive
 - Each field name inside the defined schema connects to an input using the `name` property in your template

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/basic-binding"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/basic-binding.raw.vue" lang="vue"} -->
::

For the example above, `schema.value.username` and `schema.value.password` would be objects containing the field value, errors and validation statuses.

#### 3. Adding the form validators

Next, let's add the previously mentioned validators to the created form schema:

~~~html
<script lang="ts" setup>
import { useForm } from '@inkline/inkline';

const { schema } = useForm<{
    username: string;
    password: string;
}>({
    username: {
        validators: [
            {
                name: 'required'
            }
        ]
    },
    password: {
        validators: [
            {
                name: 'required'
            },
            {
                name: 'minLength',
                value: 8
            },
            {
                name: 'custom', // lowercase
                message: 'Please enter at least one lowercase character.',
                validator: (v) => /[a-z]/.test(v)
            },
            {
                name: 'custom', // uppercase
                message: 'Please enter at least one uppercase character.',
                validator: (v) => /[A-Z]/.test(v)
            },
            {
                name: 'custom', // numeric
                message: 'Please enter at least one numeric character.',
                validator: (v) => /[0-9]/.test(v)
            },
            {
                name: 'custom', // symbol
                message: 'Please enter at least one symbol.',
                validator: (v) => /[^a-zA-Z0-9]/.test(v)
            }
        ]
    }
});
</script>
~~~

::ContentTabs
#preview
:ContentPreview{src="/stories/forms/validation/basic-validators"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/forms/validation/basic-validators.raw.vue" lang="vue"} -->
::

You can also register custom validators for your form schema. [Read more](/docs/forms/validation/validators) about validators.

#### 4. Enjoy!

Did you see how simple that was? Inkline makes even the most advanced form validation a breeze. 

Behind the scenes, the validation utility will validate values using the set of rules you define, handle the displaying of error messages, automatically serialize the schema, and provide you with useful `valid`, `invalid`, `touched`, `untouched`, `dirty` and `pristine` statuses.

### Using Options API (Deprecated)
Although the Options API is deprecated, you can still use it to define your form schema.

The form schema prototype will created using `this.$inkline.form` inside components and will be used as the foundation for creating form validation schemas.

~~~js
<script lang="ts">
import { defineComponent } from 'vue';
    
export default defineComponent({
    data() {
        return {
            schema: this.$inkline.form<{
                username: string;
                password: string;
            }>({
                username: {},
                password: {},
            })
        };   
    }       
});  
</script>
~~~
