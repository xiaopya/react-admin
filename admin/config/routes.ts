export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    name: 'home',
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
    component: './404',
  },
];
