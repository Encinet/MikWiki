const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Mik 服务器",
  description: "为了更好的游戏体验",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
    "/en/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "vuepress-theme-hope 的 demo",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Mr.Hope",
    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      {
        text: "指南",
        icon: "creative",
        link: "/guide/",
      },
    ],

    sidebar: {
      "/": [
        "",
        "home",
        "slides",
        "layout",
        {
          title: "如何使用",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
      ],
    },

    locales: {
      "/en/": {
        nav: [
          { text: "Home", link: "/zh/", icon: "home" },
          {
            text: "Guide",
            icon: "creative",
            link: "/zh/guide/",
          },
        ],
        sidebar: {
          "/en/": [
            "",
            "home",
            "slides",
            "layout",
            {
              title: "Guide",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
