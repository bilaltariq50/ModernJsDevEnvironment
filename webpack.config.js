const path = require('path');
var debug = process.env.NODE_ENV !== "development";
//var debug = process.env.NODE_ENV !== "production";
module.exports = {
mode: 'development',    
entry:  {
        app: ['babel-polyfill','./src/app.js']
 },
output: {
        path: path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
 },
module: {
        rules: [{
            test : /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query : {
                presets:['env','stage-0']
            }
            }]
}

}