---
title: Form Label - Inkline
description: Form component used to add text labels to form groups. 
---

# Form Label
## Form component used to add text labels to form groups. 

You can add a label to your input by grouping an `<i-form-label>` and any input component inside an `<i-form-group>`. 

::ContentTabs
#preview
:ContentPreview{src="/components/IFormLabel/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormLabel/examples/basic.vue" lang="vue"} -->
::

### Required Example
You can add the `required` property to a parent form group to add a red asterisk `*` to the form label. 

::ContentTabs
#preview
:ContentPreview{src="/components/IFormLabel/examples/required"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormLabel/examples/required.vue" lang="vue"} -->
::


### Placement
You can add labels to either side of your input, and position it using the optional `inline` form group and `placement` form label properties.

::ContentTabs
#preview
:ContentPreview{src="/components/IFormLabel/examples/placement"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormLabel/examples/placement.vue" lang="vue"} -->
::


### Size Variants
You're able to use the `size` property to control the size of your form labels, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. Setting the size on a `<i-form-group>` will also affect form labels.

::ContentTabs
#preview
:ContentPreview{src="/components/IFormLabel/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IFormLabel/examples/size-variants.vue" lang="vue"} -->
::


### Props
::ContentComponentProps{component="IFormLabel"}
::

### Slots
::ContentComponentSlots{component="IFormLabel"}
::

### Events
::ContentComponentEvents{component="IFormLabel"}
::

### Design Tokens
::ContentComponentDesignTokens{component="IFormLabel"}
::
