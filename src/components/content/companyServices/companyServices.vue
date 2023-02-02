<template>
    <div class="company-services">
        <div class="company-services__title-container">
            <img
                src="@imgs/backgroundLines.svg"
                alt=""
                class="company-services__titles-background"
            >
            <p class="company-services__title">ЧТО МЫ МОЖЕМ</p>
            <p class="company-services__title-strong">Наш Список Услуг</p>
        </div>
        <div class="company-services__staffs-container">
            <staff-img
                v-for="staff in staffs"
                :key="staff.title"
                v-bind="staff"
            />
        </div>
    </div>
</template>

<script>
import staffImg from "./staffImg";
import { staffs } from "@/plugins/const";

export default {
    components: {
        staffImg,
    },
    data: () => ({
        staffs
    })
}
</script>

<style lang="scss">
.company-services {
    margin-top: 20vh;
    padding-top: 10vh;

    .company-services__title-container {
        position: relative;
        padding-top: 3vh;
        padding-bottom: 7vh;

        .company-services__titles-background {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;
        }

        .company-services__title,
        .company-services__title-strong {
            text-align: center;
        }

        .company-services__title {
            font-size: 16px;
            opacity: 0.7;
        }

        .company-services__title-strong {
            margin-top: 3vh;
            font-size: calc(16px + 0.4vw);
            font-weight: 500;
        }
    }

    .company-services__staffs-container {
        position: relative;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 15vh 0;
    }
}
</style>
