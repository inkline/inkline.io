---
title: Color Utilities - Inkline
description: Inkline uses a beautiful, consistent color scheme across the framework. 
---

<script setup>
import {
    ColorBasicBackgroundExample,
    ColorBasicBlueBackgroundExample,
    ColorBasicBlueTextExample,
    ColorBasicGreenBackgroundExample,
    ColorBasicGreenTextExample,
    ColorBasicOrangeBackgroundExample,
    ColorBasicOrangeTextExample,
    ColorBasicPinkBackgroundExample,
    ColorBasicPinkTextExample,
    ColorBasicPurpleBackgroundExample,
    ColorBasicPurpleTextExample,
    ColorBasicRedBackgroundExample,
    ColorBasicRedTextExample,
    ColorBasicTealBackgroundExample,
    ColorBasicTealTextExample,
    ColorBasicTextExample,
    ColorBasicYellowBackgroundExample,
    ColorBasicYellowTextExample,
    ColorBrandBackgroundExample,
    ColorBrandDarkBackgroundExample,
    ColorBrandDarkTextExample,
    ColorBrandLightBackgroundExample,
    ColorBrandLightTextExample,
    ColorBrandPrimaryBackgroundExample,
    ColorBrandPrimaryTextExample,
    ColorBrandSecondaryBackgroundExample,
    ColorBrandSecondaryTextExample,
    ColorBrandTextExample,
    ColorNeutralBackgroundExample,
    ColorNeutralTextExample,
    ColorSocialBackgroundExample,
    ColorSocialTextExample,
    ColorStateBackgroundExample,
    ColorStateDangerBackgroundExample,
    ColorStateDangerTextExample,
    ColorStateInfoBackgroundExample,
    ColorStateInfoTextExample,
    ColorStateSuccessBackgroundExample,
    ColorStateSuccessTextExample,
    ColorStateTextExample,
    ColorStateWarningBackgroundExample,
    ColorStateWarningTextExample
} from '@inkline/inkline/stories/utilities/color/index.mjs';
import { default as ColorBasicBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-background.html?raw';
import { default as ColorBasicBlueBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-blue-background.html?raw';
import { default as ColorBasicBlueTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-blue-text.html?raw';
import { default as ColorBasicGreenBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-green-background.html?raw';
import { default as ColorBasicGreenTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-green-text.html?raw';
import { default as ColorBasicOrangeBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-orange-background.html?raw';
import { default as ColorBasicOrangeTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-orange-text.html?raw';
import { default as ColorBasicPinkBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-pink-background.html?raw';
import { default as ColorBasicPinkTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-pink-text.html?raw';
import { default as ColorBasicPurpleBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-purple-background.html?raw';
import { default as ColorBasicPurpleTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-purple-text.html?raw';
import { default as ColorBasicRedBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-red-background.html?raw';
import { default as ColorBasicRedTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-red-text.html?raw';
import { default as ColorBasicTealBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-teal-background.html?raw';
import { default as ColorBasicTealTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-teal-text.html?raw';
import { default as ColorBasicTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-text.html?raw';
import { default as ColorBasicYellowBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-yellow-background.html?raw';
import { default as ColorBasicYellowTextExampleHTML } from '@inkline/inkline/stories/utilities/color/basic-yellow-text.html?raw';
import { default as ColorBrandBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-background.html?raw';
import { default as ColorBrandDarkBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-dark-background.html?raw';
import { default as ColorBrandDarkTextExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-dark-text.html?raw';
import { default as ColorBrandLightBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-light-background.html?raw';
import { default as ColorBrandLightTextExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-light-text.html?raw';
import { default as ColorBrandPrimaryBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-primary-background.html?raw';
import { default as ColorBrandPrimaryTextExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-primary-text.html?raw';
import { default as ColorBrandSecondaryBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-secondary-background.html?raw';
import { default as ColorBrandSecondaryTextExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-secondary-text.html?raw';
import { default as ColorBrandTextExampleHTML } from '@inkline/inkline/stories/utilities/color/brand-text.html?raw';
import { default as ColorNeutralBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/neutral-background.html?raw';
import { default as ColorNeutralTextExampleHTML } from '@inkline/inkline/stories/utilities/color/neutral-text.html?raw';
import { default as ColorSocialBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/social-background.html?raw';
import { default as ColorSocialTextExampleHTML } from '@inkline/inkline/stories/utilities/color/social-text.html?raw';
import { default as ColorStateBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/state-background.html?raw';
import { default as ColorStateDangerBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/state-danger-background.html?raw';
import { default as ColorStateDangerTextExampleHTML } from '@inkline/inkline/stories/utilities/color/state-danger-text.html?raw';
import { default as ColorStateInfoBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/state-info-background.html?raw';
import { default as ColorStateInfoTextExampleHTML } from '@inkline/inkline/stories/utilities/color/state-info-text.html?raw';
import { default as ColorStateSuccessBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/state-success-background.html?raw';
import { default as ColorStateSuccessTextExampleHTML } from '@inkline/inkline/stories/utilities/color/state-success-text.html?raw';
import { default as ColorStateTextExampleHTML } from '@inkline/inkline/stories/utilities/color/state-text.html?raw';
import { default as ColorStateWarningBackgroundExampleHTML } from '@inkline/inkline/stories/utilities/color/state-warning-background.html?raw';
import { default as ColorStateWarningTextExampleHTML } from '@inkline/inkline/stories/utilities/color/state-warning-text.html?raw';
</script>

# Color Utilities

## Inkline uses a beautiful, consistent color scheme across the framework. 

### Brand Colors

Attract your user's attention using brand colors. The main colors of Inkline used for branding are:

<example type="color-utilities" :component="ColorBrandBackgroundExample" :html="ColorBrandBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandPrimaryBackgroundExample" :html="ColorBrandPrimaryBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandSecondaryBackgroundExample" :html="ColorBrandSecondaryBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandLightBackgroundExample" :html="ColorBrandLightBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandDarkBackgroundExample" :html="ColorBrandDarkBackgroundExampleHTML"></example>

You can also add brand text colors using text-specific helper classes:

<example type="color-utilities" :component="ColorBrandTextExample" :html="ColorBrandTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandPrimaryTextExample" :html="ColorBrandPrimaryTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandSecondaryTextExample" :html="ColorBrandSecondaryTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandLightTextExample" :html="ColorBrandLightTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBrandDarkTextExample" :html="ColorBrandDarkTextExampleHTML"></example>

### State Colors
When displaying state information such as info, success, warning, or error messages, you will need to color your message accordingly. The state colors are:

<example type="color-utilities" :component="ColorStateBackgroundExample" :html="ColorStateBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorStateInfoBackgroundExample" :html="ColorStateInfoBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorStateSuccessBackgroundExample" :html="ColorStateSuccessBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorStateWarningBackgroundExample" :html="ColorStateWarningBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorStateDangerBackgroundExample" :html="ColorStateDangerBackgroundExampleHTML"></example>

You can also add state text colors using text-specific helper classes:

<example type="color-utilities" :component="ColorStateTextExample" :html="ColorStateTextExampleHTML"></example>

<example type="color-utilities" :component="ColorStateInfoTextExample" :html="ColorStateInfoTextExampleHTML"></example>

<example type="color-utilities" :component="ColorStateSuccessTextExample" :html="ColorStateSuccessTextExampleHTML"></example>

<example type="color-utilities" :component="ColorStateWarningTextExample" :html="ColorStateWarningTextExampleHTML"></example>

<example type="color-utilities" :component="ColorStateDangerTextExample" :html="ColorStateDangerTextExampleHTML"></example>

### Basic
Basic colors are useful when working with multiple colors on the same page. The following basic colors are 
available when using the default variant.

You can use helper classes to add state color backgrounds:

<example type="color-utilities" :component="ColorBasicBackgroundExample" :html="ColorBasicBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicRedBackgroundExample" :html="ColorBasicRedBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicOrangeBackgroundExample" :html="ColorBasicOrangeBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicYellowBackgroundExample" :html="ColorBasicYellowBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicGreenBackgroundExample" :html="ColorBasicGreenBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicTealBackgroundExample" :html="ColorBasicTealBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicBlueBackgroundExample" :html="ColorBasicBlueBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicPurpleBackgroundExample" :html="ColorBasicPurpleBackgroundExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicPinkBackgroundExample" :html="ColorBasicPinkBackgroundExampleHTML"></example>

You can also add state text colors using text-specific helper classes:

<example type="color-utilities" :component="ColorBasicTextExample" :html="ColorBasicTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicRedTextExample" :html="ColorBasicRedTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicOrangeTextExample" :html="ColorBasicOrangeTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicYellowTextExample" :html="ColorBasicYellowTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicGreenTextExample" :html="ColorBasicGreenTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicTealTextExample" :html="ColorBasicTealTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicBlueTextExample" :html="ColorBasicBlueTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicPurpleTextExample" :html="ColorBasicPurpleTextExampleHTML"></example>

<example type="color-utilities" :component="ColorBasicPinkTextExample" :html="ColorBasicPinkTextExampleHTML"></example>

### Neutral
Neutral colors are used for text, background and border colors. You can use different neutral colors to display your content:

<example type="color-utilities" :component="ColorNeutralBackgroundExample" :html="ColorNeutralBackgroundExampleHTML"></example>

You can also add neutral text colors using text-specific helper classes:

<example type="color-utilities" :component="ColorNeutralTextExample" :html="ColorNeutralTextExampleHTML"></example>

### Social Media
Inkline provides social media colors from most of your favorite sites.

You can use helper classes to add social media color backgrounds:

<example type="color-utilities" :component="ColorSocialBackgroundExample" :html="ColorSocialBackgroundExampleHTML"></example>

You can also add social media text colors using text-specific helper classes:

<example type="color-utilities" :component="ColorSocialTextExample" :html="ColorSocialTextExampleHTML"></example>
