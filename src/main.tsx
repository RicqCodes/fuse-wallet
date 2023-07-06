import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout";

// import LandingPageLayout from "./components/layout/index";
// import LandingPage from "./components/pages/LandingPage";
import { Global } from "./styles/global.styled";
import WalletInput from "./pages/WalletInput";
import WalletInfo from "./pages/WalletInfo";
import CoinDetails from "./pages/CoinDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "",
        element: <WalletInput />,
      },
      {
        path: "/wallet/:address",
        element: <WalletInfo />,
      },
      {
        path: "/coin/:address",
        element: <CoinDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);
