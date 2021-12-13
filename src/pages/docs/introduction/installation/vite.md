---
title: Vite.js CLI Installation
description: Install Inkline for any application created using Vite.js.
---

# Vite.js Installation
## Install Inkline for any application created using Vite.js.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

Create a new Vite.js + Vue.js application using the `npm init` command below or using the [Vite.js guide](https://vitejs.dev/guide/), and follow the instructions provided by the installation wizard.

~~~bash
npm init vite my-vite-app -- --template vue

cd my-vite-app 

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
