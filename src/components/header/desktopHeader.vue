<template>
    <header
        class="page-header"
        :class="{'page-header--active': scrollTop !== 0}"
    >
        <img
            src="@imgs/logo.svg"
            alt="Логотип"
            width="195"
            height="25"
        >
        <div
            class="page-header__toolbar"
            :class="`page-header__toolbar--active-${ activeLink }`"
        >
            <content-link
                v-for="(contentLink, i) in contentLinks"
                :key="contentLink"
                :text="contentLink"
                :class="{ 'content-link--active' : i === activeLink }"
                @click.native="onClick(i)"
            />
            <div class="page-header__toolbar-background"></div>
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
    data() {
        return {
            activeLink: 0,
        }
    },
    computed: {
        scrollTop() {
            return this.$store.getters.scrollTop;
        }
    },
    methods: {
        onClick(index) {
            this.activeLink = index;
            this.goToBlock(index);
        }
    }
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
    height: 12vh;
    min-height: 80px;
    padding: 0 5vw;
    background: transparent;
    box-shadow: 0 0 0 transparent;
    backdrop-filter: blur(0);

    transition: all 0.25s ease-in-out;

    &.page-header--active {
        box-shadow: 4px 0 8px grey;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(16px);
    }

    .page-header__toolbar {
        position: relative;

        display: flex;
        box-sizing: border-box;
        overflow: hidden;

        border-radius: 5rem;
        border: 2px solid map-get($colors, 'primary-base');
        background: map-get($colors, 'background-alternativ');

        .page-header__toolbar-background {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 3;

            height: 100%;
            width: calc(100% / 6);

            background: map-get($colors, 'primary-base');
            border-radius: 5em;

            transition: transform 0.25s ease-in-out;
            will-change: transform;
        }
    }

    @for $i from 0 through 6 {
        .page-header__toolbar--active-#{$i} {
            .page-header__toolbar-background {
                transform: translateX(calc(100% * $i));
            }
        }
    }

    .page-header__connect {
        flex-shrink: 0;
    }
}
</style>
