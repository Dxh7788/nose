let webpack = require('webpack');
//导出多个配置对象
module.exports = [{
    //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry: {
        bundles1:__dirname+"/app/main.js",
        bundles2:__dirname+"/app/main.js"
    },
    output:{
        path:__dirname+"/public",
        filename:"[name].js"
    },
    module:{
        rules:[
            {test:"/\.txt$/",use:'law-loader'}
            ]
    }
    ,
    plugins:[
        new webpack.BannerPlugin("版权所有,翻版必究!!!")
    ],
},{
    entry:{
        bundles3:__dirname+"/app/main.js",
        bundles4:__dirname+"/app/main.js"
    },
    output:{
        path:__dirname+"/public",
        filename:"[name].[id].[hash].[chunkhash].bundle.js"
    }
}
]
//下面是大名鼎鼎的Loaders,比如babel-loader、css-loader、style-loader、less-loader、Sass-loader、Stylus Loader
