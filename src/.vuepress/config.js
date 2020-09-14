// const sidebar = require('./sidebar.js');
const { description } = require('../../package')

const config = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ahmader Lifebook',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { name: 'og:title', content: 'Discord.js Guide' }],
		['meta', { name: 'og:description', content: 'A guide made by the community of discord.js for its users.' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:url', content: 'https://discordjs.guide/' }],
		['meta', { name: 'og:locale', content: 'en_US' }],
		['meta', { name: 'og:image', content: '/meta-image.png' }],
  ],
  markdown: {
    // // options for markdown-it-anchor
    // anchor: { permalink: false },
    // // options for markdown-it-toc
    toc: { 
      // https://github.com/Oktavilla/markdown-it-table-of-contents#options
      // includeLevel: [1, 2],
      containerHeaderHtml: '<div class="toc-container-header">On this page</div>',
    },
    // extendMarkdown: md => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  // theme: '@vuepress/theme-blog',
  theme: ('vuepress-theme-ahmader'),
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'vuejs/vuepress',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Contribute to this page!',

    lastUpdated: true,
    smoothScroll: true,
    sidebarDepth: 3,
    displayAllHeaders: false,
    tocbar: true,
    tocTitle: 'On This page',

    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Personal',
        link: '/personal/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '../first',
            '',
            'using-vue',
          ]
        }
      ],
      '/personal/': [
        {
          title: 'Personal',
          collapsable: false,
          children: [
            '',
            'born',
          ]
        }
      ],
      '/': [
        {
          exact: true,
          title: 'Site map',
          collapsable: false,
          children: [
            '',
            'first',
            'guide/',
            'guide/using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    // ['authors'],
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
    // '@vuepress/plugin-blog',
  ],

  configureWebpack: {
		resolve: {
			alias: {
        '@': '../',
        '@images': '../images/',
        '@theme': __dirname + 'theme/',
			},
    },
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: 'json', // Required by Webpack v4
          use: 'yaml-loader'
        }
      ]
    }
	},
	// globalUIComponents: ['EOLNotice'],

}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}

if (process.env.NODE_ENV === 'production') {
	// config.themeConfig.algolia = {
	// 	apiKey: 'c8d9361fb8403f7c5111887e0edf4b5e',
	// 	indexName: 'discordjs',
	// };

	// config.plugins.push(['@vuepress/google-analytics', { ga: 'UA-108513187-1' }]);
}

module.exports = config;