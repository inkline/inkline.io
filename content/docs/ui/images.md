---
title: Images - Inkline
description: Documentation and examples for images, using lightweight styles and modifier classes.
---

# Images

## Documentation and examples for images, using lightweight styles and modifier classes.

### Responsive Images
Images in Inkline can be made responsive using the `.image` class and the `.-responsive` modifier class.

To achieve that, we apply `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element, without surpassing the image's maximum native width.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/responsive"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/fluid.vue" lang="vue"} -->
::

#### SVG Images and IE 10
In Internet Explorer 10, SVG images with `.image.-responsive` are disproportionately sized. To fix this, Inkline adds `width: 100% \9;` where necessary.

This fix improperly sizes other image formats, so we don’t apply it automatically unless the extension ends with `.svg`.

### Fluid Images
Images in Inkline can be made fluid using the `.image` class and the `.-fluid` modifier class. To achieve that, we apply `width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/fluid"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/fluid.vue" lang="vue"} -->
::


### Image Thumbnails
You can use the `.image` class and the `.-thumbnail` modifier class to give an image a rounded 1px border appearance.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/thumbnail"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/thumbnail.vue" lang="vue"} -->
::

### Polaroid
Besides thumbnails, you can opt for a retro look having a larger bottom border using the `.image` class and the `.-polaroid` modifier class.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/polaroid"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/polaroid.vue" lang="vue"} -->
::

### Image Alignment
Align images with the helper classes or text alignment classes. Block-level images can be centered using the `._margin-x:auto` margin utility class.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/alignment-left"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/alignment-left.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/alignment-right"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/alignment-right.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/alignment-center"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/alignment-center.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/alignment-margin-auto"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/alignment-margin-auto.vue" lang="vue"} -->
::

### Picture
If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add
the `.image` class to the `<img>` and not to the `<picture>` tag.

::ContentTabs
#preview
:ContentPreview{src="/stories/core/images/picture"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/core/images/picture.vue" lang="vue"} -->
::
