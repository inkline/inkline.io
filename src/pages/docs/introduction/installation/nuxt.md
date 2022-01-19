---
title: Installation - Nuxt.js - Inkline
description: Install Inkline for any application created using Nuxt.js.
---

# Installation - Nuxt.js
## Install Inkline for any application created using Nuxt.js.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

Create a new Nuxt.js application using the `nuxi` CLI command below or using the [Nuxt.js guide](https://v3.nuxtjs.org/getting-started/installation), and follow the instructions provided by the installation wizard.

~~~bash
npx nuxi init my-nuxt-app

cd my-nuxt-app

npm install
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline and dependencies</div> 

Install and save Inkline as a project dependency.

~~~bash
npm install --save @inkline/inkline
~~~

Inkline uses [Sass](https://sass-lang.com) to pre-process and compile its CSS files. You will need to install it as a development dependency in order to compile the stylesheets.

~~~bash
npm install --save-dev sass
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Configure your project</div> 

Open your `src/main.js` or `src/main.ts` file and configure your application to use Inkline.

~~~js
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
    buildModules: [
        '@inkline/nuxt'
    ],
    css: [
        '~/main.scss'
    ],
    inkline: {
        // Plugin options (optional)
    }
});
~~~


</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Configure your design</div> 

Next, create a new file called `main.scss` and import Inkline. Learn more about the Design System.

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
}
~~~
</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">5</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline has to offer.
</div>

<i-alert color="warning" class="_margin-top:2">
    <template #icon>
        <i-icon name="ink-warning" />
    </template>

Nuxt 3 is not yet recommended for production use. If you run into issues, check the [Troubleshooting Guide](https://github.com/inkline/nuxt-module-inkline#troubleshooting).

</i-alert>

