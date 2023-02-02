<template>
    <div class="staff-img">
        <div>
            <div class="staff-img__img-container">
                <img
                    :src="require('@imgs/staff/' + imgName)"
                    alt="Рабочий"
                    class="staff-img__img"
                >
            </div>
            <div class="staff-img__content">
                <p class="staff-img__content-title">
                    {{ title }}
                </p>
                <p
                    class="staff-img__content-text"
                >
                    {{ text }}
                </p>
            </div>
        </div>
        <div class="staff-img__content">
            <dp-button
                class="staff-img__content-action"
                @click="openDialog"
            >
                Оформить заявку
            </dp-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgName: {
            type: String,
            default: 'gr.png'
        },
        title: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: "",
        }
    },
    methods: {
        openDialog() {
            window.openDialog();
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
    flex-direction: column;
    justify-content: space-between;
    padding: 1vmin;
    box-sizing: border-box;

    border-radius: $borderRadius;
    box-shadow: 6px 6px 10px rgba(0,0,0,.3),
    -3px -3px 4px #fff;
    background: map-get($colors, 'background-header');

    transition: transform 0.5s, box-shadow 0.5s ease-in-out;
    will-change: box-shadow, transform;

    .staff-img__img-container {
        position: relative;

        display: flex;

        overflow: hidden;
        border-radius: $borderRadius;

        .staff-img__img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top center;

            transition: transform 0.5s ease-in-out;
        }
    }

    .staff-img__content {
        position: relative;

        display: flex;
        box-sizing: border-box;
        flex-direction: column;

        .staff-img__content-title {
            margin-top: 3vh;

            font-size: calc(16px + 2.4vmin);
            line-height: 1.2em;

            font-weight: 600;
        }

        .staff-img__content-text {
            margin-top: 3vh;
            margin-bottom: auto;

            font-size: calc(12px + 1vmin);
            line-height: 1.2em;
            font-weight: 300;

            transition: opacity 0.5s ease-in-out;
        }

        .staff-img__content-action {
            margin-top: 3vh;
            padding: 2vh 1vw;

            font-size: 16px;
            line-height: 1.2em;
            font-weight: 500;

            color: map-get($colors, 'primary-base');
            border-color: map-get($colors, 'primary-base');
            border-width: 2px;
        }
    }

    &:hover {
        box-shadow: 8px 8px 16px rgba(0,0,0,.3),
        -4px -4px 4px #fff;

        transform: translateY(-1%);

        .staff-img__img {
            transform: scale(1.05);
        }
    }
}

@media (min-width: map-get($sizes, 'md')) {
    .staff-img {
        width: 32%;

        &:nth-child(1n + 4) {
            margin-top: 6vh;
        }

        &:nth-child(3n + 2) {
            top: -6vh;
        }

        .staff-img__img-container {
            height: 17vw;
        }
    }
}

@media (max-width: map-get($sizes, 'md')) {
    .staff-img {
        width: 48%;

        &:nth-child(1n + 3) {
            margin-top: 4vh;
        }

        .staff-img__img-container {
            height: 25vh;
        }
    }
}
</style>
