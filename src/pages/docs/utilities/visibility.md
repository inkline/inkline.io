---
title: Visibility Utilities - Inkline
description: Control the visibility, with or without modifying the display of elements. 
---

<script setup>
import {
    VisibilityBasicExample
} from '@inkline/inkline/stories/utilities/visibility';
import { default as VisibilityBasicExampleHTML } from '@inkline/inkline/stories/utilities/visibility/basic.html?raw';
</script>

# Visibility Utilities

## Control the visibility, with or without modifying the display of elements. 

### Basic Example

Set element visibility using visibility utilities. Content will be hidden both visually and for assistive technology/screen reader users.

~~~html
<div class="_hidden">...</div>
<div class="_visible">...</div>
~~~

Without modifying the element's display:

~~~html
<div class="_visibility:hidden">...</div>
<div class="_visibility:visible">...</div>
~~~

### Responsive Visibility
Visibility utilities can be applied responsively using the following helper classes:

- `._hidden`
- `._visible`
- `._{xs|sm|md|lg|xl|xxl}:hidden`
- `._{xs|sm|md|lg|xl|xxl}:visible`

<example :component="VisibilityBasicExample" :html="VisibilityBasicExampleHTML"></example>
