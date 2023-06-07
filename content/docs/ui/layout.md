---
title: Layout - Inkline
description: Learn how to build basic layouts with Inkline's layout components. Create responsive and accessible designs for your web applications using ILayout, ILayoutHeader, ILayoutAside, ILayoutContent, and ILayoutFooter. Check out examples and code snippets for common layouts in our documentation.
---

# Layout

## Learn how to build basic layouts with Inkline's layout components.

The layout components in Inkline provide a simple way to create consistent page layouts. They can be used to structure the main content, header, footer, asides, and other elements on a page. The layout components are:
- `<ILayout>` is the main layout wrapper in which the header, aside, content, and footer, or another layout wrapper can be nested, and can be placed in any parent container.
- `<ILayoutHeader>` is the header area that can also serve as navigation
- `<ILayoutAside>` is a container for side sections (usually a side nav).
- `<ILayoutContent>` is the main content container
- `<ILayoutFooter>` is a container for footer elements

### Usage

::ContentAlert
The layouts are styled for documentation preview only. When using the components, they will
provide the element positioning only, without colors and paddings.
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/basic.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/content-header"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-header.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-header-footer.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/content-with-left-aside-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-with-left-aside-header-footer.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/content-with-right-aside-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-with-right-aside-header-footer.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/content-with-left-and-right-asides-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-with-left-and-right-asides-header-footer.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/left-aside-with-content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/left-aside-with-content-header-footer.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/right-aside-with-content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/right-aside-with-content-header-footer.raw.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreview{src="/components/ILayout/examples/left-and-right-asides-with-content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/left-and-right-asides-with-content-header-footer.raw.vue" lang="vue"} -->
::

### Props

##### ILayout
::ContentComponentProps{component="ILayout"}
::

### Slots

##### ILayout
::ContentComponentSlots{component="ILayout"}
::

##### ILayoutHeader
::ContentComponentSlots{component="ILayoutHeader"}
::

##### ILayoutAside
::ContentComponentSlots{component="ILayoutAside"}
::

##### ILayoutContent
::ContentComponentSlots{component="ILayoutContent"}
::

##### ILayoutFooter
::ContentComponentSlots{component="ILayoutFooter"}
::

### Design Tokens

##### ILayoutAside
::ContentComponentDesignTokens{component="ILayoutAside"}
::
