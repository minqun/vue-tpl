const routes = [{
    path: '/hello',
    component: () =>
        import ('../components/listen.vue')
}, {
    path: '/',
    component: () =>
        import ('../components/room.vue')
}]
export default routes