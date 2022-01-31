---
title: How to use dark mode, light mode, and system - Guides - Inkline
description: Guides and solutions for some common use cases or issues that you may experience when working with Inkline.
---

# How to use dark mode, light mode, and system
## Explore Inkline's color modes and how you can use them to improve user experience.

Inkline provides **3 color modes** that you can choose from:

- **`system`** - automatically chooses `light` or `dark` mode based on the `prefers-color-scheme` media query
- **`light`** - manually applies the `light` color mode 
- **`dark`** - manually applies the `dark` color mode 

### Setting the color mode

If you start out with `system`, but the user decides to explicitly change to a `light` or `dark` color mode using a button, the next time he visits your application it will load using chosen color mode.

<i-alert color="info" class="_margin-top:1">
    <template #icon>
        <i-icon name="ink-info" />
    </template>
    <p>
        Inkline stores the user's color mode preference to <code>localStorage</code>. You can find it under the <code>inkline-color-mode</code> key.
    </p>
</i-alert>

#### Using plugin options
As you've seen in the [Plugin Options](http://localhost:3000/docs/introduction/plugin-options#color-mode) documentation, you can set the initial color mode during initialization:

~~~js
app.use(Inkline, {
    colorMode: 'system'
});
~~~

#### Using an action
The usual way to change between `light` and `dark` mode is using a button in your navbar. Here's how to achieve that:

~~~ts
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
    setup () {
        const inkline = inject<Prototype>('inkline', {} as any);
        const colorMode = ref(inkline.options.colorMode);

        // Set the initial color mode value to determine the icon to be displayed
        if (colorMode.value === 'system' && typeof window !== 'undefined') {
            colorMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        // Toggle between light and dark mode
        const setColorMode = () => {
            const mode = colorMode.value === 'dark' ? 'light' : 'dark';

            inkline.options.colorMode = mode;
            colorMode.value = mode;
        };

        return {
            colorMode,
            setColorMode,
        };
    }
});
~~~

<br/>

~~~html
<a @click="setColorMode">
    <icon-fa-solid-sun v-if="colorMode === 'dark'" />
    <icon-fa-solid-moon v-else />
    <span class="_visually-hidden">
        <span>Toggle color mode</span>
    </span>
</a>
~~~

The icons are rendered using the awesome [unplugin-icons](https://github.com/antfu/unplugin-icons) package.

### Conclusion

To see the result live, just look at the top-right of your screen. We're using this code in our documentation's Navbar component.


