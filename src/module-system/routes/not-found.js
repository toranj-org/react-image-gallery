import { lazy } from "react";
import { routeUtils } from "../../utils";

const NotFoundPage = lazy(() => import("../views/not-found"))


const base = {
    path: ""
};

// must be the last route
export const NotFound = routeUtils.from(base, {
    path: "*",
    component: NotFoundPage
});

export const all = [
    NotFound
]