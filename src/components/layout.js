import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import luvblurb from "../images/luv-blurb.png"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="">
        <nav className="content-end">
        <img
          alt="An artist led project on HIV and Stigma"
          className="mx-auto"
          src={luvblurb}
        />
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
