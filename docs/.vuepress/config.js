module.exports = {
    base: '/fe-book/',
    title: '东半球少女的梦的技术书',
    description: '前端，技术，JS，CSS，UI',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'js', link: '/doc-js/' },
            { text: 'css', link: '/doc-css/' },
            { text: 'ui', link: '/doc-ui/' },
            { text: '博客', link: 'https://wangyupo.github.io/' }
        ],
        sidebar: {
            '/doc-js/': [
                {
                    title: '数组',
                    path: '/doc-js/数组/',
                    children: [
                        '/doc-js/数组/创建并填充长度为100的数组.md',
                        '/doc-js/数组/js拷贝数组的方法.md',
                        '/doc-js/数组/树状数组递归删除.md',
                        '/doc-js/数组/数组排序.md',
                        '/doc-js/数组/数组去重.md',
                        '/doc-js/数组/两个数组取相同项.md',
                        '/doc-js/数组/展开嵌套数组.md',
                        '/doc-js/数组/数组去除无效值.md',
                        '/doc-js/数组/获取数组中的最大、最小值.md',
                    ]
                },
                {
                    title: 'webpack',
                    // path: '/doc-js/webpack/',
                    children: [
                        '/doc-js/webpack/做一个最简单的webpack打包项目.md',
                        '/doc-js/webpack/用webpack打包vue.md',
                    ]
                },
                {
                    title: '知识点',
                    // path: '/doc-js/知识点/',
                    children: [
                        '/doc-js/知识点/JS的防抖与节流.md',
                        '/doc-js/知识点/call和apply的区别.md',
                    ]
                },
                {
                    title: '即拿即用',
                    // path: '/doc-js/知识点/',
                    children: [
                        '/doc-js/即拿即用/input框只能输入数字.md',
                    ]
                }
            ],
            '/doc-css/': [
                {
                    title: 'css',
                    children: [
                        '/doc-css/',
                        '/doc-css/IOS滑动不流畅.md',
                        '/doc-css/css省略号.md',
                        '/doc-css/css写出中间粗两头细的线.md',
                        '/doc-css/nth-child无效.md',
                        '/doc-css/如何用scss写css？.md',
                        '/doc-css/移动端一像素边框.md',
                        '/doc-css/css字体平滑.md',
                    ]
                }
            ],
            '/doc-ui/': [
                {
                    title: 'UI设计规范',
                    path: '/doc-ui/UI设计规范/',
                    children: [
                        '/doc-ui/UI设计规范/为什么要有web页面设计规范？.md',
                        '/doc-ui/UI设计规范/web页面设计规范包含哪些方面？.md',
                        '/doc-ui/UI设计规范/网页设计中常见的字体规范.md',
                        '/doc-ui/UI设计规范/行间距及段间距规范.md',
                        '/doc-ui/UI设计规范/文字排版四原则.md',
                        '/doc-ui/UI设计规范/web页中常见布局方式.md',
                        '/doc-ui/UI设计规范/栅格化系统.md',
                        '/doc-ui/UI设计规范/内容间隔.md',
                        '/doc-ui/UI设计规范/常用行高.md',
                        '/doc-ui/UI设计规范/常用边角.md',
                        '/doc-ui/UI设计规范/常用阴影.md',
                        '/doc-ui/UI设计规范/常用字号.md',
                    ]
                },
                {
                    title: 'UI知识点',
                    path: '/doc-ui/UI知识点/',
                    children: [
                        '/doc-ui/UI知识点/HSB色彩模型.md',
                        '/doc-ui/UI知识点/UI基于对接的工作.md',
                        '/doc-ui/UI知识点/网站常见的设计形式.md',
                        '/doc-ui/UI知识点/网页的配色方案如何确定？有哪些方法？.md',
                        '/doc-ui/UI知识点/导航栏高度.md',
                    ]
                },
            ],
        },
        lastUpdated: '上次更新',
    },
}
