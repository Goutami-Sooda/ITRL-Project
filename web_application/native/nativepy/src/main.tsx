import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Quiz from "./pages/Quiz";
import Tutorials from "./pages/Tutorials";
import About from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/tutorials",
    element: <Tutorials></Tutorials>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },  
  {
    path: "/about",
    element: <About></About>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
