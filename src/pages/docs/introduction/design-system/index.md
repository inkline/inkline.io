---
title: Design System - Inkline
description: Create and configure a design system that looks exactly the way you want, without the hassle.
---

# Design System
## Create and configure a design system that looks exactly the way you want, without the hassle.

Your design system is the heart of your UI and UX. Consistency is key. Inkline can be configured from top to bottom using hundreds of global and component-level CSS Variables.

### The Variables File

First, if you haven't already, create a file called `src/main.scss` that will be imported in the application. 

This is where our CSS Variables will live. Or, if you're more experienced with Sass, extract these into a variables file. Here's an example of how the file should look like:

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --spacing: 1rem;
    
    --border-top-left-radius: 0.25rem;
    --border-top-right-radius: 0.25rem;
    --border-bottom-right-radius: 0.25rem;
    --border-bottom-left-radius: 0.25rem;
    
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
}

@include i-button() {
    ----padding-left: 2rem;
    ----padding-right: 2rem;
}
~~~

### CSS Variables Types
CSS Variables in Inkline have two levels of abstraction. This way we're able to override the design of the application and the components both globally and individually. Component CSS Variables, although based on the Global CSS Variables, can have calculated or derived values for the same property.

We've designed CSS Variables in Inkline to fall under one of two categories:

- **Global CSS Variables**

    The Global CSS Variables are prefixed with `--`, live under the `:root` selector, and provide inter-connected values that affect the overall design of the application (e.g. `--padding-left`, `--border-left-width`).
    
    ~~~scss
    var(--element--modifier--property--state);
    ~~~~

- **Local CSS Variables**

    The Local CSS Variables are prefixed with `----`, live under individual component selectors, and have values based on the Global CSS Variables (e.g. `----padding-left`, `----background`, `----color`).

    ~~~scss
    var(----element--modifier--property--state);
    ~~~~

If you're new to CSS Variables, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" rel="nofollow noopener">read this article</a>.

### Conventions
Inkline's Design System is very permissive, however there are a few conventions to follow in order to make sure values propagate throughout the application properly.

#### Composed values
Border, border-radius, box-shadow, margin, and padding values are configured individually to be usable in computed values.

~~~scss
var(--margin-top);
var(--margin-right);
var(--margin-bottom);
var(--margin-left);
~~~

#### Color format
Colors are written in HSL (Hue, Saturation, Lightness) format to be usable in computed color shades

~~~scss
var(--color--primary--h);
var(--color--primary--s);
var(--color--primary--l);
~~~
