import React from "react";
import { Link } from "react-router-dom";

// react icons import
import { AiFillDatabase } from "react-icons/ai";
import { FaDatabase, FaServer } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { BiServer } from "react-icons/bi";

//Images
import pic1 from "./../../assets/images/about/pic1.jpg";
import support1 from "./../../assets/images/icons/support1.png";
// import { Parallax } from 'react-scroll-parallax';

// react icons
const featureIconOne = <FaServer className="style" />;
const featureIconTwo = <TbCloudDataConnection className="style" />;
const featureIconThree = <BiServer className="style" />;
const featureIconFour = <AiFillDatabase className="style" />;
const featureIconFive = <FaDatabase className="style" />;

const cardData = [
  {
    image: featureIconOne,
    title: "Custom Blockchain",
    description:
      "Your selected mining contract Is activated automatically once your payment Is confirmed",
  },
  {
    image: featureIconTwo,
    title: "Feco Native Coin",
    description:
      "Request for a payout and receive your earnings on personal wallet any time, any day.No hassle",
  },
  {
    image: featureIconThree,
    title: "Feco Network",
    description:
      "Get a detailed mining tracks/history on your dashboard on how your mining contract Is running.",
  },
  {
    image: featureIconFour,
    title: "Feco Explorer",
    description:
      "Once your mining contract Is activated, your daily earnings are distributed to your preferred mining account after 24hours.",
  },
  {
    image: featureIconFive,
    title: "Feco Wallet",
    description:
      "We have and accepts the most widely used payment system therefore making it easy for you to get started.",
  },
];

function FecoTradeEcoSystem() {
  return (
    <>
      {cardData.map((item, ind) => (
        <div className="col-xl-4 col-md-6  flex-row-reverse m-b60" key={ind}>
          {/* <Parallax speed={ind*20}> */}
          <div className="icon-bx-wraper  style-3 text-center">
            <div className="icon-media">
              <p>{item.image}</p>
            </div>
            <div className="icon-content">
              <h4 className="title">{item.title}</h4>
              <p className="m-b0">{item.description}</p>
            </div>
          </div>
          {/* </Parallax> */}
        </div>
      ))}
      <div className="col-xl-4 col-md-6 m-b60">
        <div
          className="icon-bx-wraper style-4"
          style={{ backgroundImage: "url(" + pic1 + ")" }}
        >
          <div className="inner-content">
            <div className="icon-media m-b30">
              <img src={support1} alt="" />
            </div>
            <div className="icon-content">
              <Link to={"/contact-us"} className="btn btn-primary">
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FecoTradeEcoSystem;
