import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/notfound/Notfound";
import Wishlist from "../pages/wishlist/Wishlist";
import Detail from "../pages/detail/Detail";
import SignIn from "../pages/auth/sign-in/SignIn";
import Auth from "../pages/auth/Auth";
import Account from "../pages/account/Account";

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "product/:id", element: <Detail /> },
        {
          path: "auth",
          element: <Auth />,
          children: [
            { path: "account", element: <Account /> },
          ],
        },
        { path: "signin", element: <SignIn /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
};

export default Routers;
