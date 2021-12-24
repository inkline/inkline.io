---
title: Media - Inkline
description: Media objects provide you with a flexible component that can be easily nested and repeated, such as blog comments and tweets.
---

<script setup>
import { manifest } from '@inkline/inkline/components/IMedia/manifest';
import {
    IMediaAlignmentExample,
    IMediaBasicExample,
    IMediaNestingExample
} from '@inkline/inkline/components/IMedia/examples';
import { default as IMediaAlignmentExampleHTML } from '@inkline/inkline/components/IMedia/examples/alignment.html?raw';
import { default as IMediaBasicExampleHTML } from '@inkline/inkline/components/IMedia/examples/basic.html?raw';
import { default as IMediaNestingExampleHTML } from '@inkline/inkline/components/IMedia/examples/nesting.html?raw';
</script>

# Media
## Media objects provide you with a flexible component that can be easily nested and repeated, such as blog comments and tweets.

### Example
Media objects are useful for repetitive components that have a media element positioned alongside them, such as an user image or blog post image.

<example :component="IMediaBasicExample" :html="IMediaBasicExampleHTML"></example>

### Nesting
Media components can be nested inside one another to create a parent-child relationship between related components.

<example :component="IMediaNestingExample" :html="IMediaNestingExampleHTML"></example>

### Alignment
The media element in a media component can be aligned with flexbox helper classes to the top (default), middle, or end of the `.media-body` content.

<example :component="IMediaAlignmentExample" :html="IMediaAlignmentExampleHTML"></example>

### Configuration

#### Slots
Use slots to insert custom content into well-defined component locations.

<slots-table :manifest="manifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
