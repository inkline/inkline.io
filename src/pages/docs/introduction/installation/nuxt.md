---
title: Nuxt.js CLI Installation - Inkline
description: Install Inkline for any application created using Nuxt.js.
---

# Nuxt.js Installation
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
<div class="install-step-title"><span class="install-step-number">3</span> Configure your project and design</div> 

Open your `src/main.js` or `src/main.ts` file and configure your application to use Inkline.

~~~js
import { createApp } from 'vue';
import App from './App.vue';
import "./main.scss";

import { Inkline } from '@inkline/inkline';
import * as components from '@inkline/inkline/components';

const app = createApp(App);

app.use(Inkline, {
    components,
});
    
app.mount('#app');
~~~


</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Configure your design</div> 

Next, create a new file called `src/main.scss` and import Inkline. Learn more about the Design System.

~~~scss
@import "@inkline/inkline/css";

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

### Next steps

- [Read about the Design System]()
- [Read about Components]()
