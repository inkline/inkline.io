/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
}

declare module '@docsearch/js' {
    export default (props: {
        container: string,
        appId: string,
        indexName: string,
        apiKey: string,
    }) => {};
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}
