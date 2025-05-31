const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    entry: './js/app.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'js')
    }
};