<template>
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'svg-close': close }"
        @click="switchSvg"
    >
        <line y1="72.5" x2="100" y2="72.5"/>
        <line y1="37.5" x2="100" y2="37.5"/>
        <line y1="2.5" x2="100" y2="2.5"/>
    </svg>
</template>

<script>
export default {
    props: ["close"],
    methods: {
        switchSvg() {
            this.$emit("click");
        },
    },
};
</script>

<style lang="scss" scoped>
svg > line {
    transition: transform 0.5s, opacity 0.3s 0.1s ease;

    stroke: white;
    stroke-width: 6;

    &:nth-child(1) {
        transform-origin: left bottom;
    }

    &:nth-child(2) {
        transform-origin: left bottom;
    }

    &:nth-child(3) {
        transform-origin: left top;
    }
}

.svg-close > line {
    &:nth-child(1) {
        transform: rotateZ(-45deg);
    }

    &:nth-child(2) {
        opacity: 0;
        transform: rotate(-45deg) translateY(50%);
    }

    &:nth-child(3) {
        transform: rotateZ(45deg);
    }
}
</style>
