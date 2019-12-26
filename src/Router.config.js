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
        path: "/booking",
        component: pages.Bookings,
    },
    {
        exact: true,
        path: "/catalog/new-product",
        component: pages.NewProduct,
    },
    {
        exact: true,
        path: "/catalog/new-catalog",
        component: pages.NewCatalog,
    },
    {
        exact: true,
        path: "/catalog",
        component: pages.Catalog,
    },
    {
        exact: true,
        path: "/customer",
        component: pages.Customers,
    },
    {
        exact: true,
        path: "/setting",
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
        path: "/auth/login",
        component: pages.Login,
    },
    {
        exact: false,
        path: "/auth/signup",
        component: pages.Register,
    },
    {
        exact: false,
        path: "/:slug/booking",
        component: pages.CustomerBooking,
    },
];
