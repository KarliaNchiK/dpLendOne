<template>
    <button
        @click="(event) => $emit('click', event)"
        class="dp-ui-button"
        :class="classes"
        :type="type"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        },
        filled: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classes() {
            let classes = '';
            if (this.filled) {
                classes += 'dp-ui-button--filled';
            }

            if (this.rounded) {
                classes += 'dp-ui-button--rounded';
            }

            return classes;
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;

.dp-ui-button {
    position: relative;

    border-radius: 16px;
    box-sizing: border-box;
    overflow: hidden;

    cursor: pointer;
    border-style: solid;
    border-width: 1px;

    transition: all 0.3s ease;
    will-change: transform;
}

.dp-ui-button--filled {
    background: map-get($colors, 'primary-base') !important;
    color: white;
}

.dp-ui-button--rounded {
    border-radius: 50%;
}

.dp-ui-button:active {
    transform: scale(0.95);

    background: map-get($colors, 'primary-base') !important;
    color: white !important;
}

.dp-ui-button:hover {
    box-shadow: 0 0 12px rgba(0,0,0,.3);
}
</style>
