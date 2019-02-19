
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
    module: {
        rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-env']
                    }
                }
            },
            {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            { test: /\.json$/, },
        ]
    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
      ]

};


