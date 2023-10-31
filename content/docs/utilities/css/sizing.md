---
title: CSS Utility Classes - Sizing - Inkline
description: Make an element as wide or as tall as you need using width and height utilities. 
---

:ContentHeading{ title="Sizing" subtitle="CSS Utility Classes" }
## Make an element as wide or as tall as you need using width and height utilities. 

Width and height utilities provide support for `25%`, `50%`, `75%`, `100%`, and auto by default.

### Width

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/sizing/width"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/sizing/width.raw.vue" lang="vue"} -->
::

### Height

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/sizing/height"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/sizing/height.raw.vue" lang="vue"} -->
::

### Max Width

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/sizing/max-width"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/sizing/max-width.raw.vue" lang="vue"} -->
::

### Max Height

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/sizing/max-height"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/sizing/max-height.raw.vue" lang="vue"} -->
::

### Viewport Relative Sizing
You can also use utilities to set the width and height relative to the viewport.

~~~html
<div class="_width:100vw">100% Viewport Width</div>

<div class="_height:100vh">100% Viewport Height</div>

<div class="_max-width:100vw">100% Viewport Max Width</div>

<div class="_max-height:100vh">100% Viewport Max Height</div>
~~~
