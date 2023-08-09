# Nuxt Installation
## Install Inkline for any application created using Nuxt.

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create a project</div> 

::ContentInlineInfo
Skip this step if you have an existing Vue.js + Vite.js project.
::

Create a new Nuxt application using the `nuxi` CLI command below or using the [Nuxt guide](https://nuxt.com/docs/getting-started/introduction), and follow the instructions provided by the installation wizard.

~~~bash
npx nuxi init my-nuxt-app

cd my-nuxt-app

npm install
~~~

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Install Inkline Pro</div> 

::ContentInlineInfo
For existing installations, only new Inkline Pro features will be added by the CLI.
::

Inkline will automatically detect your Nuxt development environment and generate a basic configuration for your application.

~~~bash
npx inkline pro init
~~~

Using the [Inkline CLI](https://github.com/inkline/cli) command above, Inkline has:
- Created or updated your **`.npmrc`** file
- Created or updated your **`nuxt.config.ts`** file
- Created your **`inkline.config.ts`** file
- Updated your **`package.json`** file

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
