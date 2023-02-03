<template>
    <div class="phone-number">
        <img
            src="@icons/call.svg"
            alt="Телефон"
            width="16"
            height="16"
            class="phone-number__icon"
        >
        <a
            class="phone-number__text"
            :href="`tel:${ text }`"
        >
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        }
    }
}
</script>

<style lang="scss" scoped>
.phone-number {
    display: flex;
    align-items: center;

    &:not(:last-child) {
        padding-bottom: 8px;
    }

    .phone-number__icon {
        transition: transform 0.25s ease-in-out;

        will-change: transform;
    }

    .phone-number__text {
        margin-left: 8px;

        color: black;
        text-decoration: none;
    }

    &:hover {
        .phone-number__icon {
            transform: scale(1.3) translateX(-10%);
        }
    }
}
</style>
