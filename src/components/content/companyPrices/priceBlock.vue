<template>
    <div class="price-block">
        <div>
            <p class="price-block__staff-title"> {{ title }} </p>
        </div>
        <div>
            <p class="price-block__staff-price"> От <span>{{ price }}</span> рублей в час</p>
            <p class="price-block__staff-price">Минимальное время заказа - <span>8</span> часов</p>
        </div>
    </div>
</template>

<script>
export default  {
    props: {
        title: {
            type: String,
            default: "",
        },
        price: {
            type: Number,
            default: 200,
        },
        imgName: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;

.price-block {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30vh;
    width: 45%;
    padding: 24px;
    box-sizing: border-box;

    border-radius: 16px;
    border: 1px solid rgba(253, 238, 234, 0.2);

    &:nth-child(1n + 3) {
        margin-top: 4vh;
    }

    .price-block__staff-title {
        font-size: 18px;
    }

    .price-block__staff-price {
        &:first-child {
            margin-bottom: 10%;
        }

        span {
            color: map-get($colors, 'primary-base');
            text-shadow: 1px 1px 1px rgba(255,255,255, 0.45);
        }
    }
}
</style>
