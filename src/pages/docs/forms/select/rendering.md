---
title: Select Rendering - Inkline
description: Use the various rendering options for the select options and define your data without restrictions. 
---

<script setup>
import {
    ISelectRenderingRenderFunctionExample,
    ISelectRenderingValueByPathExample,
    ISelectRenderingScopedSlotExample
} from '@inkline/inkline/components/ISelect/examples';
import { default as ISelectRenderingRenderFunctionExampleHTML } from '@inkline/inkline/components/ISelect/examples/rendering-render-function.html?raw';
import { default as ISelectRenderingRenderFunctionExampleJS } from '@inkline/inkline/components/ISelect/examples/rendering-render-function.js?raw';
import { default as ISelectRenderingValueByPathExampleHTML } from '@inkline/inkline/components/ISelect/examples/rendering-value-by-path.html?raw';
import { default as ISelectRenderingValueByPathExampleJS } from '@inkline/inkline/components/ISelect/examples/rendering-value-by-path.js?raw';
import { default as ISelectRenderingScopedSlotExampleHTML } from '@inkline/inkline/components/ISelect/examples/rendering-scoped-slot.html?raw';
import { default as ISelectRenderingScopedSlotExampleJS } from '@inkline/inkline/components/ISelect/examples/rendering-scoped-slot.js?raw';
</script>


# Select Rendering
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





