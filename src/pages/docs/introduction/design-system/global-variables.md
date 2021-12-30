---
title: Global Variables - Design System - Inkline
description: Configure the global CSS Variables of the design system to instantly change the look and feel of your application.
---

<script setup>
import { manifest as animationsManifest } from '@inkline/inkline/css/variables/animations/manifest';
import { manifest as borderManifest } from '@inkline/inkline/css/variables/border/manifest';
import { manifest as boxShadowManifest } from '@inkline/inkline/css/variables/box-shadow/manifest';
import { manifest as breakpointsManifest } from '@inkline/inkline/css/variables/breakpoints/manifest';
import { manifest as colorsManifest } from '@inkline/inkline/css/variables/colors/manifest';
import { manifest as coreManifest } from '@inkline/inkline/css/variables/core/manifest';
import { manifest as gridManifest } from '@inkline/inkline/css/variables/grid/manifest';
import { manifest as gutterManifest } from '@inkline/inkline/css/variables/gutter/manifest';
import { manifest as imagesManifest } from '@inkline/inkline/css/variables/images/manifest';
import { manifest as printManifest } from '@inkline/inkline/css/variables/print/manifest';
import { manifest as ratiosManifest } from '@inkline/inkline/css/variables/ratios/manifest';
import { manifest as sizesManifest } from '@inkline/inkline/css/variables/sizes/manifest';
import { manifest as spacingManifest } from '@inkline/inkline/css/variables/spacing/manifest';
import { manifest as typographyManifest } from '@inkline/inkline/css/variables/typography/manifest';
import { manifest as zIndexManifest } from '@inkline/inkline/css/variables/z-index/manifest';
import { ColorPicker } from "vue-accessible-color-picker";
</script>

# Global Variables
## Configure the global CSS Variables of the design system to instantly change the look and feel of your application.

All of Inkline's Global CSS Variables propagate throughout the application and are used for design elements such as spacing, border, colors, and typography.

### Basic Example

As seen in the <router-link :to="{ name: 'docs-introduction-design-system' }">Design System Overview</router-link>, our CSS Variables will live inside the `src/main.scss` file. 

Here's an example of how it could look like:

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --padding-top: 1rem;
    --padding-right: 1rem;
    --padding-bottom: 1rem;
    --padding-left: 1rem;
}
~~~

<i-alert color="info" class="_margin-top:1">
    <template #icon>
        <i-icon name="ink-info" />
    </template>
    <p>
        When configuring computed variables with multiple values or sides, you need to configure each part individually.
    </p>
</i-alert>


### CSS Variables
The Global CSS Variables are prefixed with `--`, live under the `:root` selector, and provide inter-connected values that affect the overall design of the application. 

Here are all the Global CSS Variables that you can configure:

#### Animation
<css-variables-table :manifest="animationsManifest"></css-variables-table>

#### Border
<css-variables-table :manifest="borderManifest"></css-variables-table>

#### Box Shadow
<css-variables-table :manifest="boxShadowManifest"></css-variables-table>

#### Breakpoints
<css-variables-table :manifest="breakpointsManifest"></css-variables-table>

#### Colors

<i-card>
    <ColorPicker :color="{ h: 0.54193548387, s: 0.771144278607, l: 0.394117647059, a: 1 }">
        <template #hue-range-input-label>
            <span class="_visually-hidden">Hue</span>
        </template>
        <template #alpha-range-input-label>
            <span class="_visually-hidden">Alpha</span>
        </template>
        <template #copy-button>
            <span class="_visually-hidden">Copy color</span>
            <i-icon name="far-clone"></i-icon>
        </template>
        <template #format-switch-button>
            <span class="_visually-hidden">Switch format</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
              <path d="M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z" fill="currentColor" />
            </svg>
        </template>
    </ColorPicker>
</i-card>

<css-variables-table :manifest="colorsManifest" :modifiers="['color']"></css-variables-table>

#### Core
<css-variables-table :manifest="coreManifest"></css-variables-table>

#### Grid
<css-variables-table :manifest="gridManifest"></css-variables-table>

#### Gutter
<css-variables-table :manifest="gutterManifest"></css-variables-table>

#### Images
<css-variables-table :manifest="imagesManifest"></css-variables-table>

#### Print
<css-variables-table :manifest="printManifest"></css-variables-table>

#### Ratios
<css-variables-table :manifest="ratiosManifest"></css-variables-table>

#### Sizes
<css-variables-table :manifest="sizesManifest"></css-variables-table>

#### Spacing
<css-variables-table :manifest="spacingManifest"></css-variables-table>

#### Typography
<css-variables-table :manifest="typographyManifest"></css-variables-table>

#### Z-Index
<css-variables-table :manifest="zIndexManifest"></css-variables-table>
