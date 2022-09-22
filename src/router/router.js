import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        redirect:"/",
        name: "Home",
        component: Home,
    },
    // {
    //     path:"/login",
    //     name: "Login",
    //     component: Login,
    // },
    // {
    //     path:"/",
    //     redirect:"/",
    //     name: "Home",
    //     component: Home,
    //     children: [
    //         {
    //           path: "/SystemManagement",
    //           name: "SystemManagement",
    //           component: SystemManagement,
    //         },
    //         {
    //           path: "/EventImgCheck",
    //           name: "EventImgCheck",
    //           component: EventImgCheck,
    //         },
    //         {
    //           path: "/Statistics",
    //           name: "Statistics",
    //           component: Statistics,
    //         },
    //         {
    //           path: "/WirelessCamera",
    //           name: "WirelessCamera",
    //           component: WirelessCamera,
    //         },
    //         {
    //           path: "/ChooseImg",
    //           name: "ChooseImg",
    //           component: ChooseImg,
    //         },
    //         {
    //           path: "/managerUncheckImg",
    //           name: "UncheckImg",
    //           component: UncheckImg,
    //         },
    //         {
    //           path: "/userUncheckImg",
    //           name: "UserUncheckImg",
    //           component: UserUncheckImg,
    //         },
    //         {
    //           path: "/managerCheckImg",
    //           name: "CheckImg",
    //           component: CheckImg,
    //         },
    //         {
    //           path: "/userCheckImg",
    //           name: "UserCheckImg",
    //           component: UserCheckImg,
    //         },
    //       ],
    // }
];

const router = new VueRouter({
    routes,
});
  
export default router;
  