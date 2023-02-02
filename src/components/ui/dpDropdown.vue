<template>
    <div class="dp-dropdown">
        <dp-input
            ref="input"
            v-model="inputValue"
            :label="label"
            :error="error"
            readonly
            @focus="onFocus"
            @blur="onBlur"
        />
        <div class="dp-dropdown__menu-container">
            <transition name="fade" mode="out-in">
                <div
                    v-if="isOpened"
                    class="dp-dropdown__menu"
                >
                    <div
                        v-for="option in options"
                        :key="option.title"
                        class="dp-dropdown__menu-item"
                        :class="{ 'dp-dropdown__menu-item--selected': option.title === selected.title }"
                        @mousedown="onClickItem(option)"
                    >
                        {{ option.title }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import DpInput from "@/components/ui/dpInput";
export default {
    components: {
        DpInput
    },
    model: {
        prop: 'selected',
        event: "change",
    },
    props: {
        selected: {
            type: [Object],
            default: () => {},
        },
        label: {
            type: String,
            default: "",
        },
        options: {
            type: Array,
            default: () => [],
        },
        error: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
        isOpened: false,
        inputValue: "",
    }),
    mounted() {
        if (this.selected.title) {
            this.inputValue = this.selected.title;
        }
    },
    methods: {
        onFocus() {
            this.isOpened = true;
        },
        onBlur() {
            this.isOpened = false;
        },
        onClickItem(option) {
            this.$emit('change', option);
            this.inputValue = option.title;
        }
    }
}
</script>

<style lang="scss">
.dp-dropdown {
    position: relative;

    width: 100%;

    .dp-dropdown__menu-container {
        position: relative;

        .dp-dropdown__menu {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;

            width: 100%;
            border-radius: 16px;

            overflow: hidden;

            .dp-dropdown__menu-item {
                width: 100%;
                padding: 12px 16px;

                background: white;
                cursor: pointer;

                transition: background-color 0.2s ease-in-out;

                &:hover {
                    background: rgb(210, 210, 210);
                }
            }

            .dp-dropdown__menu-item--selected {
                background: rgb(210, 210, 210);
            }
        }
    }
}
</style>
