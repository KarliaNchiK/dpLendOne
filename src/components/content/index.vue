<template>
    <div class="lending-content">
        <company-solutions name="start-block-0" data-index="0" />
        <our-advantages name="start-block-1" data-index="1" />
        <company-services name="start-block-2" data-index="2" />
        <benefit-calculator name="start-block-3" data-index="3" />
        <about-us name="start-block-4" data-index="4" />
    </div>
</template>

<script>
import companySolutions from "./companySolutions/companySolutions.vue";
import companyServices from "./companyServices/companyServices.vue";
import ourAdvantages from "./ourAdvantages/ourAdvantages";
import BenefitCalculator from "@/components/content/calculator/benefitCalculator";
import AboutUs from "@/components/content/aboutUs/aboutUs";

export default {
    components: {
        AboutUs,
        BenefitCalculator,
        companySolutions,
        companyServices,
        ourAdvantages,
    },
    data() {
        return {
            observer: null,
            active: false,
            currentIndex: 0,
            setTimeout: null,
        }
    },
    mounted() {
        this.initObserver();

        this.$el.childNodes.forEach(node => {
            this.observer.observe(node)
        });
    },
    methods: {
        initObserver() {
            this.observer = new IntersectionObserver(this.observerCallback, {
                threshold: 0.3,
            });
        },
        observerCallback(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.currentIndex = Number(entry.target.dataset.index);

                    if (!this.active) {
                        this.active = true;

                        this.setTimeout = setTimeout(() => {
                            if(this.$store.getters.activeBlock !== this.currentIndex) {
                                this.$store.commit("setActiveBlock", this.currentIndex);
                            }

                            this.active = false;
                        }, 500);
                    }
                }
            });
        }
    }
}
</script>

<style>
.lending-content {
    margin-bottom: 20vh;

    overflow: hidden;
}
</style>
