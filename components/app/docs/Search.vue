<script lang="ts">
import docsearch from '@docsearch/js';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    setup() {
        onMounted(() => {
            docsearch({
                container: '#docsearch',
                appId: 'I4DWB11IJB',
                apiKey: '49a9d80e5003fde38c3bfbf18f05f02d',
                indexName: 'inkline'
            });
        });
    }
});
</script>

<template>
    <div title="Search">
        <div id="docsearch" />
    </div>
</template>
