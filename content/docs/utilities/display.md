---
title: Utilities - Display
description: Change the display style of components responsively with display utilities. 
---

# Display Utilities
## Change the display style of components responsively with display utilities. 

### How it works
The classes are named using the following format:

- `._display:{value}`

Where `value` can be one of:
- `block`
- `contents`
- `flex`
- `flow-root`
- `grid`
- `inline`
- `inline-block`
- `inline-flex`
- `none`
- `table`
- `table-cell`
- `table-row`


::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/display/inline"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/display/inline.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/display/block"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/display/block.vue" lang="vue"} -->
::


### Print
Change the display value of elements when printing with the print display utility classes.
- `._print:display:none`
- `._print:display:inline`
- `._print:display:inline-block`
- `._print:display:block`
