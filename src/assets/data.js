import Mock from "mockjs";
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

Mock.Random.extend({
  category: function () {
    const data = ["Web", "后端", "随笔", "摄影"];
    return this.pick(data);
  },
  tag: function () {
    const data = [
      {
        value: "Java",
        href: "/",
      },
      {
        value: "JavaScript",
        href: "/",
      },
      {
        value: "CSS",
        href: "/",
      },
      {
        value: "HTML",
        href: "/",
      },
      {
        value: "vue",
        href: "/",
      },
      {
        value: "react",
        href: "/",
      },
      {
        value: "小程序",
        href: "/",
      },
    ];
    return this.pick(data);
  },
  timestamp: function () {
    return new Date(Mock.mock("@datetime")).valueOf();
  },
  img: function () {
    return "https://placekitten.com/200";
  },
});

const articleList = Mock.mock({
  "array|10": [
    {
      title: "@title",
      createTime: "@timestamp",
      "tags|1-4": ["@tag"],
      category: "@category",
      desc: "@paragraph",
      href: "@url",
      img: "@img",
    },
  ],
}).array;

const statisticInfo = [
  {
    name: "文章",
    value: 107,
    href: "/",
  },
  {
    name: "标签",
    value: 19,
    href: "/",
  },
  {
    name: "分类",
    value: 10,
    href: "/",
  },
];

export { navList, articleList, statisticInfo };
