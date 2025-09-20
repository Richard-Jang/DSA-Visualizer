import { type RouteObject } from "react-router-dom";

import { default as AlgorithmsRoute } from "@/pages/searching/algorithms/Route";
import { default as Layout } from "@/utils/AlgorithmLayout";

const Route: RouteObject = {
    path: "search",
    element: <Layout />,
    children: AlgorithmsRoute,
}

export default Route;