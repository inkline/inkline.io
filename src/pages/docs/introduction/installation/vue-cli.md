---
title: Installation - Vue.js CLI - Inkline
description: Install Inkline for any application created using the Vue.js CLI.
---

# Installation - Vue.js CLI
## Install Inkline for any application created using the Vue.js CLI.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

Create a new Vue.js application using the `vue create` command below or using the [Vue.js CLI guide](https://cli.vuejs.org/guide/creating-a-project.html), and follow the instructions provided by the installation wizard.

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
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline and dependencies</div> 

Install and save Inkline as a project dependency. 

~~~bash
npm install --save @inkline/inkline
~~~

Inkline uses [Sass](https://sass-lang.com) to pre-process and compile its CSS files. You will need to install it as a development dependency in order to compile the stylesheets.

~~~bash
npm install --save-dev sass sass-loader@10
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Configure Vue.js CLI</div> 

Create a `vue.config.js` file in your project root and configure it to transpile Inkline.

~~~js
module.exports = {
    transpileDependencies: [
        '@inkline/inkline'
    ]
}
~~~


</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Configure your project</div> 

Open your `src/main.js` or `src/main.ts` file and configure your application to use Inkline.

~~~js
import { createApp } from 'vue';
import App from './App.vue';

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

import "./main.scss";

const app = createApp(App);

app.use(Inkline, {
    components
});
    
app.mount('#app');
~~~


</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">5</span> Configure your design</div> 

Next, create a new file called `src/main.scss` and import Inkline. Learn more about the Design System.

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
<div class="install-step-title"><span class="install-step-number">6</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline has to offer.
</div>
