import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="left">
            <h1>
              Say goodbye to ads and enjoy seamless streaming with hulu ad
              blocker
            </h1>
            <p>
              This tool refers to software or browser extensions that are
              designed to block ads on the hulu streaming platform. It aims to
              prevent video and display ads from playing during your streaming
              sessions on hulu. This the best adblock for hulu that allows you
              to enjoy your favorite TV shows and movies on hulu without
              interruptions. For ad free experience, you need to install it, you
              can remove ads from hulu.
            </p>
            <Button/>
          </div>
          <div className="right">
            <Image
              src="./header-main.svg"
              alt="header-main"
              fill
              className="image"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
