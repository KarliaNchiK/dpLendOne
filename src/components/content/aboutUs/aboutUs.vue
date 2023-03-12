<template>
    <div class="about-us">
        <AboutUsLine
            v-for="(infoLine, i) in infoLinesData"
            :key="i"
            v-bind="infoLine"
        />
    </div>
</template>

<script>
import AboutUsLine from "@/components/content/aboutUs/aboutUsLine";
export default {
    components: {AboutUsLine},
    data: () => ({
        infoLinesData: [
            {
                title: "Компания <b>\"Персонал Экспресс\"</b>",
                text: `В этой сфере мы работаем уже <span>более пяти лет</span>, и за это время мы смогли наладить партнерские отношения с множеством высококвалифицированных специалистов.
                    Мы готовы предоставить Вам <span>профессиональную и качественную</span> услугу по предоставлению персонала на ваши объекты.`,
                aos: "slide-left",
            },
            {
                title: "Что мы можем предложить",
                text: `Мы занимаемся <span>фасовкой продуктов питания</span>, <span>слесарными работами</span> и все виды работ,
                которые не требуют специальных навыков - это <span>земельные работы</span>, <span>слесарные работы</span>, <span>подсобные работы</span>, <span>клининг</span>,
                а также аутсорсом персонала (аренда персонала) по всей России.`,
                aos: "slide-right",
            },
            {
                title: "Сделаем всё для вас",
                text: `Мы стараемся <b>индивидуально</b> подходить к каждому заказчику,
                и поэтому можем предложить Вам <span>самые низкие цены</span>, при этом качество наших услуг не пострадает.
                Мы гарантируем, что все работы будут выполнены в срок и с высоким качеством.`,
                aos: "slide-left",
            },
        ]
    }),
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/sizes.scss' as *;

.about-us {
    margin-top: 20vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 5vh 0;
}

@media (max-width: map-get($sizes, 'lg')) {
    .about-us {

    }
}

@media (max-width: map-get($sizes, 'lg')) {
    .about-us {
        padding-left: 2vw;
        padding-right: 2vw;
    }
}
</style>
