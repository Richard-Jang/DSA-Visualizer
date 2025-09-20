import type { RouteObject } from "react-router-dom";

import LinearSort from "@/pages/sorting/algorithms/LinearSort";
import BubbleSort from "@/pages/sorting/algorithms/BubbleSort";

const Route: RouteObject[] = [
    { path: "linear", element: <LinearSort /> },
    { path: "bubble", element: <BubbleSort /> },
]

export default Route;