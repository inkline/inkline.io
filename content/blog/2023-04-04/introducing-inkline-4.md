---
title: Introducing Inkline 4
image: /images/blog/introducing-inkline-4.webp
date: 2023-04-04
slug: introducing-inkline-4
tags: ['news']
featured: true
layout: blog-article
---

# Introducing Inkline 4

First of all, I can’t believe how much the community has grown and how excited everyone is for the next iteration of Inkline. I’m humbled to see what impact my small project has had on the lives of so many developers.

I've been working on Inkline 4 for over a year, and the number of developer experience enhancements is truly remarkable. I'm grateful to the handful of developers who have shared their time and expertise with me throughout this journey, and I couldn't have done it without their support.

Inkline has always been my favourite project to work on. There’s just something about writing good components that makes me happy, especially when I see such an overwhelmingly positive response from the community.

**Let's dive into the exciting new features that Inkline 4 has to offer!**

## Design Tokens

Let’s start with one of the biggest pain points of the past versions of Inkline. While it was already super easy to customise and had virtually set no limits on how you could change the look and feel of components, I’ve thought very hard about how to take it one step further.

To make Inkline more future proof and less pre-processor dependant, I’ve decided to use as few Sass Variables as possible in favor of CSS Variables. Each CSS Variable is used to style components only through fallback values, in order to easily allow overriding the value of a property in any context. The naming scheme is very consistent, so that you can intuitively override variables values:

**Naming scheme:**

```css
var(--[component]--[variant]--[state]--[element]--[elementVariant]--[elementState]--[property], var(--fallback-value))
```

**Example:**

```scss
var(--alert--sm--font-size, calc(var(--font-size) * var(--size-multiplier-sm)));
```

```css
:root {
	--alert--sm--font-size: 14px;
}
```

## Configuration File

I've always been frustrated with the lack of a configuration file in most UI libraries, making it difficult for users to set the core values of their Design System. It also makes it hard to keep track of inter-dependant values.

That's why I'm thrilled to introduce the new **`inkline.config.ts`** file, perhaps one of the biggest features of this release, which:

- Automatically generates CSS variables
- Computes derivative CSS variable values, such as color tints and shades, and different size variants
- Provides different values for light and dark color schemes

**Example:**

```tsx
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            animation: {
                duration: '300ms',
                timingFunction: 'ease'
            },
						border: '1px solid var(--color-gray-200)',
            boxShadow: {
                offsetX: '0',
                offsetY: '0.5rem',
                blurRadius: '1rem',
                spreadRadius: '-0.75rem',
                color: 'rgba(0, 0, 0, 0.15)'
            },
            breakpoints: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
                '2xl': 1400
            },
            color: {
                red: '#f2413d',
                orange: '#f98e5a',
                yellow: '#ffda77',
                green: '#2fb079',
                teal: '#48b4a9',
                blue: '#178bb2',
                purple: '#8268ae',
                pink: '#fc778a',
                white: '#ffffff',
                light: 'var(--color-gray-100)',
                gray: '#8e9fa4',
                dark: 'var(--color-gray-800)',
                black: '#000000',
                primary: '<% theme.color.blue %>',
                secondary: '<% theme.color.purple %>',
                info: '<% theme.color.teal %>',
                success: '<% theme.color.green %>',
                warning: '<% theme.color.yellow %>',
                danger: '<% theme.color.red %>'
            }
				},
				dark: {
            border: {
                color: 'var(--color-gray-700)'
            }
				}
		}
};
```

## Inkline CLI

I'm excited to announce the release of the Inkline CLI, a powerful new tool designed to speed up the installation of Inkline in your project. The Inkline CLI provides a set of commands for generating code and managing configuration files with ease.

- `init`: Generates a default inkline.config.ts theme configuration file, allowing you to jumpstart your project with a ready-to-use configuration.
- `generate scss`: This command generates CSS Variables based on your inkline.config.ts theme configuration file.

By simplifying tasks such as configuration and code generation, you can focus on what truly matters: crafting a stunning user interface and an engaging user experience.

## Components

Inkline 4 has been completely rewritten using Composition API and composable functions. I've chosen a **`defineComponent+setup()`** approach, rather than `<script setup>`, to expose component fields directly and allow for Inkline's compatibility with different frameworks in the future.

While you'll still find the same components you know and love, I've also added a new **`IToastContainer`** component to display toast notifications on demand, providing a more cohesive experience without relying on third-party plugins.

## Manifest

The manifest file generation has been completely overhauled, making it more reliable than ever. Not only does it parse `props`, `slots`, and `event`, but it also parses the `CSS Variables` and their variants using throughout components.

## Documentation

Documentation has been rebuilt from the ground up using the latest and greatest version of Nuxt.  With a tremendous amount of performance improvements under the hood, Nuxt generates a static version of the documentation that is super fast and reliable.

I’m also adding a Blog to the website, where I’ll feature relevant articles and guides. I would love to post some articles from the community as well. Even though my free time is very limited, I’ll do my best to keep writing valuable articles for everyone.

## Unocss Preset

I wrote a Unocss preset that allows you to generate utility classes on demand, using the Design Tokens that make Inkline 4 a reality.

I initially planned to offer this as part of Inkline Pro, but I thought it’s such a great quality of life improvement that I simply cannot hide it behind a paywall.

To be released soon!

## Inkline Pro

Monetizing open-source projects can be controversial, but I want Inkline to survive and thrive. Moving forward, I plan to create and maintain a Pro version of Inkline, with access granted through a yearly subscription.

The Pro features and components that I plan to include:

1. **Advanced data table**: Offers features such as server-side pagination, sorting, filtering, inline editing, and row selection.
2. **Advanced date and time picker**: Includes features like range selection, time zone support, and advanced formatting options.
3. **Advanced autocomplete**: Supports grouping, custom rendering, and asynchronous data loading for enhanced user input suggestions.
4. **Advanced filters**: Provides a set of advanced filtering components, such as multi-select, range sliders, and date range pickers.
5. **Carousel**: Offers touch swipe support, autoplay, custom animations, and thumbnail navigation for image and content sliders.
6. **Virtualized list**: Provides efficient rendering of large datasets with infinite scrolling and windowing techniques.
7. **File uploader**: Provides drag-and-drop functionality, progress indicators, and file type validation for seamless file uploads.
8. **Dynamic tree view**: Supports lazy-loading, drag-and-drop reordering, and node customization for hierarchical data representation.
9. **Rating component**: Allows users to provide feedback through star ratings, customizable icons, and half-star support.
10. **Dashboard templates**: Pre-built, customizable dashboard layouts with various widgets and components for quick project initialization.
11. **Timeline component**: Displays chronological events in a visually appealing and customizable format.
12. **Advanced layout components**: such as split panes
13. **Drag and Drop components**: Provides blocks for creating a site or forms builder 
14. **Premium support**: Access to priority customer support, including timely bug fixes, feature requests, and assistance with implementation.

I'd love to hear which ones you want to see the most!

## Final Thoughts

This is a big year for Inkline. I'm incredibly proud of what I've achieved and am deeply grateful for the support of the amazing community. 

**Let's continue making UI development a beautiful experience together!**

<div class="_margin-top:2"></div>

- [Read more about Design Tokens](/docs/ui/design-tokens)
- [Read more about the Configuration File](/docs/configuration/file)
- [Read more about the Inkline CLI](https://github.com/inkline/cli)
- [Read more about the Toast Component](/docs/components/toast)
