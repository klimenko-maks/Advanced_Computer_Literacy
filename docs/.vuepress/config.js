require('dotenv').config()
const topicDetails = require('./data/config/blog/topics-page-details')

module.exports = {
  lang: 'ru-RU',
  base: '/Advanced_Computer_Literacy/',
  title: 'Расширенный курс компютерной грамотности',
  description:
    'Школа для тех, кому нужны реальные навыки, а не просто сертификат. Бесплатные онлайн курсы компьютера. Пошаговые уроки для начинающих пользователей любого возраста и уровня подготовки.',
  head: [
    [
      'meta',
      {
        name: 'charset',
        content: 'utf-8'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'M.Klimenko'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon/favicon.png',
        sizes: '16x16'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon/favicon.png',
        sizes: '32x32'
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'application-name',
        content: 'Курс компютерной грамотности'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      }
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'КПКУ'
      }
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content:
          '/img/logo-sota-trim.png'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Школа для тех, кому нужны реальные навыки, а не просто сертификат. Бесплатные онлайн курсы компьютера. Пошаговые уроки для начинающих пользователей любого возраста и уровня подготовки.'
      }
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'KPKU_Advanced'
      }
    ],
    [
      'link',
      {
        href: '//codefence.io/codefence.css',
        rel: 'stylesheet'
      }
    ],
    [
      'script',
      {
        defer: '',
        type: 'text/javascript',
        src: '//codefence.io/codefence.js'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    domain: 'https://klimenko-maks.github.io/',
    defaultAuthor: 'M.Klimenko',
    allPostsDescription:
      "Here's all of the posts we've made so far! Find a post that peeks your interest and start monkeying around! 📝🐒",
    topicsDescription:
      "Here you can view the various topics we've covered so far! Find a topic that interests you and start learning and coding today! Be sure to grab a banana! 🍌",
    logo: '/img/logo-sota-trim.png',
    nav: [
      {
        text: 'Разделы',
        link: '/topics/'
      },
      {
        text: 'Темы',
        items: [
          { text: 'Все темы', link: '/posts/' },
          {
            text: 'По Разделам',
            items: [
              { text: 'Google Forms', link: '/topics/GoogleForms/' },
              { text: 'Excel', link: '/topics/Excel/' },
              { text: 'Презентации', link: '/topics/Powerpoint/' },
              { text: 'Редактирование Видео', link: '/topics/VideoEdit/' }
            ]
          }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Справочная информация', link: '/resources/' },
          {
            text: 'По Разделам',
            items: [
              { text: 'Программы', link: '/resources/foss/' },
              { text: 'Web Dev', link: '/resources/webdev/' },
            ]
          }
        ]
      },
      {
        text: 'Базовый курс',
        link: 'https://alexbegma.github.io/Basic_Computer_Literacy/',
        target:'_self',
        rel: false,
      }
    ]
  },
  plugins: [
    '@vuepress/back-to-top',
    '@goy/svg-icons',
    'vuepress-plugin-mathjax',
    'mermaidjs',
    'redirect-frontmatter',
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        color: '#32eb95',
        backgroundColor: '#32eb8b',
        successText: 'Скопированно в буфер обмена!',
        staticIcon: true
      }
    ],
    [
      '@adamdehaven/vuepress-plugin-custom-tooltip',
      {
        name: 'VueCustomTooltip',
        color: '#e6e6e6',
        background: '#161d1c',
        borderRadius: 100,
        fontWeight: 500,
      },
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
            title: 'All Posts',
            layout: 'IndexPost',
            frontmatter: {
              description:
                "Последовательно узучаем темы курса 📝",
              canonicalUrl: 'posts/'
            },
            itemLayout: 'Post',
            itemPermalink: '/:slug',
            pagination: {
              lengthPerPage: 5,
              layout: 'IndexPost',
              prevText: 'Назад',
              nextText: 'Далее'
            }
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'topics',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['topic'],
            // Path of the `entry page` (or `list page`)
            path: '/topics/',
            title: 'Topics',
            // Layout of the `entry page` (list of tags)
            layout: 'Topics',
            // Layout of the `scope page` (list of posts with this tag)
            scopeLayout: 'IndexPost',
            frontmatter: {
              description:
                "Разделы курса",
              canonicalUrl: 'topics/',
              topicDetails: topicDetails.topicsPageDetails
            },
            pagination: {
              lengthPerPage: 5,
              layout: 'IndexPost'
            }
          }
        ],
        sitemap: {
          hostname: 'https://klimenko-maks.github.io/Advanced_Computer_Literacy/'
        },
      }
    ]
  ]
}
