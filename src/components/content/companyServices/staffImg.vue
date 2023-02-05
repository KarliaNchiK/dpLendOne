<template>
    <div class="staff-img">
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
    },
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
    padding: 1vmin;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0,0,0,.25);

    border-radius: $borderRadius;
    background: map-get($colors, 'background-header');

    text-align: center;
    font-size: calc(10px + 1.4vmin);
    line-height: 1.2em;
    cursor: pointer;

    transition: transform 0.25s ease-in-out;
    will-change: transform;

    &:active {
        transform: scale(0.98);
    }
}

@media (min-width: map-get($sizes, 'md')) {
    .staff-img {
        width: 15.5%;
    }
}

@media (max-width: map-get($sizes, 'md')) {
    .staff-img {
        width: 30%;
        height: 10vh;

        &:nth-child(1n + 4) {
            margin-top: 2vh;
        }
    }
}
</style>
