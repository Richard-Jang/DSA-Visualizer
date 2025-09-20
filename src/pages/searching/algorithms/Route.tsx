import type { RouteObject } from "react-router-dom";

import LinearSearch from "@/pages/searching/algorithms/LinearSearch";

const Route: RouteObject[] = [
    { path: "linear", element: <LinearSearch /> },
]

export default Route;