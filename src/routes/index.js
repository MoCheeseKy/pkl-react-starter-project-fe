import { lazy } from "react";

const ListRoutes = [
    {
        path: '/',
        component: lazy(() =>
            import('../pages/login/login')
        )
    }
];

export { ListRoutes };