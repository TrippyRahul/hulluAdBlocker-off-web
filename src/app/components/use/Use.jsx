import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>How to use adblock for hulu</h2>
            <p>
              Just download and install the <span>hulu adblocker</span> to your
              browser for free and <span>block hulu ads.</span> Enjoy your
              favorite series or movies with no ads.
            </p>
          </div>
          <div className="right">
            <h2>How can I watch my favroite content on hulu without ads</h2>
            <p>
              You can watch your favorite content by simply installing{" "}
              <span> hulu ad free</span> extension in your browser. With{" "}
              <span>adblock for hulu </span>you can block all the advertisements
              like pop-ups, displays, and annoying banners which spoil your mood
              while watching the shows.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>Can I skip or fast-forward the video for annoying ads?</h2>
              <p>
                Yes, you can do that too without any charges. This extension
                works like magic in your browser. When you will Install the
                extension in your browser, you don&#39;t have to take the pain
                of skipping or fast forward because
                <span> hulu adblock chrome</span>, will automatically{" "}
                <span>remove hulu ads </span>that annoy you while watching a
                movie.
              </p>
            </div>
            <div className="right">
              <Image src="/3.svg" alt="youtube-logo" fill className="image" />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>How does hulu works on chrome</h2>
                <p>
                  It perfectly works in google chrome. As when you visit on Hulu
                  web page on chrome, this scans the webpage that you are using
                  and <span>block hulu ads chrome</span>. It will stop those ads
                  from loading or appearing on your web page. By this, you can
                  enjoy your favorite watchtime with <span> hulu no ads.</span>
                </p>
              </div>
              {/* <div className="right">
                <h2>Enjoy the freedom with the best Chrome ad blocker</h2>
                <p>
                  This extension for firefox and Chrome improves your Spotify
                  experience by<span> Spotify no ads</span>, speeding up page
                  loading, and providing protection from malware and adware.{" "}
                  <span>Ad free spotify</span>
                  ensures a safer browsing experience on
                  <span> Spotify without ads.</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
