<template>
    <div>
        <dialog-form />
        <layout-widgets v-if="!isMobile" />
        <layout-menu v-if="!isMobile" :goToBlock="goToBlock" :contentLinks="contentLinks" />
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
                    src="@imgs/logo.svg"
                    alt="Логотип"
                    width="700"
                    height="50"
                    style="max-width: 100%; object-fit: contain"
                >
                <div class="page-footer__first-block">
                    <div class="page-footer__links-container">
                        <links-column
                            title="Перейти"
                            :quick-links="contentLinks.map(title => ({title, haveListener: true}))"
                            @click="(i) => goToBlock(i)"
                        />
                        <links-column
                            title="Социальные сети"
                            :quick-links="socialLinks"
                        />
                        <links-column
                            title="Наши контакты"
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
                    <span>© {{ new Date().getFullYear() }} Персонал Экспресс</span>
                    <span>Режим работы - с 8:00 до 20:00. Без выходных</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import LinksColumn from "@/components/footer/linksColumn";
import DialogForm from "@/components/ui/dialogForm";
import LayoutWidgets from "@/layout/layoutWidgets";
import LayoutMenu from "@/layout/layoutMenu";

export default {
    name: 'App',

    components: {
        LayoutMenu,
        LayoutWidgets,
        DialogForm,
        LinksColumn,
    },

    data: () => ({
        phoneNumbers: ['8 (843) 245 68 82'],
        contentLinks: ["Визитка", "Достижения", "Цены и услуги", "Выгода", "О нас"],
        socialLinks: [
            {
                title: 'Телеграм',
                href: 'https://t.me/+79991575127'
            },
            {
                title: 'Whatsapp',
                href: 'https://wa.me/79991575127'
            },
        ],
        contactLinks: [
            {
                title: '8 (843) 245 68 82',
                href: 'tel:884324568582'
            },
            {
                title: 'persexp@yandex.ru',
                href: 'mailto:persexp@yandex.ru'
            },
            {
                title: 'РТ, 420021, г. Казань<br/>Ул. Учительская, д. 2А',
                href: 'https://go.2gis.com/0dwld',
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
        if (!this.isMobile) {
            window.addEventListener('scroll', this.onScroll);
        }
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
            const el = document.querySelector(`[name='start-block-${ index }']`);

            if (el.dataset.top) {
                el.scrollIntoView({ block: "start", behavior: "smooth" });
            } else {
                el.scrollIntoView({ block: "center", behavior: "smooth" });
            }
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
        transition: all 0.25s ease-in-out;
    }

    .app-page__footer {
        width: 100%;
        padding: 2vh 0 5vh;
        box-sizing: border-box;

        background: #2f3030;
    }

    .page-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: white;

        .page-footer__first-block {
            display: flex;
            justify-content: space-between;
            margin-top: 6vh;
            width: 100%;

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

    @media (min-width: #{map-get($sizes, 'md')}) {
        .page-content,
        .page-footer {
            padding: 0 15vw;
        }
    }

    @media (max-width: map-get($sizes, 'md')) {
        .page-footer {
            box-sizing: border-box;
            padding: 0 2vw;
        }

        .page-footer__links-container {
            justify-content: space-between;
        }
    }
}
</style>
