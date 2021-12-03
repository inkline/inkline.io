<script>
import { defineComponent } from 'vue';

const date = new Date();

export default defineComponent({
    setup() {
        return {
            dayName: date.toLocaleString('en-US', { weekday:'long' }),
            today: date.toLocaleDateString()
        };
    }
});
</script>
<template>
    <i-card>
        <div class="_margin-bottom:1 _text:center">
            <p class="h3 _margin-bottom:0">
                {{ dayName }}
            </p>
            <span class="_text:muted">{{ today }}</span>
        </div>
        <hr />
        <i-media class="_margin-bottom:1">
            <template #image>
                <img class="_border-radius" src="https://via.placeholder.com/80" height="80" width="80" alt="Card Image">
            </template>
            <p class="h4 _margin-bottom:0">
                Try Inkline
            </p>
            <p class="_text:muted _margin-y:1/4 _font-size:sm">
                Discover Inkline's intuitive way of building and designing web applications.
            </p>
            <i-progress size="sm">
                <i-progress-bar color="primary" value="90" />
            </i-progress>
        </i-media>
        <i-media class="_margin-bottom:1">
            <template #image>
                <img class="_border-radius" src="https://via.placeholder.com/80" height="80" width="80" alt="Card Image">
            </template>
            <p class="h4 _margin-bottom:0">
                Learn Vue.js 3
            </p>
            <p class="_text:muted _margin-y:1/4 _font-size:sm">
                Learn Vue.js 3, then improve my developer experience using Inkline.
            </p>
            <i-progress size="sm">
                <i-progress-bar color="primary" value="75" />
            </i-progress>
        </i-media>
        <i-media class="_margin-bottom:1">
            <template #image>
                <img class="_border-radius" src="https://via.placeholder.com/80" height="80" width="80" alt="Card Image">
            </template>
            <p class="h4 _margin-bottom:0">
                Build application
            </p>
            <p class="_text:muted _margin-y:1/4 _font-size:sm">
                Install Inkline, integrate it with your application and enjoy good developer experience.
            </p>
            <i-progress size="sm">
                <i-progress-bar color="primary" value="45" />
            </i-progress>
        </i-media>
        <i-button block>
            Show all tasks
        </i-button>
    </i-card>
</template>

<style lang="scss" scoped>
@import "~@inkline/inkline/css/mixins";
@import "~@inkline/inkline/css/variables";

@include i-card() {
    :deep(img) {
        width: auto;
    }

    @include i-media() {
        :deep(.media-body) {
            flex: 1 1 auto;

            p {
                line-height: 16px;
            }
        }
    }
}
</style>
