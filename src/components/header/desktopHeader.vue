<template>
    <header class="page-header">
        <img
            src="@imgs/logo.svg"
            alt="Логотип"
            width="600"
            height="40"
        >
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

export default {
    props: {
        contentLinks: Array,
        phoneNumbers: Array,
        goToBlock: Function,
    },
    components: {
        phoneNumber,
    },
}
</script>

<style lang="scss">
@use "@/assets/css/colors.scss" as *;

.page-header {
    position: sticky;
    top: 0;
    z-index: 1111;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 5vh;
    min-height: 60px;
    padding: 0 15vw;

    box-shadow: 4px 0 8px grey;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);

    .page-header__connect .phone-number {
        filter: invert(1);
    }
}
</style>
