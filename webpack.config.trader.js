const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src-trader-dashboard');

module.exports = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: __dirname,
        filename: "dist/react-trader.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$|\.jsx$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        alias: {
            "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        },
        extensions: ['', '.js', '.jsx']
    }
};