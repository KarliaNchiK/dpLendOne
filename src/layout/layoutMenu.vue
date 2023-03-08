<template>
    <div class="layout-menu">
        <div
            v-for="(link, i) in contentLinks"
            :key="link"
            class="layout-menu__link"
            :class="{'layout-menu__link--active': i === activeBlock}"
            :data-text="(i+1) + '. ' + link"
            @click="onClick(i)"
        >
            {{ i+1 }}. {{ link }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goToBlock: Function,
        contentLinks: Array,
    },
    computed: {
        activeBlock: {
            get() {
                return this.$store.getters.activeBlock;
            },
            set(value) {
                this.$store.commit("setActiveBlock", value);
            }
        }
    },
    methods: {
        onClick(i) {
            this.goToBlock(i);
            this.activeBlock = i;
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;

.layout-menu {
    position: fixed;
    z-index: 900;
    left: 1vw;
    top: 50%;

    display: flex;
    flex-direction: column;
    gap: 2vh 0;

    transform: translateY(-50%);

    .layout-menu__link {
        position: relative;

        box-sizing: border-box;
        padding: 0.5vmin 2vmin;

        font-size: calc(12px + 0.4vw);
        line-height: 1.4em;
        font-weight: 600;
        cursor: pointer;

        &.layout-menu__link--active,
        &:hover {
            &:before {
                opacity: 1;
            }

            &:after {
                width: 100%;
            }
        }

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background: linear-gradient(135deg,
                darken(map-get($colors, 'primary-base'), 10%),
                map-get($colors, 'primary-base') 20%,
                map-get($colors, 'primary-base') 80%,
                lighten(map-get($colors, 'primary-base'), 10%)
            );
            border-radius: 0 5em 5em 0;
            opacity: 0;

            transition: opacity 0.25s ease-in-out;
        }

        &:after {
            content: attr(data-text);

            position: absolute;
            top: 0;
            left: 0;

            display: flex;
            box-sizing: border-box;
            width: 0;
            padding-top: inherit;
            padding-left: inherit;

            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;
            color: white;
            word-break: keep-all;
            white-space: nowrap;

            transition: width 0.25s ease-in-out;
            overflow: hidden;
        }
    }
}
</style>
