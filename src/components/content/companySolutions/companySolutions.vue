<template>
    <div class="company-solutions">
        <div
            class="company-solutions__info solutions-info"
            data-aos="fade-up"
        >
            <p class="solutions-info__value-proposition">
                Экономьте своё время, предоставив дело профессионалам <br/><br/>
                Ваше лучшее решение
            </p>
            <p class="solutions-info__title">
                Аутсорсинг <br/> персонала
            </p>
            <p class="solutions-info__info">
                Мы решим любую вашу <span> потребность в персонале</span>. Больше не нужно заботиться о том, будет ли выполнена работа в срок <span>Будет</span>.
                Большой штат, профессиональная команда, <span>оптимальные цены</span>.
                Подберём для вас <span>грузчиков</span>,  <span>разнорабочих</span>, <span>слесарей</span>, <span>фасовщиков</span> и <span>другой персонал</span>.
                Выслушаем ваши требования и совместно придём к <span>наилучшему решению</span>.
            </p>

            <div class="solutions-info__actions">
                <button
                    type="button"
                    class="solutions-info__bid"
                    @click="openDialog"
                >
                    Оставить заявку
                </button>
                <button
                    type="button"
                    class="solutions-info__call"
                    @click="goToBottom"
                >
                    Контактные данные
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
    },
    methods: {
        openDialog() {
            window.openDialog();
        },
        goToBottom() {
            document.querySelector('.page-footer').scrollIntoView(true)
        },
    },
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.company-solutions {
    position: relative;
    box-sizing: border-box;

    .solutions-info {
        position: relative;
        z-index: 3;

        box-sizing: border-box;

        background-image: url("@imgs/time.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        .solutions-info__value-proposition {
            font-size: calc(12px + 0.5vh + 0.4vw);
            line-height: 1.2em;
        }

        .solutions-info__title {
            margin-top: 3vh;

            font-size: calc(12px + 6vmin);
            line-height: 1.4em;
        }

        .solutions-info__info {
            margin-top: 3vh;

            font-size: calc(16px + 0.2vmax);
            line-height: 1.5em;

            span {
                font-size: inherit;
                line-height: inherit;
                color: white;
                text-shadow: 1px 1px 1px rgba(0,0,0,.1);
            }
        }

        .solutions-info__actions {
            margin-top: 3vh;

            .solutions-info__call,
            .solutions-info__bid {
                font-size: calc(12px + 0.8vmin);
                font-weight: 500;
                color: map-get($colors, 'primary-base');

                border-radius: 5rem;
                border-width: 4px;
                border-color: map-get($colors, 'primary-base');
                border-style: solid;
                cursor: pointer;

                box-shadow: 0 0 12px rgba(0,0,0,.3);

                transition: all 0.3s ease-in-out;
                will-change: transform;

                &:hover {
                    transform: scale(1.02);

                    box-shadow: 0 0 18px rgba(0,0,0,.5);
                }

                &:active {
                    transform: scale(0.95);
                }
            }
        }
    }

    @media (min-width: map-get($sizes, 'md')) {
        padding-top: 10vh;
        margin: 0 0 20vh;

        background-position: top right;

        .solutions-info {
            padding: 4vmin 8vmin 8vmin 8vmin;
            border-radius: 16px;

            .solutions-info__info {
                width: 60%;
            }

            .solutions-info__call,
            .solutions-info__bid {
                padding: 2vh 1vw;
            }

            .solutions-info__bid {
                margin-right: 1vw;
            }
        }
    }

    @media (max-width: map-get($sizes, 'md')) {
        padding-top: 5vh;

        .solutions-info {
            width: 100%;
            padding: 4vmin;

            .solutions-info__actions {
                display: flex;
                justify-content: space-between;
            }

            .solutions-info__call,
            .solutions-info__bid {
                width: 49%;
                padding: 2vmin;
            }
        }
    }
}
</style>
