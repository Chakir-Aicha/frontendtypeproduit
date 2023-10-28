import {createBrowserRouter} from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import CreateType from "./components/CreateType";

const router = createBrowserRouter([
    {
        path:"/",
        element:<CreateProduct/>
    },
    {
        path:"/create",
        element:<CreateType/>
    }
]);
export default router;