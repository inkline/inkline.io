---
title: Typography
description: Discover Inkline's typography documentation and learn how to use a variety of typefaces, sizes, weights, and styles to make your content stand out.
---

# Typography
## Discover Inkline's typography documentation and learn how to use a variety of typefaces, sizes, weights, and styles to make your content stand out.

Inkline provides you with basic elements, typography, and link styles. It uses a native font stack that selects the best font family for each OS and device. The base font size is `1rem`, so visitors can customize their font size as needed when zooming.

When more control is needed, you should check out the textual utility classes. Each font size, style and weight also has a corresponding helper class to style other elements the same.

### Headings
All HTML heading sizes, `<h1>` through `<h6>`, are calculated using a multiplication of two factors: the base font size defined by the `var(--font-size)` CSS variable, and the `var(--scale-ratio)` minor third scale.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/headings"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/headings.raw.vue" lang="vue"} -->
::

You can use helper classes to achieve heading styles. Classes `.h1` through `.h6` are available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/heading-helpers"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/heading-helpers.raw.vue" lang="vue"} -->
::

### Displays
Displays are text elements larger than headings used for grabbing the viewer's attention and making a bold statement. Typically, displays are used in hero sections, banners, or call-to-actions: `.d1` through `.d6` are available.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/displays"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/displays.raw.vue" lang="vue"} -->
::

### Lead
A lead paragraph sets the tone for the rest of the content that follows. It is usually found at the beginning of an article or section and serves to capture the reader's attention and provide a brief summary of what they can expect from the content.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/lead"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/lead.raw.vue" lang="vue"} -->
::

### Inline Text Elements
Inkline provides basic styling for all common HTML5 inline text elements.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/inline-text-elements"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/inline-text-elements.raw.vue" lang="vue"} -->
::

To avoid any unwanted semantic implications that the tags would bring, `.mark` and `.small` classes are also
available to apply the same styles as `<mark>` and `<small>`.

While not shown above, you can also use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases
without adding additional semantics, while `<i>` is mostly for voice, technical terms, etc.

### Text Utilities
You can change text alignment, transform, style, weight, and color with text utilities and [color utilities](/docs/utilities/color).

#### Text Alignment
You can easily realign text to components with text alignment classes.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/text-alignment"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/text-alignment.raw.vue" lang="vue"} -->
::

#### Text Wrapping
You can prevent text wrapping using the `._text:nowrap` utility class.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/text-wrapping"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/text-wrapping.raw.vue" lang="vue"} -->
::

#### Responsive Utilities

You can align, wrap or truncate text responsively for any given `xs`, `sm`, `md`, `lg`, or `xl` breakpoint by adding the breakpoint prefix:

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/responsive-utilities"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/responsive-utilities.raw.vue" lang="vue"} -->
::

### Abbreviations
The HTML `<abbr>` element for abbreviations and acronyms is styled to show the expanded version on hover.
Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of
assistive technologies.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/abbreviations"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/abbreviations.raw.vue" lang="vue"} -->
::

### Blockquotes
To quote blocks of content from another source within your document, wrap `<blockquote class="blockquote">` around any
HTML as the quote.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/blockquotes"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/blockquotes.raw.vue" lang="vue"} -->
::

### Lists
To enumerate a sequence of elements, you can use lists. Inkline provides you with multiple variations to achieve your
target design.

#### Unordered Lists
When enumerating elements in no specific order, use an unordered list.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/unordered-list"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/unordered-list.raw.vue" lang="vue"} -->
::

#### Ordered Lists
When enumerating elements in a specific order, use an ordered list.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/ordered-list"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/ordered-list.raw.vue" lang="vue"} -->
::

#### Unstyled Lists
To remove the default `list-style` and `margin` on list items, use the `.list.-unstyled` classes or the `._list:unstyled` utility class. This applies to immediate children list items only, meaning you will need to add the class for any nested lists as well.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/unstyled-list"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/unstyled-list.raw.vue" lang="vue"} -->
::

#### Inline Lists
Inline lists are a great way to display a series of related items in a single line, using the `.list.-inline` classes or the `._list:inline` utility class. Rather than creating a separate bullet list or numbering system, inline lists are integrated into the text flow, making them a more visually pleasing and space-efficient option.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/inline-list"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/inline-list.raw.vue" lang="vue"} -->
::

#### Description Lists
Description lists are used to present a list of terms and their corresponding descriptions. They are commonly used to define technical terms, glossaries, or metadata.

::ContentAlert
In the example below you can see that we're using the globally defined `.row` and `.column` classes. These classes behave exactly like their grid component counterparts.
::

::ContentTabs
#preview
:ContentPreview{src="/stories/core/typography/description-list"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/typography/description-list.raw.vue" lang="vue"} -->
::
