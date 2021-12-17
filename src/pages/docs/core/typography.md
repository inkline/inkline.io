---
title: Typography - Inkline
description: Examples and documentation for typography, one of the most important design elements of an application. 
---

<script setup>
import {
    TypographyAbbreviationsExample,
    TypographyBlockquotesExample,
    TypographyDescriptionListExample,
    TypographyDisplaysExample,
    TypographyHeadingHelpersExample,
    TypographyHeadingsExample,
    TypographyInlineListExample,
    TypographyInlineTextElementsExample,
    TypographyLeadExample,
    TypographyOrderedListExample,
    TypographyResponsiveUtilitiesExample,
    TypographyTextAlignmentExample,
    TypographyTextWrappingExample,
    TypographyUnorderedListExample,
    TypographyUnstyledListExample
} from '@inkline/inkline/stories/core/typography';
import { default as TypographyAbbreviationsExampleHTML } from '@inkline/inkline/stories/core/typography/abbreviations.html?raw';
import { default as TypographyBlockquotesExampleHTML } from '@inkline/inkline/stories/core/typography/blockquotes.html?raw';
import { default as TypographyDescriptionListExampleHTML } from '@inkline/inkline/stories/core/typography/description-list.html?raw';
import { default as TypographyDisplaysExampleHTML } from '@inkline/inkline/stories/core/typography/displays.html?raw';
import { default as TypographyHeadingHelpersExampleHTML } from '@inkline/inkline/stories/core/typography/heading-helpers.html?raw';
import { default as TypographyHeadingsExampleHTML } from '@inkline/inkline/stories/core/typography/headings.html?raw';
import { default as TypographyInlineListExampleHTML } from '@inkline/inkline/stories/core/typography/inline-list.html?raw';
import { default as TypographyInlineTextElementsExampleHTML } from '@inkline/inkline/stories/core/typography/inline-text-elements.html?raw';
import { default as TypographyLeadExampleHTML } from '@inkline/inkline/stories/core/typography/lead.html?raw';
import { default as TypographyOrderedListExampleHTML } from '@inkline/inkline/stories/core/typography/ordered-list.html?raw';
import { default as TypographyResponsiveUtilitiesExampleHTML } from '@inkline/inkline/stories/core/typography/responsive-utilities.html?raw';
import { default as TypographyTextAlignmentExampleHTML } from '@inkline/inkline/stories/core/typography/text-alignment.html?raw';
import { default as TypographyTextWrappingExampleHTML } from '@inkline/inkline/stories/core/typography/text-wrapping.html?raw';
import { default as TypographyUnorderedListExampleHTML } from '@inkline/inkline/stories/core/typography/unordered-list.html?raw';
import { default as TypographyUnstyledListExampleHTML } from '@inkline/inkline/stories/core/typography/unstyled-list.html?raw';
</script>

# Typography
## Examples and documentation for typography, one of the most important design elements of an application. 

Inkline provides you with basic elements, typography, and link styles. It uses a native font stack that selects the best 
font family for each OS and device. The base font size is `1rem`, so visitors can customize their font size as needed 
when zooming. 

When more control is needed, you should check out the textual utility classes. Each font size, style and 
weight also has a corresponding helper class to style other elements the same.

### Configuration @TODO
When configuring the CSS Variables, change the `var(--font-family--primary--`, `$font-size`, and `$line-height-base` variables 
as our typographic base applied to the `<body>`. Set the global link color via `$link-color` and apply link underlines 
only on `:hover`. The defaults for these global variables are defined in `config/_typography.scss`. 

To learn more about style configuration, please make sure you followed the Customization part of your <router-link to="/docs/introduction/getting-started">installation</router-link>.

### Headings
All HTML headings, `<h1>` through `<h6>`, have their size calculated based on the specified `$font-size-base`.

<example :component="TypographyHeadingsExample" :html="TypographyHeadingsExampleHTML"></example>

You can use helper classes to achieve heading styles. Classes `.h1` through `.h6` are available, for when you 
want to match the font styling of a heading but cannot use the associated HTML element.

<example :component="TypographyHeadingHelpersExample" :html="TypographyHeadingHelpersExampleHTML"></example>

### Displays
If you need something larger than headings, you can use displays, `.d1` through `.d6` are available.

<example :component="TypographyDisplaysExample" :html="TypographyDisplaysExampleHTML"></example>

### Lead
Make a paragraph stand out by adding `.lead`.

<example :component="TypographyLeadExample" :html="TypographyLeadExampleHTML"></example>

### Inline Text Elements
Inkline provides basic styling for all common HTML5 inline text elements.

<example :component="TypographyInlineTextElementsExample" :html="TypographyInlineTextElementsExampleHTML"></example>

To avoid any unwanted semantic implications that the tags would bring, `.mark` and `.small` classes are also 
available to apply the same styles as `<mark>` and `<small>`.

While not shown above, you can also use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases 
without adding additional semantics, while `<i>` is mostly for voice, technical terms, etc.

### Text Utilities
You can change text alignment, transform, style, weight, and color with text utilities and [color utilities](/docs/utilities/color).

#### Text Alignment
You can easily realign text to components with text alignment classes.

<example :component="TypographyTextAlignmentExample" :html="TypographyTextAlignmentExampleHTML"></example>

#### Text Wrapping
You can easily realign text to components with text alignment classes.

<example :component="TypographyTextWrappingExample" :html="TypographyTextWrappingExampleHTML"></example>

#### Responsive Utilities

You can align, wrap or truncate text responsively for any given `xs`, `sm`, `md`, `lg`, or `xl` breakpoint by adding the breakpoint suffix:

<example :component="TypographyResponsiveUtilitiesExample" :html="TypographyResponsiveUtilitiesExampleHTML"></example>

### Abbreviations
The HTML `<abbr>` element for abbreviations and acronyms is styled to show the expanded version on hover. 
Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of 
assistive technologies.

<example :component="TypographyAbbreviationsExample" :html="TypographyAbbreviationsExampleHTML"></example>

### Blockquotes
To quote blocks of content from another source within your document, wrap `<blockquote class="blockquote">` around any 
HTML as the quote.

<example :component="TypographyBlockquotesExample" :html="TypographyBlockquotesExampleHTML"></example>

### Lists
To enumerate a sequence of elements, you can use lists. Inkline provides you with multiple variations to achieve your 
target design.

#### Unordered Lists
When enumerating elements in no specific order, use an unordered list.

<example :component="TypographyUnorderedListExample" :html="TypographyUnorderedListExampleHTML"></example>

#### Ordered Lists
When enumerating elements in a specific order, use an ordered list.

<example :component="TypographyOrderedListExample" :html="TypographyOrderedListExampleHTML"></example>

#### Unstyled Lists
To remove the default `list-style` and `margin` on list items, use the `-unstyled` modifier. 
This applies to immediate children list items only, meaning you will need to add the class for any nested lists as well.

<example :component="TypographyUnstyledListExample" :html="TypographyUnstyledListExampleHTML"></example>

#### Inline Lists
Remove a list’s bullets and apply some light margin using the `-inline` list modifier.

<example :component="TypographyInlineListExample" :html="TypographyInlineListExampleHTML"></example>

#### Description Lists
Remove a list’s bullets and apply some light margin using the `-inline` list modifier.

<example :component="TypographyDescriptionListExample" :html="TypographyDescriptionListExampleHTML"></example>
