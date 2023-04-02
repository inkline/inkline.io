---
title: Concepts - Inkline
description: Learn more about the intuitive concepts used throughout the UI Library and Inkline's design decisions.
---

# Concepts 
## Learn more about the intuitive concepts used throughout the UI Library and Inkline's design decisions.

### Component Naming Convention
When designing Inkline, component names and prop names were chosen to be as intuitive as possible. The naming rules are:

- **Namespacing** - Component names should be namespaced using the <code>I</code> prefix to be easily recognizable and to avoid conflicts.
- **Simplicity** - Component names should be simple words where possible in order for them to be easy to remember: <code>IContainer</code>, <code>IButton</code>, <code>INavbar</code>, etc.
- **Clarity** - Component names should clearly reflect parent-child component relationships: <code>INav</code> and <code>INavItem</code>.
- **Consistency** - Component prop names should be reused as often as possible to promote consistency: <code>color</code>, <code>size</code>, <code>disabled</code>, etc.

### CSS Naming Convention
Inkline uses <a href="https://ricostacruz.com/rscss/" rel="nofollow" target="_blank">RSCSS</a> (Reasonable System for CSS Stylesheet Structure) principles as a base for naming classes, making them much easier to read and write. RSCSS is a simplified, more readable version of BEM.

The RSCSS naming convention encourages you to think in components and revolves around three core concepts: components, variants and utilities.

~~~html
<div class="container -fluid _text:center">
~~~

- `.container` represents a component class
- `.-fluid` represents a variant class, specific to the component
- `._text:center` represents a utility class

##### Components
Components are standalone entities that are meaningful on their own. Each component should be aware of its own design only, and should be usable without a specific context unless it's the only context they should be used in.

~~~scss
.navbar { /* ... */ }

.container { /* ... */ }

.button { /* ... */ }
~~~

##### Variants
Components may have variants that modify their appearance or behaviour. Class names for variants will be prefixed by a dash (`-`).

~~~scss
.button {
    &.-primary { /* ... */ }
    &.-disabled { /* ... */ }
    &.-block { /* ... */ }
}
~~~

##### Utilities
Utility classes are general-purpose helper classes meant to override values. Class names for helpers will be prefixed by an underscore (`_`). When adding the `!` suffix, helpers provide styles that are tagged with `!important`.

~~~scss
._margin:0 { margin: 0; }

._text:center { text-align: center; }

._display:flex! { display: flex !important; }
~~~

##### Design Tokens
CSS Variables in Inkline have a consistent naming scheme that you can follow whenever you want to redesign a component.

- Global Design Tokens use only single hyphens `-`, can be either **standalone** or **composed**, and are very intuitively named:

```scss
var(--padding); // var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left)
var(--color-primary) // var(--color-primary-h) var(--color-primary-s) var(--color-primary-l) var(--color-primary-a)
```

```scss
var(--margin-top);
var(--font-weight-bold);
```

- Component Design Tokens use the following naming convention:

```scss
var(--[component]--[variant]--[state]--[element]--[elementVariant]--[elementState]--[property])
```

```scss
var(--navbar--light--item--color);

var(--button--primary--disabled--background);
```


[Read more](/docs/ui/design-tokens) about the Design Tokens.
