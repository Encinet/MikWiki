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
      title: "Mik Server",
      description: "For a great gaming experience",
    },
  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://mik.vercel.app/",
    sitemap: true,
    iconPrefix: 'fas fa-',

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
        {
          title: "开始",
          icon: "fas fa-star",
          prefix: "guide/",
          children: ["", "join", "account"],
        },
        {
          title: "生存服",
          icon: "fas fa-cubes",
          prefix: "guide/survival/",
          children: [""],
        },
        {
          title: "PVP服",
          icon: "fas fa-bolt",
          prefix: "guide/pvp/",
          children: [""],
        },
      ],
    },

    locales: {
      "/en/": {
        nav: [
          { text: "Home", link: "/en/", icon: "home" },
          {
            text: "Guide",
            icon: "creative",
            link: "/en/guide/",
          },
        ],
        sidebar: {
          "/en/": [
            "",
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
      content: "MIT Licensed | Copyright © 2022-present Mik",
    },

    //comment: {
    //  type: "waline",
    //  serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    //},

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
  },
});
