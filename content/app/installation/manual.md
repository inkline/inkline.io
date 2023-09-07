# Manual Installation
## Install Inkline Pro for an application created using any other bundler or framework.

::ContentAlert{color="info"}
Installing `@inkline/pro` requires `@inkline/inkline` to be installed. [Install Inkline](/docs/installation) before continuing.
::

### Installation

<div class="install-step _margin-top:2">
<div class="install-step-title"><span class="install-step-number">1</span> Create npm configuration file</div> 

Create a **`.npmrc`** file in your project's root directory with the following content:

::ContentNpmrcConfig
::

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">2</span> Set your authentication token</div> 

The authentication token grants you access to Inkline's private npm packages.

Open your **`.npmrc`** file, and replace **`YOUR_AUTH_TOKEN_HERE`** with your :ContentAuthTokenLink{ target="_blank" }.

</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">3</span> Install Inkline Pro</div> 

Install Inkline Pro using your favorite package manager.

~~~bash
npm install --save @inkline/pro
~~~
</div>
<div class="install-step">
<div class="install-step-title"><span class="install-step-number">4</span> Configure your project</div> 

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
<div class="install-step-title"><span class="install-step-number">5</span> Enjoy using Inkline</div> 

Awesome work! You can now start using all the features that Inkline Pro has to offer.
</div>
