<template>
    <header class="page-header">
        <img
            src="@imgs/logo.svg"
            alt="Логотип"
            class="page-header__logo"
        >
        <div class="page-header__toolbar">
            <content-link
                v-for="(contentLink, i) in contentLinks"
                :key="contentLink"
                :text="contentLink"
                @click.native="goToBlock(i)"
            />
        </div>
        <div class="page-header__connect">
            <phone-number
                v-for="phoneNumber in phoneNumbers"
                :key="phoneNumber"
                :text="phoneNumber"
            />
        </div>
    </header>
</template>


<script>
import phoneNumber from '@/components/header/phoneNumber';
import contentLink from "@/components/header/contentLink";

export default {
    props: {
        contentLinks: Array,
        phoneNumbers: Array,
        goToBlock: Function,
    },
    components: {
        phoneNumber,
        contentLink,
    },
}
</script>

<style lang="scss">
.page-header {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 12vh;
    min-height: 80px;
    padding: 0 4vw;

    .page-header__logo {
        width: 10vmin;
        height: 10vmin;
    }

    .page-header__toolbar {
        display: flex;
        width: 100%;
        padding: 0 4vw;
    }

    .page-header__connect {
        flex-shrink: 0;
    }
}
</style>
