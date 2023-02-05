<template>
    <div
        class="our-advantages"
        :class="{'our-advantages--active' : isActive}"
    >
        <div class="our-advantages__advantages-container">
            <line-advantage
                v-for="(advantage, i) in advantages"
                :key="advantage.title + '_' + i"
                :index="i"
                v-bind="advantage"
            />
        </div>
    </div>
</template>

<script>
import LineAdvantage from "@/components/content/ourAdvantages/lineAdvantage";
import { advantages } from "@/plugins/const";

export default {
    components: {
        LineAdvantage
    },
    data: () => ({
        isActive: false,
        activeIndex: 0,
        advantages
    }),
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.our-advantages {
    box-sizing: border-box;
    padding: 15vh 0;
}

.our-advantages__advantages-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    .line-advantage {
        width: 45%;
    }
}
</style>
