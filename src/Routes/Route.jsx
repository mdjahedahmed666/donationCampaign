import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
// import DonationDetails from "./components/DonationDetails";
import Statistics from "../pages/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import Donation from "../pages/Donation";
import ErrorPage from "../pages/ErrorPage";
// import fakeData from "../../public/Fakedata.json"

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/",
        element: <Home></Home>
        },
        {
          path:"/donation",
        element: <Donation></Donation>
        
        },
        {
            path:"/statistics",
          element: <Statistics></Statistics>
          },
          {
            path:"/donation/:id",
          element: <DonationDetails></DonationDetails>,
          loader: () =>fetch("/Fakedata.json")
          }
      ]
    },
  ]);
  export default router;