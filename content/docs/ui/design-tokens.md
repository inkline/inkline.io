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

::ContentDesignToken{ title="Primary Color" token="--color-primary" }
Primary brand color for Inkline. This color provides accessible contrast when used for text on light background.
#variants
    ::ContentDesignToken{ title="Primary Tint 150 Color" size="sm" token="--color-primary-tint-150" }
    ::
    ::ContentDesignToken{ title="Primary Tint 100 Color" size="sm" token="--color-primary-tint-100" }
    ::
    ::ContentDesignToken{ title="Primary Tint 50 Color" size="sm" token="--color-primary-tint-50" }
    ::
    ::ContentDesignToken{ title="Primary Shade 50 Color" size="sm" token="--color-primary-shade-50" }
    ::
    ::ContentDesignToken{ title="Primary Shade 100 Color" size="sm" token="--color-primary-shade-100" }
    ::
    ::ContentDesignToken{ title="Primary Shade 150 Color" size="sm" token="--color-primary-shade-150" }
    ::
    ::ContentDesignToken{ title="Primary 50 Color" size="sm" token="--color-primary-50" }
    ::
    ::ContentDesignToken{ title="Primary 100 Color" size="sm" token="--color-primary-100" }
    ::
    ::ContentDesignToken{ title="Primary 200 Color" size="sm" token="--color-primary-200" }
    ::
    ::ContentDesignToken{ title="Primary 300 Color" size="sm" token="--color-primary-300" }
    ::
    ::ContentDesignToken{ title="Primary 400 Color" size="sm" token="--color-primary-400" }
    ::
    ::ContentDesignToken{ title="Primary 500 Color" size="sm" token="--color-primary-500" }
    ::
    ::ContentDesignToken{ title="Primary 600 Color" size="sm" token="--color-primary-600" }
    ::
    ::ContentDesignToken{ title="Primary 700 Color" size="sm" token="--color-primary-700" }
    ::
    ::ContentDesignToken{ title="Primary 800 Color" size="sm" token="--color-primary-800" }
    ::
    ::ContentDesignToken{ title="Primary 900 Color" size="sm" token="--color-primary-900" }
    ::
::

::ContentDesignToken{ title="Secondary Color" token="--color-secondary" }
The secondary brand color for Inkline is intended to complement the primary color and can be used for accents or to add visual interest.
#variants
    ::ContentDesignToken{ title="Secondary Tint 150 Color" size="sm" token="--color-secondary-tint-150" }
    ::
    ::ContentDesignToken{ title="Secondary Tint 100 Color" size="sm" token="--color-secondary-tint-100" }
    ::
    ::ContentDesignToken{ title="Secondary Tint 50 Color" size="sm" token="--color-secondary-tint-50" }
    ::
    ::ContentDesignToken{ title="Secondary Shade 50 Color" size="sm" token="--color-secondary-shade-50" }
    ::
    ::ContentDesignToken{ title="Secondary Shade 100 Color" size="sm" token="--color-secondary-shade-100" }
    ::
    ::ContentDesignToken{ title="Secondary Shade 150 Color" size="sm" token="--color-secondary-shade-150" }
    ::
    ::ContentDesignToken{ title="Secondary 50 Color" size="sm" token="--color-secondary-50" }
    ::
    ::ContentDesignToken{ title="Secondary 100 Color" size="sm" token="--color-secondary-100" }
    ::
    ::ContentDesignToken{ title="Secondary 200 Color" size="sm" token="--color-secondary-200" }
    ::
    ::ContentDesignToken{ title="Secondary 300 Color" size="sm" token="--color-secondary-300" }
    ::
    ::ContentDesignToken{ title="Secondary 400 Color" size="sm" token="--color-secondary-400" }
    ::
    ::ContentDesignToken{ title="Secondary 500 Color" size="sm" token="--color-secondary-500" }
    ::
    ::ContentDesignToken{ title="Secondary 600 Color" size="sm" token="--color-secondary-600" }
    ::
    ::ContentDesignToken{ title="Secondary 700 Color" size="sm" token="--color-secondary-700" }
    ::
    ::ContentDesignToken{ title="Secondary 800 Color" size="sm" token="--color-secondary-800" }
    ::
    ::ContentDesignToken{ title="Secondary 900 Color" size="sm" token="--color-secondary-900" }
    ::
::

::ContentDesignToken{ title="Info Color" token="--color-info" }
The info brand color for Inkline is used to convey information or highlight important elements, such as alerts, notifications, or messages.
#variants
    ::ContentDesignToken{ title="Info Tint 150 Color" size="sm" token="--color-info-tint-150" }
    ::
    ::ContentDesignToken{ title="Info Tint 100 Color" size="sm" token="--color-info-tint-100" }
    ::
    ::ContentDesignToken{ title="Info Tint 50 Color" size="sm" token="--color-info-tint-50" }
    ::
    ::ContentDesignToken{ title="Info Shade 50 Color" size="sm" token="--color-info-shade-50" }
    ::
    ::ContentDesignToken{ title="Info Shade 100 Color" size="sm" token="--color-info-shade-100" }
    ::
    ::ContentDesignToken{ title="Info Shade 150 Color" size="sm" token="--color-info-shade-150" }
    ::
    ::ContentDesignToken{ title="Info 50 Color" size="sm" token="--color-info-50" }
    ::
    ::ContentDesignToken{ title="Info 100 Color" size="sm" token="--color-info-100" }
    ::
    ::ContentDesignToken{ title="Info 200 Color" size="sm" token="--color-info-200" }
    ::
    ::ContentDesignToken{ title="Info 300 Color" size="sm" token="--color-info-300" }
    ::
    ::ContentDesignToken{ title="Info 400 Color" size="sm" token="--color-info-400" }
    ::
    ::ContentDesignToken{ title="Info 500 Color" size="sm" token="--color-info-500" }
    ::
    ::ContentDesignToken{ title="Info 600 Color" size="sm" token="--color-info-600" }
    ::
    ::ContentDesignToken{ title="Info 700 Color" size="sm" token="--color-info-700" }
    ::
    ::ContentDesignToken{ title="Info 800 Color" size="sm" token="--color-info-800" }
    ::
    ::ContentDesignToken{ title="Info 900 Color" size="sm" token="--color-info-900" }
    ::
::

::ContentDesignToken{ title="Success Color" token="--color-success" }
The success brand color for Inkline is used to indicate a positive action or outcome, such as a successful form submission or completion of a task.
#variants
    ::ContentDesignToken{ title="Success Tint 150 Color" size="sm" token="--color-success-tint-150" }
    ::
    ::ContentDesignToken{ title="Success Tint 100 Color" size="sm" token="--color-success-tint-100" }
    ::
    ::ContentDesignToken{ title="Success Tint 50 Color" size="sm" token="--color-success-tint-50" }
    ::
    ::ContentDesignToken{ title="Success Shade 50 Color" size="sm" token="--color-success-shade-50" }
    ::
    ::ContentDesignToken{ title="Success Shade 100 Color" size="sm" token="--color-success-shade-100" }
    ::
    ::ContentDesignToken{ title="Success Shade 150 Color" size="sm" token="--color-success-shade-150" }
    ::
    ::ContentDesignToken{ title="Success 50 Color" size="sm" token="--color-success-50" }
    ::
    ::ContentDesignToken{ title="Success 100 Color" size="sm" token="--color-success-100" }
    ::
    ::ContentDesignToken{ title="Success 200 Color" size="sm" token="--color-success-200" }
    ::
    ::ContentDesignToken{ title="Success 300 Color" size="sm" token="--color-success-300" }
    ::
    ::ContentDesignToken{ title="Success 400 Color" size="sm" token="--color-success-400" }
    ::
    ::ContentDesignToken{ title="Success 500 Color" size="sm" token="--color-success-500" }
    ::
    ::ContentDesignToken{ title="Success 600 Color" size="sm" token="--color-success-600" }
    ::
    ::ContentDesignToken{ title="Success 700 Color" size="sm" token="--color-success-700" }
    ::
    ::ContentDesignToken{ title="Success 800 Color" size="sm" token="--color-success-800" }
    ::
    ::ContentDesignToken{ title="Success 900 Color" size="sm" token="--color-success-900" }
    ::
::

::ContentDesignToken{ title="Warning Color" token="--color-warning" }
The warning brand color for Inkline is used to alert users to potential issues or problems, such as problems in form fields or incomplete information.
#variants
    ::ContentDesignToken{ title="Warning Tint 150 Color" size="sm" token="--color-warning-tint-150" }
    ::
    ::ContentDesignToken{ title="Warning Tint 100 Color" size="sm" token="--color-warning-tint-100" }
    ::
    ::ContentDesignToken{ title="Warning Tint 50 Color" size="sm" token="--color-warning-tint-50" }
    ::
    ::ContentDesignToken{ title="Warning Shade 50 Color" size="sm" token="--color-warning-shade-50" }
    ::
    ::ContentDesignToken{ title="Warning Shade 100 Color" size="sm" token="--color-warning-shade-100" }
    ::
    ::ContentDesignToken{ title="Warning Shade 150 Color" size="sm" token="--color-warning-shade-150" }
    ::
    ::ContentDesignToken{ title="Warning 50 Color" size="sm" token="--color-warning-50" }
    ::
    ::ContentDesignToken{ title="Warning 100 Color" size="sm" token="--color-warning-100" }
    ::
    ::ContentDesignToken{ title="Warning 200 Color" size="sm" token="--color-warning-200" }
    ::
    ::ContentDesignToken{ title="Warning 300 Color" size="sm" token="--color-warning-300" }
    ::
    ::ContentDesignToken{ title="Warning 400 Color" size="sm" token="--color-warning-400" }
    ::
    ::ContentDesignToken{ title="Warning 500 Color" size="sm" token="--color-warning-500" }
    ::
    ::ContentDesignToken{ title="Warning 600 Color" size="sm" token="--color-warning-600" }
    ::
    ::ContentDesignToken{ title="Warning 700 Color" size="sm" token="--color-warning-700" }
    ::
    ::ContentDesignToken{ title="Warning 800 Color" size="sm" token="--color-warning-800" }
    ::
    ::ContentDesignToken{ title="Warning 900 Color" size="sm" token="--color-warning-900" }
    ::
::

::ContentDesignToken{ title="Danger Color" token="--color-danger" }
The danger brand color for Inkline is used to signify a critical or urgent warning, such as a system error or potential loss of data.
#variants
    ::ContentDesignToken{ title="Danger Tint 150 Color" size="sm" token="--color-danger-tint-150" }
    ::
    ::ContentDesignToken{ title="Danger Tint 100 Color" size="sm" token="--color-danger-tint-100" }
    ::
    ::ContentDesignToken{ title="Danger Tint 50 Color" size="sm" token="--color-danger-tint-50" }
    ::
    ::ContentDesignToken{ title="Danger Shade 50 Color" size="sm" token="--color-danger-shade-50" }
    ::
    ::ContentDesignToken{ title="Danger Shade 100 Color" size="sm" token="--color-danger-shade-100" }
    ::
    ::ContentDesignToken{ title="Danger Shade 150 Color" size="sm" token="--color-danger-shade-150" }
    ::
    ::ContentDesignToken{ title="Danger 50 Color" size="sm" token="--color-danger-50" }
    ::
    ::ContentDesignToken{ title="Danger 100 Color" size="sm" token="--color-danger-100" }
    ::
    ::ContentDesignToken{ title="Danger 200 Color" size="sm" token="--color-danger-200" }
    ::
    ::ContentDesignToken{ title="Danger 300 Color" size="sm" token="--color-danger-300" }
    ::
    ::ContentDesignToken{ title="Danger 400 Color" size="sm" token="--color-danger-400" }
    ::
    ::ContentDesignToken{ title="Danger 500 Color" size="sm" token="--color-danger-500" }
    ::
    ::ContentDesignToken{ title="Danger 600 Color" size="sm" token="--color-danger-600" }
    ::
    ::ContentDesignToken{ title="Danger 700 Color" size="sm" token="--color-danger-700" }
    ::
    ::ContentDesignToken{ title="Danger 800 Color" size="sm" token="--color-danger-800" }
    ::
    ::ContentDesignToken{ title="Danger 900 Color" size="sm" token="--color-danger-900" }
    ::
::

#### Neutral Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Light Color" token="--color-light" }
The light neutral color has a higher luminance value and is often associated with purity, clarity, and simplicity. It can be used to create a sense of openness, spaciousness, and airiness in UI Design.
#variants
    ::ContentDesignToken{ title="Light Tint 150 Color" size="sm" token="--color-light-tint-150" }
    ::
    ::ContentDesignToken{ title="Light Tint 100 Color" size="sm" token="--color-light-tint-100" }
    ::
    ::ContentDesignToken{ title="Light Tint 50 Color" size="sm" token="--color-light-tint-50" }
    ::
    ::ContentDesignToken{ title="Light Shade 50 Color" size="sm" token="--color-light-shade-50" }
    ::
    ::ContentDesignToken{ title="Light Shade 100 Color" size="sm" token="--color-light-shade-100" }
    ::
    ::ContentDesignToken{ title="Light Shade 150 Color" size="sm" token="--color-light-shade-150" }
    ::
::

::ContentDesignToken{ title="Dark Color" token="--color-dark" }
The dark neutral color has a lower luminance value and can convey a sense of sophistication, elegance, and power. It can be used to create a sense of depth and contrast in UI Design, as well as to emphasize important elements.
#variants
    ::ContentDesignToken{ title="Dark Tint 150 Color" size="sm" token="--color-dark-tint-150" }
    ::
    ::ContentDesignToken{ title="Dark Tint 100 Color" size="sm" token="--color-dark-tint-100" }
    ::
    ::ContentDesignToken{ title="Dark Tint 50 Color" size="sm" token="--color-dark-tint-50" }
    ::
    ::ContentDesignToken{ title="Dark Shade 50 Color" size="sm" token="--color-dark-shade-50" }
    ::
    ::ContentDesignToken{ title="Dark Shade 100 Color" size="sm" token="--color-dark-shade-100" }
    ::
    ::ContentDesignToken{ title="Dark Shade 150 Color" size="sm" token="--color-dark-shade-150" }
    ::
::

::ContentDesignToken{ title="White Color" token="--color-white" }
White is a neutral color that is often associated with purity, clarity, and simplicity. It can be used in UI Design to create a clean and minimalistic look, as well as to emphasize other colors and elements.
::

::ContentDesignToken{ title="Black Color" token="--color-black" }
Black is a versatile color that can represent elegance, sophistication, and power, as well as darkness, mystery, and edginess. It can be used in UI Design to create a sense of contrast and emphasis, as well as to convey a high-end or premium look and feel.
::


#### Basic Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Red Color" token="--color-red" }
Red is a bold and attention-grabbing color that is often associated with passion, energy, and urgency. It can be used to signify warning, danger, or importance in UI Design, but can also be used to convey warmth and excitement.
::

::ContentDesignToken{ title="Orange Color" token="--color-orange" }
Orange is a vibrant and energetic color that is often associated with enthusiasm, creativity, and warmth. It can be used in UI Design to convey a sense of playfulness, excitement, and friendliness. In more subdued tones, orange can also be used to create a sense of warmth and comfort.
::

::ContentDesignToken{ title="Yellow Color" token="--color-yellow" }
Yellow is a bright and cheerful color that is often associated with happiness, optimism, and positivity. It can be used in UI Design to convey a sense of energy, fun, and playfulness, and can also be used to create a sense of warmth and comfort.
::

::ContentDesignToken{ title="Green Color" token="--color-green" }
Green is a versatile color that can represent growth, nature, and health, as well as money, wealth, and success. It is often used in UI Design to convey a sense of freshness, balance, and harmony.
::

::ContentDesignToken{ title="Teal Color" token="--color-teal" }
Teal is a refreshing and modern color that is often associated with tranquility, stability, and innovation. It can be used in UI Design to convey a sense of confidence, creativity, and freshness.
::

::ContentDesignToken{ title="Blue Color" token="--color-blue" }
Blue is a calm and soothing color that is associated with trust, stability, and loyalty. It can be used to convey a sense of professionalism and reliability in UI Design, as well as a feeling of depth and sophistication.
::

::ContentDesignToken{ title="Purple Color" token="--color-purple" }
Purple is a regal and mysterious color that is often associated with luxury, creativity, and spirituality. It can be used in UI Design to convey a sense of elegance, sophistication, and imagination.
::

::ContentDesignToken{ title="Pink Color" token="--color-pink" }
Pink is a soft color that can represent sweetness, romance, and playfulness. It is often used in UI Design to convey a sense of warmth, gentleness, and compassion.
::

#### Text Colors
::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Contrast Text for Light Color" token="--contrast-text-color-light" }
The contrast text for light backgrounds is a dark-colored text that provides a high contrast ratio against a light-colored background. This type of text is often used to ensure legibility and accessibility for users with visual impairments.
::

::ContentDesignToken{ title="Contrast Text for Dark Color" token="--contrast-text-color-dark" }
The contrast text on dark backgrounds is a light-colored text that provides a high contrast ratio against a dark-colored background. This type of text is also used to ensure legibility and accessibility for users with visual impairments.
::

::ContentDesignToken{ title="Light Text Color" token="--text-color-light" }
The light text color can be used to create a softer and more approachable look and feel in UI Design, and can also be used to create a sense of contrast and emphasis.
::

::ContentDesignToken{ title="Dark Text Color" token="--text-color-dark" }
The dark text color can be used to create a more sophisticated and elegant look and feel in UI Design, and can also be used to convey a sense of depth and richness.
::

::ContentDesignToken{ title="Weak Text Color" token="--text-color-weak" }
A weak text color, typically used for subtext or captions that are less prominent than the main content.
::

::ContentDesignToken{ title="Weaker Text Color" token="--text-color-weaker" }
An even weaker text color, typically used for secondary text elements that are meant to be less visible.
::

::ContentDesignToken{ title="Weakest Text Color" token="--text-color-weakest" }
The weakest text color, typically used for text elements that should not stand out.
::

### Animation
CSS transitions allow for smooth and gradual changes to occur over a specified duration. Transitions can be triggered by various events, such as hover, click, or page load, and can be applied to different properties such as background-color, opacity, width, height, and more.

[Read about animation configuration](/docs/configuration/file#animation)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Transition Duration" icon="ic:outline-hourglass-top" token="--transition-duration" }
This value defines the length of time it takes for an element to transition from one state to another. The duration is specified in seconds or milliseconds, and can be set to any positive number.
::

::ContentDesignToken{ title="Transition Timing Function" icon="material-symbols:animation" token="--transition-timing-function" }
This is used to define the easing function to be used in CSS transitions. An easing function defines the rate at which the transition progresses over time, affecting the speed and smoothness of the transition.
::

### Border
The border CSS Variables are used to define the properties of an element's border, such as its width, color, and style. By using variables to define these properties, you can ensure consistency across your design and make it easy to update borders across your components.

[Read about border configuration](/docs/configuration/file#border)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Border Top Width" token="--border-top-width" }
Design token used to set the top border width of an element.
::

::ContentDesignToken{ title="Border Right Width" token="--border-right-width" }
Design token used to set the right border width of an element.
::

::ContentDesignToken{ title="Border Bottom Width" token="--border-bottom-width" }
Design token used to set the bottom border width of an element.
::

::ContentDesignToken{ title="Border Left Width" token="--border-left-width" }
Design token used to set the left border width of an element.
::

::ContentDesignToken{ title="Border Width" token="--border-width" }
Design token used to set the border width for all four sides of an element at once. This value is composed automatically based on the four individual side values documented above.
::

::ContentDesignToken{ title="Border Top Style" token="--border-top-style" }
Design token used to set the top border style of an element.
::

::ContentDesignToken{ title="Border Right Style" token="--border-right-style" }
Design token used to set the right border style of an element.
::

::ContentDesignToken{ title="Border Bottom Style" token="--border-bottom-style" }
Design token used to set the bottom border style of an element.
::

::ContentDesignToken{ title="Border Left Style" token="--border-left-style" }
Design token used to set the left border style of an element.
::

::ContentDesignToken{ title="Border Style" token="--border-style" }
Design token used to set the border style for all four sides of an element at once. This value is composed automatically based on the four individual side values documented above.
::

::ContentDesignToken{ title="Border Top Color" token="--border-top-color" }
Design token used to set the top border color of an element.
::

::ContentDesignToken{ title="Border Right Color" token="--border-right-color" }
Design token used to set the right border color of an element.
::

::ContentDesignToken{ title="Border Bottom Color" token="--border-bottom-color" }
Design token used to set the bottom border color of an element.
::

::ContentDesignToken{ title="Border Left Color" token="--border-left-color" }
Design token used to set the left border color of an element.
::

::ContentDesignToken{ title="Border Color" token="--border-color" }
Design token used to set the border color for all four sides of an element at once. This value is composed automatically based on the four individual side values documented above.
::


### Border Radius
Border radiuses define the curvature of the corners of an element's border. Inkline includes several predefined border radius values that can be used to create a variety of different styles. 

[Read about border radius configuration](/docs/configuration/file#borderradius)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Border Top Left Radius" token="--border-top-left-radius" }
Design token used to set the border radius value for the top-left corner of an element's border.
#variants
    ::ContentDesignToken{ title="Extra-small Border Top Left Radius" size="sm" token="--border-top-left-radius-xs" }
    ::
    ::ContentDesignToken{ title="Small Border Top Left Radius" size="sm" token="--border-top-left-radius-sm" }
    ::
    ::ContentDesignToken{ title="Medium Border Top Left Radius" size="sm" token="--border-top-left-radius-md" }
    ::
    ::ContentDesignToken{ title="Large Border Top Left Radius" size="sm" token="--border-top-left-radius-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Border Top Left Radius" size="sm" token="--border-top-left-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Top Right Radius" token="--border-top-right-radius" }
Design token used to set the border radius value for the top-right corner of an element's border.
#variants
    ::ContentDesignToken{ title="Extra-small Border Top Right Radius" size="sm" token="--border-top-right-radius-xs" }
    ::
    ::ContentDesignToken{ title="Small Border Top Right Radius" size="sm" token="--border-top-right-radius-sm" }
    ::
    ::ContentDesignToken{ title="Medium Border Top Right Radius" size="sm" token="--border-top-right-radius-md" }
    ::
    ::ContentDesignToken{ title="Large Border Top Right Radius" size="sm" token="--border-top-right-radius-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Border Top Right Radius" size="sm" token="--border-top-right-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Bottom Left Radius" token="--border-bottom-left-radius" }
Design token used to set the border radius value for the bottom-left corner of an element's border.
#variants
    ::ContentDesignToken{ title="Extra-small Border Bottom Left Radius" size="sm" token="--border-bottom-left-radius-xs" }
    ::
    ::ContentDesignToken{ title="Small Border Bottom Left Radius" size="sm" token="--border-bottom-left-radius-sm" }
    ::
    ::ContentDesignToken{ title="Medium Border Bottom Left Radius" size="sm" token="--border-bottom-left-radius-md" }
    ::
    ::ContentDesignToken{ title="Large Border Bottom Left Radius" size="sm" token="--border-bottom-left-radius-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Border Bottom Left Radius" size="sm" token="--border-bottom-left-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Bottom Right Radius" token="--border-bottom-right-radius" }
Design token used to set the border radius value for the bottom-right corner of an element's border.
#variants
    ::ContentDesignToken{ title="Extra-small Border Bottom Right Radius" size="sm" token="--border-bottom-right-radius-xs" }
    ::
    ::ContentDesignToken{ title="Small Border Bottom Right Radius" size="sm" token="--border-bottom-right-radius-sm" }
    ::
    ::ContentDesignToken{ title="Medium Border Bottom Right Radius" size="sm" token="--border-bottom-right-radius-md" }
    ::
    ::ContentDesignToken{ title="Large Border Bottom Right Radius" size="sm" token="--border-bottom-right-radius-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Border Bottom Right Radius" size="sm" token="--border-bottom-right-radius-xl" }
    ::
::

::ContentDesignToken{ title="Border Radius" token="--border-radius" }
Inkline includes a composed border-radius design token used to set all four corners of an element's border at once. This value is composed automatically based on the four individual corner values documented above.
#variants
    ::ContentDesignToken{ title="Extra-small Border Radius" size="sm" token="--border-radius-xs" }
    ::
    ::ContentDesignToken{ title="Small Border Radius" size="sm" token="--border-radius-sm" }
    ::
    ::ContentDesignToken{ title="Medium Border Radius" size="sm" token="--border-radius-md" }
    ::
    ::ContentDesignToken{ title="Large Border Radius" size="sm" token="--border-radius-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Border Radius" size="sm" token="--border-radius-xl" }
    ::
::

### Box Shadow
Box shadow can be used to create a variety of effects, such as adding depth to buttons, highlighting elements on hover, or creating a sense of elevation.

The box shadow property takes several values, including the horizontal and vertical offset of the shadow, its blur radius, its spread radius, and its color. By adjusting these values, you can create custom shadow effects that complement your design system.

[Read about box shadow configuration](/docs/configuration/file#boxshadow)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Box Shadow Offset X" token="--box-shadow-offset-x" }
This value is used to set the horizontal offset of the box shadow. A positive value moves the shadow to the right of the box, while a negative value moves it to the left.
::

::ContentDesignToken{ title="Box Shadow Offset Y" token="--box-shadow-offset-y" }
This value is used to set the vertical offset of the box shadow. A positive value moves the shadow down from the box, while a negative value moves it up.
::

::ContentDesignToken{ title="Box Shadow Blur Radius" token="--box-shadow-blur-radius" }
The blur radius value in the box shadow property sets the amount of blurring applied to the shadow. A larger value will create a more diffuse, spread-out shadow, while a smaller value will create a sharper, more defined shadow.
::

::ContentDesignToken{ title="Box Shadow Spread Radius" token="--box-shadow-spread-radius" }
The spread radius value in the box shadow property sets the amount that the shadow should be spread outward from the element's box. A positive value will cause the shadow to expand, while a negative value will cause the shadow to contract.
::

::ContentDesignToken{ title="Box Shadow Color" token="--box-shadow-color" }
The color value in the box-shadow property sets the color of the shadow, typically a slightly transparent color. You can use a darker color to create a more dramatic, prominent shadow, or a lighter color to create a more subtle, subdued effect.
::

::ContentDesignToken{ title="Box Shadow" token="--box-shadow" }
Inkline includes a composed box shadow design token, composed automatically based on the four individual box shadow values documented above.
::


### Breakpoints
Breakpoints refer to specific screen sizes where the layout of a website or application changes to accommodate the different screen sizes and resolutions. 

In Inkline, breakpoints are defined using CSS media queries that are based on the device's width. There are six pre-defined breakpoints that can be used to create responsive designs:

- `xs`: Extra-small screens (less than 576px)
- `sm`: Small screens (576px or more)
- `md`: Medium screens (768px or more)
- `lg`: Large screens (992px or more)
- `xl`: Extra-large screens (1200px or more)
- `2xl`: Extra-extra-large screens (1400px or more)

[Read about breakpoints configuration](/docs/configuration/file#breakpoints)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Extra-small Breakpoint" icon="material-symbols:resize" token="--breakpoint-xs" }
This value represents the starting point for the extra-small devices screen size range. It is typically used for mobile devices with smaller screens, such as smartphones.
::

::ContentDesignToken{ title="Small Breakpoint" icon="material-symbols:resize" token="--breakpoint-sm" }
This value represents the starting point for the small devices screen size range. It is designed for small screens such as smartphones in portrait orientation or small tablets.
::

::ContentDesignToken{ title="Medium Breakpoint" icon="material-symbols:resize" token="--breakpoint-md" }
This value represents the starting point for the medium devices screen size range. It is used to define the styles for medium-sized screens such as tablets or smaller laptops.
::

::ContentDesignToken{ title="Large Breakpoint" icon="material-symbols:resize" token="--breakpoint-lg" }
This value represents the starting point for the large devices screen size range. It is typically used to target larger screens such as large tablets, laptops and desktops.
::

::ContentDesignToken{ title="Extra-large Breakpoint" icon="material-symbols:resize" token="--breakpoint-xl" }
This value represents the starting point for the extra-large devices screen size range. It is typically used to target larger screens such as large tablets, laptops and desktops.
::

::ContentDesignToken{ title="Extra-extra-large Breakpoint" icon="material-symbols:resize" token="--breakpoint-2xl" }
This value represents the starting point for the extra-extra-large devices screen size range. It is typically used to target extra large desktop screens.
::

### Elements
Inkline's configuration also provides variables for common elements such as the body background and color.

[Read about elements configuration](/docs/configuration/file#elements)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Body Background" token="--body--background" }
This value sets the background color of the body element.
::

::ContentDesignToken{ title="Body Color" token="--body--color" type="generic" }
This value sets the text color of the body element.
::


### Grid
Inkline's grid system is based on a 12-column layout, which provides flexibility and versatility in designing responsive layouts. The grid system also includes options for gutters and responsive sizes, which can be adjusted to create different spacing and layout options.

The grid system is designed to be modular and customizable, so you can easily adapt it to your project's specific needs and requirements.

[Read about elements configuration](/docs/configuration/file#elements)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Grid Columns" icon="radix-icons:columns" token="--grid--columns" }
This value sets the number of columns in the grid system, which is set to 12 columns by default in Inkline. This variable is used to calculate the width of each column in the grid system, based on the total width of the container element.
::

::ContentDesignToken{ title="Grid Gutter" icon="icon-park-outline:horizontal-spacing-between-items" token="--grid--gutter" }
This value sets the size of the gutter (the space between columns) in the grid system.
#variants
    ::ContentDesignToken{ title="Extra-small Grid Gutter" size="sm" icon="icon-park-outline:horizontal-spacing-between-items" token="--grid--xs--gutter" }
    ::
    ::ContentDesignToken{ title="Small Grid Gutter" size="sm" icon="icon-park-outline:horizontal-spacing-between-items" token="--grid--sm--gutter" }
    ::
    ::ContentDesignToken{ title="Medium Grid Gutter" size="sm" icon="icon-park-outline:horizontal-spacing-between-items" token="--grid--md--gutter" }
    ::
    ::ContentDesignToken{ title="Large Grid Gutter" size="sm" icon="icon-park-outline:horizontal-spacing-between-items" token="--grid--lg--gutter" }
    ::
    ::ContentDesignToken{ title="Extra-large Grid Gutter" size="sm" icon="icon-park-outline:horizontal-spacing-between-items" token="--grid--xl--gutter" }
    ::
::

### Scale Ratio
In design, a scale ratio is a mathematical relationship between different elements or components that ensures visual harmony and balance. In typography, scale ratios are commonly used to determine font sizes and line heights that are in proportion to one another. This creates a harmonious and balanced visual hierarchy within the text.

[Read about scale ratio configuration](/docs/configuration/file#scaleratio)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Scale Ratio" icon="ri:scales-fill" token="--scale-ratio" }
This value sets the design system's scale ratio. Inkline uses a modular scale system based on the minor third scale ratio by default. This means that each step in the scale is 1.2 times larger or smaller than the previous step.
#variants
    ::ContentDesignToken{ title="Scale Ratio ^ 1" size="sm" icon="ri:scales-fill" token="--scale-ratio-pow-1" }
    ::
    ::ContentDesignToken{ title="Scale Ratio ^ 2" size="sm" icon="ri:scales-fill" token="--scale-ratio-pow-2" }
    ::
    ::ContentDesignToken{ title="Scale Ratio ^ 3" size="sm" icon="ri:scales-fill" token="--scale-ratio-pow-3" }
    ::
    ::ContentDesignToken{ title="Scale Ratio ^ 4" size="sm" icon="ri:scales-fill" token="--scale-ratio-pow-4" }
    ::
    ::ContentDesignToken{ title="Scale Ratio ^ 5" size="sm" icon="ri:scales-fill" token="--scale-ratio-pow-5" }
    ::
    ::ContentDesignToken{ title="Scale Ratio ^ 6" size="sm" icon="ri:scales-fill" token="--scale-ratio-pow-6" }
    ::
::
::ContentDesignToken{ title="Minor Second Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-minor-second" }
The minor second scale ratio, also known as the "diminished second", is a musical interval that represents a ratio of 16/15.
::
::ContentDesignToken{ title="Major Second Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-major-second" }
The major second scale ratio is a musical interval that represents a ratio of 9/8.
::
::ContentDesignToken{ title="Minor Third Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-minor-third" }
The minor third scale ratio is a musical interval representing a ratio of 6/5. In design, this ratio is often used as a modular scale factor to create consistent and harmonious typography and layout.
::
::ContentDesignToken{ title="Major Third Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-major-third" }
The major third scale ratio is a musical interval representing a ratio of 5/4.
::
::ContentDesignToken{ title="Perfect Fourth Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-perfect-fourth" }
The perfect fourth scale ratio is a musical interval representing a ratio of 4/3.
::
::ContentDesignToken{ title="Augmented Fourth Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-augmented-fourth" }
The augmented fourth scale ratio is a musical interval representing a ratio of 45/32.
::
::ContentDesignToken{ title="Perfect Fifth Scale Ratio" icon="ri:scales-fill" token="--scale-ratio-perfect-fifth" }
The perfect fifth scale ratio is a musical interval representing a ratio of 3/2.
::


### Sizes
Inkline provides a set of predefined sizes and percentage values that can be used to create consistent layout. The size multiplier variable is used to compute any size-based variants of components, such as font sizes, padding, margin, and border radius.

[Read about sizes configuration](/docs/configuration/file#sizes)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Size Multiplier" icon="material-symbols:resize" token="--size-multiplier" } 
The value that is used to compute size-based variants of components, such as font sizes, padding, margin, and border radius.
#variants
    ::ContentDesignToken{ title="Extra-extra-small Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-2xs" }
    ::
    ::ContentDesignToken{ title="Extra-small Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-xs" }
    ::
    ::ContentDesignToken{ title="Small Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-sm" }
    ::
    ::ContentDesignToken{ title="Medium Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-md" }
    ::
    ::ContentDesignToken{ title="Large Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-xl" }
    ::
    ::ContentDesignToken{ title="Extra-extra-large Size Multiplier" icon="material-symbols:resize" token="--size-multiplier-2xl" }
    ::
::

::ContentDesignToken{ title="0% Size Percentage" icon="ic:baseline-percentage" token="--size-percentages-0" type="generic" }
The predefined value used for 0% size percentages.
::

::ContentDesignToken{ title="25% Size Percentage" icon="ic:baseline-percentage" token="--size-percentages-25" type="generic" value="25%" }
The predefined value used for 25% size percentages.
::

::ContentDesignToken{ title="50% Size Percentage" icon="ic:baseline-percentage" token="--size-percentages-50" type="generic" }
The predefined value used for 50% size percentages.
::

::ContentDesignToken{ title="75% Size Percentage" icon="ic:baseline-percentage" token="--size-percentages-75" type="generic" }
The predefined value used for 75% size percentages.
::

::ContentDesignToken{ title="100% Size Percentage" icon="ic:baseline-percentage" token="--size-percentages-100" type="generic" }
The predefined value used for 100% size percentages.
::

### Spacing
Inkline uses a modular scale to establish a harmonious relationship between font sizes, spacing, and other typographic elements. This ensures that text is easy to read and visually appealing across a range of screen sizes and resolutions.

You can use a wide range of font weights, styles, and sizes to provide flexibility and variety in your design. The default values provide guidance on typography best practices, including font choices, line lengths, and spacing. Using these can help you create visually appealing and effective typography for your project.

[Read about spacing configuration](/docs/configuration/file#margin)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Margin Top" token="--margin-top" }
Design token used to set the margin value for the top side of an element. All margin-top variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Margin Top" size="sm" token="--margin-top-xs" }
    ::
    ::ContentDesignToken{ title="Small Margin Top" size="sm" token="--margin-top-sm" }
    ::
    ::ContentDesignToken{ title="Medium Margin Top" size="sm" token="--margin-top-md" }
    ::
    ::ContentDesignToken{ title="Large Margin Top" size="sm" token="--margin-top-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Margin Top" size="sm" token="--margin-top-xl" }
    ::
    ::ContentDesignToken{ title="Margin Top * 2" size="sm" token="--margin-top-2" }
    ::
    ::ContentDesignToken{ title="Margin Top * 3" size="sm" token="--margin-top-3" }
    ::
    ::ContentDesignToken{ title="Margin Top * 4" size="sm" token="--margin-top-4" }
    ::
    ::ContentDesignToken{ title="Margin Top * 5" size="sm" token="--margin-top-5" }
    ::
    ::ContentDesignToken{ title="Margin Top * 1 / 5" size="sm" token="--margin-top-1-5" }
    ::
    ::ContentDesignToken{ title="Margin Top * 1 / 4" size="sm" token="--margin-top-1-4" }
    ::
    ::ContentDesignToken{ title="Margin Top * 1 / 3" size="sm" token="--margin-top-1-3" }
    ::
    ::ContentDesignToken{ title="Margin Top * 1 / 2" size="sm" token="--margin-top-1-2" }
    ::
    ::ContentDesignToken{ title="Margin Top * 2 / 3" size="sm" token="--margin-top-2-3" }
    ::
    ::ContentDesignToken{ title="Margin Top * 3 / 4" size="sm" token="--margin-top-3-4" }
    ::
::

::ContentDesignToken{ title="Margin Right" token="--margin-right" }
Design token used to set the margin value for the right side of an element. All margin-right variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Margin Right" size="sm" token="--margin-right-xs" }
    ::
    ::ContentDesignToken{ title="Small Margin Right" size="sm" token="--margin-right-sm" }
    ::
    ::ContentDesignToken{ title="Medium Margin Right" size="sm" token="--margin-right-md" }
    ::
    ::ContentDesignToken{ title="Large Margin Right" size="sm" token="--margin-right-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Margin Right" size="sm" token="--margin-right-xl" }
    ::
    ::ContentDesignToken{ title="Margin Right * 2" size="sm" token="--margin-right-2" }
    ::
    ::ContentDesignToken{ title="Margin Right * 3" size="sm" token="--margin-right-3" }
    ::
    ::ContentDesignToken{ title="Margin Right * 4" size="sm" token="--margin-right-4" }
    ::
    ::ContentDesignToken{ title="Margin Right * 5" size="sm" token="--margin-right-5" }
    ::
    ::ContentDesignToken{ title="Margin Right * 1 / 5" size="sm" token="--margin-right-1-5" }
    ::
    ::ContentDesignToken{ title="Margin Right * 1 / 4" size="sm" token="--margin-right-1-4" }
    ::
    ::ContentDesignToken{ title="Margin Right * 1 / 3" size="sm" token="--margin-right-1-3" }
    ::
    ::ContentDesignToken{ title="Margin Right * 1 / 2" size="sm" token="--margin-right-1-2" }
    ::
    ::ContentDesignToken{ title="Margin Right * 2 / 3" size="sm" token="--margin-right-2-3" }
    ::
    ::ContentDesignToken{ title="Margin Right * 3 / 4" size="sm" token="--margin-right-3-4" }
    ::
::

::ContentDesignToken{ title="Margin Bottom" token="--margin-bottom" }
Design token used to set the margin value for the bottom side of an element. All margin-bottom variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Margin Bottom" size="sm" token="--margin-bottom-xs" }
    ::
    ::ContentDesignToken{ title="Small Margin Bottom" size="sm" token="--margin-bottom-sm" }
    ::
    ::ContentDesignToken{ title="Medium Margin Bottom" size="sm" token="--margin-bottom-md" }
    ::
    ::ContentDesignToken{ title="Large Margin Bottom" size="sm" token="--margin-bottom-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Margin Bottom" size="sm" token="--margin-bottom-xl" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 2" size="sm" token="--margin-bottom-2" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 3" size="sm" token="--margin-bottom-3" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 4" size="sm" token="--margin-bottom-4" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 5" size="sm" token="--margin-bottom-5" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 1 / 5" size="sm" token="--margin-bottom-1-5" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 1 / 4" size="sm" token="--margin-bottom-1-4" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 1 / 3" size="sm" token="--margin-bottom-1-3" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 1 / 2" size="sm" token="--margin-bottom-1-2" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 2 / 3" size="sm" token="--margin-bottom-2-3" }
    ::
    ::ContentDesignToken{ title="Margin Bottom * 3 / 4" size="sm" token="--margin-bottom-3-4" }
    ::
::

::ContentDesignToken{ title="Margin Left" token="--margin-left" }
Design token used to set the margin value for the left side of an element. All margin-left variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Margin Left" size="sm" token="--margin-left-xs" }
    ::
    ::ContentDesignToken{ title="Small Margin Left" size="sm" token="--margin-left-sm" }
    ::
    ::ContentDesignToken{ title="Medium Margin Left" size="sm" token="--margin-left-md" }
    ::
    ::ContentDesignToken{ title="Large Margin Left" size="sm" token="--margin-left-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Margin Left" size="sm" token="--margin-left-xl" }
    ::
    ::ContentDesignToken{ title="Margin Left * 2" size="sm" token="--margin-left-2" }
    ::
    ::ContentDesignToken{ title="Margin Left * 3" size="sm" token="--margin-left-3" }
    ::
    ::ContentDesignToken{ title="Margin Left * 4" size="sm" token="--margin-left-4" }
    ::
    ::ContentDesignToken{ title="Margin Left * 5" size="sm" token="--margin-left-5" }
    ::
    ::ContentDesignToken{ title="Margin Left * 1 / 5" size="sm" token="--margin-left-1-5" }
    ::
    ::ContentDesignToken{ title="Margin Left * 1 / 4" size="sm" token="--margin-left-1-4" }
    ::
    ::ContentDesignToken{ title="Margin Left * 1 / 3" size="sm" token="--margin-left-1-3" }
    ::
    ::ContentDesignToken{ title="Margin Left * 1 / 2" size="sm" token="--margin-left-1-2" }
    ::
    ::ContentDesignToken{ title="Margin Left * 2 / 3" size="sm" token="--margin-left-2-3" }
    ::
    ::ContentDesignToken{ title="Margin Left * 3 / 4" size="sm" token="--margin-left-3-4" }
    ::
::

::ContentDesignToken{ title="Margin" token="--margin" }
Design token used to set the margin value for all four sides of an element. This value is composed automatically based on the four individual side values documented above.
#variants
    ::ContentDesignToken{ title="Extra-small Margin" size="sm" token="--margin-xs" }
    ::
    ::ContentDesignToken{ title="Small Margin" size="sm" token="--margin-sm" }
    ::
    ::ContentDesignToken{ title="Medium Margin" size="sm" token="--margin-md" }
    ::
    ::ContentDesignToken{ title="Large Margin" size="sm" token="--margin-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Margin" size="sm" token="--margin-xl" }
    ::
    ::ContentDesignToken{ title="Margin * 2" size="sm" token="--margin-2" }
    ::
    ::ContentDesignToken{ title="Margin * 3" size="sm" token="--margin-3" }
    ::
    ::ContentDesignToken{ title="Margin * 4" size="sm" token="--margin-4" }
    ::
    ::ContentDesignToken{ title="Margin * 5" size="sm" token="--margin-5" }
    ::
    ::ContentDesignToken{ title="Margin * 1 / 5" size="sm" token="--margin-1-5" }
    ::
    ::ContentDesignToken{ title="Margin * 1 / 4" size="sm" token="--margin-1-4" }
    ::
    ::ContentDesignToken{ title="Margin * 1 / 3" size="sm" token="--margin-1-3" }
    ::
    ::ContentDesignToken{ title="Margin * 1 / 2" size="sm" token="--margin-1-2" }
    ::
    ::ContentDesignToken{ title="Margin * 2 / 3" size="sm" token="--margin-2-3" }
    ::
    ::ContentDesignToken{ title="Margin * 3 / 4" size="sm" token="--margin-3-4" }
    ::
::

::ContentDesignToken{ title="Padding Top" token="--padding-top" }
Design token used to set the padding value for the top side of an element. All padding-top variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Padding Top" size="sm" token="--padding-top-xs" }
    ::
    ::ContentDesignToken{ title="Small Padding Top" size="sm" token="--padding-top-sm" }
    ::
    ::ContentDesignToken{ title="Medium Padding Top" size="sm" token="--padding-top-md" }
    ::
    ::ContentDesignToken{ title="Large Padding Top" size="sm" token="--padding-top-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Padding Top" size="sm" token="--padding-top-xl" }
    ::
    ::ContentDesignToken{ title="Padding Top * 2" size="sm" token="--padding-top-2" }
    ::
    ::ContentDesignToken{ title="Padding Top * 3" size="sm" token="--padding-top-3" }
    ::
    ::ContentDesignToken{ title="Padding Top * 4" size="sm" token="--padding-top-4" }
    ::
    ::ContentDesignToken{ title="Padding Top * 5" size="sm" token="--padding-top-5" }
    ::
    ::ContentDesignToken{ title="Padding Top * 1 / 5" size="sm" token="--padding-top-1-5" }
    ::
    ::ContentDesignToken{ title="Padding Top * 1 / 4" size="sm" token="--padding-top-1-4" }
    ::
    ::ContentDesignToken{ title="Padding Top * 1 / 3" size="sm" token="--padding-top-1-3" }
    ::
    ::ContentDesignToken{ title="Padding Top * 1 / 2" size="sm" token="--padding-top-1-2" }
    ::
    ::ContentDesignToken{ title="Padding Top * 2 / 3" size="sm" token="--padding-top-2-3" }
    ::
    ::ContentDesignToken{ title="Padding Top * 3 / 4" size="sm" token="--padding-top-3-4" }
    ::
::

::ContentDesignToken{ title="Padding Right" token="--padding-right" }
Design token used to set the padding value for the right side of an element. All padding-right variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Padding Right" size="sm" token="--padding-right-xs" }
    ::
    ::ContentDesignToken{ title="Small Padding Right" size="sm" token="--padding-right-sm" }
    ::
    ::ContentDesignToken{ title="Medium Padding Right" size="sm" token="--padding-right-md" }
    ::
    ::ContentDesignToken{ title="Large Padding Right" size="sm" token="--padding-right-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Padding Right" size="sm" token="--padding-right-xl" }
    ::
    ::ContentDesignToken{ title="Padding Right * 2" size="sm" token="--padding-right-2" }
    ::
    ::ContentDesignToken{ title="Padding Right * 3" size="sm" token="--padding-right-3" }
    ::
    ::ContentDesignToken{ title="Padding Right * 4" size="sm" token="--padding-right-4" }
    ::
    ::ContentDesignToken{ title="Padding Right * 5" size="sm" token="--padding-right-5" }
    ::
    ::ContentDesignToken{ title="Padding Right * 1 / 5" size="sm" token="--padding-right-1-5" }
    ::
    ::ContentDesignToken{ title="Padding Right * 1 / 4" size="sm" token="--padding-right-1-4" }
    ::
    ::ContentDesignToken{ title="Padding Right * 1 / 3" size="sm" token="--padding-right-1-3" }
    ::
    ::ContentDesignToken{ title="Padding Right * 1 / 2" size="sm" token="--padding-right-1-2" }
    ::
    ::ContentDesignToken{ title="Padding Right * 2 / 3" size="sm" token="--padding-right-2-3" }
    ::
    ::ContentDesignToken{ title="Padding Right * 3 / 4" size="sm" token="--padding-right-3-4" }
    ::
::

::ContentDesignToken{ title="Padding Bottom" token="--padding-bottom" }
Design token used to set the padding value for the bottom side of an element. All padding-bottom variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Padding Bottom" size="sm" token="--padding-bottom-xs" }
    ::
    ::ContentDesignToken{ title="Small Padding Bottom" size="sm" token="--padding-bottom-sm" }
    ::
    ::ContentDesignToken{ title="Medium Padding Bottom" size="sm" token="--padding-bottom-md" }
    ::
    ::ContentDesignToken{ title="Large Padding Bottom" size="sm" token="--padding-bottom-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Padding Bottom" size="sm" token="--padding-bottom-xl" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 2" size="sm" token="--padding-bottom-2" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 3" size="sm" token="--padding-bottom-3" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 4" size="sm" token="--padding-bottom-4" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 5" size="sm" token="--padding-bottom-5" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 1 / 5" size="sm" token="--padding-bottom-1-5" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 1 / 4" size="sm" token="--padding-bottom-1-4" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 1 / 3" size="sm" token="--padding-bottom-1-3" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 1 / 2" size="sm" token="--padding-bottom-1-2" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 2 / 3" size="sm" token="--padding-bottom-2-3" }
    ::
    ::ContentDesignToken{ title="Padding Bottom * 3 / 4" size="sm" token="--padding-bottom-3-4" }
    ::
::

::ContentDesignToken{ title="Padding Left" token="--padding-left" }
Design token used to set the padding value for the left side of an element. All padding-left variants are computed using this base value.
#variants
    ::ContentDesignToken{ title="Extra-small Padding Left" size="sm" token="--padding-left-xs" }
    ::
    ::ContentDesignToken{ title="Small Padding Left" size="sm" token="--padding-left-sm" }
    ::
    ::ContentDesignToken{ title="Medium Padding Left" size="sm" token="--padding-left-md" }
    ::
    ::ContentDesignToken{ title="Large Padding Left" size="sm" token="--padding-left-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Padding Left" size="sm" token="--padding-left-xl" }
    ::
    ::ContentDesignToken{ title="Padding Left * 2" size="sm" token="--padding-left-2" }
    ::
    ::ContentDesignToken{ title="Padding Left * 3" size="sm" token="--padding-left-3" }
    ::
    ::ContentDesignToken{ title="Padding Left * 4" size="sm" token="--padding-left-4" }
    ::
    ::ContentDesignToken{ title="Padding Left * 5" size="sm" token="--padding-left-5" }
    ::
    ::ContentDesignToken{ title="Padding Left * 1 / 5" size="sm" token="--padding-left-1-5" }
    ::
    ::ContentDesignToken{ title="Padding Left * 1 / 4" size="sm" token="--padding-left-1-4" }
    ::
    ::ContentDesignToken{ title="Padding Left * 1 / 3" size="sm" token="--padding-left-1-3" }
    ::
    ::ContentDesignToken{ title="Padding Left * 1 / 2" size="sm" token="--padding-left-1-2" }
    ::
    ::ContentDesignToken{ title="Padding Left * 2 / 3" size="sm" token="--padding-left-2-3" }
    ::
    ::ContentDesignToken{ title="Padding Left * 3 / 4" size="sm" token="--padding-left-3-4" }
    ::
::

::ContentDesignToken{ title="Padding" token="--padding" }
Design token used to set the padding value for all four sides of an element. This value is composed automatically based on the four individual side values documented above.
#variants
    ::ContentDesignToken{ title="Extra-small Padding" size="sm" token="--padding-xs" }
    ::
    ::ContentDesignToken{ title="Small Padding" size="sm" token="--padding-sm" }
    ::
    ::ContentDesignToken{ title="Medium Padding" size="sm" token="--padding-md" }
    ::
    ::ContentDesignToken{ title="Large Padding" size="sm" token="--padding-lg" }
    ::
    ::ContentDesignToken{ title="Extra-large Padding" size="sm" token="--padding-xl" }
    ::
    ::ContentDesignToken{ title="Padding * 2" size="sm" token="--padding-2" }
    ::
    ::ContentDesignToken{ title="Padding * 3" size="sm" token="--padding-3" }
    ::
    ::ContentDesignToken{ title="Padding * 4" size="sm" token="--padding-4" }
    ::
    ::ContentDesignToken{ title="Padding * 5" size="sm" token="--padding-5" }
    ::
    ::ContentDesignToken{ title="Padding * 1 / 5" size="sm" token="--padding-1-5" }
    ::
    ::ContentDesignToken{ title="Padding * 1 / 4" size="sm" token="--padding-1-4" }
    ::
    ::ContentDesignToken{ title="Padding * 1 / 3" size="sm" token="--padding-1-3" }
    ::
    ::ContentDesignToken{ title="Padding * 1 / 2" size="sm" token="--padding-1-2" }
    ::
    ::ContentDesignToken{ title="Padding * 2 / 3" size="sm" token="--padding-2-3" }
    ::
    ::ContentDesignToken{ title="Padding * 3 / 4" size="sm" token="--padding-3-4" }
    ::
::

### Typography
Inkline uses a modular scale to establish a harmonious relationship between font sizes, spacing, and other typographic elements. This ensures that text is easy to read and visually appealing across a range of screen sizes and resolutions.

You can use a wide range of font weights, styles, and sizes to provide flexibility and variety in your design. The default values provide guidance on typography best practices, including font choices, line lengths, and spacing. Using these can help you create visually appealing and effective typography for your project.

[Read about typography configuration](/docs/configuration/file#typography)

::ContentDesignTokensHeader
::

::ContentDesignToken{ title="Primary Font Family Base" token="--font-family-primary-base" }
This value is used to define the primary font family for the body text. This variable can be set to any valid font family value, such as a specific font name, a generic font family like sans-serif, or a custom font stack.
::

::ContentDesignToken{ title="Primary Font Family Monospace" token="--font-family-primary-monospace" }
This value is used to define the primary monospace font family. Monospace fonts are useful for displaying code, as each character takes up the same amount of space, making it easier to align code and read it.
::

::ContentDesignToken{ title="Primary Font Family Print" token="--font-family-primary-print" }
This value represents the primary font family, when used for print media. This font family is typically different from the font family used for screen media and is optimized for legibility and clarity when printed on paper.
::

::ContentDesignToken{ title="Secondary Font Family Base" token="--font-family-secondary-base" }
This value is used to define the secondary font family used for headings and display texts. This variable can be set to any valid font family value, such as a specific font name, a generic font family like sans-serif, or a custom font stack.
::

::ContentDesignToken{ title="Secondary Font Family Monospace" token="--font-family-secondary-monospace" }
This value is used to define the secondary monospace font family. Monospace fonts are useful for displaying code, as each character takes up the same amount of space, making it easier to align code and read it.
::

::ContentDesignToken{ title="Secondary Font Family Print" token="--font-family-secondary-print" }
This value represents the secondary font family used for headings and display texts, when used for print media. This font family is typically different from the font family used for screen media and is optimized for legibility and clarity when printed on paper.
::

::ContentDesignToken{ title="Extra-light Font Weight" token="--font-weight-extralight" }
The extra-light font weight has a relatively low stroke contrast and is often used in display typography, particularly for headings and titles, to create a delicate and elegant appearance.
::

::ContentDesignToken{ title="Light Font Weight" token="--font-weight-light" }
The light font weight is often used for headings and subheadings, as it provides a subtle emphasis without overwhelming the text. It can also be used for body text in certain cases, particularly for large blocks of text where a lighter weight is easier on the eyes.
::

::ContentDesignToken{ title="Normal Font Weight" token="--font-weight-normal" }
The normal font weight is the default weight for most fonts and is typically equivalent to a font-weight of 400. It is considered neither too heavy nor too light and is suitable for most body text.
::

::ContentDesignToken{ title="Semi-bold Font Weight" token="--font-weight-semibold" }
The semi-bold font weight is slightly thicker than the normal font weight, but not as bold as a bold weight. It is typically used to add emphasis and hierarchy to headings, subheadings, and other important elements on a web page.
::

::ContentDesignToken{ title="Bold Font Weight" token="--font-weight-bold" }
The bold weight is a commonly used font weight in typography. It is often used for headings, subheadings, and other important text elements to make them stand out and grab the reader's attention.
::

::ContentDesignToken{ title="Black Font Weight" token="--font-weight-black" }
The black font weight is one of the boldest font weights available and is typically used for headings or other important text that needs to be emphasized. It is thicker than the bold font weight and can create a dramatic effect when used in the right context.
::

::ContentDesignToken{ title="Lighter Font Weight" token="--font-weight-lighter" }
The lighter font weight is a relative font weight value that makes the text appear lighter than the parent element's font weight.
::

::ContentDesignToken{ title="Bolder Font Weight" token="--font-weight-bolder" }
The bolder font weight is a relative font weight value that makes the text appear bolder than the parent element's font weight.
::

::ContentDesignToken{ title="Font Size" token="--font-size" }
This value allows you to define the base font size for all elements of the UI.
#variants
    ::ContentDesignToken{ title="Extra-small Font Size" token="--font-size-xs" }
    ::
    ::ContentDesignToken{ title="Small Font Size" token="--font-size-sm" }
    ::
    ::ContentDesignToken{ title="Small Font Size" token="--font-size-md" }
    ::
    ::ContentDesignToken{ title="Small Font Size" token="--font-size-lg" }
    ::
    ::ContentDesignToken{ title="Small Font Size" token="--font-size-xl" }
    ::
::

::ContentDesignToken{ title="Line Height" token="--line-height" }
Line height refers to the amount of vertical space between lines of text. It can affect the readability, legibility, and overall aesthetic of your text.
::

::ContentDesignToken{ title="Letter Spacing" token="--letter-spacing" }
Letter spacing (also known as tracking) refers to the amount of horizontal space between letters in a word or block of text.  It can affect the legibility, readability, and overall aesthetic of your text.
::
