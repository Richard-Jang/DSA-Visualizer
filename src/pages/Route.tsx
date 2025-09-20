import type { RouteObject } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { default as SortingHome } from "@/pages/sorting/Home";
import { default as SortingRoute } from "@/pages/sorting/Route";
import { default as SearchingHome } from "@/pages/searching/Home";
import { default as SearchingRoute } from "@/pages/searching/Route";

const Route: RouteObject[] = [
    { index: true, Component: Home },
    { path: "sorting", element: <SortingHome /> },
    SortingRoute,
    { path: "searching", element: <SearchingHome /> },
    SearchingRoute,
    { path: "/*", element: <NotFound /> },
]

export default Route;