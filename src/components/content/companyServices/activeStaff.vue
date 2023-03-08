<template>
    <div class="active-staff">
        <div class="active-staff__img-container" v-if="!isMobile">
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
                        <p>{{ title }}</p>
                        <p>
                            <span>{{ price }}</span>&nbsp;Руб. (С учётом НДС)
                        </p>
                    </div>
                    <div class="staff-info-container__text">
                        {{ text }}
                    </div>
                    <div class="staff-info-container__price">
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
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
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
    justify-content: space-between;
    height: 60vh;
    min-height: 400px;

    .active-staff__img-container {
        position: relative;

        flex-shrink: 0;
        width: 55%;
        height: 100%;

        border-radius: 2em;
        box-shadow: 0 0 6px rgba(0,0,0,.25);

        .active-staff__img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            border-radius: inherit;
        }
    }

    .active-staff__info-container {
        box-sizing: border-box;
        height: 100%;
        overflow: hidden;

        background: white;
        box-shadow: 0 0 6px rgba(0,0,0,.25);

        .staff-info-container__div {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .staff-info-container__title {
            p:first-child {
                font-weight: 600;
                font-size: calc(14px + 0.6vw);
                line-height: 1.2em;
            }

            p:last-child {
                margin-top: 1vh;

                font-size: calc(12px + 0.2vw);
                line-height: 1.2em;

                span {
                    font-weight: 600;
                    font-size: inherit;
                    line-height: inherit;
                }
            }
        }

        .staff-info-container__text {
            flex-grow: 1;
            margin-top: 2vh;
            margin-bottom: 2vh;
            padding-top: 2vh;

            border-top: 1px solid grey;
            border-bottom: 1px solid grey;

            font-size: calc(11px + 0.6vmin);
            line-height: 1.4em;
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
            color: black;
        }
    }

    .staff-info__action {
        width: 100%;
        padding: 2vh 1vw;

        font-size: calc(10px + 0.2vw);
        line-height: 1.2em;
        font-weight: 500;

        color: black;
        border-color: map-get($colors, 'primary-base');
        border-width: 2px;
    }
}

@media (min-width: map-get($sizes, 'lg')) {
    .active-staff__info-container {
        width: 40%;
        padding: 2vh 1vw;

        border-radius: 2em;
    }
}

@media (max-width: map-get($sizes, 'lg')) {
    .active-staff__info-container {
        padding: 2vh 2vw;

        border-radius: 1em;
    }
}
</style>
