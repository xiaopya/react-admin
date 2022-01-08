export default [
  {
    path: '/user/login',
    exact: true,
    layout: false,
    routes: [
      {
        path: '/user/login',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
      {
        component: '@/pages/Access_Error/404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
    icon: 'CrownOutlined',
  },
  {
    name: '文章管理',
    path: '/article',
    component: '@/pages/Article/articleTableList',
    icon: 'SnippetsOutlined',
  },
  {
    path: '/article/edittable',
    component: '@/pages/Article/editTable',
  },
  {
    name: '用户管理',
    icon: 'TeamOutlined',
    routes: [
      {
        name: '个人资料',
        path: '/management/personal',
        component: '@/pages/Management/Personal',
      },
    ],
  },

  {
    component: '@/pages/Access_Error/404',
  },
];
