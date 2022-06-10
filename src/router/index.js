import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

export const constantRoutes = [
    {
        path: "/",
        component: Layout,
    },
    {
        path: "/login",
        component: (resolve) => require(["@/views/login"], resolve),
        hidden: true,
    },
];

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
});
