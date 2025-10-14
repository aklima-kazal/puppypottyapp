import React from "react";
import Header from "../../globalComponents/CommonLayout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../globalComponents/CommonLayout/Footer";

const Rootlayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayouts;
