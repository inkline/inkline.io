---
title: Generic Installation
description: Install Inkline for an application created using any other bundler or framework.
---

# Generic Installation
## Install Inkline for an application created using any other bundler or framework.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

Create a new application using a Front End Development Tool that supports modern javascript (or typescript) such as:

- <a href="https://vitejs.dev" rel="noopener nofollow">Vite.js</a> (recommended)
- <a href="https://webpack.js.org" rel="noopener nofollow">Webpack.js</a>
- <a href="https://astro.build" rel="noopener nofollow">Astro.build</a>
- <a href="https://rollupjs.org" rel="noopener nofollow">Rollup.js</a>
- <a href="https://parceljs.org" rel="noopener nofollow">Parcel.js</a>

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline and dependencies</div> 

Install and save Inkline as a project dependency.

~~~bash
npm install --save @inkline/inkline
~~~

Inkline uses [Sass](https://sass-lang.com) to pre-process and compile its CSS files. You will need to install it as a development dependency in order to compile the stylesheets. 

Depending on the build tool you're using, you might need to install additional loaders to handle `.scss` files.

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
