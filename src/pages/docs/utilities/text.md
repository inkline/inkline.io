---
title: Text Utilities - Inkline
description: Use common text utilities to control alignment, wrapping, weight, and more. 
---

<script setup>
import {
    TextFontMonospaceExample,
    TextFontSizeExample,
    TextFontStyleItalicExample,
    TextFontWeightRelativeExample,
    TextFontWeightExample,
    TextAlignJustifyExample,
    TextAlignResponsiveExample,
    TextAlignExample,
    TextBreakExample,
    TextDecorationExample,
    TextMutedExample,
    TextNowrapExample,
    TextResetExample,
    TextTransformExample,
    TextTruncateExample,
    TextWrapExample,
    TextListsExample
} from '@inkline/inkline/stories/utilities/text';
import { default as TextFontMonospaceExampleHTML } from '@inkline/inkline/stories/utilities/text/font-monospace.html?raw';
import { default as TextFontSizeExampleHTML } from '@inkline/inkline/stories/utilities/text/font-size.html?raw';
import { default as TextFontStyleItalicExampleHTML } from '@inkline/inkline/stories/utilities/text/font-style-italic.html?raw';
import { default as TextFontWeightRelativeExampleHTML } from '@inkline/inkline/stories/utilities/text/font-weight-relative.html?raw';
import { default as TextFontWeightExampleHTML } from '@inkline/inkline/stories/utilities/text/font-weight.html?raw';
import { default as TextAlignJustifyExampleHTML } from '@inkline/inkline/stories/utilities/text/text-align-justify.html?raw';
import { default as TextAlignResponsiveExampleHTML } from '@inkline/inkline/stories/utilities/text/text-align-responsive.html?raw';
import { default as TextAlignExampleHTML } from '@inkline/inkline/stories/utilities/text/text-align.html?raw';
import { default as TextBreakExampleHTML } from '@inkline/inkline/stories/utilities/text/text-break.html?raw';
import { default as TextDecorationExampleHTML } from '@inkline/inkline/stories/utilities/text/text-decoration.html?raw';
import { default as TextMutedExampleHTML } from '@inkline/inkline/stories/utilities/text/text-muted.html?raw';
import { default as TextNowrapExampleHTML } from '@inkline/inkline/stories/utilities/text/text-nowrap.html?raw';
import { default as TextResetExampleHTML } from '@inkline/inkline/stories/utilities/text/text-reset.html?raw';
import { default as TextTransformExampleHTML } from '@inkline/inkline/stories/utilities/text/text-transform.html?raw';
import { default as TextTruncateExampleHTML } from '@inkline/inkline/stories/utilities/text/text-truncate.html?raw';
import { default as TextWrapExampleHTML } from '@inkline/inkline/stories/utilities/text/text-wrap.html?raw';
import { default as TextListsExampleHTML } from '@inkline/inkline/stories/utilities/text/lists.html?raw';
</script>

# Text Utilities

## Use common text utilities to control alignment, wrapping, weight, and more. 

### Text Alignment
Use text alignment utilities to easily align text in components. 

<example :component="TextAlignJustifyExample" :html="TextAlignJustifyExampleHTML"></example>

<example :component="TextAlignExample" :html="TextAlignExampleHTML"></example>

`For left, right, and center alignment, Inkline provides you with responsive classes that use the same breakpoints as the grid system.

<example :component="TextAlignResponsiveExample" :html="TextAlignResponsiveExampleHTML"></example>

You can use the following text alignment utility classes:

- `_text-align:left` or `_text:left`
- `_text-align:center` or `_text:center`
- `_text-align:right` or `_text:right`
- `_text-align:justify` or `_text:justify`
- `_{xs|sm|md|lg|xl|xxl}:text-align:left` or `_{xs|sm|md|lg|xl|xxl}:text:left`
- `_{xs|sm|md|lg|xl|xxl}:text-align:center` or `_{xs|sm|md|lg|xl|xxl}:text:center`
- `_{xs|sm|md|lg|xl|xxl}:text-align:right` or `_{xs|sm|md|lg|xl|xxl}:text:right`

### Text Wrapping and Overflow
You can wrap text using the `._white-space:normal` utility class.

<example :component="TextWrapExample" :html="TextWrapExampleHTML"></example>

You can also prevent text from wrapping with a `._white-space:nowrap` utility class.

<example :component="TextNowrapExample" :html="TextNowrapExampleHTML"></example>

Text wrapping utilities also come with breakpoint-specific classes, same as text alignment classes.

For longer content, adding the `._text:truncate` utility class will truncate the text with an ellipsis. Truncation requires `display: inline-block` or `display: block`.

<example :component="TextTruncateExample" :html="TextTruncateExampleHTML"></example>

You can use the following white space utility classes:

- `_white-space:normal` or `_text:wrap`
- `_white-space:nowrap` or `_text:nowrap`
- `_text:truncate`
- `_{xs|sm|md|lg|xl|xxl}:white-space:normal` or `_{xs|sm|md|lg|xl|xxl}:text:wrap`
- `_{xs|sm|md|lg|xl|xxl}:white-space:nowrap` or `_{xs|sm|md|lg|xl|xxl}:text:nowrap`
- `_{xs|sm|md|lg|xl|xxl}:text:truncate`

### Word Break
Prevent long strings of text from breaking your layout by using `._text:break-word`. Behind the scenes, it uses `overflow-wrap: break-word` and `word-break: break-word` for IE & Edge compatibility.

<example :component="TextBreakExample" :html="TextBreakExampleHTML"></example>

You can use the following word break utility classes:

- `_text:break-word`

### Text Transform
You can transform text in components using text capitalization classes.

<example :component="TextTransformExample" :html="TextTransformExampleHTML"></example>

You can use the following text transform utility classes:

- `_text-transform:lowercase` or `_text:lowercase`
- `_text-transform:uppercase` or `_text:uppercase`
- `_text-transform:capitalize` or `_text:capitalize`

### Font Weights and Italics
You can change the weight (boldness) of your text italicize it using these utility classes.

<example :component="TextFontWeightExample" :html="TextFontWeightExampleHTML"></example>

<example :component="TextFontWeightRelativeExample" :html="TextFontWeightRelativeExampleHTML"></example>

<example :component="TextFontStyleItalicExample" :html="TextFontStyleItalicExampleHTML"></example>


You can use the following font weight and style utility classes:

- `_font-weight:extralight` or `_text:extralight`
- `_font-weight:light` or `_text:light`
- `_font-weight:normal` or `_text:normal`
- `_font-weight:semibold` or `_text:semibold`
- `_font-weight:bold` or `_text:bold`
- `_font-weight:black` or `_text:black`
- `_font-weight:lighter` or `_text:lighter`
- `_font-weight:bolder` or `_text:bolder`
- `_font-style:italic` or `_text:italic`

### Font Size
Change your font size using one of the font-size utilities.

<example :component="TextFontSizeExample" :html="TextFontSizeExampleHTML"></example>

You can use the following font weight utility classes:

- `_font-size:xs` or `_text:xs`
- `_font-size:sm` or `_text:sm`
- `_font-size:md` or `_text:md`
- `_font-size:lg` or `_text:lg`
- `_font-size:xl` or `_text:xl`

### Monospace
Change your text to be monospaced using the `._font-family:monospace` utility.

<example :component="TextFontMonospaceExample" :html="TextFontMonospaceExampleHTML"></example>

You can use the following font weight utility classes:

- `_font-family:monospace` or `_text:monospace`

### Text Decoration
Remove text decoration using the `._text-decoration:none` utility.

<example :component="TextDecorationExample" :html="TextDecorationExampleHTML"></example>

You can use the following text decoration utility classes:

- `_text-decoration:none` 

### Muted Text
Make your text stand out less using the `._text:muted` utility.

<example :component="TextMutedExample" :html="TextMutedExampleHTML"></example>

You can use the following text muted utility classes:

- `_text:muted` or `_color:muted` 

### Text Reset
Make your text or link inherit the parent's color using the `._text:reset` utility.

<example :component="TextResetExample" :html="TextResetExampleHTML"></example>

You can use the following text reset utility classes:

- `_text:reset`

### Text Hide
You can make your text disappear without hiding the element by using the `text-indent: -10000px` trick. This is available through the following utility class:

- `_text:hide`

### Lists
You can use list utilities to obtain inline and unstyled lists.

<example :component="TextListsExample" :html="TextListsExampleHTML"></example>

