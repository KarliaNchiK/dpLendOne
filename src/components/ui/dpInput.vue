<template>
    <div
        :class="[
            'dp-input',
            { 'dp-input--with-data' : value },
            { 'dp-input--error' : error }
        ]"
        @click="onClick"
    >
        <input
            ref="input"
            class="dp-input__input"
            :placeholder="placeholder"
            :type="type"
            :readonly="readonly"
            :value="value"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
        >
        <span
            ref="inputText"
            class="dp-input__text"
        >
            {{ label }}
        </span>
        <span
            class="dp-input__legend"
            :style="`--label-width: ${labelWidth}px;`"
        ></span>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'input',
    },
    props: {
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: [String, Number],
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        error: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
        labelWidth: 0,
        activeError: false,
    }),
    mounted() {
        this.labelWidth = this.$refs.inputText.clientWidth;
    },
    methods: {
        onClick(event) {
          this.$emit("click", event);
        },
        onInput() {
            const inputValue = this.$refs.input.value;
            this.$emit("input", inputValue);
        },
        onBlur(event) {
            this.$emit("blur", event);
        },
        onFocus(event) {
            this.$emit("focus", event);
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;

.dp-input {
    position: relative;
    width: 100%;

    .dp-input__input {
        width: 100%;
        padding: 11px 16px;
        box-sizing: border-box;

        font-size: 16px;
        line-height: 1em;

        outline: none;
        border-color: map-get($colors, 'primary-base');
        border-style: solid;
        border-radius: 16px;
        box-shadow: 0 0 0 red;

        transition: all 0.2s cubic-bezier(.85,.04,.55,.94);

        &:focus {
            border-color: map-get($colors, 'info');
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    .dp-input__text {
        position: absolute;
        top: 50%;
        left: 14px;
        z-index: 5;

        padding: 0 6px;
        transform: translateY(-50%);

        pointer-events: none;

        transition: all 0.3s cubic-bezier(.85,.04,.55,.94);

    }

    .dp-input__legend {
        position: absolute;
        top: 0;
        left: 14px;

        width: 0;
        height: 2px;
        background: white;

        transition: width 0.3s cubic-bezier(.85,.04,.55,.94);
    }

    &:focus-within,
    &.dp-input--with-data {
        .dp-input__legend {
            width: var(--label-width);
        }

        .dp-input__text {
            top: 0;
        }
    }

    &.dp-input--error {

        animation: error-translate 0.1s linear alternate 4;
        .dp-input__input {
            border-color: red;
            box-shadow: 0 0 2px red;
        }

        .dp-input__text {
            color: red;
        }

        @keyframes error-translate {
            from {
                transform: translateX(-2px);
            }
            to {
                transform: translateX(2px);
            }
        }
    }
}
</style>
