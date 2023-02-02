<template>
    <div class="phone-number">
        <img
            src="@icons/call.svg"
            alt="Телефон"
            width="16"
            height="16"
            class="phone-number__icon"
        >
        <span class="phone-number__text">
            {{ text }}
        </span>
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

    .phone-number__text {
        margin-left: 8px;
    }
}
</style>
