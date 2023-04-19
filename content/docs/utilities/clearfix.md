---
title: Utilities - Clearfix
description: Use the clearfix utility to clear floated content within a container. 
---

# Clearfix Utilities
## Use the clearfix utility to clear floated content within a container.

You can easily clear floats by adding the clearfix utility class to the parent element.

In the following example, without adding the clearfix helper, the wrapping div would display the two buttons on separate lines, which would cause a broken layout.

- `_clearfix`

::ContentTabs
#preview
:ContentPreview{src="/stories/utilities/clearfix/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/stories/utilities/clearfix/basic.raw.vue" lang="vue"} -->
::

### Sass Mixin
The clearfix utility is also available as a Sass Mixin.

~~~scss
@import '@inkline/inkline/css/mixins';

.element {
  @include clearfix;
}
~~~
