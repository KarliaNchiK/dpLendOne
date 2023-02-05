<template>
    <div
        class="line-advantage"
        @mouseenter="onEnter"
        @click="onEnter"
    >
        <div class="line-advantage__index">
            0{{ index + 1 }}
        </div>
        <div class="line-advantage__title">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
        },
    },
    methods: {
        onEnter() {
            this.$emit('listEnter', this.index)
        }
    }
}
</script>

<style lang="scss">
.line-advantage {
    display: flex;

    cursor: pointer;

    transition: opacity 0.4s ease-in-out;

    &:not(:last-child){
        margin-bottom: 4vh;
    }

    .line-advantage__index {
        line-height: 20px;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .line-advantage__title {
        margin-left: 2vw;

        font-size: calc(16px + 1.2vw);
        line-height: 1em;
    }
}
</style>
