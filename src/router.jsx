import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Root from "./Layout/Root";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import AddRecipe from "./Components/AddRecipe";
import AllRecipes from "./Components/AllRecipes";
import RecipeDetails from "./Components/RecipeDetails";
import MyRecipes from "./Components/MyRecipes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      { path: "/signin", Component: SignIn },
      { path: "/register", Component: Register },
      {
        path: "/add-recipe",
        element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>

      },
      { path: "/all-recipes", loader: () => fetch("https://recipe-server-blush-six.vercel.app/recipes"), Component: AllRecipes },



      {
        path: "/recipe-details/:id",
        loader: ({ params }) => fetch(`https://recipe-server-blush-six.vercel.app/recipes/${params.id}`),
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
      },
      {
        path: "/my-recipe/:id",
        loader: ({ params }) => fetch(`https://recipe-server-blush-six.vercel.app/my-recipe/${params.id}`),
        element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
      },
      
    ]
  },
  {path:"*", Component:ErrorPage}
]);