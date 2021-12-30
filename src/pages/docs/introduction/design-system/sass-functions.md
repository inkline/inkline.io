---
title: Sass Functions - Design System - Inkline
description: Configure the global CSS Variables of the design system to instantly change the look and feel of your application.
---

# Sass Functions
## Configure the global CSS Variables of the design system to instantly change the look and feel of your application.

All of Inkline's Global CSS Variables propagate throughout the application and are used for design elements such as spacing, border, colors, and typography.

### Border
Inkline provides border-radius getter functions to quickly retrieve any border-radius variable variant.

##### Functions 

~~~scss
$size-key: 'md'; // 'sm', 'md', 'lg'

border-top-left-radius($size-key);
border-top-right-radius($size-key);
border-bottom-right-radius($size-key);
border-bottom-left-radius($size-key);
border-radius($size-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    border-radius: border-radius('lg');
}
~~~

##### Result

~~~css
.element {
    border-radius: var(--border-radius);
}
~~~


### Breakpoints
Inkline provides breakpoint getter functions to quickly retrieve any breakpoint variable variant.

##### Functions

~~~scss
$breakpoint-key: 'md'; // 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'

breakpoint($breakpoint-key);
@include breakpoint-up($breakpoint-key) {}
@include breakpoint-down($breakpoint-key) {}
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    @media screen and (max-width: #{breakpoint('md')}) {
        ...
    }
    
    @include breakpoint-down('md') {
        ...
    }
    
    @include breakpoint-up('md') {
        ...
    }
}
~~~

##### Result

~~~css
@media screen and (max-width: 768px) {
    .element {}
}

@media screen and (max-width: 768px) {
    .element {}
}

@media screen and (min-width: 768px) {
    .element {}
}
~~~

### Colors
Inkline provides color getter functions to quickly retrieve any color variable variant.

##### Functions

~~~scss
$color-key: 'gray-60'; // any color variant key

color($color-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    background: color('white');
    color: color('primary');
}
~~~

##### Result

~~~css
.element {
    background: var(--color--white);
    color: var(--color--primary);
}
~~~

### Gutter
Inkline provides gutter getter functions to quickly retrieve any gutter variable variant. The gutter is used for spacing grid elements such as column, row, and container.

##### Functions

~~~scss
$size-key: 'md'; // 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'

gutter($size-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    margin-right: gutter('sm');
}
~~~

##### Result

~~~css
.element {
    margin-right: var(--gutter--sm);
}
~~~

### Scale ratio
Inkline provides scale ratio getter functions to quickly retrieve any scale ratio variable variant.

##### Functions

~~~scss
$scale-ratio-key: 'minor-third'; // any scale ratio key

scale-ratio($scale-ratio-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    padding: calc(#{spacing()} * #{scale-ratio('major-third')});
}
~~~

##### Result

~~~css
.element {
    padding: calc(var(--spacing) * var(--scale-ratio--major-third));
}
~~~


### Sizes
Inkline provides size getter functions to quickly retrieve any size variable variant.

##### Functions

~~~scss
$size-percentage-key: '0'; // '0', '25', '50', '75', '100'
$size-multiplier-key: 'md'; // 'xs', 'sm', 'md', 'lg', 'xl'

size-percentage($size-percentage-key);
size-multiplier($size-multiplier-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    padding: calc(#{spacing()} * #{size-multiplier('lg')});
}
~~~

##### Result

~~~css
.element {
    padding: calc(var(--spacing) * var(--size-multiplier--lg));
}
~~~


### Spacing
Inkline provides spacing getter functions to quickly retrieve any spacing variable variant.

##### Functions

~~~scss
$spacing-key: '1/2'; // '1/2', '1/3', '2/3', '1/4', '3/4', '0', '1', '2', '3', '4', '5', '6', '7', '8'

spacing($spacing-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    padding: spacing('2');
}
~~~

##### Result

~~~css
.element {
    padding: calc(var(--spacing) * 2);
}
~~~

### Typography
Inkline provides typography getter functions to quickly retrieve any typography variable variant.

##### Functions

~~~scss
$font-family-key: 'base'; // 'base', 'monospace', 'print'
$size-key: 'md'; // 'xs', 'sm', 'md', 'lg', 'xl'
$font-weight-key: 'semibold'; // 'extralight', 'light', 'lighter', 'normal', 'semibold', 'bold', 'bolder', 'black'
$heading-font-size-key: 'h1'; // 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
$display-font-size-key: 'd1'; // 'd1', 'd2', 'd3', 'd4', 'd5', 'd6'

font-family-primary($font-family-key);
font-family-secondary($font-family-key);
font-size($size-key);
font-weight($font-weight-key);
heading-font-size($heading-font-size-key);
display-font-size($display-font-size-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.title {
    font-family: font-family-secondary('base');
    font-size: font-size('lg');
    font-weight: font-weight('bold');
}
~~~

##### Result

~~~css
.title {
    font-family: var(--font-family-secondary--base);
    font-size: var(--font-size--lg);
    font-weight: var(--font-weight--bold);
}
~~~

### Z-Index
Inkline provides z-index getter functions to quickly retrieve any z-index variable variant.

##### Functions

~~~scss
$z-index-key: 'sticky'; // 'dropdown', 'sticky', 'fixed', 'modal-backdrop', 'modal', 'popover', 'tooltip'

z-index($z-index-key);
~~~

##### Basic usage

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

.element {
    top: 0;
    left: 0;
    position: absolute;
    z-index: z-index('tooltip');
}
~~~

##### Result

~~~css
.element {
    top: 0;
    left: 0;
    position: absolute;
    z-index: var(--z-index--tooltip);
}
~~~

