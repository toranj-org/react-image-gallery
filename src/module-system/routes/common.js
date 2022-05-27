import { lazy } from "react";

const NotFoundPage = lazy(() => import("../views/not-found"))

// must be the last route
export const NotFound =  {
    path: "*",
    component: NotFoundPage
};

export const all = [
    NotFound
]