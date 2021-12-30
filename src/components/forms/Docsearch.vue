<script lang="ts">
import docsearch from '@docsearch/js';
import '@docsearch/css';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    setup () {
        onMounted(() => {
            docsearch({
                container: '#docsearch',
                appId: '20XO7MC0CB',
                apiKey: '8ce912c5b1dfde1cae80a92ad0404b29',
                indexName: 'docsearch'
            });
        });
    }
});
</script>

<template>
    <div>
        <div id="docsearch" />
    </div>
</template>
