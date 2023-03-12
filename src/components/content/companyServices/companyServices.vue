<template>
    <div class="company-services">
        <div
            class="company-services__title-container"
            data-aos="fade-down"
        >
            <div class="company-services__title">
                Наша команда проанализировала рынок и подготовила ряд лучших предложений для вашего бизнеса. <br/><br/>
                Каждый день мы развиваемся и улучшаем качество нашего персонала, наших связей, чтобы быть увереннее в завтрашнем дне!
            </div>
            <div class="company-services__title-img" v-if="!isMobile">
                <img
                    src="@imgs/staff/topBackground.jpg"
                    alt="Фон"
                >
            </div>
        </div>
        <div
            class="company-services__content"
            data-aos="fade-up"
        >
            <div class="company-services__staffs-container">
                <staff-link
                    v-for="(staff, i) in staffs"
                    :key="staff.title"
                    :title="staff.title"
                    :active="activeStaff === i"
                    @click.native="activeStaff = i"
                />
            </div>
            <active-staff
                class="company-services__active-staff"
                v-bind="activeStaffInfo"
            />
        </div>
    </div>
</template>

<script>
import staffLink from "./staffLink";
import { staffs } from "@/plugins/const";
import ActiveStaff from "@/components/content/companyServices/activeStaff";

export default {
    components: {
        ActiveStaff,
        staffLink,
    },
    data: () => ({
        staffs,
        activeStaff: 0,
    }),
    computed: {
        activeStaffInfo() {
            return this.staffs[this.activeStaff];
        },
        isMobile() {
            return this.$store.getters.isMobile;
        },
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.company-services {
    padding-top: 10vh;
    padding-bottom: 20vh;

    .company-services__title-container {
        position: relative;

        padding-bottom: 15vh;

        .company-services__title {
            font-size: calc(16px + 0.4vw);
            line-height: 1.2em;
        }

        .company-services__title-img {
            position: relative;

            width: 70%;

            img {
                position: absolute;

                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .company-services__content {
        display: flex;
        justify-content: space-between;
    }

    .company-services__staffs-container {
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25%;
    }

    .company-services__active-staff {
        width: 70%;
    }
}

@media (min-width: map-get($sizes, 'lg')) {
    .company-services__title-container {
        display: flex;
        justify-content: space-between;

        .company-services__title {
            width: 25%;
        }
    }
}

@media (max-width: map-get($sizes, 'lg')) {
    .company-services__content {
        padding-left: 2vw;
        padding-right: 2vw;
    }

    .company-services__title-container {
        padding: 0 2vmin;
        box-sizing: border-box;
    }
}
</style>
