<template>
    <i-header>
        <i-row>
            <i-column class="_text:center" lg="8" offset-lg="2">
                <section-header>
                    <template #title>
                        Build your design system. Fast.
                    </template>
                    <template #description>
                        Make components look the way you want, without the hassle. More time to focus on building a great experience for your customers.
                    </template>
                </section-header>
            </i-column>
        </i-row>
    </i-header>
</template>

<style lang="scss" scoped>
@import "@inkline/inkline/src/css/variables";
@import "@inkline/inkline/src/css/mixins";

@include i-header() {
    @include variant('light') {
        background: white;
    }
}
</style>
