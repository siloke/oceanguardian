import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/rewards",
        element: <Rewards />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
]);

export default router