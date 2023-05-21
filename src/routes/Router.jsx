import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRouter from "./PrivateRouter";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";
import AllToy from "../pages/AllToy/AllToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blog/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/singUp",
          element: <SingUp></SingUp>
        },
        {
          path: "/toy-details/:id",
          element: <PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
          loader: () => fetch('https://toy-marketplace-server-six-pi.vercel.app/toys')
        },
        {
          path: "/addToy",
          element: <PrivateRouter><AddToy></AddToy></PrivateRouter>
        },
        {
          path: "/myToy",
          element: <PrivateRouter><MyToy></MyToy></PrivateRouter>
        },
        {
          path: '/allToy',
          element: <AllToy></AllToy>,
        },
        {
          path: "/updateToy/:id",
          element: <PrivateRouter><UpdateToy></UpdateToy></PrivateRouter>,
          loader: ({params}) => fetch(`https://toy-marketplace-server-six-pi.vercel.app/toys/${params.id}`)
        },
        {
          path: "/blog",
          element: <Blogs></Blogs>
        }
      ]
    },
]);

export default router;