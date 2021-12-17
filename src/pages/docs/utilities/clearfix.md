---
title: Clearfix Utilities - Inkline
description: Use the clearfix utility to clear floated content within a container. 
---

<script setup>
import {
    ClearfixBasicExample
} from '@inkline/inkline/stories/utilities/clearfix';
import { default as ClearfixBasicExampleHTML } from '@inkline/inkline/stories/utilities/clearfix/basic.html?raw';
</script>

# Clearfix Utilities

## Use the clearfix utility to clear floated content within a container. 

You can easily clear floats by adding the `._clearfix` helper class to the parent element.

In the following example, without adding the clearfix helper, the wrapping div would display the two buttons on separate lines, which would cause a broken layout.

<example type="clearfix" :component="ClearfixBasicExample" :html="ClearfixBasicExampleHTML"></example>

### Sass Mixin
The clearfix utility is also available as a Sass Mixin.

~~~scss
@require '@inkline/inkline/css/mixins/clearfix'

.element {
  @include clearfix;
}
~~~
