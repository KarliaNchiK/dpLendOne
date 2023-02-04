<template>
    <div class="company-solutions">
        <div class="company-solutions__info solutions-info">
            <p class="solutions-info__value-proposition">
                Доверьте нам всю рутину <br /> по поиску и управлению персоналом
            </p>
            <p class="solutions-info__title">
                Аутсорсинг <br/> персонала
            </p>
            <p class="solutions-info__info">
                Быстро подберём для вас персонал по <span>оптимальным ценам</span>.
                Можем предложить <span>грузчиков</span>,  <span>разнорабочих</span>, <span>слесарей</span>, <span>фасовщиков</span> и <span>другой персонал</span>.
                Выслушаем ваши требования и совместно придём к <span>наилучшему решению</span>.
            </p>

            <div class="solutions-info__actions">
                <button
                    type="button"
                    class="solutions-info__bid"
                    @click="openDialog"
                >
                    Мне нужен персонал
                </button>
                <button
                    type="button"
                    class="solutions-info__call"
                    @click="goToBottom"
                >
                    Я хочу связаться
                </button>
            </div>
        </div>
        <div
            v-if="!isMobile"
            class="company-solutions__background"
        >
            <img
                src="@imgs/work.gif"
                alt="Фон"
                class="company-solutions__background-gif"
            >
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

    margin-top: 10vh;

    .solutions-info {
        position: relative;
        z-index: 3;

        .solutions-info__value-proposition {
            font-size: calc(12px + 0.5vh + 0.4vw);
            line-height: 1.2em;
        }

        .solutions-info__title {
            margin-top: 3vh;

            font-size: calc(16px + 5vmax);
            line-height: 1em;
        }

        .solutions-info__info {
            margin-top: 3vh;
            padding-right: 20%;

            font-size: calc(16px + 0.1vw);
            line-height: 1.4em;

            span {
                font-size: inherit;
                line-height: inherit;
                color: map-get($colors, 'primary-base');
                text-shadow: 1px 1px 1px rgba(0,0,0,.1);
            }
        }

        .solutions-info__actions {
            margin-top: 3vh;

            .solutions-info__call,
            .solutions-info__bid {
                font-size: calc(16px + 0.2vw);
                font-weight: 500;

                border-radius: 5rem;
                border-color: map-get($colors, 'primary-base');
                border-style: solid;
                cursor: pointer;

                box-shadow: 6px 6px 6px rgba(0,0,0,.3),
                -2px -2px 2px map-get($colors, 'light-shadow');

                transition: all 0.3s ease-in-out;
                will-change: transform;

                &:hover {
                    transform: scale(1.02);

                    box-shadow: 6px 6px 12px rgba(0,0,0,.3),
                    -4px -4px 4px map-get($colors, 'light-shadow');
                }

                &:active {
                    transform: scale(0.95);
                }
            }

            .solutions-info__bid {
                color: map-get($colors, 'primary-base');
            }

            .solutions-info__call, {
                color: map-get($colors, 'background-base');
                background: map-get($colors, 'primary-base');
                border: none;
            }
        }
    }

    .company-solutions__background {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;

        mix-blend-mode: multiply;

        .company-solutions__background-gif {
            border-radius: 18px;
            object-fit: contain;

            max-height: 100%;
            max-width: 60%;
        }
    }

    @media (min-width: map-get($sizes, 'md')) {
        & {
            margin: 10vh -10vw 0;
        }

        .solutions-info {
            width: 60%;

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
        .solutions-info {
            width: 100%;

            .solutions-info__actions {
                display: flex;
                justify-content: space-between;
            }

            .solutions-info__call,
            .solutions-info__bid {
                width: 45%;
                padding: 2vh 2vw;
            }
        }
    }
}
</style>
