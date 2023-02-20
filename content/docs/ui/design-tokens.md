---
title: Design Tokens - UI - Inkline
description: Learn how to customize the look and feel of your design system with Inkline's design tokens to create a beautiful and consistent user interface.
layout: docs
---

# Design Tokens
## Learn how to customize the look and feel of your design system with Inkline's design tokens to create a beautiful and consistent user interface.

Design tokens are the visual design atoms of the Inkline Design System. They define the look and feel of the components, including colors, typography, and spacing. By using design tokens, we can create a cohesive and consistent user interface.

Inkline's Design Tokens are generated automatically after updating your **`inkline.config.ts`** file if you've followed the official [Installation guide](/docs/installation). You could also customize them manually by overwriting their value in the `:root` of your stylesheet.

### Color
Inkline uses a set of color variables to define the color palette of the Design System. These variables are used to define the color of the components, as well as the color of the text and background. It's important to keep in mind accessibility and contrast when defining color design tokens.

::ContentDesignTokensHeader
::

::ContentDesignToken{ type="color" token="--color-primary" }
#### Color Primary
Accent color for Nordhealth. Used as primary button background, hero area background, and as a link color. This color provides accessible contrast when used for text on light background.
::
