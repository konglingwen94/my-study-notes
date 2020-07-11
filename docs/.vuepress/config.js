// const path = require('path')
// const fs = require('fs')

module.exports = {
  title: "学习笔记",
  description: "Just playing around",
  dest: "./dist",
  themeConfig: {
    nav: [
      {
        text: "工具",
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
            text: "术语总结",
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
    },
  },
};
