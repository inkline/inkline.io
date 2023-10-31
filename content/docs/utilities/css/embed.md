---
title: CSS Utility Classes - Embed - Inkline
description: Create responsive video embeds by keeping the aspect ratio based on the parent element width. 
---

:ContentHeading{ title="Embed" subtitle="CSS Utility Classes" }
## Create responsive video embeds by keeping the aspect ratio based on the parent element width. 

### Basic Example
Embed styles are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/embed/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/embed/basic.raw.vue" lang="vue"} -->
::


### Aspect Ratios
Aspect ratios can be customized with embed helper classes. The following aspect ratio classes are available:

~~~html
<!-- 21:9 aspect ratio -->
<div class="_embed:21:9">
    <iframe src="..."></iframe>
</div>
~~~

~~~html
<!-- 16:9 aspect ratio -->
<div class="_embed:16:9">
    <iframe src="..."></iframe>
</div>
~~~

~~~html
<!-- 4:3 aspect ratio -->
<div class="_embed:4:3">
    <iframe src="..."></iframe>
</div>
~~~

~~~html
<!-- 1:1 aspect ratio -->
<div class="_embed:1:1">
    <iframe src="..."></iframe>
</div>
~~~
