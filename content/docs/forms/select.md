---
title: Select - Inkline
description: Form component used for selecting a value from a large list of options, with autocomplete and pagination support. 
---

# Select
## Form component used for selecting a value from a large list of options, with autocomplete and pagination support

The most basic use case for a select component is to have all the select options predefined using the `options` property. This component allows you to easily choose from a set of values and display a computed option label of your choice.

Here are some considerations to be made:
- Each option must be an Object `{}`
- Each option must have a unique identifier field, such as `id`
- The `selected` value will be the option itself

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/basic.vue" lang="vue"} -->
::


### Disabled State
Setting the `disabled` property will disable all interactions with the select component.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/disabled.vue" lang="vue"} -->
::

You can also disable individual options by setting the option's `disabled` field to `true`.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/disabled-option"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/disabled-option.vue" lang="vue"} -->
::


### Readonly State
Setting the `readonly` property will disable all interactions with the select component, except being able to focus the select.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/readonly.vue" lang="vue"} -->
::


### Clearable
If you need to be able to quickly clear the value of an select, you can add the `clearable` property to the select component.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/clearable"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/clearable.vue" lang="vue"} -->
::


### Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your select. Using prefixes and suffixes you can, for example, indicate 
your select type using an icon or text. 

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/prefix-suffix"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/prefix-suffix.vue" lang="vue"} -->
::


### Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the select by using prepend and append slots.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/prepend-append-text"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/prepend-append-text.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/prepend-append-button"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/prepend-append-button.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your select.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/color-variants.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` modifier to control the size of your select, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/size-variants.vue" lang="vue"} -->
::


### Header and Footer
You can provide a custom header and footer for the select menu using the `header` and `footer` slots.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/header-and-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/header-and-footer.vue" lang="vue"} -->
::


### Rendering

#### Value by Path
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


::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/rendering-value-by-path"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/rendering-value-by-path.vue" lang="vue"} -->
::


#### Render Function
If you assign a render method to the `label` property, you can easily construct your label using the option object's fields.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/rendering-render-function"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/rendering-render-function.vue" lang="vue"} -->
::


#### Scoped Slot
For more advanced option label designs, you can use the `#option` scoped slot to render each select option. The `label` property is still required for the input value and autocomplete functionality.

::ContentTabs
#preview
:ContentPreview{src="/components/ISelect/examples/rendering-scoped-slot"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ISelect/examples/rendering-scoped-slot.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="ISelect"}
::

### Slots
::ContentComponentSlots{component="ISelect"}
::

### Events
::ContentComponentEvents{component="ISelect"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ISelect"}
::
