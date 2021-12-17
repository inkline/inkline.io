---
title: Float Utilities - Inkline
description: You can use the float utility on any element, for any breakpoint. 
---

<script setup>
import {
    FloatBasicExample,
    FloatResponsiveExample
} from '@inkline/inkline/stories/utilities/float';
import { default as FloatBasicExampleHTML } from '@inkline/inkline/stories/utilities/float/basic.html?raw';
import { default as FloatResponsiveExampleHTML } from '@inkline/inkline/stories/utilities/float/responsive.html?raw';
</script>

# Float Utilities

## You can use the float utility on any element, for any breakpoint. 

### Basic Example
You can use the float utility classes to float an element to the left or right, or to disable floating, responsively. The utilities use the same viewport breakpoints as the grid system. 

<example :component="FloatBasicExample" :html="FloatBasicExampleHTML"></example>

<i-alert variant="info" class="_margin-top-1">
    <template #icon><i-icon name="ink-info"></i-icon></template>
     Float utilities do not affect flex items.
</i-alert>

### Responsive
Float utilities can be applied responsively using the following helper classes:

- `._float:left`
- `._float:right`
- `._float:none`
- `._{xs|sm|md|lg|xl|xxl}:float:left`
- `._{xs|sm|md|lg|xl|xxl}:float:right`
- `._{xs|sm|md|lg|xl|xxl}:float:none`

<example :component="FloatResponsiveExample" :html="FloatResponsiveExampleHTML"></example>
