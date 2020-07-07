module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  dest:'./dist',
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Vue", link: "/vue/" },
      { text: "github", link: "https://github.com/konglingwen94" },
    ],
    sidebar: ["/","/vue/","/tools/git"], 
  },
};
