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
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9982;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15vh 5vw 0;
    width: 100vw;
    height: 100%;

    background: white;
    overflow: hidden;

    .naw-draw__content {
        flex-grow: 1;

        .content-link {
            &:not(:first-child) {
                margin-top: 4vh;
            }

            .content-link__text {
                font-size: calc(14px + 4vmin);
                line-height: 1.4em;
            }
        }
    }

    .naw-draw__contact {
        padding: 5vh 0;
    }
}
</style>
