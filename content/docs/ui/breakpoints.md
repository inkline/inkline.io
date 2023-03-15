---
title: Breakpoints - Inkline
description: Inkline provides a set of predefined breakpoints that you can use in your Sass code to create responsive designs that adapt to different screen sizes.
---

# Breakpoints
## Inkline provides a set of predefined breakpoints that you can use in your Sass code to create responsive designs that adapt to different screen sizes.

The breakpoints are based on common device sizes and are designed to be easy to use and remember. Inkline provides the following breakpoints by default:

| Name  | From   | To        |
|-------|--------|-----------|
| `xs`  | 0px    | 575.99px  |
| `sm`  | 576px  | 767.99px  |
| `md`  | 768px  | 991.99px  |
| `lg`  | 992px  | 1199.99px |
| `xl`  | 1200px | 1399.99px |
| `2xl` | 1400px |           |

The default breakpoints represent common device sizes. [Read about breakpoints configuration](/docs/configuration/file#breakpoints)

Inkline provides a set of mixins to help you work with breakpoints in your Sass code. The mixins are designed to make it easy to write responsive styles that adapt to different screen sizes.

### Breakpoint Mixin

The `breakpoint` mixin allows you to define styles for a specific breakpoint. The mixin takes a single argument, which is the name of the breakpoint you want to target. For example:

::ContentTabs
#scss
~~~scss
@import '@inkline/inkline/css/mixins';

.my-class {
  font-size: 16px;

  @include breakpoint('md') {
    font-size: 20px;
  }
}
~~~
#output
~~~css
.my-class {
    font-size: 16px;
}

@media screen and (min-width: 768px) and (max-width: 991.99px) {
    .my-class {
        font-size: 20px;
    }
}
~~~
::

In this example, the font size of the `.my-class` element will be `16px` by default. However, when the screen size is at exactly equal to the `'md'` breakpoint size, the font size will change to `20px`.

### Breakpoint-up Mixin

The `breakpoint-up` mixin allows you to define styles that will be applied from a specific breakpoint size and up. The mixin takes a single argument, which is the name of the breakpoint you want to target. For example:

::ContentTabs
#scss
~~~scss
@import '@inkline/inkline/css/mixins';

.my-class {
  font-size: 16px;

  @include breakpoint-up('md') {
    font-size: 20px;
  }
}
~~~
#output
~~~css
.my-class {
    font-size: 16px;
}

@media screen and (min-width: 768px) {
    .my-class {
        font-size: 20px;
    }
}
~~~
::

In this example, the font size of the `.my-class` element will be `16px` by default. However, when the screen size is greater than or equal to the `'md'` breakpoint size, the font size will change to `20px` and stay that way for larger screen sizes.


### Breakpoint-down Mixin

The `breakpoint-down` mixin allows you to define styles that will be applied up to a specific breakpoint size. The mixin takes a single argument, which is the name of the breakpoint you want to target. For example:

::ContentTabs
#scss
~~~scss
@import '@inkline/inkline/css/mixins';

.my-class {
  font-size: 16px;

  @include breakpoint-down('md') {
    font-size: 12px;
  }
}
~~~
#output
~~~css
.my-class {
    font-size: 16px;
}

@media screen and (max-width: 991.99px) {
    .my-class {
        font-size: 12px;
    }
}
~~~
::

In this example, the font size of the `.my-class` element will be `16px` by default. However, when the screen size is less than or equal to the `'md'` breakpoint size, the font size will change to `12px` and stay that way for smaller screen sizes.

### Conclusion

Inkline's breakpoints provide a simple and effective way to create responsive designs that adapt to different screen sizes. Whether you use the default breakpoints or define your own, the `breakpoint`, `breakpoint-up`, and `breakpoint-down` mixins make it easy to write responsive styles that look great on any device.
