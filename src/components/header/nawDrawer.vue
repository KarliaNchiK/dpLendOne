<template>
    <div class="naw-draw">
        <div class="naw-draw__content">
            <content-link
                v-for="(contentLink, i) in contentLinks"
                :key="contentLink"
                :text="contentLink"
                @click.native="onClickLink(i)"
            />
        </div>
        <div class="naw-draw__contact">
            <phone-number
                v-for="phoneNumber in phoneNumbers"
                :key="phoneNumber"
                :text="phoneNumber"
            />
        </div>
    </div>
</template>

<script>
import phoneNumber from '@/components/header/phoneNumber';
import contentLink from "@/components/header/contentLink";

export default {
    props: {
        contentLinks: Array,
        phoneNumbers: Array,
        goToBlock: Function,
    },
    components: {
        phoneNumber,
        contentLink,
    },
    methods: {
        onClickLink(i) {
            this.$emit("close");
            this.goToBlock(i);
        }
    }
}
</script>

<style lang="scss">
.naw-draw {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15vh 5vw 0;

    .naw-draw__content {
        flex-grow: 1;

        .content-link {
            &:not(:first-child) {
                margin-top: 4vh;
            }

            .content-link__text {
                font-size: calc(14px + 4vmin);
                line-height: 1.4em;
                color: #fff;
            }
        }
    }

    .naw-draw__contact {
        padding: 5vh 0;

        .phone-number__text {
            color: #fff;
        }

        .phone-number__icon {
            filter: invert(1);
        }
    }
}
</style>
