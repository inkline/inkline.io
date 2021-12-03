<template>
    <i-card>
        <template #image>
            <img src="https://via.placeholder.com/300x150" alt="Card Image">
        </template>
        <div class="profile-header">
            <img src="https://via.placeholder.com/80x80" alt="Card Image">
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
        <i-button block color="primary">
            Follow
        </i-button>
    </i-card>
</template>

<style lang="scss" scoped>
@import "~@inkline/inkline/css/mixins";
@import "~@inkline/inkline/css/variables";

@include i-card() {
    img {
        width: auto;
    }

    .profile-header {
        display: flex;
        align-items: center;

        img {
            margin-right: spacing();
            border-radius: var(----border-radius);
        }
    }
}
</style>
