---
title: Header - Inkline
description: A lightweight, responsive header component used for showcasing hero unit style content.
---

<script setup>
import {
    IHeaderBasicExample,
    IHeaderColorVariantsExample,
    IHeaderCoverExample,
    IHeaderFullscreenExample,
    IHeaderSizeVariantsExample
} from '@inkline/inkline/components/IHeader/examples';
import { default as IHeaderBasicExampleHTML } from '@inkline/inkline/components/IHeader/examples/basic.html?raw';
import { default as IHeaderColorVariantsExampleHTML } from '@inkline/inkline/components/IHeader/examples/color-variants.html?raw';
import { default as IHeaderCoverExampleHTML } from '@inkline/inkline/components/IHeader/examples/cover.html?raw';
import { default as IHeaderCoverExampleCSS } from '@inkline/inkline/components/IHeader/examples/cover.scss';
import { default as IHeaderFullscreenExampleHTML } from '@inkline/inkline/components/IHeader/examples/fullscreen.html?raw';
import { default as IHeaderSizeVariantsExampleHTML } from '@inkline/inkline/components/IHeader/examples/size-variants.html?raw';
</script>

# Header

## A lightweight, responsive header component used for showcasing hero unit style content.

### Basic Example
Here’s an example of a basic header component. Usually, this component is used on homepages and landing pages and has an attractive background image.

<example :component="IHeaderBasicExample" :html="IHeaderBasicExampleHTML"></example>

### Color Variants
You can set the style of a `<i-header>` using the `color` property.

<example :component="IHeaderColorVariantsExample" :html="IHeaderColorVariantsExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the size of your header, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<example :component="IHeaderSizeVariantsExample" :html="IHeaderSizeVariantsExampleHTML"></example>

### Fullscreen
You can make headers cover the whole screen width and height (using `vw` and `vh`) by adding the `fullscreen` property. The width and height do not overflow the size of the parent container.

<example :component="IHeaderFullscreenExample" :html="IHeaderFullscreenExampleHTML"></example>

### Cover Background
The goal of cover background images on a website is to cover the entire browser window at all times. Simply set a background for the header

<example :component="IHeaderCoverExample" :html="IHeaderCoverExampleHTML" :css="IHeaderCoverExampleCSS"></example>
