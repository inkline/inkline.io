<template>
    <ICard>
        <article id="page">
            <ContentDoc v-slot="{ doc }">
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </article>
    </ICard>
</template>
<script setup></script>
