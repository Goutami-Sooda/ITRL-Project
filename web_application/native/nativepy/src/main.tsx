import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Quiz1 from "./pages/QuizPageRender/Quiz1";
import Quiz2 from "./pages/QuizPageRender/Quiz2";
import Quiz3 from "./pages/QuizPageRender/Quiz3";
import Quiz4 from "./pages/QuizPageRender/Quiz4";
import Quiz5 from "./pages/QuizPageRender/Quiz5";
import Quiz6 from "./pages/QuizPageRender/Quiz6";
import Tutorials from "./pages/Tutorials";
import About from "./pages/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tutorials></Tutorials>,
  },
  {
    path: "/Home",
    element: <Tutorials></Tutorials>,
  },
  {
    path: "/Quiz1",
    element: <Quiz1></Quiz1>,
  },
  {
    path: "/Quiz2",
    element: <Quiz2></Quiz2>,
  },
  {
    path: "/Quiz3",
    element: <Quiz3></Quiz3>,
  },
  {
    path: "/Quiz4",
    element: <Quiz4></Quiz4>,
  },
  {
    path: "/Quiz5",
    element: <Quiz5></Quiz5>,
  },
  {
    path: "/Quiz6",
    element: <Quiz6></Quiz6>,
  },
  {
    path: "/AboutUs",
    element: <About></About>,
  },
  {
    path: "/question/:topicId",  // Add route for practice questions with dynamic segment
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
