module.exports = {
    base: '/fe-book/',
    title: '东半球少女的梦的技术书',
    description: '前端,技术,JS',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'js', link: '/doc-js/' },
            // { text: 'css', link: '/doc-css/' },
            { text: '博客', link: 'https://wangyupo.github.io/' }
        ],
        sidebar: {
            '/doc-js/': [
                {
                    title: '数组',
                    path: '/doc-js/',
                    children: [
                        '/doc-js/数组/创建并填充长度为100的数组.md',
                    ]
                },
            ],
            // '/doc-css/': [
            //     {
            //         title: 'demo',
            //         path: '/doc-js/',
            //     },
            // ],
        },
        lastUpdated: '上次更新',
    },
    markdown: {
        lineNumbers: true
    }
}
