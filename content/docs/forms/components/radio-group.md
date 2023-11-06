---
title: Radio Group - Inkline
description: Radio group inputs allow the user to select a single options from a set of options.
---

# Radio Group
## Radio group inputs allow the user to select a single options from a set of options. 

Using the `IRadioGroup` allows you to choose a value from multiple choices using a single model binding:

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/basic.raw.vue" lang="vue"} -->
::

### Disabled State
You can disable an entire radio group using the `disabled` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/disabled"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/disabled.raw.vue" lang="vue"} -->
::


### Color Variants
You can use the `color` property to set a `light` or `dark` color for your radios.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/color-variants.raw.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` property to control the size of your radio group, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

The chosen size will be applied to all of its child inputs.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/size-variants.raw.vue" lang="vue"} -->
::


### Options Object
The `IRadioGroup` component accepts an array of objects as its `options` prop.
- each item must contain a `id` property
- the `modelValue` property will be an array of the selected `id` values
- the `label` property is a `Renderable` will be used as the radio label.

```ts
export interface RadioGroupOption {
    id: string | number;
    label?: Renderable;
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
:ContentPreview{src="/components/IRadioGroup/examples/render-expression"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/render-expression.raw.vue" lang="vue"} -->
::

#### Render Function
Render functions are functions that return a string or `VNode`. They receive the option being rendered as an argument.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/render-function"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/render-function.raw.vue" lang="vue"} -->
::

#### Component
You can also use a component to render each option. The component will receive the option being rendered as a prop named `ctx` (context).

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/render-component"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/render-component.raw.vue" lang="vue"} -->
::

#### Render Per Option
Each option's `label` field is a `Renderable` property. This means you can also use a render function to render each option's label.

::ContentTabs
#preview
:ContentPreview{src="/components/IRadioGroup/examples/render-function-per-option"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IRadioGroup/examples/render-function-per-option.raw.vue" lang="vue"} -->
::


### Props
##### IRadio
::ContentComponentProps{component="IRadio"}
::
##### IRadioGroup
::ContentComponentProps{component="IRadioGroup"}
::

### Slots
##### IRadio
::ContentComponentSlots{component="IRadio"}
::
##### IRadioGroup
::ContentComponentSlots{component="IRadioGroup"}
::

### Events
##### IRadio
::ContentComponentEvents{component="IRadio"}
::
##### IRadioGroup
::ContentComponentEvents{component="IRadioGroup"}
::

### Design Tokens
##### IRadio
::ContentComponentDesignTokens{component="IRadio"}
::
##### IRadioGroup
::ContentComponentDesignTokens{component="IRadioGroup"}
::
