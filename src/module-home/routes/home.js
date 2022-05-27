import { lazy } from "react";

const HomePage = lazy(() => import("../views/home"))


export const Index = {
    path: "/home",
    component: HomePage
};

export const all = [
    Index
]