<template>
    <div class="content-link">
        <p class="content-link__text">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        }
    }
}
</script>


<style lang="scss" scoped>
@use '@/assets/css/colors.scss' as *;

.content-link {
    position: relative;

    box-sizing: border-box;
    padding: 1vh 0;
    width: 7vw;

    text-align: center;

    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;

    transition: color 0.4s ease;

    .content-link__text {
        position: relative;
        z-index: 4;

        font-size: calc(8px + 0.4vmin);
        white-space: nowrap;
    }

    &.content-link--active {
        color: white;
    }

    &:hover:not(.content-link--active) {
        color: map-get($colors, 'primary-base');
    }
}
</style>
