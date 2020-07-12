module.exports = {
  title: "学习笔记",
  description: "Just playing around",
  dest: "./dist",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: "前端",
        items: [
          {
            text: "Vue",
            link: "/vue/",
          },
          {
            text: "Javascript",
            link: "/javascript/",
          },
          {
            text: "CSS",
            link: "/css/",
          },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "Node",
            link: "/node/",
          },
          {
            text: "Express",
            link: "/express/",
          },
          {
            text: "Koa",
            link: "/koa/",
          },
          {
            text: "mongodb",
            link: "/mongodb/",
          },
        ],
      },
      {
        text: "命令行工具",
        items: [
          { text: "Linux", link: "/tools/linux" },
          { text: "NPM", link: "/tools/npm" },
          {
            text: "Git",
            link: "/tools/git",
          },
        ],
      },
      {
        text: "软技能",
        link: "/term/",
        items: [
          {
            text: "词汇总结",
            link: "/skills/term",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/konglingwen94/my-study-notes",
      },
    ],
    sidebar: {
      "/tools/": ["linux", "NPM", "git"],
      "/skills/": ["term"],
      "/vue/": [""],
      "/javascript/": [""],
      "/css/": [""],
      "/express/": [""],
      "/koa/": [""],
      "/node/": [
        {
          title: "node",

          children: [],
        },
        {
          title: "常用node工具",

          children: ["/node/modules/pm2"],
        },
      ],
    },
  },
};
