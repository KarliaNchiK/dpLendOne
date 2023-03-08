<template>
    <div class="links-column">
        <div class="links-column__title">
            {{ title }}
        </div>
        <div class="links-column__links-container">
            <a
                class="links-column__link"
                v-for="(quickLink, i) in quickLinks"
                :key="quickLink.href + '_' + i"
                :href="quickLink.href"
                target="_blank"
                @click="quickLink.haveListener ? $emit('click', i) : ''"
                v-html="quickLink.title"
            >
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quickLinks: {
            type: Array,
            default: () => [],
        },
        title: String,
    }
}
</script>

<style lang="scss">
.links-column {

    .links-column__title {
        color: white;
        font-weight: 600;
    }

    .links-column__links-container {
        margin-top: 4vh;
        display: flex;
        flex-direction: column;

        .links-column__link {
            text-decoration: none;
            color: white;
            cursor: pointer;

            line-height: 1.4em;

            transition: all 0.25s ease-in-out;
            will-change: transform;

            &:not(:first-child) {
                margin-top: 2vh;
            }

            &:hover {
                transform: scale(1.2);
                transform-origin: center left;
            }
        }
    }

    &:not(:first-child) {
        margin-left: 5vw;
    }
}
</style>
