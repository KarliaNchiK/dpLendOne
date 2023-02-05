<template>
    <div class="benefit-calculator">
        <div class="benefit-calculator__text">
            <p class="benefit-calculator__title">Калькулятор выгоды</p>
            <div class="benefit-calculator__img-container">
                <img
                    src="@imgs/shop.jpg"
                    alt="картинка"
                    class="benefit-calculator__img"
                >
            </div>
            <div class="benefit-calculator__text-info">
                Мы предлагаем вам самим убедиться в выгодности наших предложений.
                Рассчитайте количество сэкономленных средств.
            </div>
            <div
                class="benefit-calculator__button"
                @click="onCLick"
            >
                <div class="benefit-calculator__get-result">
                    <div>
                        Рассчитай <span>свой</span>
                    </div>
                    <div>
                        бонус
                    </div>
                </div>
            </div>
        </div>
        <calculator-block
            ref="calculator"
        />
    </div>
</template>

<script>
import CalculatorBlock from "@/components/content/calculator/calculatorBlock";

export default {
    components: {
        CalculatorBlock
    },
    methods: {
        onCLick() {
            this.$refs.calculator.getResults();
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.benefit-calculator {
    position: relative;

    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    min-height: 50vh;
    margin-top: 20vh;

    color: black;

    box-shadow: 6px 6px 12px rgba(0,0,0,.25);
    background: linear-gradient(
            -45deg,
            transparentize(map-get($colors, 'info'), 0.2),
            map-get($colors, 'light-shadow') 25%,
            map-get($colors, 'light-shadow') 75%,
            transparentize(map-get($colors, 'primary-base'), 0.5)
    );
    border-radius: 3vw;

    .benefit-calculator__text {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;

        .benefit-calculator__title {
            font-size: calc(16px + 1.5vw);
            line-height: 1em;
        }

        .benefit-calculator__img-container {
            position: relative;

            box-sizing: border-box;
            width: 100%;
            padding: 0 5%;
        }

        .benefit-calculator__img {
            border-radius: 10vh;

            width: 100%;
            object-fit: cover;

            box-shadow: 0 0 12px white, 0 0 6px grey;
        }

        .benefit-calculator__text-info {
            width: 70%;

            text-align: center;
            font-size: calc(14px + 0.2vw);
            line-height: 1.4em;
        }

        .benefit-calculator__button {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5vmin;
            padding: 8px;

            text-align: center;
            user-select: none;

            box-shadow: 0 0 16px grey;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;

            &:before {
                content: "";

                position: absolute;
                z-index: 3;

                display: block;
                width: 105%;
                height: 105%;

                background: radial-gradient(circle at 80%,
                    rgba(20, 120, 60, 1),
                    rgba(120, 210, 120, 1),
                    rgba(160, 255, 165, 1),
                    rgba(255, 255, 255, 1)
                );

                animation: backgr-rotate 18s ease-in-out alternate infinite;
            }
        }

        .benefit-calculator__get-result {
            position: relative;
            z-index: 4;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 8px;


            border-radius: 50%;
            background: map-get($colors, 'light-shadow');

            transition: transform 0.2s ease-in-out;

            span {
                color: map-get($colors, 'primary-base');
                font-weight: 500;
            }

            div,
            span {
                font-size: calc(12px + 0.2vw);
                line-height: 1.4em;
            }

            &:active {
                transform: scale(0.95);
            }
        }
    }
}

@keyframes backgr-rotate {
    0% {
        transform: rotate(0deg);
        filter: hue-rotate(0deg) grayscale(0.6);
    }
    100% {
        transform: rotate(360deg);
        filter: hue-rotate(360deg) grayscale(1);
    }
}

@media (min-width: #{map-get($sizes, 'md')}) {

    .benefit-calculator {
        padding: 7vh 3vw;
    }

    .benefit-calculator__text {
        width: 50%;
    }

    .benefit-calculator__img-container {
        margin: 5vh 0;

        .benefit-calculator__img {
            height: 20vh;
        }
    }

    .benefit-calculator__button {
        width: 10vmax;
        height: 10vmax;
    }

    .calculator-block {
        width: 45%;
    }
}

@media (max-width: #{map-get($sizes, 'md')}) {
    .benefit-calculator {
        flex-direction: column;
        padding: 5vh 3vw;
    }

    .benefit-calculator__img-container {
        margin: 5vh 0;

        .benefit-calculator__img {
            height: 15vh;
        }
    }

    .benefit-calculator__button {
        width: 15vmax;
        height: 15vmax;
    }

    .calculator-block {
        margin-top: 5vh;
    }
}
</style>
