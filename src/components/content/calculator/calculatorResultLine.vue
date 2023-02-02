<template>
    <div
        :class="`calculator-result-line calculator-result-line--${ modifier }`"
    >
        <span
            class="calculator-result-line__title"
            v-html="title"
        />
        <span
            class="calculator-result-line__value"
            :class="classesModifier"
        >
            {{ value }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        value: {
            type: [String, Number],
            default: "",
        },
        modifier: {
            type: String,
            default: "",
        },
    },
    computed: {
        classesModifier() {
            return this.modifier
                ? `calculator-result-line__value--${ this.modifier }`
                : "";
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;

.calculator-result-line {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    padding: 16px;

    font-size: calc(14px + 0.2vw);
    line-height: 1em;

    background: white;
    border: 2px solid map-get($colors, 'primary-base');
    border-radius: 16px;

    &:last-child {
        margin-top: 2vh;
    }

    &.calculator-result-line--percent {
        width: 100%;

        font-weight: 600;

        .calculator-result-line__title span {
            font-size: calc(14px + 0.4vw);
            line-height: inherit;
        }

        .calculator-result-line__value {
            margin-top: 3vh;

            color: #0bbd46;
            font-size: calc(14px + 0.4vw);

            &:after {
                content: '%';
                font-weight: 600;
            }
        }
    }

    &:not(.calculator-result-line--percent) {
        .calculator-result-line__value:after {
            content: '\a0 Руб';
        }
    }

    .calculator-result-line__value,
    .calculator-result-line__title {
        font-size: inherit;
        line-height: inherit;
    }

    .calculator-result-line__value {
        margin-top: 1.5vh;

        font-weight: 600;
    }
}
</style>
