
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import FoodRequest from "../pages/FoodRequest/FoodRequest";
import ManageFood from "../pages/ManageFood/ManageFood";
import UpdateFood from "../pages/UpdateFood/UpdateFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
            },
            {
                path: "/foods",
                element: <AllFood></AllFood>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: "/food/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: "updateFood/:id",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: "/foodRequest",
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
            },
            {
                path: "/manageFoods",
                element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            }
        ]
    }
])

export default router;