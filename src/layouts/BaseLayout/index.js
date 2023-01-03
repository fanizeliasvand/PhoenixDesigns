import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
// import Header from "../../components/Header";
// import MobileMenu from "../components/MobileMenu";
import Footer from "../../components/Footer";

function BaseLayout({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [topHeaderClass, setTopHeaderClass] = useState("show");

  // handleScroll = (event) => {
  //   if (window.scrollY >= 50) {
  //     this.setState({ topHaderClass: "hide" });
  //   } else {
  //     this.setState({ topHaderClass: "show" });
  //   }
  // };

  useEffect(() => {}, []);

  return (
    <div className="main-wrapper">
      <div className="super_container">
        <header className="header trans_300">
          <Header />
        </header>
        <div className="layout-Container">{children}</div>
        <Footer />
      </div>
    </div>
  );
}


export default BaseLayout;
