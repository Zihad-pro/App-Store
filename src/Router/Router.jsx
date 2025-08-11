import { createBrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import Error from "../Components/Error/Error";
import HomeLayouts from "../Layouts/HomeLayouts";
import Myapp from "../Components/MyProfile/Myprofile";
import FooterDetails from "../Components/FooterDetails/FooterDetails";
import SliderSection from "../Components/SliderSection/SliderSection";
import Categoires from "../Components/Categories/Categoires";
import Loading from "../Components/Loading/Loading";
import PageDetails from "../Components/PageDetails/PageDetails";
import { Suspense } from "react";
import AppstoreDetails from "../Components/AmazingFeature/AmazingFeature";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        path: "/myprofile",
        Component: Myapp,
      },
      {
        index: true,
        element: (
          <>
            <SliderSection />
            <Categoires />
            <AppstoreDetails />
          </>
        ),
        loader: () => fetch("/Appdata.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/footerDetails",
        Component: FooterDetails,
      },
      {
        path: "/pagedetails/:id",
       element:<PrivateRoute><PageDetails></PageDetails></PrivateRoute>,
        loader: () => fetch("/Appdata.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
