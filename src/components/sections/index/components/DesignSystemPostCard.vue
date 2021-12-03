<template>
    <i-card>
        <i-media class="_margin-bottom:1">
            <template #image>
                <img class="_border-radius" src="https://via.placeholder.com/60" height="60" width="60" alt="Card Image">
            </template>
            <div class="_display:flex _justify-content:space-between _text:muted _font-size:sm">
                <span>Joel Hendricks</span>
                <span>3:03pm</span>
            </div>
            <p class="h5 _margin-top:1/2">
                Looking forward to it
            </p>
            <p class="_margin-top:1 _text:muted">
                "Love this so much! What tools do you use to create your 2d illustrations?"
            </p>
        </i-media>
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
