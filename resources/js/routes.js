import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";

const routes = [
    {
        path : '/',
        component: ExampleComponent,
        name: "home",
    }
];

const router = new VueRouter({
    routes, //short hand for "routes: routes"
});


export default router;