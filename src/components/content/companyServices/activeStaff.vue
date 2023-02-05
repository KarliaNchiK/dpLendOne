<template>
    <div class="active-staff">
        <div class="active-staff__img-container">
            <transition name="fade" mode="out-in">
                <img
                    :key="imgName"
                    :src="require('@imgs/staff/' + imgName)"
                    alt=""
                    class="active-staff__img"
                >
            </transition>
        </div>
        <div class="active-staff__info-container staff-info-container">
            <transition name="slide-x" mode="out-in">
                <div class="staff-info-container__div" :key="title">
                    <div class="staff-info-container__title">
                        {{ title }}
                    </div>
                    <div class="staff-info-container__text">
                        {{ text }}
                    </div>
                    <div class="staff-info-container__price">
                        <div>
                            <span>{{ price }}</span>&nbsp;Руб. (С учётом НДС)
                        </div>
                        <dp-button
                            class="staff-info__action"
                            @click="openDialog"
                        >
                            Оформить заявку
                        </dp-button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        price: Number,
        text: String,
        imgName: String,
    },
    methods: {
        openDialog() {
            window.openDialog();
        }
    },
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.active-staff {
    position: relative;

    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 2vh 1vw;

    background: radial-gradient(circle at 10% 20%, map-get($colors, 'primary-base'), white 20%);
    border-radius: 2em;
    box-shadow: 0 0 12px rgba(0,0,0,.25);

    .active-staff__img-container {
        position: relative;

        display: flex;
        box-sizing: border-box;
        flex-shrink: 0;
        justify-content: center;
        width: 60%;
        height: 100%;
        padding-right: 1vw;

        .active-staff__img {
            max-width: 100%;
            height: 100%;

            border-radius: 2em;
        }
    }

    .active-staff__info-container {
        box-sizing: border-box;
        height: 100%;
        overflow: hidden;

        background: map-get($colors, 'background-base');
        border-radius: 2em;
        box-shadow: inset 0 0 12px rgba(0,0,0,.25);

        .staff-info-container__div {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .staff-info-container__title {
            font-weight: 600;
            font-size: calc(14px + 0.6vw);
            line-height: 1.2em;
        }

        .staff-info-container__text {
            flex-grow: 1;
            margin-top: 2vh;
            margin-bottom: 2vh;
            padding-top: 2vh;

            border-top: 1px solid grey;
            border-bottom: 1px solid grey;

            font-size: calc(12px + 1vw);
            line-height: 1.2em;
        }

        .staff-info-container__price {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .staff-info-container__price div,
        .staff-info-container__price span {
            font-size: calc(14px + 0.5vw);
            line-height: 1.4em;
        }

        .staff-info-container__price span {
            font-weight: 600;
            color: map-get($colors, 'primary-base');
        }
    }

    .staff-info__action {
        padding: 2vh 1vw;

        font-size: calc(10px + 0.2vw);
        line-height: 1.2em;
        font-weight: 500;

        color: map-get($colors, 'primary-base');
        border-color: map-get($colors, 'primary-base');
        border-width: 2px;
    }
}

@media (min-width: map-get($sizes, 'md')) {
    .active-staff {
        height: 60vh;
        min-height: 400px;

        .active-staff__info-container {
            padding: 2vh 1vw;
        }
    }
}

@media (max-width: map-get($sizes, 'md')) {
    .active-staff {
        flex-direction: column;

        .active-staff__info-container {
            padding: 2vh 8vw;
        }
    }
}
</style>
