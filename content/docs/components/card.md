---
title: Card
description: Cards provide you with a flexible and extensible content container with multiple color variants and options.
---

# Card
## Cards provide you with a flexible and extensible content container with multiple color variants and options.

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. 

Cards are customizable content holders built with as little markup and styles as possible. They are based on flexbox, offering easy alignment and they mix well with other components. 

By default, cards are set to have `width: 100%`, fully spanning the width of the parent container. 

::ContentTabs
#preview
:ContentPreview{src="/components/ICard/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICard/examples/basic.vue" lang="vue"} -->
::

### Body
The building block of a card is the card body. All the content placed in the default component slot will be placed inside the body.

::ContentTabs
#preview
:ContentPreview{src="/components/ICard/examples/card-body"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICard/examples/card-body.vue" lang="vue"} -->
::

### Header and Footer
Optionally, you can provide a header or a footer for your cards.

::ContentTabs
#preview
:ContentPreview{src="/components/ICard/examples/card-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICard/examples/card-header-footer.vue" lang="vue"} -->
::

### Image Header
You can provide an image at the top of the card, using the `image` slot.

::ContentTabs
#preview
:ContentPreview{src="/components/ICard/examples/image"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICard/examples/image.vue" lang="vue"} -->
::

### Color Variants
Inkline includes several predefined card colors that you can use within your application. You can apply a style using the `color` property.

::ContentTabs
#preview
:ContentPreview{src="/components/ICard/examples/color-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICard/examples/color-variants.vue" lang="vue"} -->
::

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your cards, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

::ContentTabs
#preview
:ContentPreview{src="/components/ICard/examples/size-variants"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ICard/examples/size-variants.vue" lang="vue"} -->
::

### Props
::ContentComponentProps{component="ICard"}
::

### Slots
::ContentComponentSlots{component="ICard"}
::

### Design Tokens
::ContentComponentDesignTokens{component="ICard"}
::
