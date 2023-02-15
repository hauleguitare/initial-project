const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
    console.log(argv);
    return {
        mode: argv.mode,
        target: "node",
        entry: path.resolve(__dirname, "src/index.ts"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: "/node_modules/",
                    loader: "babel-loader"
                },
                {
                    test: /\.ts$/,
                    exclude: "/node_modules/",
                    use: "ts-loader"
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: [
        ]
    }
}

