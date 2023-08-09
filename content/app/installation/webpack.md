# Webpack.js Installation
## Install Inkline Pro for any application created using Webpack.

::ContentAlert{color="warning"}
For new applications, please use **[Vite.js](/app/installation/vite)** or **[Nuxt](/app/installation/nuxt)**.
The Vue.js CLI and Webpack.js are no longer recommended by the Vue.js community.
::

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

::ContentInlineInfo
Skip this step if you have an existing Vue.js + Webpack.js project.
::

First, create a new Vue.js application that uses Webpack. For this example, we'll use the [Vue.js CLI](https://cli.vuejs.org/guide/creating-a-project.html).

~~~bash
npm i -g @vue/cli
~~~

~~~bash
vue create my-vue-app

cd my-vue-app 
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline Pro</div> 

::ContentInlineInfo
For existing installations, only new Inkline Pro features will be added by the CLI.
::

Inkline will automatically detect your Webpack.js development environment and generate a basic configuration for your application.

~~~bash
npx inkline pro init
~~~

Using the [Inkline CLI](https://github.com/inkline/cli) command above, Inkline has:
- Created or updated your **`.npmrc`** file
- Created or updated your **`webpack.config.ts`** file
- Created your **`inkline.config.ts`** file
- Updated your **`src/main.ts`** file
- Updated your **`package.json`** file

If you want to set up Inkline manually, read the [Manual Installation guide](/app/installation/manual).

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Set your authentication token</div> 

The authentication token grants you access to Inkline's private npm packages.

Open your `.npmrc` file, and replace `YOUR_AUTH_TOKEN_HERE` with your :ContentAuthTokenLink{ target="_blank" }.

::ContentNpmrcConfig
::

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Install Dependencies</div> 

Install Inkline Pro and dependencies using your favorite package manager.

~~~bash
npm install
~~~
</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">5</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline Pro has to offer.
</div>
