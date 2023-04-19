---
title: Code
description: Examples for displaying inline and multi-line blocks of code.
---

# Code

## Examples for displaying inline and multi-line blocks of code.

### Inline
Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/code/inline"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/code/inline.raw.vue" lang="vue"} -->
::

### Block
We use `<pre>` for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper
rendering. You may optionally add the `.-scrollable` modifier, which will set a max-height and provide a y-axis scrollbar.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/code/block"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/code/block.raw.vue" lang="vue"} -->
::

### Variables
For indicating variables use the HTML5 `<var>` tag.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/code/variables"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/code/variables.raw.vue" lang="vue"} -->
::

### User Input
You can use the `<kbd>` to indicate input that is typically entered via keyboard.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/code/user-input"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/code/user-input.raw.vue" lang="vue"} -->
::

### Sample Output
You can use the `<samp>` for indicating sample output from a program.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/code/sample-output"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/code/sample-output.raw.vue" lang="vue"} -->
::
