---
title: Form Validators - Inkline
description: Validators are configurable functions used to check whether an input value matches a specific criteria.
---

<script setup>
import {
    IFormValidationValidatorsAlphaExample,
    IFormValidationValidatorsAlphanumericExample,
    IFormValidationValidatorsEmailExample,
    IFormValidationValidatorsMinExample,
    IFormValidationValidatorsMaxExample,
    IFormValidationValidatorsMinLengthExample,
    IFormValidationValidatorsMaxLengthExample,
    IFormValidationValidatorsNumberExample,
    IFormValidationValidatorsRequiredExample,
    IFormValidationValidatorsSameAsExample,
    IFormValidationValidatorsCustomExample
} from '@inkline/inkline/stories/forms/validation/validators/index.mjs';
import { default as IFormValidationValidatorsAlphaExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/alpha.html?raw';
import { default as IFormValidationValidatorsAlphaExampleJS } from '@inkline/inkline/stories/forms/validation/validators/alpha.mjs?raw';
import { default as IFormValidationValidatorsAlphanumericExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/alphanumeric.html?raw';
import { default as IFormValidationValidatorsAlphanumericExampleJS } from '@inkline/inkline/stories/forms/validation/validators/alphanumeric.mjs?raw';
import { default as IFormValidationValidatorsEmailExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/email.html?raw';
import { default as IFormValidationValidatorsEmailExampleJS } from '@inkline/inkline/stories/forms/validation/validators/email.mjs?raw';
import { default as IFormValidationValidatorsMinExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/min.html?raw';
import { default as IFormValidationValidatorsMinExampleJS } from '@inkline/inkline/stories/forms/validation/validators/min.mjs?raw';
import { default as IFormValidationValidatorsMaxExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/max.html?raw';
import { default as IFormValidationValidatorsMaxExampleJS } from '@inkline/inkline/stories/forms/validation/validators/max.mjs?raw';
import { default as IFormValidationValidatorsMinLengthExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/min-length.html?raw';
import { default as IFormValidationValidatorsMinLengthExampleJS } from '@inkline/inkline/stories/forms/validation/validators/min-length.mjs?raw';
import { default as IFormValidationValidatorsMaxLengthExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/max-length.html?raw';
import { default as IFormValidationValidatorsMaxLengthExampleJS } from '@inkline/inkline/stories/forms/validation/validators/max-length.mjs?raw';
import { default as IFormValidationValidatorsNumberExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/number.html?raw';
import { default as IFormValidationValidatorsNumberExampleJS } from '@inkline/inkline/stories/forms/validation/validators/number.mjs?raw';
import { default as IFormValidationValidatorsRequiredExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/required.html?raw';
import { default as IFormValidationValidatorsRequiredExampleJS } from '@inkline/inkline/stories/forms/validation/validators/required.mjs?raw';
import { default as IFormValidationValidatorsSameAsExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/same-as.html?raw';
import { default as IFormValidationValidatorsSameAsExampleJS } from '@inkline/inkline/stories/forms/validation/validators/same-as.mjs?raw';
import { default as IFormValidationValidatorsCustomExampleHTML } from '@inkline/inkline/stories/forms/validation/validators/custom.html?raw';
import { default as IFormValidationValidatorsCustomExampleJS } from '@inkline/inkline/stories/forms/validation/validators/custom.mjs?raw';
</script>

# Form Validators
## Validators are configurable functions used to check whether an input value matches a specific criteria.

There are several validation options that can be used in the `validators` field:

### Alpha Validator

<example :component="IFormValidationValidatorsAlphaExample" :html="IFormValidationValidatorsAlphaExampleHTML" :js="IFormValidationValidatorsAlphaExampleJS"></example>

### Alphanumeric Validator

<example :component="IFormValidationValidatorsAlphanumericExample" :html="IFormValidationValidatorsAlphanumericExampleHTML" :js="IFormValidationValidatorsAlphanumericExampleJS"></example>

### Email Validator

<example :component="IFormValidationValidatorsEmailExample" :html="IFormValidationValidatorsEmailExampleHTML" :js="IFormValidationValidatorsEmailExampleJS"></example>

### Min Validator

<example :component="IFormValidationValidatorsMinExample" :html="IFormValidationValidatorsMinExampleHTML" :js="IFormValidationValidatorsMinExampleJS"></example>


### Max Validator

<example :component="IFormValidationValidatorsMaxExample" :html="IFormValidationValidatorsMaxExampleHTML" :js="IFormValidationValidatorsMaxExampleJS"></example>

### Min Length Validator

<example :component="IFormValidationValidatorsMinLengthExample" :html="IFormValidationValidatorsMinLengthExampleHTML" :js="IFormValidationValidatorsMinLengthExampleJS"></example>

### Max Length Validator

<example :component="IFormValidationValidatorsMaxLengthExample" :html="IFormValidationValidatorsMaxLengthExampleHTML" :js="IFormValidationValidatorsMaxLengthExampleJS"></example>

### Number Validator

<example :component="IFormValidationValidatorsNumberExample" :html="IFormValidationValidatorsNumberExampleHTML" :js="IFormValidationValidatorsNumberExampleJS"></example>

### Required Validator

<example :component="IFormValidationValidatorsRequiredExample" :html="IFormValidationValidatorsRequiredExampleHTML" :js="IFormValidationValidatorsRequiredExampleJS"></example>

### Same As Validator

<example :component="IFormValidationValidatorsSameAsExample" :html="IFormValidationValidatorsSameAsExampleHTML" :js="IFormValidationValidatorsSameAsExampleJS"></example>

### Custom Validator

<example :component="IFormValidationValidatorsCustomExample" :html="IFormValidationValidatorsCustomExampleHTML" :js="IFormValidationValidatorsCustomExampleJS"></example>
