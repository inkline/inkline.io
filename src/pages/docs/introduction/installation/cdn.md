---
title: Installation - CDN - Inkline
description: Install Inkline using the official JSDelivr CDN integration. The content delivery network (CDN) provides super fast asset delivery from a server that is closest to you.
---

# Installation - CDN
## Install Inkline using the official JSDelivr CDN integration. The content delivery network (CDN) provides super fast asset delivery from a server that is closest to you.

The quickest way to get started, with minimal setup, is to add the files from a CDN.

If you're not using using package managers and build systems and you want to add Inkline to your project, you can import the compiled files from:

~~~html
<link href="https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.js"></script>
~~~

### Starter Template

To quickly test Inkline, copy the code below into your `index.html` or try it out live on <a href="https://stackblitz.com/edit/inkline?file=src/App.vue" rel="nofollow" target="_blank">StackBlitz <span class="_visually-hidden">(opens new window)</span></a>. This will pull the latest version of Vue and Inkline, allowing you to start playing around with Vue and Inkline's components.

Be sure to have your pages set up with the latest design and development standards, using an HTML5 doctype and including a viewport meta tag for proper responsive behavior.

The files can be browsed and downloaded from a CDN such as <a href="https://unpkg.com/browse/@inkline/inkline@3.0.5/" rel="nofollow">unpkg <span class="_visually-hidden">(opens new window)</span></a> or <a href="https://www.jsdelivr.com/package/npm/@inkline/inkline" rel="nofollow">jsDelivr <span class="_visually-hidden">(opens new window)</span></a>. The various different files are explained later but you would typically want to download both a development build and a production build.

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://unpkg.com/@inkline/inkline/inkline.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
  <div id="app">
    <i-container>
      <i-row>
        <i-column>
          <h1>
              Welcome to Inkline!
          </h1>
          <p>
              This is your starter page. Make sure to read the documentation to learn about what Inkline has to offer.
          </p>
          <i-button color="primary" href="https://inkline.io/docs/introduction">
              Read Documentation
          </i-button>
        </i-column>
      </i-row>
    </i-container>
  </div>

  <script src="https://unpkg.com/vue@next"></script>
  <script src="https://unpkg.com/@inkline/inkline"></script>
  <script>
    new Vue({ 
        el: '#app' 
    });
  </script>
</body>
</html>
~~~

<a class="installation-card _margin-top:3" href="https://stackblitz.com/edit/inkline?file=src/App.vue" target="_blank">
    <i-card>
        <div class="image">
            <img src="../../../../assets/images/environments/cdn.svg" alt="CDN Installation - Inkline UI UX DX Library" />
        </div>
        <span>Try on StackBlitz</span>
        <i-icon name="ink-chevron-down"></i-icon>
    </i-card>
</a>
