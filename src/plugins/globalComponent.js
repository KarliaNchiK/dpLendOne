const globalComponents = {
    install(vue) {
        vue.component("dpButton", () => import('@/components/ui/dpButton.vue'));
        vue.component("dpInput", () => import('@/components/ui/dpInput.vue'));
        vue.component("dpDropdown", () => import('@/components/ui/dpDropdown.vue'));
        vue.component("dpCheckbox", () => import('@/components/ui/dpCheckbox.vue'));
    }
}

export default globalComponents;
