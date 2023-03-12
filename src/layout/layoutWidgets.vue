<template>
    <div class="layout-widgets">
        <a
            class="layout-widgets__soc-icon layout-widgets__soc-icon--telegram"
            href="https://t.me/+79991575127"
            target="_blank"
            data-tippy-content="Связаться с нами в Telegram"
            data-tippy-placement="left"
        ></a>
        <a
            class="layout-widgets__soc-icon layout-widgets__soc-icon--whatsapp"
            href="https://wa.me/79991575127"
            target="_blank"
            data-tippy-content="Связаться с нами в WhatsApp"
            data-tippy-placement="left"
        ></a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.layout-widgets {
    position: fixed;
    right: 1vw;
    top: 50%;
    z-index: 100;

    display: flex;
    flex-direction: column;
    gap: 2vh 0;

    transform: translateY(-50%);

    .layout-widgets__soc-icon {
        width: 5vmin;
        height: 5vmin;

        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 4vmin 4vmin;

        animation: scale-up 10s ease-in-out infinite;

        &.layout-widgets__soc-icon--telegram {
            background-color: #069cc9;
            background-image: url("@icons/telegram.svg");
        }

        &.layout-widgets__soc-icon--whatsapp {
            background-color: #47c906;
            background-image: url("@icons/whatsapp.svg");
        }
    }
}

@keyframes scale-up {
    0% {
        transform: scale(1);
    }
    5% {
        transform: scale(0.95) rotate(-15deg);
    }
    10% {
        transform: scale(1.1) rotate(15deg);
    }
    15% {
        transform: scale(1);
    }
    85% {
        transform: scale(1);
    }
    90% {
        transform: scale(1.1) rotate(-15deg);
    }
    95% {
        transform: scale(0.95) rotate(15deg);
    }
    100% {
        transform: scale(1);
    }
}
</style>
