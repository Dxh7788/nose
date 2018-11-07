### nose  
Bootstrap 需要使用到jQuery以及自带bootstrap.min.js  
导航栏中左右对齐尽量使用独立元素操作,而不要使用div来控制排版  
### webpack
版本较高 请使用 webpack [src] -o [dist]  
非全局安装请使用node_modules/.bin/webpack [src] -o [dist]  
#### webpack的5个概念
##### 入口[entry]
##### 出口[output]
##### 加载器[loader]
用来处理那些非JavaScript文件(webpack本身只理解JavaScript).loader可以将所有类型的文件转换为webpack能够处理的有效模块,然后你就可以利用webpack的打包能力,对它们进行处理.
    在更高层面，在 webpack 的配置中 loader 有两个目标：  
        1.test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。  
        2.use 属性，表示进行转换时，应该使用哪个 loader。  
##### 插件[plugins]
 loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务.想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。  
##### 模式 
通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化  
#### 入口起点(entry points)
##### 单个对象语法
##### 对象语法
用法：entry: {[entryChunkName: string]: string|Array<string>}
##### 常见场景
###### 分离应用程序和第三方库(vendor)入口
此设置允许你使用 CommonsChunkPlugin 从「应用程序 bundle」中提取 vendor 引用(vendor reference) 到 vendor bundle，并把引用 vendor 的部分替换为 __webpack_require__() 调用。如果应用程序 bundle 中没有 vendor 代码，那么你可以在 webpack 中实现被称为长效缓存的通用模式。
###### 多页面用用程序
使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，从而可以极大地从这些技术中受益。
#### 输出[output]
配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。
##### 用法
在webpack中配置output属性的最低要求是，将它的值设置为一个对象，包括以下两点。  
*  path:目标输出目录 path 的绝对路径.  
*  filename:用于输出文件的文件名  
    output:{
        path:__dirname+"/public",  
        filename:"[name].js"  
    },  
此配置将一个单独的 bundle.js 文件输出到 当前文件夹的public子目录中
###### 内敛
import Styles from 'style-loader!css-loader?modules!./styles.css';  
相当于使用style-loader和css-loader解析当前文件夹下的modules文件夹和当前目录下的styles.css。!代表并,同时使用  
##### 多个入口起点
如果配置创建了多个单独的 "chunk"（例如，使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件），则应该使用占位符(substitutions)来确保每个文件具有唯一的名称。  
{  
  entry: {  
    app: './src/app.js',  
    search: './src/search.js'  
  },  
  output: {  
    filename: '[name].js',  
    path: __dirname + '/dist'  
  }  
} 
#### 模式 
提供 mode 配置选项，告知 webpack 使用相应模式的内置优化  
module.exports = {  
  mode: 'production'  
};  
或者从CLI参数中传递  
webpack --mode=production  