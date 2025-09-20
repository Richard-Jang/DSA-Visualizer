import { Outlet, type RouteObject } from "react-router-dom";

import { default as AlgorithmsRoute } from "@/pages/searching/algorithms/Route";

const Route: RouteObject = {
    path: "sorting",
    element: <Outlet />,
    children: AlgorithmsRoute,
}

export default Route;