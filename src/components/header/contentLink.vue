<template>
    <div class="content-link">
        <p class="content-link__text">{{ text }}</p>
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

    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;

    transition: color 0.25s ease;

    .content-link__text {
        font-size: calc(0.2vw + 12px);
        white-space: nowrap;
    }

    &:not(:last-child) {
        margin-right: 3vw;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -4px;

        width: 0;
        height: 2px;

        background: map-get($colors, 'primary-base');

        transition: width 0.4s cubic-bezier(.85,.04,.55,.94);
    }

    &:hover,
    &:first-child {
        color: map-get($colors, 'primary-base');

        &::after {
            width: 100%;
        }
    }
}
</style>
