import { lazy } from "react";
import { routeUtils } from "../../utils";

const HomePage = lazy(() => import("../views/home"))

const base = {
    path: "/home"
};

export const Home = routeUtils.from(base, {
    path: "",
    component: HomePage
});

export const all = [
    Home
]