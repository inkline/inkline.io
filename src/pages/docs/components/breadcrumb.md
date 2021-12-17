---
title: Breadcrumb - Inkline
description: Indicate the current page’s location depth using a navigation list that automatically adds separators using CSS.
---

<script setup>
import {
    IBreadcrumbBasicExample,
    IBreadcrumbColorVariantsExample,
    IBreadcrumbRoutingExample,
    IBreadcrumbSizeVariantsExample,
    IBreadcrumbDynamicallyGeneratedExample
} from '@inkline/inkline/components/IBreadcrumb/examples';
import { default as IBreadcrumbBasicExampleHTML } from '@inkline/inkline/components/IBreadcrumb/examples/basic.html?raw';
import { default as IBreadcrumbColorVariantsExampleHTML } from '@inkline/inkline/components/IBreadcrumb/examples/color-variants.html?raw';
import { default as IBreadcrumbRoutingExampleHTML } from '@inkline/inkline/components/IBreadcrumb/examples/routing.html?raw';
import { default as IBreadcrumbSizeVariantsExampleHTML } from '@inkline/inkline/components/IBreadcrumb/examples/size-variants.html?raw';
import { default as IBreadcrumbDynamicallyGeneratedExampleHTML } from '@inkline/inkline/components/IBreadcrumb/examples/dynamically-generated.html?raw';
import { default as IBreadcrumbDynamicallyGeneratedExampleJS } from '@inkline/inkline/components/IBreadcrumb/examples/dynamically-generated.js?raw';
</script>

# Breadcrumb

## Indicate the current page’s location depth using a navigation list that automatically adds separators using CSS.

Separators are automatically added in CSS through `::before` and `content`. You can change the separator by changing the `$breadcrumb-divider` Sass variable.

<example :component="IBreadcrumbBasicExample" :html="IBreadcrumbBasicExampleHTML"></example>

### Dynamically Generated
You can generate and bind breadcrumbs from your JS data using a combination of `v-for` and `v-bind` as follows:

<example :component="IBreadcrumbDynamicallyGeneratedExample" :html="IBreadcrumbDynamicallyGeneratedExampleHTML" :js="IBreadcrumbDynamicallyGeneratedExampleJS"></example>

### Color Variants

Inkline includes predefined breadcrumb color variants, each serving its own semantic purpose, which you can control using the `color` property.

<example :component="IBreadcrumbColorVariantsExample" :html="IBreadcrumbColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your breadcrumb, using one of the available sizes: `sm`, `md`, and `lg`. 

<example :component="IBreadcrumbSizeVariantsExample" :html="IBreadcrumbSizeVariantsExampleHTML"></example>

### Linking and Routing
Breadcrumb items will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-breadcrumb-item>` component is well integrated with the Vue Router plugin and will be converted to a `<router-link>` when using the `to` property.

<example :component="IBreadcrumbRoutingExample" :html="IBreadcrumbRoutingExampleHTML"></example>
