---
title: Installation - Vite.js - Inkline
description: Install Inkline for any Vite.js + Vue.js 3 application, as recommended by the community.
layout: docs
---

# Installation - Vite.js
## Install Inkline for any Vite.js + Vue.js 3 application, as recommended by the community.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

Create a new Vite.js + Vue.js application using the `npm init` command below or using the [Vite.js guide](https://vitejs.dev/guide/), and follow the instructions provided by the installation wizard.

~~~bash
npm init vue my-vue-app

cd my-vue-app

npm install
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline</div> 

Inkline will automatically detect your Vite.js development environment and generate a basic configuration for your application.

~~~bash
npx inkline init
~~~

Using the [Inkline CLI](https://github.com/inkline/cli) command above, Inkline will:
- Create or update your **`vite.config.ts`** file
- Create your **`inkline.config.ts`** file
- Update your **`src/main.ts`** file

If you want to set up Inkline manually, read the [Manual Installation guide](/docs/installation/manual).

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline has to offer.
</div>
