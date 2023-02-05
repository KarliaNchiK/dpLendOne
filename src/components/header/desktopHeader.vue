<template>
    <header class="page-header">
        <img
            src="@imgs/logo.svg"
            alt="Логотип"
            width="300"
            height="40"
        >
        <div class="page-header__connect">
        </div>
    </header>
</template>


<script>
export default {
    props: {
        contentLinks: Array,
        phoneNumbers: Array,
        goToBlock: Function,
    },
    components: {
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
    backdrop-filter: blur(12px);
}
</style>
