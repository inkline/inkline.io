---
title: Checkbox Group - Inkline
description: Checkbox group inputs allow the user to select multiple options from a set. 
---

# Checkbox Group
## Checkbox group inputs allow the user to select multiple options from a set. 

The `ICheckboxGroup` component allows you to control multiple selected values using a single binding.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/basic.raw.vue" lang="vue"} -->
::

### Disabled State
You can disable an entire checkbox group using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/disabled.raw.vue" lang="vue"} -->
::

### Readonly State
You can disable an entire checkbox group using the `readonly` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/readonly.raw.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your checkbox group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

The chosen size will be applied to all of its child inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/size-variants.raw.vue" lang="vue"} -->
::

### Options Object
The `ICheckboxGroup` component accepts an array of objects as its `options` prop.
- each item must contain a `id` property
- the `modelValue` property will be an array of the selected `id` values
- the `label` property is a `Renderable` will be used as the checkbox label.

```ts
export interface CheckboxGroupOption {
    id: string | number;
    label?: Renderable;
    value?: FormValue;
    disabled?: boolean;
    readonly?: boolean;
    [key: string]: any;
}
```

[Read more](/docs/utilities/components/renderable) about `Renderable` props.

### Rendering

#### Expression
Expressions are strings that can be interpolated using the `{{ }}` syntax. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/render-expression"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/render-expression.raw.vue" lang="vue"} -->
::

#### Render Function
Render functions are functions that return a string or `VNode`. They receive the option being rendered as an argument.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/render-function"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/render-function.raw.vue" lang="vue"} -->
::

#### Component
You can also use a component to render each option. The component will receive the option being rendered as a prop named `ctx` (context).

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/render-component"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/render-component.raw.vue" lang="vue"} -->
::

#### Render Per Option
Each option's `label` field is a `Renderable` property. This means you can also use a render function to render each option's label.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/render-function-per-option"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/render-function-per-option.raw.vue" lang="vue"} -->
::

#### Scoped Slot
The `option` scoped slot can be used to render each option. It receives the option being rendered as a prop named `option`.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxGroup/examples/render-slot"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxGroup/examples/render-slot.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="ICheckboxGroup"}
::

### Slots
::ContentComponentSlots{component="ICheckboxGroup"}
::

### Events
::ContentComponentEvents{component="ICheckboxGroup"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ICheckbox"}
::
