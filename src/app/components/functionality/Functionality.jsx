import React from "react";
import "./functionality.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "Block hulu commercials",
    desc: "By installing it, you can skiing annoying ads. This extension comes with no hidden charges that protects your browser from malware websites.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading: "Enjoy your favorite shows with hulu ad skipper",
    desc: "With hulu ad skipper, you can experience hulu no ads and stop hulu ads.",
  },
  {
    id: 3,
    icon: "/thunder.svg",
    heading: "This extension fasten your browser speed",
    desc: "By installing this commercial free hulu you can maintain your web speed.",
  },
  {
    id: 4,
    icon: "/ant-design_safety-outlined.svg",
    heading: "It protects you from dangerous websites",
    desc: "While using Hulu ad skipper it will keep you safe from all the dangerous websites that may create viruses in your browser.",
  },
];

const Functionality = () => {
  return (
    <div className="functionality">
      {/* <Image
        src="/func-bg.svg"
        width={2300}
        height={1045.26}
        className="bg"
        alt="functionality-logo"
      /> */}
      <div className="container">
        <h2>Features</h2>

        <div className="cards">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                width={67}
                height={67}
              />
              <h3>{item.heading}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Functionality;
