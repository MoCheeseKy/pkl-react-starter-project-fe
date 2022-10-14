import { lazy } from "react";

const ListRoutes = [
    {
        path: '/',
        component: lazy(() =>
        import('../components/login/Login')
        )
    }
];

export {ListRoutes};