---
title: Utilities - Text - Inkline
description: Use common text utilities to control alignment, wrapping, weight, and more. 
---

# Text Utilities
## Use common text utilities to control alignment, wrapping, weight, and more. 

### Text Alignment
Use text alignment utilities to easily align text in components. 

- `_text-align:justify` or `_text:justify`
- `_text-align:left` or `_text:left`
- `_text-align:center` or `_text:center`
- `_text-align:right` or `_text:right`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-align-justify"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-align-justify.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-align"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-align.raw.vue" lang="vue"} -->
::


### Text Wrapping and Overflow
You can control text wrapping and overflow with the following utilities:

- `_white-space:normal` or `_text:wrap`
- `_white-space:nowrap` or `_text:nowrap`
- `_text:truncate`

Text wrapping utilities also come with breakpoint-specific classes, same as text alignment classes.

##### Text Wrap
You can wrap text using the `_white-space:normal` utility class.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-wrap"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-wrap.raw.vue" lang="vue"} -->
::

##### Text Nowrap
You can prevent text from wrapping with a `_white-space:nowrap` utility class.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-nowrap"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-nowrap.raw.vue" lang="vue"} -->
::

##### Text Truncate
For longer content, adding the `_text:truncate` utility class will truncate the text with an ellipsis. Truncation requires `display: inline-block` or `display: block`.

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-truncate"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-truncate.raw.vue" lang="vue"} -->
::


### Word Break
Prevent long strings of text from breaking your layout by using `_text:break-word`. Behind the scenes, it uses `overflow-wrap: break-word` and `word-break: break-word` for IE & Edge compatibility.

- `_text:break-word`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-break"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-break.raw.vue" lang="vue"} -->
::


### Text Transform
You can transform text in components using text capitalization utility classes.

- `_text-transform:lowercase` or `_text:lowercase`
- `_text-transform:uppercase` or `_text:uppercase`
- `_text-transform:capitalize` or `_text:capitalize`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-transform"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-transform.raw.vue" lang="vue"} -->
::


### Font Weight
Font Weight utility classes enable you to emphasize or de-emphasize text by controlling its boldness. These utilities contribute to establishing a clear text hierarchy, improving the overall readability of your content.

- `_font-weight:extralight` or `_text:extralight`
- `_font-weight:light` or `_text:light`
- `_font-weight:normal` or `_text:normal`
- `_font-weight:semibold` or `_text:semibold`
- `_font-weight:bold` or `_text:bold`
- `_font-weight:black` or `_text:black`
- `_font-weight:lighter` or `_text:lighter`
- `_font-weight:bolder` or `_text:bolder`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/font-weight"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/font-weight.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/font-weight-relative"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/font-weight-relative.raw.vue" lang="vue"} -->
::


### Font Style
Italic utility classes allow you to style text with an italic font style. This can be particularly useful for emphasizing certain words or phrases, or for distinguishing between different types of content, such as quotes or citations.

- `_font-style:italic` or `_text:italic`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/font-style-italic"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/font-style-italic.raw.vue" lang="vue"} -->
::


### Font Size
Font size utilities provide a convenient way to increase or decrease the font size of your content.

- `_font-size:xs` or `_text:xs`
- `_font-size:sm` or `_text:sm`
- `_font-size:md` or `_text:md`
- `_font-size:lg` or `_text:lg`
- `_font-size:xl` or `_text:xl`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/font-size"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/font-size.raw.vue" lang="vue"} -->
::


### Monospace
Change your text to be monospaced using the `_font-family:monospace` utility.

- `_font-family:monospace` or `_text:monospace`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/font-monospace"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/font-monospace.raw.vue" lang="vue"} -->
::

### Text Decoration
You can easily remove or add text decoration using the text decoration utility.

- `_text-decoration:none` 
- `_text-decoration:underline`
- `_text-decoration:line-through`
- `_text-decoration:overline`
- `_text-decoration:inherit`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-decoration"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-decoration.raw.vue" lang="vue"} -->
::

### Weak Text
Make your text stand out less using the weak or muted text color utility.

- `_text:weak` or `_color:weak`
- `_text:weaker` or `_color:weaker`
- `_text:weakest` or `_color:weakest`
- `_text:muted` or `_color:muted`


::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-muted"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-muted.raw.vue" lang="vue"} -->
::


### Text Reset
Make your text or link inherit the parent's color using the text reset utility.

- `_text:reset`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/text-reset"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/text-reset.raw.vue" lang="vue"} -->
::


### Text Hide
You can make your text disappear without hiding the element by using the `text-indent: -10000px` trick. This is available using the following utility class:

- `_text:hide`

### Lists
You can use list utilities to obtain inline and unstyled lists.

- `_list:inline` or `list -inline`
- `_list:unstyled` or `list -unstyled`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/text/lists"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/text/lists.raw.vue" lang="vue"} -->
::

