const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode:'development',
    watch: true,
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [
				  {loader: "style-loader"}, 
				  {loader: "css-loader"}
				]
            },
            {
	            test: /\.scss$/,
		        exclude: /node_modules/,
				use: [
				  {loader: "style-loader"}, 
				  {loader: "css-loader"}, 
				  {loader: "sass-loader"}
				]
	        },
            { 
                test: /\.js$/, 
				use:{
				    loader: "babel-loader",
				    options: {
                      presets: ['@babel/preset-env','@babel/preset-react']
                    },
                    
				}
				  
				
            }
        ]
    }    
}