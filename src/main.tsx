import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";

import Layout from "./layout";

import { Global } from "./styles/global.styled";
import WalletInput from "./pages/WalletInput";
import WalletInfo from "./pages/WalletInfo";
import CoinDetails from "./pages/CoinDetails";
import { Toaster } from "react-hot-toast";

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
        path: "/token/:contractAddress",
        element: <CoinDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <RouterProvider router={router} />
      <Toaster
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          className: "",
          style: {
            background: "#000",
            border: "1px solid #fff",
            padding: "16px",
            fontSize: "16px",
            color: "#fff",
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
