import {createBrowserRouter} from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import CreateType from "./components/CreateType";
import ListProduct from "./components/ListProduct";

const router = createBrowserRouter([
    {
        path:"/",
        element:<CreateProduct/>
    },
    {
        path:"/create",
        element:<CreateType/>
    },
    {
        path:"/list",
        element:<ListProduct/>
    }
]);
export default router;