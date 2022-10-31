import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Body from "../Body/Body";
import { SettingsContext } from "../Context/SettingsContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "./Navbar";

const Layout = () => {
  const { theme } = useContext(SettingsContext);
  return (
    <div className="ThemeDiv" id={theme}>
      <Header />
      <Navbar />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </div>
  );
};

export default Layout;
