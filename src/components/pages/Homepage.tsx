import Header from "../homepage/Header/Header";
import StatsCards from "../homepage/Stats/Stats";
import Charts from "../homepage/Charts/charts/charts";
import Footer from "./Footer/Footer";
import Sliders from "../../components/homepage/Sliders/Sliders";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Header />
      <Sliders />
      <StatsCards />
      <Charts />
      <Outlet />
      <Footer />
    </>
  );
}

export default Homepage;
