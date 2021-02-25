import React, { Children } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
