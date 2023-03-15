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

<br/>

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/basic"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/basic.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/content-header"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-header.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-header-footer.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/content-with-left-aside-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-with-left-aside-header-footer.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/content-with-right-aside-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-with-right-aside-header-footer.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/content-with-left-and-right-asides-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/content-with-left-and-right-asides-header-footer.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/left-aside-with-content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/left-aside-with-content-header-footer.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/right-aside-with-content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/right-aside-with-content-header-footer.vue" lang="vue"} -->
::

::ContentTabs
#preview
:ContentPreviewIframe{src="/components/ILayout/examples/left-and-right-asides-with-content-header-footer"}
#vue
<!-- Autodocs{src="@inkline/inkline/components/ILayout/examples/left-and-right-asides-with-content-header-footer.vue" lang="vue"} -->
::

### Props

::ContentComponentProps{component="ILayout"}
::

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout&gt;</code></div>)

[//]: # (<props-table :manifest="layoutManifest"></props-table>)

[//]: # ()
[//]: # (#### Slots)

[//]: # (Use slots to insert custom content into well-defined component locations.)

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout&gt;</code></div>)

[//]: # (<slots-table :manifest="layoutManifest"></slots-table>)

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout-header&gt;</code></div>)

[//]: # (<slots-table :manifest="layoutHeaderManifest"></slots-table>)

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout-content&gt;</code></div>)

[//]: # (<slots-table :manifest="layoutContentManifest"></slots-table>)

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout-aside&gt;</code></div>)

[//]: # (<slots-table :manifest="layoutAsideManifest"></slots-table>)

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout-footer&gt;</code></div>)

[//]: # (<slots-table :manifest="layoutFooterManifest"></slots-table>)

[//]: # ()
[//]: # (#### CSS Variables)

[//]: # (<router-link :to="{ name: 'docs-introduction-design-system' }">Read more</router-link> about configuring Inkline's Design System variables to update the look and feel of the component.)

[//]: # ()
[//]: # (<div class="h5"><code>&lt;i-layout-aside&gt;</code></div>)

[//]: # (<css-variables-table :manifest="layoutAsideManifest"></css-variables-table>)
