<template>
    <div class="about-us">
        <div class="about-us__info-line">
            <span class="about-us__info-line-text">
                Наша компания на рынке услуг аутсорсинга персонала уже более <span>5 лет</span>.
                Сегодня мы готовы предложить Вам внушительный перечень работ выполняемых нашими специалистами.
            </span>
            <span v-if="!isMobile">
                <img
                    src="@imgs/logo.svg"
                    alt="Логотип"
                >
            </span>
        </div>
        <div class="about-us__info-line">
            <span class="about-us__info-line-subtext" v-if="!isMobile">
               Лучшие
            </span>
            <span class="about-us__info-line-text">
                Мы занимаемся <span>фасовкой продуктов питания</span>, <span>слесарными работами</span> и все виды работ,
                которые не требуют специальных навыков - это <span>земельные работы</span>, <span>слесарные работы</span>, <span>подсобные работы</span>, <span>клининг</span>,
                а также аутсорсом персонала (аренда персонала) по всей России.
            </span>
            <span class="about-us__info-line-subtext" v-if="!isMobile">
                Решения
            </span>
        </div>
        <div class="about-us__info-line">
            <span class="about-us__info-line-subtext" v-if="!isMobile">Для вашего Бизнеса</span>
            <span class="about-us__info-line-text">
                Мы стараемся <b>индивидуально</b> подходить к каждому заказчику,
                и благодаря этому наши клиенты <b>обращаются к нам снова</b> и рекомендуют нас своему окружению.
            </span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.about-us {
    margin-top: 20vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 5vh 0;

    .about-us__info-line {
        position: relative;

        display: flex;
        align-items: center;
        width: 100%;

        .about-us__info-line-subtext {
            font-weight: 900;

            font-size: calc(16px + 5vmin);
            line-height: 1.4em;
        }

        .about-us__info-line-text {
            display: block;
            box-sizing: border-box;
            flex-shrink: 0;

            border-radius: 2em;
            border: 2px solid map-get($colors, 'primary-base');
            box-shadow: 0 0 16px map-get($colors, 'primary-base');
        }

        .about-us__info-line-text span {
            color: map-get($colors, 'primary-base');
            text-shadow: 1px 1px 1px rgba(0,0,0,.1);
        }
    }
}

@media (min-width: #{map-get($sizes, 'md')}) {
    .about-us__info-line {
        justify-content: space-between;

        .about-us__info-line-text {
            width: 35%;
            padding: 2vh 2vw;
        }

        .about-us__info-line-text,
        .about-us__info-line-text span {
            font-size: 24px;
            line-height: 1.4em;
            word-spacing: 1rem;
        }
    }
}

@media (max-width: #{map-get($sizes, 'md')}) {
    .about-us__info-line-text {
        width: 100%;
        padding: 2vh 5vw;
    }

    .about-us__info-line-text,
    .about-us__info-line-text span {
        font-size: calc(10px + 1.6vmin);
        line-height: 1.4em;
        word-spacing: 1rem;
    }
}
</style>
