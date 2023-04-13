---
title: Utilities - Spacing
description: You can use a wide range of responsive margin and padding utility classes to modify an element’s appearance. 
---

# Spacing Utilities
## You can use a wide range of responsive margin and padding Utilities to modify an element’s appearance. 

The spacing utility classes are named using the following format:

- `._{property}:{size}`
- `._{property}-{side}:{size}`

[//]: # (- `._{breakpoint}:{property}-{side}:{size}` )

Where *property* is one of:
- `margin`
- `padding`

Where *side* is one of:
- `top` for top side
- `right` for right side
- `bottom` for bottom side
- `left` for left side
- `x` for horizontal (left and right) sides
- `y` for vertical (top and bottom) sides
- none for all 4 sides

Where *size* is one of:
- `0` for eliminating `margin` or `padding`
- `1` for classes setting `margin` or `padding` to `var(--margin) * 1`
- `2` for classes setting `margin` or `padding` to `var(--margin) * 2`
- `3` for classes setting `margin` or `padding` to `var(--margin) * 3`
- `4` for classes setting `margin` or `padding` to `var(--margin) * 4`
- `5` for classes setting `margin` or `padding` to `var(--margin) * 5`
- `6` for classes setting `margin` or `padding` to `var(--margin) * 6`
- `7` for classes setting `margin` or `padding` to `var(--margin) * 7`
- `8` for classes setting `margin` or `padding` to `var(--margin) * 8`
- `1/2` for classes setting `margin` or `padding` to `var(--margin) * 1/2`
- `1/3` for classes setting `margin` or `padding` to `var(--margin) * 1/3`
- `2/3` for classes setting `margin` or `padding` to `var(--margin) * 2/3`
- `1/4` for classes setting `margin` or `padding` to `var(--margin) * 1/4`
- `3/4` for classes setting `margin` or `padding` to `var(--margin) * 3/4`
- `auto` for classes setting `margin` or `padding` to `auto`

[//]: # (And `breakpoint` is one of:)

[//]: # (- `xs`)

[//]: # (- `sm`)

[//]: # (- `md`)

[//]: # (- `lg`)

[//]: # (- `xl`)

[//]: # (- `2xl`)


### Basic Example
Here are some examples of these utility classes:

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/spacing/top"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/spacing/top.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/spacing/right"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/spacing/right.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/spacing/bottom"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/spacing/bottom.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/spacing/left"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/spacing/left.vue" lang="vue"} -->
::

### Horizontal Centering
You can set a `left` and `right` margin using the `x` side parameter, such as `_margin-x:auto`. The `_margin-x:auto` class is useful for horizontally centering fixed-width block level content.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/spacing/horizontal-center"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/spacing/horizontal-center.vue" lang="vue"} -->
::
