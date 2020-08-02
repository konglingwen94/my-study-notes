module.exports = {
  title: "学习笔记",
  description: "Just playing around",
  dest: "./dist",
  base:'/my-study-notes/',
  markdown: {
    lineNumbers: true,
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
          {
            text: "DevOps",
            link: "/tools/devOps",
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
        text: "项目",
        items: [
          {
            text: "所有项目",
            link: "/projects/",
          },
          {
            text: "场景用例解析",
            link: "/projects/useCases/",
          },
          {
            text: "文章总结",
            link: "/projects/article",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/konglingwen94/my-study-notes",
      },
    ],
    sidebar: {
      "/tools/": ["linux", "NPM", "git","devOps"],
      "/skills/": ["term"],
      "/vue/": [
        {
          title:'工作原理',
          // path:'/vue/guide',
          children:[]
        },
        {
          title: "其他",
          children: [""],
        },
        
      ],
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
