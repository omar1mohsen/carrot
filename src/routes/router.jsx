import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "products/:category",
      element: <Products />,
    },
  ]);


export default router