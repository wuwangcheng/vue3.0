module.exports = {
    devServer: {
        overlay: {
            warning: false,
            error: false
        },
        proxy: {
            "/api": {
                target: "http://v.juhe.cn/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    lintOnSave: false
}