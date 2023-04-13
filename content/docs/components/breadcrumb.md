---
title: Breadcrumb
description: Improve your website's navigation with Inkline's breadcrumb component. Displays the hierarchical structure of your pages and automatically adds separators.
---

# Breadcrumb
## Improve your website's navigation with Inkline's breadcrumb component. Displays the hierarchical structure of your pages and automatically adds separators.

Breadcrumbs improve website navigation by providing users with a clear path to where they are within the site hierarchy, making it easier to backtrack or move forward to related pages. They are particularly useful for large websites or e-commerce sites with deep content hierarchies.

The separators are automatically added using the CSS `::before` pseudo-element and can be changed by updating the `--breadcrumb--separator` CSS variable.

::ContentTabs
#preview
:ContentPreview{src="/components/IBreadcrumb/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBreadcrumb/examples/basic.vue" lang="vue"} -->
::

### Dynamically Generated
You can generate and bind breadcrumbs from your JS data using a combination of `v-for` and `v-bind` as follows:

::ContentTabs
#preview
:ContentPreview{src="/components/IBreadcrumb/examples/dynamically-generated"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBreadcrumb/examples/dynamically-generated.vue" lang="vue"} -->
::

### Color Variants
Inkline includes predefined breadcrumb color variants, each serving its own semantic purpose, which you can control using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IBreadcrumb/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBreadcrumb/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your breadcrumb, using one of the available sizes: `sm`, `md`, and `lg`. 

::ContentTabs
#preview
:ContentPreview{src="/components/IBreadcrumb/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBreadcrumb/examples/size-variants.vue" lang="vue"} -->
::

### Linking and Routing
Breadcrumb items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<IBreadcrumbItem>` component is well integrated with the Vue Router plugin and will be converted to a `<RouterLink>` when using the `to` property.

::ContentTabs
#preview
:ContentPreview{src="/components/IBreadcrumb/examples/routing"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/IBreadcrumb/examples/routing.vue" lang="vue"} -->
::

### Props
##### IBreadcrumb
::ContentComponentProps{component="IBreadcrumb"}
::
##### IBreadcrumbItem
::ContentComponentProps{component="IBreadcrumbItem"}
::

### Slots
##### IBreadcrumb
::ContentComponentSlots{component="IBreadcrumb"}
::
##### IBreadcrumbItem
::ContentComponentSlots{component="IBreadcrumbItem"}
::

### Design Tokens
##### IBreadcrumb
::ContentComponentDesignTokens{component="IBreadcrumb"}
::
##### IBreadcrumbItem
::ContentComponentDesignTokens{component="IBreadcrumbItem"}
::

