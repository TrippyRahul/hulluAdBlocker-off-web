import React from "react";
import "./aboutYoutubeAdBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const AboutYoutubeAdBlocker = () => {
  return (
    <div className="aboutYoutubeAdBlocker">
      {/* <Image
        src="/howToadd-bg.svg"
        width={2091.29}
        height={1195.05}
        className="bg"
        alt="how-to-add"
      /> */}
      <div className="container">
        <div className="content">
          <div className="left">
            <h2>About hulu ad blocker</h2>
            <p>
              This tool is a browser extension that helps block advertisements
              while streaming content on the Hulu platform. It prevents ads from
              playing during TV shows and movies, allowing users to watch their
              favorite programs without interruptions. By using the extension,
              viewers can enjoy a more seamless and ad free hulu streaming
              experience.
            </p>
            <p>
              hulu adblocker blocks all annoying ads on hulu, youtube, spotify
              and twitch. But if you want a separate adblocker of these
              extension then we have true adblocker, youtube adblocker, spotify
              adblocker and twitch adblocker.
            </p>
          </div>
          <div className="right">
            <Image src="/about.svg" fill alt="about-logo" className="image" />
          </div>
        </div>
        <Button/>
      </div>
    </div>
  );
};

export default AboutYoutubeAdBlocker;
