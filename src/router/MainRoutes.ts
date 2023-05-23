const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: false
    },
    redirect: '/main',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
        {
            name: 'Todo',
            path: '/',
            component: () => import('@/views/apps/task/Todo.vue')
        }
    ]
};

export default MainRoutes;
