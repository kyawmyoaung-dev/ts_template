const path = require('path');

module.exports = {
    entry : './src/app.ts',
     mode : 'production',
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'public'),
        publicPath : 'public'
    },
    // devtool: 'inline-source-map',    
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve:{
        extensions: ['.ts','.js']
    }
}