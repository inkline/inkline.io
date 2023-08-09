<script lang="ts" setup>
const npmrc = [
    [{ type: 'span', code: '@inkline/pro:registry=https://npm.inkline.io/' }],
    [
        {
            code: '//npm.inkline.io/:_authToken='
        },
        {
            class: '_color:primary _font-weight:semibold',
            code: 'YOUR_AUTH_TOKEN_HERE'
        }
    ]
];
</script>
<template>
    <pre class="pre"><code><span
        v-for="(line, index) in npmrc"
        :key="index"
        class="line"
    ><span
        v-for="(span, spanIndex) in line"
        :key="spanIndex"
        :class="span.class"
    >{{ span.code }}</span></span></code></pre>
</template>
