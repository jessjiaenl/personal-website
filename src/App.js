import './App.css';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Games from "./pages/Games";
import Home from "./pages/Home";
import School from "./pages/School";
import Hidden from "./pages/Hidden";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/games",
    element: <Games/>
  },
  {
    path: "/school",
    element: <School/>
  },
  {
    path: "/*",
    element: <Hidden/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
