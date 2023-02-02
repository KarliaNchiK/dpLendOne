<template>
    <div class="company-prices">
        <div class="company-prices__title-container">
            <div class="company-prices__quotes">
                <img
                    src="@icons/quotes.svg"
                    alt="Кавычки"
                >
            </div>
            <div class="company-prices__title">
                Оптимпльные ценовые решения, которые позволяют вывести ваше <span><br/> производство на новый уровень </span>
            </div>
            <div class="company-prices__quotes company-prices__quotes--down">
                <img
                    src="@icons/quotes.svg"
                    alt="Кавычки"
                >
            </div>
        </div>
        <div class="company-prices__prices-container">
            <priceBlock
                v-for="priceBlock in staffs"
                :key="priceBlock.title"
                :title="priceBlock.title"
                :price="priceBlock.price"
            />
        </div>
    </div>
</template>

<script>
import priceBlock from "./priceBlock.vue";
import { staffs } from "@/plugins/const";

export default {
    components: {
        priceBlock,
    },
    data: () => ({
        staffs
    })
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.company-prices {
    position: relative;

    display: flex;
    box-sizing: border-box;
    min-height: 50vh;
    margin-top: 30vh;
    padding: 3vw;

    color: white;

    background: black;
    border-radius: 3vw;

    .company-prices__prices-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .company-prices__title-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .company-prices__title {
        margin: 3vh 0;

        font-size: calc(16px + 1.5vw);
        line-height: 1em;
        font-weight: 500;

        span {
            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;

            color: map-get($colors, 'primary-base');
        }
    }

    .company-prices__quotes {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        height: 4vh;
        width: 100%;

        img {
            width: 5vh;
        }
    }

    .company-prices__quotes--down {
        img {
            transform: rotate(180deg);
        }
    }
}

@media (min-width: #{map-get($sizes, 'md')}) {
    .company-prices__prices-container,
    .company-prices__title-container {
        width: 50%;
    }

    .company-prices__title-container {
        position: sticky;
        top: 5%;
        left: 0;
    }
}

@media (max-width: #{map-get($sizes, 'md')}) {
    .company-prices {
        flex-direction: column;

        .company-prices__title-container {
            margin-bottom: 5vh;
        }
    }
}
</style>
