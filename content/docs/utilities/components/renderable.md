---
title: Utility Components - Renderable - Inkline
description: A Renderable is a prop type that allows for highly dynamic rendering of UI elements. 
---

:ContentHeading{ title="Renderable" subtitle="Utility Components" }
## A Renderable is a prop type that allows for highly dynamic rendering of UI elements. 

It can take various types of input for rendering, ranging from primitives to render functions and Vue components:
- **Primitive** - A primitive type (`string`, `number`, `boolean`) will be rendered as is -
  - `'string'`
  - `123` 
  - `true` 
- **Expression** - Expressions are strings that use interpolation using the `{{ }}` syntax and will be evaluated using the provided context object and rendered as a string 
  - `Hello {{name}}!`
  - `I live in {{address.country}}.`
- **Render Function** - A render function will be called with the provided context object as an argument, and should return a primitive or a VNode
  - `(ctx) => ctx.label.toUpperCase()`
  - `(ctx) => h('strong', {}, ctx.name)`
  - `(ctx) => h(MyComponent, { ctx })`
- **Component** - A Vue component will be rendered as is and will receive the context through a `ctx` prop. Components need to be marked as `Raw` to disable reactivity
  - `markRaw(MyComponent)`

### Render Resolver

Renderable props are rendered using a `IRenderResolver` component. The `IRenderResolver` component is used internally by many Inkline components to render their content. It can also be used directly to render any type of content.

#### Examples

##### Primitive

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { IRenderResolver } from '@inkline/inkline';
import type { Renderable } from '@inkline/inkline';

const renderable = ref<Renderable>('Hello, World!');
</script>
<template>
    <IRenderResolver :render="renderable" />
</template>
```

```html
Hello, World!
```

##### Expression

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { IRenderResolver } from '@inkline/inkline';
import type { Renderable } from '@inkline/inkline';

const renderable = ref<Renderable>('Hello, {{name}}!');
const ctx = ref({ name: 'Alex' });
</script>
<template>
    <IRenderResolver :render="renderable" :ctx="ctx" />
</template>
```

```html
Hello, Alex!
```

##### Render Function

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { IRenderResolver } from '@inkline/inkline';
import type { Renderable } from '@inkline/inkline';

const renderable: Renderable = (ctx) => `Hello, ${ctx.name}!`;
const ctx = ref({ name: 'Alex' });
</script>
<template>
    <IRenderResolver :render="renderable" :ctx="ctx" />
</template>
```

```html
Hello, Alex!
```

##### Render Function with VNode

```vue
<script lang="ts" setup>
import { ref, h } from 'vue';
import { IRenderResolver } from '@inkline/inkline';
import type { Renderable } from '@inkline/inkline';

const renderable: Renderable = (ctx) => h('strong', {}, `Hello, ${ctx.name}!`);
const ctx = ref({ name: 'Alex' });
</script>
<template>
    <IRenderResolver :render="renderable" :ctx="ctx" />
</template>
```

```html
<strong>Hello, Alex!</strong>
```

##### Component

```vue
<script lang="ts" setup>
import { ref, markRaw } from 'vue';
import { IRenderResolver } from '@inkline/inkline';
import type { Renderable } from '@inkline/inkline';
import MyComponent from './MyComponent.vue';

const renderable: Renderable = markRaw(MyComponent);
const ctx = ref({ name: 'Alex' });
</script>
<template>
    <IRenderResolver :render="renderable" :ctx="ctx" />
</template>
```

```html
<MyComponent :ctx="ctx" />
```

#### Props

##### `render`
**Type**: `number | boolean | string | LabelRenderFunction | Raw<Component>`

**Default**: `''`

The primitive or render function to render. It can accept either primitive types (String, Number, Boolean), a render function, or a Vue component.

##### `ctx`
**Type**: `Object`

**Default**: `{}`

The context object that is passed to the render function or used for string interpolation.

##### `tag`
**Type**: `String`

**Default**: `undefined`

The HTML tag to use for rendering primitives. If not specified, a span will be used.
