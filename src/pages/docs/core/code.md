---
title: Code - Inkline
description: Examples for displaying inline and multi-line blocks of code. 
---

<script setup>
import {
    CodeBlockExample,
    CodeInlineExample,
    CodeSampleOutputExample,
    CodeUserInputExample,
    CodeVariablesExample
} from '@inkline/inkline/stories/core/code';
import { default as CodeBlockExampleHTML } from '@inkline/inkline/stories/core/code/block.html?raw';
import { default as CodeInlineExampleHTML } from '@inkline/inkline/stories/core/code/inline.html?raw';
import { default as CodeSampleOutputExampleHTML } from '@inkline/inkline/stories/core/code/sample-output.html?raw';
import { default as CodeUserInputExampleHTML } from '@inkline/inkline/stories/core/code/user-input.html?raw';
import { default as CodeVariablesExampleHTML } from '@inkline/inkline/stories/core/code/variables.html?raw';
</script>

# Code

## Examples for displaying inline and multi-line blocks of code.

### Inline
Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

<example :component="CodeInlineExample" :html="CodeInlineExampleHTML"></example>

### Block
We use `<pre>` for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper 
rendering. You may optionally add the `.-scrollable` modifier, which will set a max-height and provide a y-axis scrollbar.

<example :component="CodeBlockExample" :html="CodeBlockExampleHTML"></example>

### Variables
For indicating variables use the HTML5 `<var>` tag.

<example :component="CodeVariablesExample" :html="CodeVariablesExampleHTML"></example>

### User Input
You can use the `<kbd>` to indicate input that is typically entered via keyboard.

<example :component="CodeUserInputExample" :html="CodeUserInputExampleHTML"></example>

### Sample Output

You can use the `<samp>` for indicating sample output from a program.

<example :component="CodeSampleOutputExample" :html="CodeSampleOutputExampleHTML"></example>
