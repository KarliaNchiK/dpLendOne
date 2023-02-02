<template>
    <div
        class="our-advantages"
        :class="{
            'our-advantages--active' : isActive
        }"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
    >
        <div class="our-advantages__advantages-container">
            <line-advantage
                v-for="(advantage, i) in advantages"
                :key="advantage.title + '_' + i"
                :title="advantage.title"
                :index="i"
                @listEnter="onListEnter"
                :class="{ 'line-advantage--active' : activeIndex === i }"
            />
        </div>
       <transition name="fade" mode="out-in">
           <div
               v-if="isActive"
               class="our-advantages__more-info"
           >
               <transition name="infoImg" mode="out-in">
                   <div
                       class="our-advantages__info-img-container"
                       :key="advantages[activeIndex].imgName"
                   >
                       <img
                           class="our-advantages__info-img"
                           :src="require('@imgs/advantages/' + advantages[activeIndex].imgName)"
                           alt="Изображение"
                       >
                   </div>
               </transition>
               <transition name="infoFixed" mode="out-in">
                   <div
                       class="our-advantages__info-fixed"
                       :key="advantages[activeIndex].info"
                   >
                       <p class="our-advantages__info-fixed-title">
                           {{ advantages[activeIndex].title }}
                       </p>
                       {{ advantages[activeIndex].info }}
                   </div>
               </transition>
           </div>
       </transition>
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
    methods: {
        onEnter() {
            this.isActive = true;
        },
        onLeave() {
            this.isActive = false;
        },
        onListEnter(index) {
            this.activeIndex = index;
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.our-advantages {
    display: flex;
    margin-top: 10vh;
}

.our-advantages__advantages-container {
    position: relative;

    flex-shrink: 0;
}

.our-advantages--active {
    .line-advantage {
        opacity: 0.3;
    }

    .line-advantage--active {
        opacity: 1 !important;
    }
}

.our-advantages__more-info {
    position: relative;
    z-index: 1000;

    width: 60%;
    max-height: 100%;

    .our-advantages__info-img-container {
        position: sticky;
        top: 20vh;

        display: flex;
        justify-content: center;

        .our-advantages__info-img {
            width: 80%;
            max-height: 100%;

            border-radius: 16px;
        }
    }
}

.our-advantages__info-fixed {
    position: fixed;
    right: 5vw;
    bottom: 5vh;
    z-index: 1000;

    padding: 1vmax;
    width: 15vw;
    min-width: 300px;

    font-size: 20px;
    line-height: 24px;

    background: white;
    box-shadow: 4px 4px 6px rgba(0,0,0,.6);
    border-radius: 16px;

    .our-advantages__info-fixed-title {
        margin-bottom: 1vh;

        font-weight: 500;
        color: map-get($colors, 'primary-base');
    }
}

@media (min-width: map-get($sizes, 'md')) {
    .our-advantages__advantages-container {
        width: 40%;
    }
}

@media (max-width: map-get($sizes, 'md')) {
    .our-advantages__advantages-container {
        width: 100%;
    }
}

.infoFixed-enter-active,
.infoFixed-leave-active {
    transition: all 0.5s ease;
}

.infoFixed-enter,
.infoFixed-leave-to {
    opacity: 0;
    transform: translateY(40px);
}

.infoImg-enter-active,
.infoImg-leave-active {
    transition: all 0.4s ease-in-out;
}

.infoImg-enter,
.infoImg-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
