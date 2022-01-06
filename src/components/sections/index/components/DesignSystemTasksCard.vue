<script>
import { defineComponent } from 'vue';
import todoOne from '~/assets/images/sample/todo-one.jpg';
import todoTwo from '~/assets/images/sample/todo-two.jpg';
import todoThree from '~/assets/images/sample/todo-three.jpg';

const date = new Date();

export default defineComponent({
    setup () {
        return {
            todoOne,
            todoTwo,
            todoThree,
            dayName: date.toLocaleString('en-US', { weekday: 'long' }),
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
        <hr class="_margin:0">
        <i-media class="_margin-top:1 _margin-bottom:1">
            <template #image>
                <img class="_border-radius" :src="todoOne" height="80" width="80" alt="Try Inkline - Vue.js UI UX DX Library">
            </template>
            <p class="h4 _margin-bottom:0">
                Try Inkline
            </p>
            <p class="_text:muted _margin-y:1/4 _font-size:sm">
                Discover Inkline's intuitive way of building and designing web applications.
            </p>
            <i-progress size="sm">
                <i-progress-bar aria-label="Try Inkline Progress" color="primary" value="90" />
            </i-progress>
        </i-media>
        <i-media class="_margin-bottom:1">
            <template #image>
                <img class="_border-radius" :src="todoTwo" height="80" width="80" alt="Learn Vue.js 3 - Vue.js UI UX DX Library">
            </template>
            <p class="h4 _margin-bottom:0">
                Learn Vue.js 3
            </p>
            <p class="_text:muted _margin-y:1/4 _font-size:sm">
                Learn Vue.js 3, then improve my developer experience using Inkline.
            </p>
            <i-progress size="sm">
                <i-progress-bar aria-label="Learn Vue.js 3 Progress" color="primary" value="75" />
            </i-progress>
        </i-media>
        <i-media class="_margin-bottom:1">
            <template #image>
                <img class="_border-radius" :src="todoThree" height="80" width="80" alt="Build Vue.js Application - Vue.js UI UX DX Library">
            </template>
            <p class="h4 _margin-bottom:0">
                Build application
            </p>
            <p class="_text:muted _margin-y:1/4 _font-size:sm">
                Install Inkline, integrate it with your application and enjoy good developer experience.
            </p>
            <i-progress size="sm">
                <i-progress-bar aria-label="Build application Progress" color="primary" value="45" />
            </i-progress>
        </i-media>
        <i-button block>
            Example button
        </i-button>
    </i-card>
</template>

<style lang="scss" scoped>
@import "@inkline/inkline/css/mixins";
@import "@inkline/inkline/css/variables";

@include i-card() {
    :deep(img) {
        width: 80px;
    }

    @include i-media() {
        :deep(.media-body) {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @include i-progress() {
                flex-basis: auto;
            }

            p {
                line-height: 16px;
            }
        }
    }
}
</style>
