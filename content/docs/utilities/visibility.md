---
title: Utilities - Visibility - Inkline
description: Control the visibility, with or without modifying the display of elements. 
---

# Visibility Utilities
## Control the visibility, with or without modifying the display of elements. 

Set element visibility using visibility utilities. Content will be hidden both visually and for assistive technology/screen reader users.

- `._hidden`
- `._visible`
- `._{xs|sm|md|lg|xl|2xl}:hidden`
- `._{xs|sm|md|lg|xl|2xl}:visible`

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

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/visibility/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/visibility/basic.raw.vue" lang="vue"} -->
::
