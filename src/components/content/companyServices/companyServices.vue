<template>
    <div class="company-services">
        <div class="company-services__title-container">
            Оптимальные <span>ценовые решения</span>, которые позволяют вывести <span><br/> ваше производство на новый уровень </span>
        </div>
            <active-staff v-bind="activeStaffInfo"/>
        <div class="company-services__staffs-container">
            <staff-img
                v-for="(staff, i) in staffs"
                :key="staff.title"
                :title="staff.title"
                @click.native="activeStaff = i"
            />
        </div>
    </div>
</template>

<script>
import staffImg from "./staffImg";
import { staffs } from "@/plugins/const";
import ActiveStaff from "@/components/content/companyServices/activeStaff";

export default {
    components: {
        ActiveStaff,
        staffImg,
    },
    data: () => ({
        staffs,
        activeStaff: 0,
    }),
    computed: {
        activeStaffInfo() {
            return this.staffs[this.activeStaff];
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;

.company-services {
    padding-top: 10vh;

    .company-services__title-container {
        position: relative;
        padding-top: 3vh;
        padding-bottom: 7vh;

        font-size: calc(16px + 0.4vw);
        line-height: 1.2em;
        text-align: center;

        span {
            margin-top: 3vh;

            color: map-get($colors, 'primary-base');
            font-size: calc(16px + 0.4vw);
            line-height: 1.2em;
            font-weight: 500;
        }
    }

    .company-services__staffs-container {
        position: relative;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 2vh 0;
    }
}
</style>
