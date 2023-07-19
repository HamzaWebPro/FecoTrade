import React from "react";
import { Link } from "react-router-dom";


//Images
import pic1 from "./../../assets/images/about/pic1.jpg";
import support1 from "./../../assets/images/icons/support1.png";
// import { Parallax } from 'react-scroll-parallax';

import iconBlockchain from "../../assets/images/ecosystem/blockchain.gif";
import iconCoin from "../../assets/images/ecosystem/Coin.gif";
import iconNetwork from "../../assets/images/ecosystem/Network.gif";
import iconExplorer from "../../assets/images/ecosystem/Explorer.gif";
import iconWallet from "../../assets/images/ecosystem/Wallet.gif";



const cardData = [
  {
    image: iconBlockchain,
    title: "Custom Blockchain",
    description:
      "Feco is an open and fast blockchain. Our mainnet runs Ethereum applications with 3-second transaction finality and 100 times lower fees.",
  },
  {
    image: iconCoin,
    title: "Feco Native Coin",
    description:
      "Feco Token is a cryptocurrency that will launch on the Binanace Blockchain as the first native cryptocurrency as soon as possible.",
  },
  {
    image: iconNetwork,
    title: "Feco Network",
    description:
      "The Feco network will include the features of trustless cross-chain bridges and four shards, which process transactions in parallel.",
  },
  {
    image: iconExplorer,
    title: "Feco Explorer",
    description:
      "Explore Feco Explorer for transactions, addresses, tokens, prices and other information. It will be built for Feco Ecosystem.",
  },
  {
    image: iconWallet,
    title: "Feco Wallet",
    description:
      " Consumers can buy crypto assets via credit cards, then trade between multiple platforms using Feco Decentralized Wallet.",
  },
];

function FecoTradeEcoSystem() {
  return (
    <>
      {cardData.map((item, ind) => (
        <div className="col-xl-4 col-md-6  flex-row-reverse m-b60" key={ind}>
          {/* <Parallax speed={ind*20}> */}
          <div className="icon-bx-wraper style-3 text-center">
            <div className="icon-media">
              <img style={{width: "80px"}} src={item.image} alt="" />
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
