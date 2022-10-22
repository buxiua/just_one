const navList = [
  {
    icon: "house",
    value: "首页",
    href: "/home",
  },
  {
    icon: "collection",
    value: "文章",
    children: [
      {
        icon: "collection-tag",
        value: "标签",
        href: "/tags",
      },
      {
        icon: "folder-opened",
        value: "分类",
        href: "/overview",
      },
      {
        icon: "files",
        value: "归档",
        href: "/tofile",
      },
    ],
  },
  {
    icon: "folder-opened",
    value: "分类",
    children: [
      {
        icon: "chrome-filled",
        value: "浏览器",
        href: "/overview/brower",
      },
      {
        icon: "notebook",
        value: "ES6",
        href: "/overview/es6",
      },
      {
        icon: "brush",
        value: "CSS",
        href: "/overview/css",
      },
      {
        icon: "sugar",
        value: "HTML",
        href: "/overview/html",
      },
    ],
  },
];
export { navList };
