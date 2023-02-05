<template>
    <div>
        <dialog-form />
        <component
            :is="appHeader"
            class="app-page__header"
            :class="{'page-header--active': scrollTop !== 0}"
            :contentLinks="contentLinks"
            :phoneNumbers="phoneNumbers"
            :goToBlock="goToBlock"
        />

        <slot></slot>

        <footer class="app-page__footer">
            <div class="page-footer">
                <img
                    src="@imgs/logo-white.svg"
                    alt="Логотип"
                    width="390"
                    height="50"
                    style="max-width: 100%; object-fit: contain"
                >
                <div class="page-footer__first-block">
                    <div class="page-footer__links-container">
                        <links-column
                            title="Изучить"
                            :quick-links="contentLinks.map(title => ({title, haveListener: true}))"
                            @click="(i) => goToBlock(i)"
                        />
                        <links-column
                            title="Связаться"
                            :quick-links="socialLinks"
                        />
                        <links-column
                            title="Контакты"
                            :quick-links="contactLinks"
                        />
                    </div>
                    <div
                        v-if="!isMobile"
                        class="page-footer__back-to-top"
                        @click="goToTop"
                    >
                        <span>
                            Пролистать вверх
                        </span>
                        <img
                            src="@icons/arrow-up.svg"
                            alt="Вверх"
                            width="16"
                            height="16"
                        >
                    </div>
                </div>
                <div class="page-footer__end">
                    <span>© {{ new Date().getFullYear() }} ООО "Деловой подход+"</span>
                    <span>Режим работы - с 8:00 до 20:00. Без выходных</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import LinksColumn from "@/components/footer/linksColumn";
import DialogForm from "@/components/ui/dialogForm";

export default {
    name: 'App',

    components: {
        DialogForm,
        LinksColumn,
    },

    data: () => ({
        phoneNumbers: ['8 843 245 68 18', '8 904 666 66 46'],
        contentLinks: ["Решения", "Персонал", "Достижения", "Выгода", "О нас"],
        socialLinks: [
            {
                title: 'Телеграм',
                href: 'https://t.me/Delovoi_podhod_bot'
            },
            {
                title: 'Whatsapp',
                href: 'https://wa.me/79067242517'
            },
        ],
        contactLinks: [
            {
                title: '8 800 222 12 59',
                href: 'tel:88002221259'
            },
            {
                title: 'delovoi_podhod@inbox.ru',
                href: 'mailto:delovoi_podhod@inbox.ru'
            },
            {
                title: 'РТ, 420021, г. Казань<br/>Ул. Татарстан, д. 22<br/>Офис 367',
                href: 'https://go.2gis.com/fmg9g0',
            }
        ],
        activeHeader: "",
    }),
    watch: {
        windowResize() {
            this.setActiveHeader();
        }
    },
    created() {
        this.$store.commit("setWindowWidth", window.innerWidth);
        window.addEventListener('resize', this.onResize);
        this.setActiveHeader();
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    computed: {
        appHeader() {
            const typeHeader = this.activeHeader;

            return () => import("@/components/header/" + typeHeader);
        },
        isMobile() {
            return this.$store.getters.isMobile;
        },
        windowResize() {
            return this.$store.getters.windowWidth;
        },
        scrollTop() {
            return this.$store.getters.scrollTop;
        },
    },
    methods: {
        setActiveHeader() {
            if (this.windowResize > 900) {
                if (this.activeHeader !== 'desktopHeader') {
                    this.activeHeader = 'desktopHeader';
                    this.$store.commit('setIsMobile', false);
                }
            } else if (this.activeHeader !== 'mobileHeader') {
                this.activeHeader = 'mobileHeader';
                this.$store.commit('setIsMobile', true);
            }
        },
        onResize() {
            this.$store.commit("setWindowWidth", window.innerWidth);
        },
        onScroll() {
            this.$store.commit("setScrollTop", document.documentElement.scrollTop);
        },
        goToBlock(index) {
            document.querySelector(`[name='start-block-${ index }']`).scrollIntoView(true);
        },
        goToTop() {
            document.documentElement.scrollTo(0, 0);
        },
        openDialog() {
            window.openDialog();
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.app-page {
    .page-content,
    .page-footer {
        transition: padding 0.25s;
    }

    .app-page__header {
        background: transparent;
        box-shadow: 0 0 0 transparent;

        transition: all 0.25s ease-in-out;

        &.page-header--active {
            box-shadow: 4px 0 8px grey;
            background: white;
        }
    }

    .app-page__footer {
        width: 100%;
        padding: 2vh 0 5vh;
        box-sizing: border-box;

        background: #21201e;
    }

    .page-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: white;

        span {
            color: white;
        }

        .page-footer__first-block {
            display: flex;
            justify-content: space-between;
            margin-top: 6vh;

            .page-footer__back-to-top {
                display: flex;
                align-items: center;
                height: 100%;
                align-self: start;

                cursor: pointer;

                img {
                    margin-left: 8px;
                }
            }
        }

        .page-footer__links-container {
            display: flex;
            box-sizing: border-box;
        }

        .page-footer__end {
            display: flex;
            justify-content: space-between;
            margin-top: 4vh;
            width: 100%;
        }
    }

    @media (min-width: #{map-get($sizes, 'lg')}) {
        .page-content,
        .page-footer {
            padding: 0 15vw;
        }
    }

    @media (max-width: #{map-get($sizes, 'lg')}) {
        .page-content,
        .page-footer {
            padding: 0 2vw;
        }
    }

    @media (min-width: map-get($sizes, 'md')) {
        .page-footer__first-block {
            width: 100%;
        }
    }

    @media (max-width: map-get($sizes, 'md')) {
        .page-footer__links-container {
            width: 100%;
            justify-content: space-between;
        }
    }
}
</style>
