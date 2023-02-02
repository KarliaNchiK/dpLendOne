<template>
    <div class="lending-content">
        <company-solutions name="start-block-0" />
        <company-services name="start-block-1" />
        <our-advantages name="start-block-2" />
        <company-prices name="start-block-3" />
        <benefit-calculator name="start-block-4" />
        <about-us name="start-block-5" />
    </div>
</template>

<script>
import companySolutions from "./companySolutions/companySolutions.vue";
import companyServices from "./companyServices/companyServices.vue";
import ourAdvantages from "./ourAdvantages/ourAdvantages";
import companyPrices from "./companyPrices/companyPrices.vue";
import BenefitCalculator from "@/components/content/calculator/benefitCalculator";
import AboutUs from "@/components/content/aboutUs/aboutUs";

export default {
    components: {
        AboutUs,
        BenefitCalculator,
        companySolutions,
        companyServices,
        ourAdvantages,
        companyPrices,
    }
}
</script>

<style>
.lending-content {
    margin-bottom: 20vh;
}
</style>
