import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Blog from "./pages/Blog";
import Cadastro from "./pages/Cadastro";

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
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
]);

export default router