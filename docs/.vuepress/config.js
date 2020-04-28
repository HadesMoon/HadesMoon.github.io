module.exports = {
  title: '月隐伤', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '月隐伤的博客,前端', // meta 中的描述文字，用于SEO
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  },
  themeConfig: {
    logo: '/avatar.png',
    lastUpdated: '上次更新',
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '前端', //默认显示
        ariaLabel: '前端', //用于识别的label
        items: [
          { text: '文章1', link: '/frontend/js/test.md' },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: '文章2', link: '/frontend/js/test1.md' }
        ]
      },
      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/dwanda' }
    ]
  }
}
