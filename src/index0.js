import './style.css'
import { test } from './test'

function render() {
    let div = document.createElement('div');
    div.innerHTML = test;
    document.body.appendChild(div);
}

render();

if (module && module.hot) {
    module.hot.accept('./test.js', function () {
        render()
    })
}

/**
 * module: 指在模块化编程中我们把应用程序分割成的独立功能的代码模块
 * chunk: 指模块间按照引用关系组合成的代码块，一个 chunk 中可以包含多个 module
 * chunk group: 指通过配置入口点(entry point)区分的块组，一个 chunk group 可以包含一个到多个 chunk
 * bundling: webpack 打包的过程
 * asset/bundle: 打包产物
 *
 * webpack 打包思想：
 *  1. 一切源代码文件均可通过各种 loader 转换为 JS 模块（module），模块之间可以互相引用
 *  2. webpack 通过入口点 (entry point) 递归处理各个模块之间的引用关系，最后输出为一个或多个 js (bundle) 文件
 *  3. 每一个入口点都是一个块组 (chunk group)，在不考虑分包的情况下，一个 chunk group 中只有一个 chunk，该 chunk 包含递归分析后的所有模块。每一个 chunk 都有对应的一个打包后的输出文件 (asset/bundle)
**/