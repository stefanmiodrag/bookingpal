import * as pages from "./pages";

export const loggedInRoutes = [
    {
        exact: true,
        path: "/",
        component: pages.Start,
    },
    {
        exact: true,
        path: "/booking/new",
        component: pages.NewBooking,
    },
    {
        exact: true,
        path: "/catalog/new",
        component: pages.NewService,
    },
    {
        exact: true,
        path: "/catalog",
        component: pages.Service,
    },
    {
        exact: true,
        path: "/settings",
        component: pages.Settings,
    },
    {
        exact: true,
        path: "*",
        component: pages.NotFound,
    },
];

export const loggedOutRoutes = [
    {
        exact: false,
        path: "*",
        component: pages.Login,
    },
];
