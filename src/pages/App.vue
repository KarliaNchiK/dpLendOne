<template>
    <div class="app-page">
       <default-layout>
           <page-content class="page-content" />
       </default-layout>
    </div>
</template>

<script>
import pageContent from "@/components/content";
import DefaultLayout from "@/layout/defaultLayout";

export default {
    name: 'App',
    components: {
        DefaultLayout,
        pageContent
    },
}
</script>

<style lang="scss">
@use "@/assets/css/index.scss";
</style>
