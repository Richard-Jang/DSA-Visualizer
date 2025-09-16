import type { RouteObject } from "react-router-dom";

import { default as AlgorithmsRoute } from "@pages/sorting/algorithms/Route";
import Layout from "@pages/sorting/Layout";

const Route: RouteObject = {
    path: "sorting",
    element: <Layout />,
    children: AlgorithmsRoute,
}

export default Route;