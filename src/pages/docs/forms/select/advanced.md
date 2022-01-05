---
title: Advanced Select  - Inkline
description: The select component easily supports complex scenarios, with asynchronous autocomplete and pagination. 
---

<script setup>
import {
    ISelectAdvancedExample
} from '@inkline/inkline/components/ISelect/examples/index.mjs';
import { default as ISelectAdvancedExampleHTML } from '@inkline/inkline/components/ISelect/examples/advanced.html?raw';
import { default as ISelectAdvancedExampleJS } from '@inkline/inkline/components/ISelect/examples/advanced.mjs?raw';
</script>


# Advanced Select 
## The select component easily supports complex scenarios, with asynchronous autocomplete and pagination

### Advanced Example
In some scenarios you need to search large amounts of data. You'll be able to easily combine the asynchronous autocomplete with pagination. 

 There are some considerations to be made when using autocomplete with pagination:
- Search functionality is handled externally, using the `@search` event
- Pagination functionality is handled externally, using the `@pagination` event
- You must provide a total number of options using the `total` property
- You must provide a loading state using the `loading` property
- You must update the available `options` array manually

Here you can see an example using asynchronous search and infinite scrolling:

<example :component="ISelectAdvancedExample" :html="ISelectAdvancedExampleHTML" :js="ISelectAdvancedExampleJS"></example>






