const routes = [
    {
        path: '/hello',
        component: () => import('../components/listen.vue')
    },
    {
        path: '/',
        component: () => import('../components/room.vue')
    },
    {
        path: '/home',
        component: () => import('../pages/home/home.vue')
    }
];
export default routes;
