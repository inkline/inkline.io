# Manual Installation
## Install Inkline Pro for an application created using any other bundler or framework.

::ContentAlert{color="info"}
Installing `@inkline/pro` requires `@inkline/inkline` to be installed. [Install Inkline](/docs/installation) before continuing.
::

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

::ContentInlineInfo
Skip this step if you have an existing Vue.js project.
::

Create a new application using a Front End Development Tool that supports modern javascript (or typescript) such as:

- <a href="https://vitejs.dev" rel="noopener nofollow">Vite.js</a> (recommended)
- <a href="https://webpack.js.org" rel="noopener nofollow">Webpack.js</a>
- <a href="https://astro.build" rel="noopener nofollow">Astro.build</a>
- <a href="https://rollupjs.org" rel="noopener nofollow">Rollup.js</a>
- <a href="https://parceljs.org" rel="noopener nofollow">Parcel.js</a>

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline</div> 

::ContentInlineInfo
Skip to Step 5 if you have an existing Inkline project.
::

Install Inkline using your favorite package manager.

~~~bash
npm install --save @inkline/inkline
~~~

Install and save Inkline's development dependencies.

Inkline uses [Sass](https://sass-lang.com) to pre-process and compile its SCSS files. Depending on the build tool you're using, you might need to install additional loaders to handle `.scss` files.

~~~bash
npm install --save-dev @inkline/plugin @inkline/config sass
~~~
</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Create Configuration File</div>

**a. Using the [Inkline CLI](https://github.com/inkline/cli)**

Run the following command to generate an **`inkline.config.ts`** file.

~~~bash
npx inkline init --manual
~~~

**b. Manually**

Create an **`inkline.config.ts`** or  **`inkline.config.js`** file in the root of your project and add the following:

~~~typescript
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            color: {
                primary: '#178ab0'
            }
        }
    }
});
~~~

::ContentAlert
If you're using [Vite.js](/app/installation/vite), [Nuxt](/app/installation/nuxt), or [Webpack.js](/app/installation/webpack) please use the official [@inkline/plugin](https://github.com/inkline/plugin) integration. The plugin will automatically rebuild your variables when the config file changes.
::

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Generate variables</div> 

Run the following command to generate `.scss` files containing Sass variables from your Inkline config:

~~~bash
npx inkline generate scss -o src/css/variables
~~~

Optionally, add the command as a script to your **`package.json`** file and re-run it every time your config changes.

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">5</span> Create npm configuration file</div> 

Create a **`.npmrc`** file in your project's root directory with the following content:

::ContentNpmrcConfig
::

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">6</span> Set your authentication token</div> 

The authentication token grants you access to Inkline's private npm packages.

Open your **`.npmrc`** file, and replace **`YOUR_AUTH_TOKEN_HERE`** with your :ContentAuthTokenLink{ target="_blank" }.

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">7</span> Install Inkline Pro</div> 

Install Inkline Pro using your favorite package manager.

~~~bash
npm install --save @inkline/pro
~~~
</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">8</span> Configure your project</div> 

Open your **`src/main.js`** or **`src/main.ts`** file and configure your application to use Inkline and Inkline Pro.

~~~bash
import { createApp } from 'vue';
import App from './App.vue';

import './css/variables/index.scss?inline';

import { Inkline, components } from '@inkline/inkline';
import { InklinePro, components as proComponents } from '@inkline/pro';

import '@inkline/pro/css/index.scss?inline';
import '@inkline/inkline/css/index.scss?inline';
import '@inkline/inkline/css/utilities.scss?inline';

const app = createApp(App);

app.use(Inkline, { components });
app.use(InklinePro, { components: proComponents });
    
app.mount('#app');
~~~
</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">9</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline Pro has to offer.
</div>
