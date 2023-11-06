---
title: Autocomplete - Autocomplete - Inkline
description: The select autocomplete functionality allows you to search for a specific option with result highlighting. 
---

# Autocomplete - Autocomplete
## The select autocomplete functionality allows you to search for a specific option with result highlighting

### Basic Example
Autocomplete functionality can be enabled using the `autocomplete` property. 

There are some considerations to be made when using autocomplete:
- Search functionality is handled externally, using the `@search` event
- You must provide a loading state using the `loading` property, if done asynchronously
- You must update the available `options` array manually

<example :component="ISelectAutocompleteExample" :html="ISelectAutocompleteExampleHTML" :js="ISelectAutocompleteExampleJS"></example>

### Async Example
Combining the select autocomplete with your backend search is easy. Here's how to do it: 

<example :component="ISelectAutocompleteAsyncExample" :html="ISelectAutocompleteAsyncExampleHTML" :js="ISelectAutocompleteAsyncExampleJS"></example>

If you're looking for an example that uses pagination as well, check out the <router-link :to="{ name: 'docs-forms-select-advanced' }">Advanced Select</router-link> section.



