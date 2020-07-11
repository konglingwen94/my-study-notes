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
      { text: "Vue", link: "/vue/" },
      { text: "Github", link: "https://github.com/konglingwen94/my-study-notes" },
    ],
    sidebar: {
      "/tools/": ["linux", "npm", "git"],
    },
  },
};
