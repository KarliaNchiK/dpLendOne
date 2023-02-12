<template>
    <header class="page-header">
        <transition name="fade" mode="out-in">
            <naw-draw
                v-if="drawer"
                class="page-header__naw-draw"
                :contentLinks="contentLinks"
                :phoneNumbers="phoneNumbers"
                :goToBlock="goToBlock"
                @close="onClick"
            />
        </transition>
        <div class="page-header__activator-container">
            <naw-svg
                class="page-header__activator"
                @click="onClick"
                :close="drawer"
            />
        </div>
        <img
            src="@imgs/logo.svg"
            alt="Логотип"
            class="page-header__logo"
        >
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
        nawSvg: () => import('./nawSvg'),
        nawDraw:() => import('./nawDrawer'),
    },
    data: () => ({
        drawer: false,
    }),
    methods: {
        onClick() {
            this.drawer = !this.drawer;
            if (this.drawer) {
                document.body.style.height = "100vh";
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.height = "";
                document.body.style.overflow = "";
            }
        }
    }
}
</script>

<style lang="scss">
.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 12vh;
    min-height: 80px;
    padding: 0 4vw;

    .page-header__logo {
        position: relative;
        z-index: 999;

        width: 20vmin;
        height: 20vmin;
    }

    .page-header__activator-container {
        position: relative;
        width: 5vw;
        z-index: 999;

        .page-header__activator {
            cursor: pointer;
        }
    }

    .page-header__naw-draw {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 998;

        width: 100vw;
        height: 100%;

        background: white;
        overflow: hidden;
    }
}
</style>
