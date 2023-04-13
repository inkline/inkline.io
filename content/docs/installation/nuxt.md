---
title: Installation - Nuxt
description: Install Inkline for any application created using Nuxt.
layout: docs
---

# Installation - Nuxt
## Install Inkline for any application created using Nuxt.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

Create a new Nuxt application using the `nuxi` CLI command below or using the [Nuxt guide](https://nuxt.com/docs/getting-started/introduction), and follow the instructions provided by the installation wizard.

~~~bash
npx nuxi init my-nuxt-app

cd my-nuxt-app

npm install
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline</div> 

Inkline will automatically detect your Nuxt development environment and generate a basic configuration for your application.

~~~bash
npx inkline init
~~~

Using the [Inkline CLI](https://github.com/inkline/cli) command above, Inkline has:
- Created or updated your **`nuxt.config.ts`** file
- Created your **`inkline.config.ts`** file
- Updated your **`package.json`** file

If you want to set up Inkline manually, read the [Manual Installation guide](/docs/installation/manual).

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline has to offer.
</div>

