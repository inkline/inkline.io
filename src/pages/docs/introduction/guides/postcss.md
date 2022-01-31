---
title: How to ensure cross-browser compatibility using PostCSS - Guides - Inkline
description: Guides and solutions for some common use cases or issues that you may experience when working with Inkline.
---

# How to ensure cross-browser styles using PostCSS
## Ensuring cross-browser compatibility will dramatically improve your user experience

Some browsers rely on vendor prefixes such as `-webkit-` in order to support modern CSS Properties. 

At the time of writing, we need this in order to support the `mask` property, which is used to be able to apply color to SVG icons using CSS. The `mask` property is used for arrow, checkmark and circle icons throughout Inkline.

### PostCSS Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Install dependencies</div> 

The most popular plugin for ensuring cross-browser styles compatibility is [postcss](https://postcss.org/) together with [postcss-preset-env](https://preset-env.cssdb.org/).

~~~bash
npm install --save-dev postcss postcss-preset-env
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Configure the plugin</div> 

Next, create a new file called `postcss.config.js` and add the following:

~~~js
module.exports = {
    plugins: {
        'postcss-preset-env': {}
    }
};
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Enjoy cross-browser compatible styles</div> 

That's it! If you're using Vite.js, Vue.js CLI, or Nuxt.js, the integration is done automatically for you. You can now enjoy cross-browser styles compatibility with appropriate vendor prefixes.

For other installations, check the [Official Documentation](https://github.com/postcss/postcss#usage) to see how to integrate PostCSS with your development environment.

</div>


