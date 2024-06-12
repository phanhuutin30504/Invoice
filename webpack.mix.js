const mix = require("laravel-mix");
const path = require('path');

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        // Thêm các plugin hoặc preset CSS ở đây nếu cần
    ])
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
                'vue$': 'vue/dist/vue.esm-bundler.js'
            },
            extensions: [".*",".wasm",".mjs",".js",".jsx",".json",".vue",".*",".ts",".tsx"]
        },
        devServer: {
            hot: true,
            host: 'localhost',  // Chỉnh sửa nếu cần thiết
            port: 8080,         // Chỉnh sửa nếu cần thiết
            static: {
                directory: path.join(__dirname, 'public'),
            },
            client: {
                overlay: true,
            },

        }
    });

module.exports = mix;
