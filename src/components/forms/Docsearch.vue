<script lang="ts">
import docsearch from '@docsearch/js';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    setup () {
        onMounted(() => {
            docsearch({
                container: '#docsearch',
                appId: 'I4DWB11IJB',
                apiKey: '583e140ca50a2d8df186f676f9fa6f6f',
                indexName: 'inkline'
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
