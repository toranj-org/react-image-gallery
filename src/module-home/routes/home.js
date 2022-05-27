import { lazy } from "react";

const HomePage = lazy(() => import("../views/home"))


export const Home = {
    path: "/home",
    component: HomePage
};

export const all = [
    Home
]