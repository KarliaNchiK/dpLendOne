<template>
    <div
        :class="[
            'staff-img',
            { 'staff-img--active' : active }
        ]"
        :data-tippy-content="tippyContent"
        data-tippy-placement="top"
        data-tippy-theme="white"
    >
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        active: Boolean,
    },
    computed: {
        tippyContent() {
            return `
                <div style="text-align: center;">
                    Выбрать для просмотра "${ this.title }"
                </div>
            `
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

$borderRadius: 16px;

.staff-img {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0,0,0,.25);

    border-radius: $borderRadius;
    background-image: url("@imgs/staff/texture.jpg");
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;

    text-align: center;
    font-size: calc(6px + 1.8vmin);
    line-height: 1.2em;
    cursor: pointer;

    transition: all 0.25s ease-in-out;
    will-change: transform;

    &:active {
        transform: scale(0.98);
    }

    &.staff-img--active,
    &:hover {
        background-position-y: bottom;
        filter: invert(1);
        transform: scale(0.95);
        box-shadow: 0 0 0 rgba(0,0,0,.25);
    }
}
</style>
