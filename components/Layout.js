import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Head>
        <title>Hamihash</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
