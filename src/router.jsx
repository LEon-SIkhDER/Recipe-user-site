import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Root from "./Layout/Root";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {index:true,Component:Home},
      {path:"/signin",Component:SignIn},
      {path:"/register", Component:Register}
    ]
  },
]);