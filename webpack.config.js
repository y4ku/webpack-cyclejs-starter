var path = require("path");

module.exports = {
    entry: "./app/src/app.js",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js?$/,
                exclude: /(node_module)/,
                loader: 'babel'
            }
        ]
    }
};