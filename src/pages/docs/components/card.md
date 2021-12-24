---
title: Card - Inkline
description: Cards provide you with a flexible and extensible content container with multiple color variants and options.
---

<script setup>
import { manifest } from '@inkline/inkline/components/ICard/manifest';
import {
    ICardBasicExample,
    ICardBodyExample,
    ICardHeaderFooterExample,
    ICardColorVariantsExample,
    ICardImageExample,
    ICardSizeVariantsExample
} from '@inkline/inkline/components/ICard/examples';
import { default as ICardBasicExampleHTML } from '@inkline/inkline/components/ICard/examples/basic.html?raw';
import { default as ICardBodyExampleHTML } from '@inkline/inkline/components/ICard/examples/card-body.html?raw';
import { default as ICardHeaderFooterExampleHTML } from '@inkline/inkline/components/ICard/examples/card-header-footer.html?raw';
import { default as ICardColorVariantsExampleHTML } from '@inkline/inkline/components/ICard/examples/color-variants.html?raw';
import { default as ICardImageExampleHTML } from '@inkline/inkline/components/ICard/examples/image.html?raw';
import { default as ICardSizeVariantsExampleHTML } from '@inkline/inkline/components/ICard/examples/size-variants.html?raw';
</script>

# Card

## Cards provide you with a flexible and extensible content container with multiple color variants and options.

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. 

### Basic Example
Cards are customizable content holders built with as little markup and styles as possible. They are based on flexbox, offering easy alignment and they mix well with other components. 

By default, cards are set to have `width: 100%`, fully spanning the width of the parent container. 

<example type="card" :component="ICardBasicExample" :html="ICardBasicExampleHTML"></example>

### Body
The building block of a card is the card body. All the content placed in the default component slot will be placed inside the body.

<example type="card" :component="ICardBodyExample" :html="ICardBodyExampleHTML"></example>

### Header and Footer
Optionally, you can provide a header or a footer for your cards.

<example type="card" :component="ICardHeaderFooterExample" :html="ICardHeaderFooterExampleHTML"></example>

### Image Header
You can provide an image at the top of the card, using the `image` slot.

<example type="card" :component="ICardImageExample" :html="ICardImageExampleHTML"></example>

### Size Variants
You're able to use the `size` modifier to control the text and spacing size of your cards, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<example type="card" :component="ICardSizeVariantsExample" :html="ICardSizeVariantsExampleHTML"></example>

### Color Variants
Inkline includes several predefined card colors that you can use within your application. You can apply a style using the `color` property.

<example type="card" :component="ICardColorVariantsExample" :html="ICardColorVariantsExampleHTML"></example>


### Configuration

#### Props
Use props to modify the component's design and behavior.

<props-table :manifest="manifest"></props-table>

#### Slots
Use slots to insert custom content into well-defined component locations.

<slots-table :manifest="manifest"></slots-table>

#### CSS Variables
<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.

<css-variables-table :manifest="manifest" type="local"></css-variables-table>
