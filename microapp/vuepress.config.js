'use strict';

module.exports = {
    shortLinks: true,
    // type: 'blog',
    // logo: '/logo.png',
    // smoothScroll: true,
    author: 'Zyao89',
    // siteUrl: '',
    sourceDir: 'docs',
    head: [
        [ 'link', { rel: 'icon', href: '/icons/favicon.png' }],
        [ 'link', { rel: 'manifest', href: '/manifest.json' }],
        [ 'meta', { name: 'theme-color', content: '#EDB65B' }],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        [ 'link', { rel: 'apple-touch-icon', href: '/icons/favicon@0,5x.png' }],
        [ 'link', { rel: 'mask-icon', href: '/icons/favicon.svg', color: '#EDB65B' }],
    ],

    lang: 'zh-CN',
    title: 'MicroApp - VuePress',
    description: '一款简洁而优雅的 博客 & 文档 主题, 依赖于 Micro App 微应用框架',

    label: '简体中文',
    selectText: '选择语言',
    ariaLabel: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次编辑时间',
    repoLabel: '查看源码',

    repoIcon: 'github',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'MicroAppJS/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'MicroAppJS/MicroApp-Core',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    sidebarDepth: 2,
    // algolia: {
    //     indexName: "cli_vuejs",
    //     apiKey: "f6df220f7d246aff64a56300b7f19f21"
    // },
    // search: false,
    // searchMaxSuggestions: 10,
    // displayAllHeaders: true // 默认值：false
    svgIconsDir: 'icons',
    copyright: '2019 - present, Zyao89',
    footer: {
        powerby: true,
        copyright: true,
    },

    rss: true,

    GAID: process.env.GAID || false,

    command: {
        deploy: {
            repo: 'git@github.com:MicroAppJS/vuepress.git',
            branch: 'gh-pages',
        },
    },
};
