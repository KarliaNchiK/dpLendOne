<template>
    <div class="benefit-calculator">
        <div
            class="benefit-calculator__img-container"
            data-aos="slide-up"
            v-if="!isMobile"
        >
            <img
                src="@imgs/calculator/background.jpg"
                alt=""
                class="benefit-calculator__img"
            >
        </div>
        <div class="benefit-calculator__content benefit-calculator-content">
            <div class="benefit-calculator-content__title">
                Рассчитайте свою выгоду с помощью нашего калькулятора
            </div>
            <CalculatorBlock
                class="benefit-calculator-content__calculator"
                ref="calculator"
            />
        </div>
    </div>
</template>

<script>
import CalculatorBlock from "@/components/content/calculator/calculatorBlock";

export default {
    components: {
        CalculatorBlock
    },
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
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
    min-height: 80vh;
    width: 100%;
    margin-top: 20vh;

    .benefit-calculator__img-container {
        position: relative;

        width: 40%;
        margin-right: 1vmin;

        .benefit-calculator__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .benefit-calculator__content {
        flex-grow: 1;
        padding: 2vmin;

        background-image: url("@imgs/calculator/background2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center right;

        .benefit-calculator-content__title {
            font-size: calc(14px + 1vmin);
            line-height: 1.4em;
        }

        .benefit-calculator-content__calculator {
            margin-top: 4vh;
        }
    }
}
</style>
