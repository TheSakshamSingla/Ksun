import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Ksun/',
  title: "KernelSU Next",
  description: "New generation Android kernel-level root solution",

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/what-is-kernelsu' },
      { 
        text: 'Download', 
        items: [
          { text: 'GitHub Releases', link: 'https://github.com/KernelSU-Next/KernelSU-Next/releases' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'What is KernelSU Next', link: '/guide/what-is-kernelsu' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'How to build', link: '/guide/how-to-build' },
            { text: 'How to integrate for non-GKI devices', link: '/guide/how-to-integrate-for-non-gki' },
            { text: 'Module guide', link: '/guide/module' },
            { text: 'Module WebUI', link: '/guide/module-webui' },
            { text: 'App Profile', link: '/guide/app-profile' },
            { text: 'Hidden features', link: '/guide/hidden-features' },
            { text: 'Difference with Magisk', link: '/guide/difference-with-magisk' },
            { text: 'Rescue from bootloop', link: '/guide/rescue-from-bootloop' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Unofficially supported devices', link: '/guide/unofficially-support-devices' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KernelSU-Next/KernelSU-Next' },
      { 
        icon: {
          svg: '<svg t="1690691534876" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7498" width="200" height="200"><path d="M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512S277.333333 938.666667 512 938.666667 938.666667 746.666667 938.666667 512 746.666667 85.333333 512 85.333333z m149.333333 640c-10.666667 10.666667-34.133333 21.333333-53.333333 21.333334-19.2 0-32-10.666667-51.2-21.333334-19.2-10.666667-42.666667-32-76.8-32s-55.466667 21.333333-76.8 32c-19.2 10.666667-32 21.333333-51.2 21.333334-19.2 0-42.666667-10.666667-53.333333-21.333334-8.533333-8.533333-10.666667-19.2-8.533334-29.866666 8.533333-34.133333 32-164.266667 96-226.133334 17.066667-17.066667 40.533333-25.6 64-25.6h8.533334c23.466667 0 44.8 8.533333 64 25.6 64 61.866667 87.466667 192 96 226.133334 2.133333 10.666667 0 21.333333-8.533334 29.866666zM704 512c-8.533333 0-17.066667-2.133333-23.466667-8.533333-12.8-12.8-12.8-32 0-44.8 0 0 53.333333-66.133333 53.333334-125.866667 0-59.733333-53.333333-125.866667-53.333334-125.866667-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0 2.133333 2.133333 66.133333 78.933333 66.133334 170.666667 0 91.733333-64 168.533333-66.133334 170.666667-6.4 6.4-14.933333 8.533333-21.333333 8.533333z m-384 0c-8.533333 0-17.066667-2.133333-23.466667-8.533333C294.4 501.333333 234.666667 424.533333 234.666667 332.8c0-91.733333 64-168.533333 66.133333-170.666667 12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8 0 0-53.333333 66.133333-53.333333 125.866667 0 59.733333 53.333333 125.866667 53.333333 125.866667 12.8 12.8 12.8 32 0 44.8-8.533333 6.4-14.933333 8.533333-25.6 8.533333z" p-id="7499"></path></svg>'
        },
        link: 'https://t.me/ksunext'
      }
    ],

    footer: {
      message: 'Released under the GPL3 License.',
      copyright: 'Copyright © 2023-present KernelSU Next Team'
    },

    editLink: {
      pattern: 'https://github.com/KernelSU-Next/website/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    }
  }
})
