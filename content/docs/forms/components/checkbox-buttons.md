---
title: Checkbox Buttons - Inkline
description: Checkbox buttons group inputs allow the user to select multiple options from a set using a group of buttons. 
---

# Checkbox Buttons
## Checkbox buttons group inputs allow the user to select multiple options from a set using a group of buttons. 

The `ICheckboxButtons` component allows you to control multiple selected values using a single binding.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/basic.raw.vue" lang="vue"} -->
::

### Disabled State
You can disable an entire checkbox buttons group using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/disabled.raw.vue" lang="vue"} -->
::

### Readonly State
You can disable an entire checkbox buttons group using the `readonly` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/readonly"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/readonly.raw.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your checkboxes.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/color-variants.raw.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` property to control the size of your checkbox buttons group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

The chosen size will be applied to all of its child inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/size-variants.raw.vue" lang="vue"} -->
::

### Style Variants
You're able to use the `variant` property to control the aspect of your checkbox buttons group, using one of the available variants: `default`, and `button-group`. The default variant is set to `default`. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/style-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/style-variants.raw.vue" lang="vue"} -->
::

### Options Object
The `ICheckboxButtons` component accepts an array of objects as its `options` prop.
- each item must contain a `id` property
- the `modelValue` property will be an array of the selected `id` values
- the `label` property is a `Renderable` will be used as the checkbox label.

```ts
export interface CheckboxButtonsOption {
    id: string | number;
    label?: Renderable;
    disabled?: boolean;
    readonly?: boolean;
    buttonProps?: Record<string, unknown>;
    [key: string]: any;
}
```

[Read more](/docs/utilities/components/renderable) about `Renderable` props.

### Rendering

#### Expression
Expressions are strings that can be interpolated using the `{{ }}` syntax. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/render-expression"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/render-expression.raw.vue" lang="vue"} -->
::

#### Render Function
Render functions are functions that return a string or `VNode`. They receive the option being rendered as an argument.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/render-function"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/render-function.raw.vue" lang="vue"} -->
::

#### Component
You can also use a component to render each option. The component will receive the option being rendered as a prop named `ctx` (context).

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/render-component"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/render-component.raw.vue" lang="vue"} -->
::

#### Render Per Option
Each option's `label` field is a `Renderable` property. This means you can also use a render function to render each option's label.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/render-function-per-option"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/render-function-per-option.raw.vue" lang="vue"} -->
::

#### Scoped Slot
The `option` scoped slot can be used to render each option. It receives the option being rendered as a prop named `option`.

::ContentTabs
#preview
:ContentPreview{src="/components/ICheckboxButtons/examples/render-slot"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICheckboxButtons/examples/render-slot.raw.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="ICheckboxButtons"}
::

### Slots
::ContentComponentSlots{component="ICheckboxButtons"}
::

### Events
::ContentComponentEvents{component="ICheckboxButtons"}
::

### Design Tokens
::ContentUtilityComponentDesignTokens{component="ICheckableButtonGroup"}
::
