// dependancies
import { createBrowserRouter } from "react-router-dom";

// components
import App from "../App/App";
import HomePage from "../pages/HomePage/HomePage";
import LocalisationPage from "../pages/LocalisationPage/LocalisationPage";
import ContactPage from "../pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/localisation",
        element: <LocalisationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
