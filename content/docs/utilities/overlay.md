---
title: Utilities - Overlay
description: Make an element overlay its container by adding overlay utilities. 
---

# Overlay Utilities
## Make an element overlay its container by adding overlay utilities. 

Add the `_overlay` utility class to an element to make it cover the entire containing block. The containing block refers to a parent element with `position: relative;`.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/overlay/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/overlay/basic.raw.vue" lang="vue"} -->
::


### Overlay Link
Add the `_overlay-link` utility class to a link to make the entire containing block clickable using a `::after` pseudo-element. In most cases, the containing block refers to the parent element with `position: relative;`.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/overlay/link"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/overlay/link.raw.vue" lang="vue"} -->
::
