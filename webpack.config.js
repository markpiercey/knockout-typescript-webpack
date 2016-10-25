module.exports = {
    entry: __dirname + '/src/app.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map', // if we want a source map 
    module: {
        loaders: [
            { test: /\.html$/, loader: "raw-loader" },
        {
                test: /\.tsx?$/,
                loader: 'webpack-typescript?target=ES5&jsx=react'
        }],
    }
}