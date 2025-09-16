import type { RouteObject } from "react-router-dom";

import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { default as SortingHome } from "@pages/sorting/Home";
import { default as SortingRoute } from "@pages/sorting/Route";

const Route: RouteObject[] = [
    { index: true, Component: Home },
    { path: "sorting", element: <SortingHome /> },
    SortingRoute,
    { path: "/*", element: <NotFound /> },
]

export default Route;