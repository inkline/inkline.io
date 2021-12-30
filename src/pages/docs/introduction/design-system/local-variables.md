---
title: Local Variables - Design System - Inkline
description: Configure the local CSS Variables to change the look and feel of individual components.
---

# Local Variables
## Configure the local CSS Variables to change the look and feel of individual components.

Inkline's local CSS Variables are component-specific and directly reference the global CSS Variables. Changing any global variable will propagate to the components.

### Basic Example

As seen in the <router-link :to="{ name: 'docs-introduction-design-system' }">Design System Overview</router-link>, our CSS Variables will live inside the `src/main.scss` file.

To make things easy, we provide Sass Helpers for selecting components and variants, so that you don't have to remember the component classes.

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
  // ... Global CSS Variables
}

@include i-button() {
    ----padding-left: 2rem;
    ----padding-right: 2rem;
    
    @include variant('sm') {
        ----font-size: 10px;
    }
    
    @include variant('light') {
        ----background: white;
    }
}
~~~

The Local CSS Variables are prefixed with `----`, to differentiate themselves from global variables. This way, they are usable for component-level size calculations, and composed variables. 

The list of variables available for a component can be found on each component documentation page.

<i-alert color="info" class="_margin-top:1">
    <template #icon>
        <i-icon name="ink-info" />
    </template>
    <p>
        When configuring computed variables with multiple values or sides, you need to configure each part individually.
    </p>
</i-alert>

### Component Selector Functions
The component selector helper functions have the same name as the component you're configuring. The contents of the function will be wrapped with a `.component-name` class selector.

The component selector functions are basically equivalent to selecting the component root class itself. Here are some examples:

```scss 
@include i-button() {}

// is equivalent to 

.button {}
```

<br>

```scss 
@include i-card() {}

// is equivalent to 

.card {}
```

<br>

```scss 
@include i-navbar() {}

// is equivalent to 

.navbar {}
```

### Variant Selector Functions
The component variant selector helper functions are used to select a specific **color** or **size** variant of the component. The contents of the function will be wrapped with a `&.-variant-name` class selector.

The component selector functions are basically equivalent to selecting the component variant class itself. Here are some examples:

```scss 
@include i-button() {
    @include variant('sm') {}

    @include variant('primary') {}
    
    @include variant('outline') {}
}

// is equivalent to 

.button {
    &.-sm {}
    
    &.-primary {}
    
    &.-outline {}
}
```
