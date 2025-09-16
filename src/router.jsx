import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Root from "./Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {index:true,Component:Home}
    ]
  },
]);