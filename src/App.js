import './App.css';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Games from "./pages/Games";
import Home from "./pages/Home";
import School from "./pages/School";

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
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
