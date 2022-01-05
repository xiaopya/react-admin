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
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
    icon: 'CrownOutlined',
  },
  {
    name: '文章管理',
    path: '/article',
    component: '@/pages/Article',
    icon: 'SnippetsOutlined',
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
    path: '/',
    redirect: '/home',
  },
  {
    component: '@/pages/Access_Error/404',
  },
];
