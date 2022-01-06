<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        cover: {
            type: String,
            default: ''
        },
        profile: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <i-card>
        <template #image>
            <img :src="cover" alt="Cover - Inkline - Vue.js UI UX DX Library">
        </template>
        <div class="profile-header">
            <img :src="profile" width="80" height="80" alt="Alex Grozav - Inkline - Vue.js UI UX DX Library">
            <div>
                <p class="h4 _margin-bottom:0">
                    Alex Grozav
                </p>
                <span class="_text:muted">Romania</span>
            </div>
        </div>
        <p>
            Web development enthusiast. Former Envato author. Creator of Inkline. Generally awesome.
        </p>
        <hr>
        <i-row class="_margin-bottom:1">
            <i-column>
                <span>Followers</span>
                <div class="_font-size:lg">
                    1.3k
                </div>
            </i-column>
            <i-column>
                <span>Projects</span>
                <div class="_font-size:lg">
                    156
                </div>
            </i-column>
            <i-column>
                <span>Rank</span>
                <div class="_font-size:lg">
                    23
                </div>
            </i-column>
        </i-row>
        <i-button block color="primary" href="http://twitter.com/alexgrozav" target="_blank">
            Follow
        </i-button>
    </i-card>
</template>

<style lang="scss" scoped>
@import "@inkline/inkline/css/mixins";
@import "@inkline/inkline/css/variables";

@include i-card() {
    img {
        height: auto;
        width: 100%;
    }

    .profile-header {
        display: flex;
        align-items: center;

        img {
            height: auto;
            width: 80px;
            margin-right: spacing();
            border-radius: var(----border-radius);
        }
    }
}
</style>
