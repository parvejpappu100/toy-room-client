import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRouter from "./PrivateRouter";
import AddToy from "../pages/AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: "/addToy",
          element: <AddToy></AddToy>
        }
      ]
    },
]);

export default router;