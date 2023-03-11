<template>
    <div>
        <dialog-form />
        <component
            :is="appHeader"
            class="app-page__header"
            :contentLinks="contentLinks"
            :phoneNumbers="phoneNumbers"
            :goToBlock="goToBlock"
        />

        <slot></slot>

        <footer class="app-page__footer">
            <div class="page-footer">
                <img
                    v-if="isMobile"
                    src="@imgs/logo-white.svg"
                    alt="Логотип"
                    class="page-footer__logo"
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
                        <img
                            src="@imgs/logo-white.svg"
                            alt="Логотип"
                            class="page-footer__logo"
                        >
                    </div>
                </div>
                <div class="page-footer__title">
                    <div class="page-footer__title-text">
                        Повышение стабильности и прибыли всего в 1 клике.
                    </div>
                    <div class="page-footer__title-button">
                        <dp-button
                            class="page-footer__button"
                            @click="openDialog"
                        >
                            Оформить заявку
                        </dp-button>
                    </div>
                </div>
                <div class="page-footer__end">
                    <span>© {{ new Date().getFullYear() }} Staff Future </span>
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
        phoneNumbers: ['8 843 245 69 29'],
        contentLinks: ["Решения", "Предложения", "Достижения", "Цены", "Калькулятор", "О нас"],
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
                title: '8 843 245 69 29',
                href: 'tel:88432456929'
            },
            {
                title: 'dp.site@yandex.ru',
                href: 'mailto:dp.site@yandex.ru'
            },
            {
                title: 'РТ, 420025, г. Казань<br/>Мамадышский тракт, д. 10',
                href: 'https://go.2gis.com/onsgb',
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
    .page-header,
    .page-content,
    .page-footer {
        transition: padding 0.25s;
    }

    .app-page__header {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 300;

        background: map-get($colors, 'background-base');
        box-shadow: 2px 0 6px rgba(0,0,0,.25);
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

        .page-footer__logo {
            width: 20vmin;
            height: 20vmin;
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

                span {
                    color: white;
                }
            }
        }

        .page-footer__links-container {
            display: flex;
            box-sizing: border-box;
        }

        .page-footer__title {
            display: flex;
            width: 100%;
            margin-top: 6vh;
            padding-bottom: 5vh;

            border-bottom: 1px solid rgba(255,255,255,.65);

            .page-footer__title-text {
                font-size: calc(16px + 2vmin);
                line-height: 1.2em;
                color: white;
            }

            .page-footer__title-button {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-shrink: 0;

                button {
                    border-radius: 34px;
                    padding: 24px 32px;
                }
            }
        }

        .page-footer__end {
            display: flex;
            justify-content: space-between;
            margin-top: 4vh;
            width: 100%;

            span {
                color: white;
            }
        }
    }

    @media (min-width: #{map-get($sizes, 'lg')}) {
        $paddingPage: 0 15vw;

        .page-content,
        .page-footer {
            padding: $paddingPage;
        }
    }

    @media (max-width: #{map-get($sizes, 'lg')}) {
        $paddingPage: 0 2vw;

        .page-content,
        .page-footer {
            padding: $paddingPage;
        }
    }

    @media (min-width: map-get($sizes, 'md')) {
        .page-footer__first-block {
            width: 100%;
        }

        .page-footer__title-text {
            width: 80%;
            padding-left: 5%;
            box-sizing: border-box;
        }

        .page-footer__title-button {
            box-sizing: border-box;
            padding-right: 5%;
        }
    }

    @media (max-width: map-get($sizes, 'md')) {
        .page-footer__links-container {
            width: 100%;
            justify-content: space-between;
        }

        .page-footer__title {
            flex-direction: column;
        }

        .page-footer__title-button {
            width: 100%;
            margin-top: 5vh;

            .page-footer__button {
                width: 100%;
            }
        }
    }
}
</style>
