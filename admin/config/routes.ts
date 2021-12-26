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
            component: './user/Login',
          },
        ],
      },
      {
        component: '@/pages/Access_Error/404',
      },
    ],
  },
  {
    path: '/home',
    name: '首页',
    icon: 'crown',
    component: '@/pages/Home',
    // routes: [
    //   {
    //     path: '/home/sub_page',
    //     name: '菜单yi',
    //     icon: 'smile',
    //     component: '@/pages/Home/Sub_page',
    //   },
    //   {
    //     component: './404',
    //   },
    // ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: '@/pages/Access_Error/404',
  },
];
