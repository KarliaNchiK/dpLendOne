const {defineConfig} = require('@vue/cli-service');
const nameProject = "dp";

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,


    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',

    outputDir: nameProject,

    configureWebpack: {
        resolve: {
            alias: {
                "@imgs": '/src/assets/imgs/',
                "@icons": '/src/assets/icons/',
            },
        },
    },
});
