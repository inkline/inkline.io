<script lang="ts">
import docsearch from '@docsearch/js';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    setup() {
        onMounted(() => {
            docsearch({
                container: '#docsearch',
                appId: 'QKUB0WAATR',
                apiKey: 'e1b23dbc16b7deacb0063d5e74f42f7b',
                indexName: 'next-inkline'
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
