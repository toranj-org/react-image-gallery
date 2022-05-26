import { generatePath } from 'react-router-dom';

export function buildRoute(route, params) {
    return generatePath(route.path, params);
}

export function from(base, route) {
    const { path, params } = route;

    const result = {
        path: base.path + path,
        params: Object.assign({}, base.params, params),
        component: route.component
    };

    return result;
}
