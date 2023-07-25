import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
  },
]);
export default router;
