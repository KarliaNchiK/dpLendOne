<template>
    <label class="dp-checkbox">
        <input
            class="dp-checkbox__checkbox"
            type="checkbox"
            :checked="value"
            @change="onChange"
        >
        <span
            class="dp-checkbox__text"
        >
            {{ text }}
        </span>
    </label>
</template>

<script>
export default {
    model: {
        prop: "value",
        event: "change",
    },
    props: {
        text: {
            type: String,
            default: "",
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onChange() {
            this.$emit("change", !this.value);
        }
    }
}
</script>

<style lang="scss">
@use "@/assets/css/colors.scss" as *;

.dp-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;

    cursor: pointer;

    .dp-checkbox__checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;

        margin: 0;

        & + .dp-checkbox__text:before {
            content: '';
            position: relative;
            top: 0;
            left: 0;
            z-index: 4;

            display: inline-block;
            box-sizing: border-box;
            margin-right: 8px;
            width: 16px;
            height: 16px;
            border: 1px solid map-get($colors, 'primary-base');
            border-radius: 4px;
        }

        &:checked + .dp-checkbox__text:before {
            background-image: url("@icons/check.svg");
            background-position: center center;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            background-color: map-get($colors, 'info');
            border-color: transparent;
            box-shadow: 0 0 4px map-get($colors, 'info');
        }
    }

    .dp-checkbox__text {
        display: flex;
        align-items: center;
    }
}
</style>
