module.exports = {
    base: '/fe-book/',
    title: '东半球少女的梦的技术书',
    description: '前端，技术，JS，css',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'js', link: '/doc-js/' },
            { text: '博客', link: 'https://wangyupo.github.io/' }
        ],
        sidebar: {
            '/doc-js/': [
                {
                    title: '数组',
                    path: '/doc-js/',
                    children: [
                        '/doc-js/数组/创建并填充长度为100的数组.md',
                        '/doc-js/数组/js拷贝数组的方法.md',
                        '/doc-js/数组/树状数组递归删除.md',
                        '/doc-js/数组/数组排序.md',
                    ]
                },
            ],
        },
        lastUpdated: '上次更新',
    },
    markdown: {
        lineNumbers: true
    }
}
