<template>
    <div class="line-advantage">
        <div class="line-advantage__title-container">
            <div class="line-advantage__index">
                0{{ index + 1 }}
            </div>
            <div class="line-advantage__title">
                {{ title }}
            </div>
        </div>
        <div class="line-advantage__img-container">
            <img
                :src="require(`@imgs/advantages/${ imgName }`)"
                alt="Достижение"
                class="line-advantage__img"
            >
            <div class="line-advantage__info">
                {{ info }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
        },
        imgName: String,
        info: String,
    },
}
</script>

<style lang="scss">
.line-advantage {
    display: flex;

    transition: opacity 0.4s ease-in-out;

    .line-advantage__title-container {
        padding-right: 2vw;
        height: 40vh;

        writing-mode: vertical-rl;
        border-right: 1px solid grey;

        transform: rotate(180deg);

        .line-advantage__index {
            line-height: 20px;
            font-weight: 600;
            letter-spacing: 2px;
        }

        .line-advantage__title {
            margin-left: 2vw;

            text-align: center;
            font-size: calc(10px + 0.6vw);
            line-height: 1em;
            font-weight: 300;
        }
    }

    &:not(:last-child){
        margin-bottom: 4vh;
    }

    .line-advantage__img-container {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

        .line-advantage__img {
            height: 40vh;
            width: 100%;

            background: grey;
            filter: grayscale(0.5);

            object-fit: cover;
        }

        .line-advantage__info {
            padding-top: 4vh;

            font-size: calc(14px + 0.2vw);
            line-height: 1em;
        }
    }
}
</style>
