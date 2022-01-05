---
title: Images - Inkline
description: Documentation and examples for images, using lightweight styles and modifier classes. 
---

<script setup>
import {
    ImagesAlignmentCenterExample,
    ImagesAlignmentLeftExample,
    ImagesAlignmentMarginAutoExample,
    ImagesAlignmentRightExample,
    ImagesFluidExample,
    ImagesPictureExample,
    ImagesPolaroidExample,
    ImagesResponsiveExample,
    ImagesThumbnailExample
} from '@inkline/inkline/stories/core/images/index.mjs';
import { default as ImagesAlignmentCenterExampleHTML } from '@inkline/inkline/stories/core/images/alignment-center.html?raw';
import { default as ImagesAlignmentLeftExampleHTML } from '@inkline/inkline/stories/core/images/alignment-left.html?raw';
import { default as ImagesAlignmentMarginAutoExampleHTML } from '@inkline/inkline/stories/core/images/alignment-margin-auto.html?raw';
import { default as ImagesAlignmentRightExampleHTML } from '@inkline/inkline/stories/core/images/alignment-right.html?raw';
import { default as ImagesFluidExampleHTML } from '@inkline/inkline/stories/core/images/fluid.html?raw';
import { default as ImagesPictureExampleHTML } from '@inkline/inkline/stories/core/images/picture.html?raw';
import { default as ImagesPolaroidExampleHTML } from '@inkline/inkline/stories/core/images/polaroid.html?raw';
import { default as ImagesResponsiveExampleHTML } from '@inkline/inkline/stories/core/images/responsive.html?raw';
import { default as ImagesThumbnailExampleHTML } from '@inkline/inkline/stories/core/images/thumbnail.html?raw';
</script>

# Images

## Documentation and examples for images, using lightweight styles and modifier classes. 

### Responsive Images
Images in Inkline need to have the `.image` class applied and are made responsive using the `.-responsive` modifier. 

To achieve that, we apply `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element, without surpassing the image's maximum native width.

<example :component="ImagesResponsiveExample" :html="ImagesResponsiveExampleHTML"></example>

#### SVG Images and IE 10
In Internet Explorer 10, SVG images with `.image.-responsive` are disproportionately sized. To fix this, Inkline adds `width: 100% \9;` where necessary. 

This fix improperly sizes other image formats, so we don’t apply it automatically unless the extension ends with `.svg`.

### Fluid Images
Images in Inkline can be made fluid using the `.-fluid` modifier. To achieve that, we apply `width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

<example :component="ImagesFluidExample" :html="ImagesFluidExampleHTML"></example>

### Image Thumbnails
You can use the `.-thumbnail` modifier to give an image a rounded 1px border appearance.

<example :component="ImagesThumbnailExample" :html="ImagesThumbnailExampleHTML"></example>

### Polaroid
Besides thumbnails, you can opt for a retro look having a larger bottom border using the `.-polaroid` modifier.

<example :component="ImagesPolaroidExample" :html="ImagesPolaroidExampleHTML"></example>

### Image Alignment
Align images with the helper classes or text alignment classes. Block-level images can be centered using the `._margin-x:auto` margin utility class.

<example :component="ImagesAlignmentLeftExample" :html="ImagesAlignmentLeftExampleHTML"></example>

<example :component="ImagesAlignmentRightExample" :html="ImagesAlignmentRightExampleHTML"></example>

<example :component="ImagesAlignmentCenterExample" :html="ImagesAlignmentCenterExampleHTML"></example>

<example :component="ImagesAlignmentMarginAutoExample" :html="ImagesAlignmentMarginAutoExampleHTML"></example>

### Picture
If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add 
the `.image` classes to the `<img>` and not to the `<picture>` tag.

<example :component="ImagesPictureExample" :html="ImagesPictureExampleHTML"></example>
