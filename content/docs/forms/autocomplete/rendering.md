---
title: Autocomplete - Rendering
description: Use the various rendering options for the select options and define your data without restrictions. 
---

# Autocomplete - Rendering
## Use the various rendering options for the select options and define your data without restrictions

### Value by Path
Use the `label` property to define the path to an option value of your choice to use as label. Nested value paths are also supported.

Let's see an example. Given the data structure below:

~~~js
const options = [
    {
        id: 0,
        name: 'John Doe',
        address: {
            city: 'London'
        }
    }
];
~~~

The expected results are:

- `name` -> `John Doe`
- `address.city` -> `London`


<example :component="ISelectRenderingValueByPathExample" :html="ISelectRenderingValueByPathExampleHTML" :js="ISelectRenderingValueByPathExampleJS"></example>

### Render Function
If you assign a render method to the `label` property, you can easily construct your label using the option object's fields.

<example :component="ISelectRenderingRenderFunctionExample" :html="ISelectRenderingRenderFunctionExampleHTML" :js="ISelectRenderingRenderFunctionExampleJS"></example>

### Scoped Slot
For more advanced option label designs, you can use the `#option` scoped slot to render each select option. The `label` property is still required for the input value and autocomplete functionality.

<example :component="ISelectRenderingScopedSlotExample" :html="ISelectRenderingScopedSlotExampleHTML" :js="ISelectRenderingScopedSlotExampleJS"></example>





