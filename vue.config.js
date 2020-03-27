module.export = {
    lintOnSave: true,
    // publicPath: '/',
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'less-loader' // compiles Less to CSS
            }
        ]
    }
};
