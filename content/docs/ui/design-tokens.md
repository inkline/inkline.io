---
title: Design Tokens - UI - Inkline
description: Learn how to customize the look and feel of your design system with Inkline's design tokens to create a beautiful and consistent user interface.
layout: docs
---

# Design Tokens
## Learn how to customize the look and feel of your design system with Inkline's design tokens to create a beautiful and consistent user interface.

Design tokens are the visual design atoms of the Inkline Design System. They define the look and feel of the components, including colors, typography, and spacing. By using design tokens, we can create a cohesive and consistent user interface.

Inkline's Design Tokens are generated automatically after updating your **`inkline.config.ts`** file if you've followed the official [Installation guide](/docs/installation). You could also customize them manually by overwriting their value in the `:root` of your stylesheet.

### Colors
Inkline uses a set of color variables to define the color palette of the Design System. These variables are used to define the color of the components, as well as the color of the text and background. It's important to keep in mind accessibility and contrast when defining color design tokens.

By updating the base CSS variable for a color, all corresponding variants based on that color will automatically be updated as well, ensuring consistency throughout the UI.

[Read about color configuration](/docs/configuration/file#color)

#### Brand Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Primary Color" type="color" token="--color-primary" }
Primary brand color for Inkline. This color provides accessible contrast when used for text on light background.
#variants
    ::ContentDesignToken{ title="Primary Tint 150 Color" size="sm" type="color" token="--color-primary-tint-150" }
    ::
    ::ContentDesignToken{ title="Primary Tint 100 Color" size="sm" type="color" token="--color-primary-tint-100" }
    ::
    ::ContentDesignToken{ title="Primary Tint 50 Color" size="sm" type="color" token="--color-primary-tint-50" }
    ::
    ::ContentDesignToken{ title="Primary Shade 50 Color" size="sm" type="color" token="--color-primary-shade-50" }
    ::
    ::ContentDesignToken{ title="Primary Shade 100 Color" size="sm" type="color" token="--color-primary-shade-100" }
    ::
    ::ContentDesignToken{ title="Primary Shade 150 Color" size="sm" type="color" token="--color-primary-shade-150" }
    ::
    ::ContentDesignToken{ title="Primary 50 Color" size="sm" type="color" token="--color-primary-50" }
    ::
    ::ContentDesignToken{ title="Primary 100 Color" size="sm" type="color" token="--color-primary-100" }
    ::
    ::ContentDesignToken{ title="Primary 200 Color" size="sm" type="color" token="--color-primary-200" }
    ::
    ::ContentDesignToken{ title="Primary 300 Color" size="sm" type="color" token="--color-primary-300" }
    ::
    ::ContentDesignToken{ title="Primary 400 Color" size="sm" type="color" token="--color-primary-400" }
    ::
    ::ContentDesignToken{ title="Primary 500 Color" size="sm" type="color" token="--color-primary-500" }
    ::
    ::ContentDesignToken{ title="Primary 600 Color" size="sm" type="color" token="--color-primary-600" }
    ::
    ::ContentDesignToken{ title="Primary 700 Color" size="sm" type="color" token="--color-primary-700" }
    ::
    ::ContentDesignToken{ title="Primary 800 Color" size="sm" type="color" token="--color-primary-800" }
    ::
    ::ContentDesignToken{ title="Primary 900 Color" size="sm" type="color" token="--color-primary-900" }
    ::
::

::ContentDesignToken{ title="Secondary Color" type="color" token="--color-secondary" }
The secondary brand color for Inkline is intended to complement the primary color and can be used for accents or to add visual interest.
#variants
    ::ContentDesignToken{ title="Secondary Tint 150 Color" size="sm" type="color" token="--color-secondary-tint-150" }
    ::
    ::ContentDesignToken{ title="Secondary Tint 100 Color" size="sm" type="color" token="--color-secondary-tint-100" }
    ::
    ::ContentDesignToken{ title="Secondary Tint 50 Color" size="sm" type="color" token="--color-secondary-tint-50" }
    ::
    ::ContentDesignToken{ title="Secondary Shade 50 Color" size="sm" type="color" token="--color-secondary-shade-50" }
    ::
    ::ContentDesignToken{ title="Secondary Shade 100 Color" size="sm" type="color" token="--color-secondary-shade-100" }
    ::
    ::ContentDesignToken{ title="Secondary Shade 150 Color" size="sm" type="color" token="--color-secondary-shade-150" }
    ::
    ::ContentDesignToken{ title="Secondary 50 Color" size="sm" type="color" token="--color-secondary-50" }
    ::
    ::ContentDesignToken{ title="Secondary 100 Color" size="sm" type="color" token="--color-secondary-100" }
    ::
    ::ContentDesignToken{ title="Secondary 200 Color" size="sm" type="color" token="--color-secondary-200" }
    ::
    ::ContentDesignToken{ title="Secondary 300 Color" size="sm" type="color" token="--color-secondary-300" }
    ::
    ::ContentDesignToken{ title="Secondary 400 Color" size="sm" type="color" token="--color-secondary-400" }
    ::
    ::ContentDesignToken{ title="Secondary 500 Color" size="sm" type="color" token="--color-secondary-500" }
    ::
    ::ContentDesignToken{ title="Secondary 600 Color" size="sm" type="color" token="--color-secondary-600" }
    ::
    ::ContentDesignToken{ title="Secondary 700 Color" size="sm" type="color" token="--color-secondary-700" }
    ::
    ::ContentDesignToken{ title="Secondary 800 Color" size="sm" type="color" token="--color-secondary-800" }
    ::
    ::ContentDesignToken{ title="Secondary 900 Color" size="sm" type="color" token="--color-secondary-900" }
    ::
::

::ContentDesignToken{ title="Info Color" type="color" token="--color-info" }
The info brand color for Inkline is used to convey information or highlight important elements, such as alerts, notifications, or messages.
#variants
    ::ContentDesignToken{ title="Info Tint 150 Color" size="sm" type="color" token="--color-info-tint-150" }
    ::
    ::ContentDesignToken{ title="Info Tint 100 Color" size="sm" type="color" token="--color-info-tint-100" }
    ::
    ::ContentDesignToken{ title="Info Tint 50 Color" size="sm" type="color" token="--color-info-tint-50" }
    ::
    ::ContentDesignToken{ title="Info Shade 50 Color" size="sm" type="color" token="--color-info-shade-50" }
    ::
    ::ContentDesignToken{ title="Info Shade 100 Color" size="sm" type="color" token="--color-info-shade-100" }
    ::
    ::ContentDesignToken{ title="Info Shade 150 Color" size="sm" type="color" token="--color-info-shade-150" }
    ::
    ::ContentDesignToken{ title="Info 50 Color" size="sm" type="color" token="--color-info-50" }
    ::
    ::ContentDesignToken{ title="Info 100 Color" size="sm" type="color" token="--color-info-100" }
    ::
    ::ContentDesignToken{ title="Info 200 Color" size="sm" type="color" token="--color-info-200" }
    ::
    ::ContentDesignToken{ title="Info 300 Color" size="sm" type="color" token="--color-info-300" }
    ::
    ::ContentDesignToken{ title="Info 400 Color" size="sm" type="color" token="--color-info-400" }
    ::
    ::ContentDesignToken{ title="Info 500 Color" size="sm" type="color" token="--color-info-500" }
    ::
    ::ContentDesignToken{ title="Info 600 Color" size="sm" type="color" token="--color-info-600" }
    ::
    ::ContentDesignToken{ title="Info 700 Color" size="sm" type="color" token="--color-info-700" }
    ::
    ::ContentDesignToken{ title="Info 800 Color" size="sm" type="color" token="--color-info-800" }
    ::
    ::ContentDesignToken{ title="Info 900 Color" size="sm" type="color" token="--color-info-900" }
    ::
::

::ContentDesignToken{ title="Success Color" type="color" token="--color-success" }
The success brand color for Inkline is used to indicate a positive action or outcome, such as a successful form submission or completion of a task.
#variants
    ::ContentDesignToken{ title="Success Tint 150 Color" size="sm" type="color" token="--color-success-tint-150" }
    ::
    ::ContentDesignToken{ title="Success Tint 100 Color" size="sm" type="color" token="--color-success-tint-100" }
    ::
    ::ContentDesignToken{ title="Success Tint 50 Color" size="sm" type="color" token="--color-success-tint-50" }
    ::
    ::ContentDesignToken{ title="Success Shade 50 Color" size="sm" type="color" token="--color-success-shade-50" }
    ::
    ::ContentDesignToken{ title="Success Shade 100 Color" size="sm" type="color" token="--color-success-shade-100" }
    ::
    ::ContentDesignToken{ title="Success Shade 150 Color" size="sm" type="color" token="--color-success-shade-150" }
    ::
    ::ContentDesignToken{ title="Success 50 Color" size="sm" type="color" token="--color-success-50" }
    ::
    ::ContentDesignToken{ title="Success 100 Color" size="sm" type="color" token="--color-success-100" }
    ::
    ::ContentDesignToken{ title="Success 200 Color" size="sm" type="color" token="--color-success-200" }
    ::
    ::ContentDesignToken{ title="Success 300 Color" size="sm" type="color" token="--color-success-300" }
    ::
    ::ContentDesignToken{ title="Success 400 Color" size="sm" type="color" token="--color-success-400" }
    ::
    ::ContentDesignToken{ title="Success 500 Color" size="sm" type="color" token="--color-success-500" }
    ::
    ::ContentDesignToken{ title="Success 600 Color" size="sm" type="color" token="--color-success-600" }
    ::
    ::ContentDesignToken{ title="Success 700 Color" size="sm" type="color" token="--color-success-700" }
    ::
    ::ContentDesignToken{ title="Success 800 Color" size="sm" type="color" token="--color-success-800" }
    ::
    ::ContentDesignToken{ title="Success 900 Color" size="sm" type="color" token="--color-success-900" }
    ::
::

::ContentDesignToken{ title="Warning Color" type="color" token="--color-warning" }
The warning brand color for Inkline is used to alert users to potential issues or problems, such as problems in form fields or incomplete information.
#variants
    ::ContentDesignToken{ title="Warning Tint 150 Color" size="sm" type="color" token="--color-warning-tint-150" }
    ::
    ::ContentDesignToken{ title="Warning Tint 100 Color" size="sm" type="color" token="--color-warning-tint-100" }
    ::
    ::ContentDesignToken{ title="Warning Tint 50 Color" size="sm" type="color" token="--color-warning-tint-50" }
    ::
    ::ContentDesignToken{ title="Warning Shade 50 Color" size="sm" type="color" token="--color-warning-shade-50" }
    ::
    ::ContentDesignToken{ title="Warning Shade 100 Color" size="sm" type="color" token="--color-warning-shade-100" }
    ::
    ::ContentDesignToken{ title="Warning Shade 150 Color" size="sm" type="color" token="--color-warning-shade-150" }
    ::
    ::ContentDesignToken{ title="Warning 50 Color" size="sm" type="color" token="--color-warning-50" }
    ::
    ::ContentDesignToken{ title="Warning 100 Color" size="sm" type="color" token="--color-warning-100" }
    ::
    ::ContentDesignToken{ title="Warning 200 Color" size="sm" type="color" token="--color-warning-200" }
    ::
    ::ContentDesignToken{ title="Warning 300 Color" size="sm" type="color" token="--color-warning-300" }
    ::
    ::ContentDesignToken{ title="Warning 400 Color" size="sm" type="color" token="--color-warning-400" }
    ::
    ::ContentDesignToken{ title="Warning 500 Color" size="sm" type="color" token="--color-warning-500" }
    ::
    ::ContentDesignToken{ title="Warning 600 Color" size="sm" type="color" token="--color-warning-600" }
    ::
    ::ContentDesignToken{ title="Warning 700 Color" size="sm" type="color" token="--color-warning-700" }
    ::
    ::ContentDesignToken{ title="Warning 800 Color" size="sm" type="color" token="--color-warning-800" }
    ::
    ::ContentDesignToken{ title="Warning 900 Color" size="sm" type="color" token="--color-warning-900" }
    ::
::

::ContentDesignToken{ title="Danger Color" type="color" token="--color-danger" }
The danger brand color for Inkline is used to signify a critical or urgent warning, such as a system error or potential loss of data.
#variants
    ::ContentDesignToken{ title="Danger Tint 150 Color" size="sm" type="color" token="--color-danger-tint-150" }
    ::
    ::ContentDesignToken{ title="Danger Tint 100 Color" size="sm" type="color" token="--color-danger-tint-100" }
    ::
    ::ContentDesignToken{ title="Danger Tint 50 Color" size="sm" type="color" token="--color-danger-tint-50" }
    ::
    ::ContentDesignToken{ title="Danger Shade 50 Color" size="sm" type="color" token="--color-danger-shade-50" }
    ::
    ::ContentDesignToken{ title="Danger Shade 100 Color" size="sm" type="color" token="--color-danger-shade-100" }
    ::
    ::ContentDesignToken{ title="Danger Shade 150 Color" size="sm" type="color" token="--color-danger-shade-150" }
    ::
    ::ContentDesignToken{ title="Danger 50 Color" size="sm" type="color" token="--color-danger-50" }
    ::
    ::ContentDesignToken{ title="Danger 100 Color" size="sm" type="color" token="--color-danger-100" }
    ::
    ::ContentDesignToken{ title="Danger 200 Color" size="sm" type="color" token="--color-danger-200" }
    ::
    ::ContentDesignToken{ title="Danger 300 Color" size="sm" type="color" token="--color-danger-300" }
    ::
    ::ContentDesignToken{ title="Danger 400 Color" size="sm" type="color" token="--color-danger-400" }
    ::
    ::ContentDesignToken{ title="Danger 500 Color" size="sm" type="color" token="--color-danger-500" }
    ::
    ::ContentDesignToken{ title="Danger 600 Color" size="sm" type="color" token="--color-danger-600" }
    ::
    ::ContentDesignToken{ title="Danger 700 Color" size="sm" type="color" token="--color-danger-700" }
    ::
    ::ContentDesignToken{ title="Danger 800 Color" size="sm" type="color" token="--color-danger-800" }
    ::
    ::ContentDesignToken{ title="Danger 900 Color" size="sm" type="color" token="--color-danger-900" }
    ::
::

#### Neutral Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Light Color" type="color" token="--color-light" }
The light neutral color has a higher luminance value and is often associated with purity, clarity, and simplicity. It can be used to create a sense of openness, spaciousness, and airiness in UI Design.
#variants
    ::ContentDesignToken{ title="Light Tint 150 Color" size="sm" type="color" token="--color-light-tint-150" }
    ::
    ::ContentDesignToken{ title="Light Tint 100 Color" size="sm" type="color" token="--color-light-tint-100" }
    ::
    ::ContentDesignToken{ title="Light Tint 50 Color" size="sm" type="color" token="--color-light-tint-50" }
    ::
    ::ContentDesignToken{ title="Light Shade 50 Color" size="sm" type="color" token="--color-light-shade-50" }
    ::
    ::ContentDesignToken{ title="Light Shade 100 Color" size="sm" type="color" token="--color-light-shade-100" }
    ::
    ::ContentDesignToken{ title="Light Shade 150 Color" size="sm" type="color" token="--color-light-shade-150" }
    ::
::

::ContentDesignToken{ title="Dark Color" type="color" token="--color-dark" }
The dark neutral color has a lower luminance value and can convey a sense of sophistication, elegance, and power. It can be used to create a sense of depth and contrast in UI Design, as well as to emphasize important elements.
#variants
    ::ContentDesignToken{ title="Dark Tint 150 Color" size="sm" type="color" token="--color-dark-tint-150" }
    ::
    ::ContentDesignToken{ title="Dark Tint 100 Color" size="sm" type="color" token="--color-dark-tint-100" }
    ::
    ::ContentDesignToken{ title="Dark Tint 50 Color" size="sm" type="color" token="--color-dark-tint-50" }
    ::
    ::ContentDesignToken{ title="Dark Shade 50 Color" size="sm" type="color" token="--color-dark-shade-50" }
    ::
    ::ContentDesignToken{ title="Dark Shade 100 Color" size="sm" type="color" token="--color-dark-shade-100" }
    ::
    ::ContentDesignToken{ title="Dark Shade 150 Color" size="sm" type="color" token="--color-dark-shade-150" }
    ::
::

::ContentDesignToken{ title="White Color" type="color" token="--color-white" }
White is a neutral color that is often associated with purity, clarity, and simplicity. It can be used in UI Design to create a clean and minimalistic look, as well as to emphasize other colors and elements.
::

::ContentDesignToken{ title="Black Color" type="color" token="--color-black" }
Black is a versatile color that can represent elegance, sophistication, and power, as well as darkness, mystery, and edginess. It can be used in UI Design to create a sense of contrast and emphasis, as well as to convey a high-end or premium look and feel.
::


#### Basic Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Red Color" type="color" token="--color-red" }
Red is a bold and attention-grabbing color that is often associated with passion, energy, and urgency. It can be used to signify warning, danger, or importance in UI Design, but can also be used to convey warmth and excitement.
::

::ContentDesignToken{ title="Orange Color" type="color" token="--color-orange" }
Orange is a vibrant and energetic color that is often associated with enthusiasm, creativity, and warmth. It can be used in UI Design to convey a sense of playfulness, excitement, and friendliness. In more subdued tones, orange can also be used to create a sense of warmth and comfort.
::

::ContentDesignToken{ title="Yellow Color" type="color" token="--color-yellow" }
Yellow is a bright and cheerful color that is often associated with happiness, optimism, and positivity. It can be used in UI Design to convey a sense of energy, fun, and playfulness, and can also be used to create a sense of warmth and comfort.
::

::ContentDesignToken{ title="Green Color" type="color" token="--color-green" }
Green is a versatile color that can represent growth, nature, and health, as well as money, wealth, and success. It is often used in UI Design to convey a sense of freshness, balance, and harmony.
::

::ContentDesignToken{ title="Teal Color" type="color" token="--color-teal" }
Teal is a refreshing and modern color that is often associated with tranquility, stability, and innovation. It can be used in UI Design to convey a sense of confidence, creativity, and freshness.
::

::ContentDesignToken{ title="Blue Color" type="color" token="--color-blue" }
Blue is a calm and soothing color that is associated with trust, stability, and loyalty. It can be used to convey a sense of professionalism and reliability in UI Design, as well as a feeling of depth and sophistication.
::

::ContentDesignToken{ title="Purple Color" type="color" token="--color-purple" }
Purple is a regal and mysterious color that is often associated with luxury, creativity, and spirituality. It can be used in UI Design to convey a sense of elegance, sophistication, and imagination.
::

::ContentDesignToken{ title="Pink Color" type="color" token="--color-pink" }
Pink is a soft color that can represent sweetness, romance, and playfulness. It is often used in UI Design to convey a sense of warmth, gentleness, and compassion.
::


### Border
The border CSS Variables are used to define the properties of an element's border, such as its width, color, and style. By using variables to define these properties, you can ensure consistency across your design and make it easy to update borders across your components.

[Read about border configuration](/docs/configuration/file#border)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Border Top Width" type="border" token="--border-top-width" }
Design token used to set the top border width of an element.
::

::ContentDesignToken{ title="Border Right Width" type="border" token="--border-right-width" }
Design token used to set the right border width of an element.
::

::ContentDesignToken{ title="Border Bottom Width" type="border" token="--border-bottom-width" }
Design token used to set the bottom border width of an element.
::

::ContentDesignToken{ title="Border Left Width" type="border" token="--border-left-width" }
Design token used to set the left border width of an element.
::

::ContentDesignToken{ title="Border Width" type="border" token="--border-width" }
Design token used to set the border width for all four sides of an element at once. This value is composed automatically based on the four individual side values documented above.
::

::ContentDesignToken{ title="Border Top Style" type="border" token="--border-top-style" }
Design token used to set the top border style of an element.
::

::ContentDesignToken{ title="Border Right Style" type="border" token="--border-right-style" }
Design token used to set the right border style of an element.
::

::ContentDesignToken{ title="Border Bottom Style" type="border" token="--border-bottom-style" }
Design token used to set the bottom border style of an element.
::

::ContentDesignToken{ title="Border Left Style" type="border" token="--border-left-style" }
Design token used to set the left border style of an element.
::

::ContentDesignToken{ title="Border Style" type="border" token="--border-style" }
Design token used to set the border style for all four sides of an element at once. This value is composed automatically based on the four individual side values documented above.
::

::ContentDesignToken{ title="Border Top Color" type="border" valueType="color" token="--border-top-color" }
Design token used to set the top border color of an element.
::

::ContentDesignToken{ title="Border Right Color" type="border" token="--border-right-color" }
Design token used to set the right border color of an element.
::

::ContentDesignToken{ title="Border Bottom Color" type="border" token="--border-bottom-color" }
Design token used to set the bottom border color of an element.
::

::ContentDesignToken{ title="Border Left Color" type="border" token="--border-left-color" }
Design token used to set the left border color of an element.
::

::ContentDesignToken{ title="Border Color" type="border" token="--border-color" }
Design token used to set the border color for all four sides of an element at once. This value is composed automatically based on the four individual side values documented above.
::


### Border Radius
Border radiuses define the curvature of the corners of an element's border. Inkline includes several predefined border radius values that can be used to create a variety of different styles. 

[Read about border radius configuration](/docs/configuration/file#borderradius)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Border Top Left Radius" type="border-radius" token="--border-top-left-radius" }
Design token used to set the border radius value for the top-left corner of an element's border.
#variants
    ::ContentDesignToken{ title="Border Top Left Radius Extra-small" type="border-radius" size="sm" token="--border-top-left-radius-xs" }
    ::
    ::ContentDesignToken{ title="Border Top Left Radius Small" type="border-radius" size="sm" token="--border-top-left-radius-sm" }
    ::
    ::ContentDesignToken{ title="Border Top Left Radius Medium" type="border-radius" size="sm" token="--border-top-left-radius-md" }
    ::
    ::ContentDesignToken{ title="Border Top Left Radius Large" type="border-radius" size="sm" token="--border-top-left-radius-lg" }
    ::
    ::ContentDesignToken{ title="Border Top Left Radius Extra-large" type="border-radius" size="sm" token="--border-top-left-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Top Right Radius" type="border-radius" token="--border-top-right-radius" }
Design token used to set the border radius value for the top-right corner of an element's border.
#variants
    ::ContentDesignToken{ title="Border Top Right Radius Extra-small" type="border-radius" size="sm" token="--border-top-right-radius-xs" }
    ::
    ::ContentDesignToken{ title="Border Top Right Radius Small" type="border-radius" size="sm" token="--border-top-right-radius-sm" }
    ::
    ::ContentDesignToken{ title="Border Top Right Radius Medium" type="border-radius" size="sm" token="--border-top-right-radius-md" }
    ::
    ::ContentDesignToken{ title="Border Top Right Radius Large" type="border-radius" size="sm" token="--border-top-right-radius-lg" }
    ::
    ::ContentDesignToken{ title="Border Top Right Radius Extra-large" type="border-radius" size="sm" token="--border-top-right-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Bottom Left Radius" type="border-radius" token="--border-bottom-left-radius" }
Design token used to set the border radius value for the bottom-left corner of an element's border.
#variants
    ::ContentDesignToken{ title="Border Bottom Left Radius Extra-small" type="border-radius" size="sm" token="--border-bottom-left-radius-xs" }
    ::
    ::ContentDesignToken{ title="Border Bottom Left Radius Small" type="border-radius" size="sm" token="--border-bottom-left-radius-sm" }
    ::
    ::ContentDesignToken{ title="Border Bottom Left Radius Medium" type="border-radius" size="sm" token="--border-bottom-left-radius-md" }
    ::
    ::ContentDesignToken{ title="Border Bottom Left Radius Large" type="border-radius" size="sm" token="--border-bottom-left-radius-lg" }
    ::
    ::ContentDesignToken{ title="Border Bottom Left Radius Extra-large" type="border-radius" size="sm" token="--border-bottom-left-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Bottom Right Radius" type="border-radius" token="--border-bottom-right-radius" }
Design token used to set the border radius value for the bottom-right corner of an element's border.
#variants
    ::ContentDesignToken{ title="Border Bottom Right Radius Extra-small" type="border-radius" size="sm" token="--border-bottom-right-radius-xs" }
    ::
    ::ContentDesignToken{ title="Border Bottom Right Radius Small" type="border-radius" size="sm" token="--border-bottom-right-radius-sm" }
    ::
    ::ContentDesignToken{ title="Border Bottom Right Radius Medium" type="border-radius" size="sm" token="--border-bottom-right-radius-md" }
    ::
    ::ContentDesignToken{ title="Border Bottom Right Radius Large" type="border-radius" size="sm" token="--border-bottom-right-radius-lg" }
    ::
    ::ContentDesignToken{ title="Border Bottom Right Radius Extra-large" type="border-radius" size="sm" token="--border-bottom-right-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Radius" type="border-radius" token="--border-radius" }
Inkline includes a composed border-radius design token used to set all four corners of an element's border at once. This value is composed automatically based on the four individual corner values documented above.
#variants
    ::ContentDesignToken{ title="Border Radius Extra-small" type="border-radius" size="sm" token="--border-radius-xs" }
    ::
    ::ContentDesignToken{ title="Border Radius Small" type="border-radius" size="sm" token="--border-radius-sm" }
    ::
    ::ContentDesignToken{ title="Border Radius Medium" type="border-radius" size="sm" token="--border-radius-md" }
    ::
    ::ContentDesignToken{ title="Border Radius Large" type="border-radius" size="sm" token="--border-radius-lg" }
    ::
    ::ContentDesignToken{ title="Border Radius Extra-large" type="border-radius" size="sm" token="--border-radius-xl" }
    ::
::

### Box Shadow
Box shadow can be used to create a variety of effects, such as adding depth to buttons, highlighting elements on hover, or creating a sense of elevation.

The box shadow property takes several values, including the horizontal and vertical offset of the shadow, its blur radius, its spread radius, and its color. By adjusting these values, you can create custom shadow effects that complement your design system.

[Read about box shadow configuration](/docs/configuration/file#boxshadow)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Box Shadow Offset X" type="box-shadow" token="--box-shadow-offset-x" }
This value is used to set the horizontal offset of the box shadow. A positive value moves the shadow to the right of the box, while a negative value moves it to the left.
::

::ContentDesignToken{ title="Box Shadow Offset Y" type="box-shadow" token="--box-shadow-offset-y" }
This value is used to set the vertical offset of the box shadow. A positive value moves the shadow down from the box, while a negative value moves it up.
::

::ContentDesignToken{ title="Box Shadow Blur Radius" type="box-shadow" token="--box-shadow-blur-radius" }
The blur radius value in the box shadow property sets the amount of blurring applied to the shadow. A larger value will create a more diffuse, spread-out shadow, while a smaller value will create a sharper, more defined shadow.
::

::ContentDesignToken{ title="Box Shadow Spread Radius" type="box-shadow" token="--box-shadow-spread-radius" }
The spread radius value in the box shadow property sets the amount that the shadow should be spread outward from the element's box. A positive value will cause the shadow to expand, while a negative value will cause the shadow to contract.
::

::ContentDesignToken{ title="Box Shadow Color" type="box-shadow" token="--box-shadow-color" }
The color value in the box-shadow property sets the color of the shadow, typically a slightly transparent color. You can use a darker color to create a more dramatic, prominent shadow, or a lighter color to create a more subtle, subdued effect.
::

::ContentDesignToken{ title="Box Shadow" type="box-shadow" token="--box-shadow" }
Inkline includes a composed box shadow design token, composed automatically based on the four individual box shadow values documented above.
::


### Typography

[Read about typography configuration](/docs/configuration/file#typography)

#### Text Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Contrast Text for Light Color" type="text" token="--contrast-text--color-light" }
The contrast text for light backgrounds is a dark-colored text that provides a high contrast ratio against a light-colored background. This type of text is often used to ensure legibility and accessibility for users with visual impairments.
::

::ContentDesignToken{ title="Contrast Text for Dark Color" type="text" token="--contrast-text--color-dark" }
The contrast text on dark backgrounds is a light-colored text that provides a high contrast ratio against a dark-colored background. This type of text is also used to ensure legibility and accessibility for users with visual impairments. 
::

::ContentDesignToken{ title="Light Text Color" type="text" token="--text--color-light" }
The light text color can be used to create a softer and more approachable look and feel in UI Design, and can also be used to create a sense of contrast and emphasis.
::

::ContentDesignToken{ title="Dark Text Color" type="text" token="--text--color-dark" }
The dark text color can be used to create a more sophisticated and elegant look and feel in UI Dsign, and can also be used to convey a sense of depth and richness.
::

### Box Shadow
Box shadow can be used to create a variety of effects, such as adding depth to buttons, highlighting elements on hover, or creating a sense of elevation.

The box shadow property takes several values, including the horizontal and vertical offset of the shadow, its blur radius, its spread radius, and its color. By adjusting these values, you can create custom shadow effects that complement your design system.

[Read about box shadow configuration](/docs/configuration/file#boxshadow)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Box Shadow Offset X" type="box-shadow" token="--box-shadow-offset-x" }
This value is used to set the horizontal offset of the box shadow. A positive value moves the shadow to the right of the box, while a negative value moves it to the left.
::
