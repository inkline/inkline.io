---
title: Vertical Align Utilities - Inkline
description: Change the vertical alignment of inline, inline block, inline table, and table cell elements. 
---

<script setup>
import {
    VerticalAlignBasicExample,
    VerticalAlignTableExample
} from '@inkline/inkline/stories/utilities/vertical-align/index.mjs';
import { default as VerticalAlignBasicExampleHTML } from '@inkline/inkline/stories/utilities/vertical-align/basic.html?raw';
import { default as VerticalAlignTableExampleHTML } from '@inkline/inkline/stories/utilities/vertical-align/table.html?raw';
</script>

# Vertical Align Utilities

## Change the vertical alignment of inline, inline block, inline table, and table cell elements. 

### Text Alignment
You can use vertical align utilities to change the alignment of elements. Please note that vertical-align only affects `inline`, `inline-block`, `inline-table`, and `table-cell` elements.

<example :component="VerticalAlignBasicExample" :html="VerticalAlignBasicExampleHTML"></example>

### Table Cell Alignment
You can use vertical align utilities to change the alignment of table cells.

<example :component="VerticalAlignTableExample" :html="VerticalAlignTableExampleHTML"></example>
