---
title: Installation - Webpack
description: Install Inkline for any application created using Webpack.
layout: docs
---

# Installation - Webpack
## Install Inkline for any application created using Webpack.

::ContentAlert{color="warning"}
For new applications, please use **[Vite.js](/docs/installation/vite)** or **[Nuxt](/docs/installation/nuxt)**.
The Vue.js CLI and Webpack.js are no longer recommended by the Vue.js community.
::

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

First, create a new Vue.js application that uses Webpack. For this example, we'll use the [Vue.js CLI](https://cli.vuejs.org/guide/creating-a-project.html).

~~~bash
npm i -g @vue/cli
~~~

~~~bash
vue create my-vue-app

cd my-vue-app 

npm install
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline</div> 

Inkline will automatically detect your Webpack.js development environment and generate a basic configuration for your application.

~~~bash
npx inkline init
~~~

Using the [Inkline CLI](https://github.com/inkline/cli) command above, Inkline has:
- Created or updated your **`webpack.config.ts`** file
- Created your **`inkline.config.ts`** file
- Updated your **`src/main.ts`** file
- Updated your **`package.json`** file

If you want to set up Inkline manually, read the [Manual Installation guide](/docs/installation/manual).

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline has to offer.
</div>
