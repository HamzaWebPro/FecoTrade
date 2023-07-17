import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//components
import BannerCard from "./../components/Home/BannerCard";
import OneStop from "./../components/Home/OneStop";
import RecentNews from "./../components/Home/RecentNews";

//images
import baner1 from "./../assets/images/home-banner/home-icon-left.png";
import baner2 from "./../assets/images/home-banner/home-icon-right.png";
import Shape1 from "./../assets/images/home-banner/shape1.png";
import Shape3 from "./../assets/images/home-banner/shape3.png";
import wallet from "./../assets/images/icons/staking icon.svg";
import mining from "./../assets/images/icons/mining icon.svg";
import trading from "./../assets/images/icons/trading icon.svg";

import coin1 from "./../assets/images/coins/coin1.png";
import coin3 from "./../assets/images/coins/coin3.png";
import coin4 from "./../assets/images/coins/coin4.png";

import bloglg from "./../assets/images/blog/blog-ig.png";
import avatar3 from "./../assets/images/avatar/avatar3.jpg";
import about2 from "./../assets/images/about/feco-about-2.jpg";
import about3 from "./../assets/images/about/feco-about-1.jpg";
import about4 from "./../assets/images/about/feco-about-3.jpg";
import about1 from "./../assets/images/about/about-1.jpg";

import { Parallax, useParallax } from "react-scroll-parallax";
import FecoTradeEcoSystem from "../components/Home/FecoTradeEcoSystem";
import OurTeam from "./OurTeam";

const trustBlog = [
  {
    image: wallet,
    title: "Earn From Staking",
    description:
      "With staking, you can put your digital assets to work and earn passive income without selling them.",
  },
  {
    image: mining,
    title: "Earn From Mining",
    description:
      "We are always committed to providing high quality mining to people around the world. Low Maintenance Fees.",
  },
  {
    image: trading,
    title: "Earn From Trading",
    description:
      "Trading cryptocurrencies on Binance is acquiring and disposing of digital assets to profit from price changes.",
  },
];

const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

function Home() {
  const nav = useNavigate();
  const formDetails = (e) => {
    e.preventDefault();
    nav("/contact-us");
  };
  const [selecttext, setSelectText] = useState([coin4, "Bitcoin"]);

  // parallax
  const parallax = useParallax({
    easing: "easeOutQuad",
    translateX: [-40, 20],
  });
  return (
    <>
      <div className="page-content">
        <div className="main-bnr  style-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h1 className="col-lg-9 mx-auto">
                  Best Platform for Crypto Trading, Mining and Staking
                </h1>

                <p className="text text-primary col-lg-6 mx-auto">
                  Fecotrade is one of the largest cryptocurrency trading
                  platform in the world who offers a robust selection of
                  trading options and features.
                </p>

                <Link
                  to={"https://auth.fecotrade.com/register"}
                  className="btn space-lg btn-gradient btn-shadow btn-primary"
                >
                  Get Started
                </Link>

                <ul className="image-before">
                  <li className="left-img">
                    <img src={baner1} alt="" />
                  </li>
                  <li className="right-img">
                    <img src={baner2} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape1} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </div>

        <div className="clearfix bg-primary-light">
          <div className="container">
            <div className="currancy-wrapper">
              <div className="row justify-content-center">
                <BannerCard />
              </div>
            </div>
          </div>
        </div>
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end">
                    <ImageBox image={about4} changeClass="image-box-1" />
                    <ImageBox image={about2} changeClass="image-box-2" />
                  </div>
                  <div className="row">
                    <ImageBox image={about3} changeClass="image-box-3" />
                    <ImageBox image={about1} changeClass="image-box-4" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b30">
                <div className="section-head">
                  <h2 className="title">Leading Platform for Cryptocurrency Mining!</h2>
                  <p className="m-0 lh-base">
                    Fecotrade is affordable and easy-to-use cloud mining service. We have the cheapest source of renewable electricity in the world. If you’re looking to mine Crypto asset, We are a great choice, allowing you to mine cryptocurrencies without owning any equipment.
                  </p>
                  <p>
                    Fectotrade is a Russian - registered fintech company with an extensive ecosystem of crypto asset management services. The main activity of the company are cryptocurrency mining, staking and trading. Our team consists of professional traders with real experience and high profit rates. Unique trading strategies allow our clients to receive high stable profits against their funds.
                  </p>
                </div>
                <Link to={"https://auth.fecotrade.com/register"} className="btn btn-lg btn-primary btn-shadow text-uppercase">
                  Start Mining Today
                </Link>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape3} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
        <section className="clearfix section-wrapper1 bg-primary-light">
          <div className="container">
            <div className="content-inner-1">
              <div className="section-head text-center">
                <h2 className="title">Best Option for You</h2>
                <p className="">
                  Trust comes from experience. Many of the pleased customers
                  may function as a guide for you.
                </p>
              </div>
              <div className="row" ref={parallax.ref}>
                {trustBlog.map((data, ind) => (
                  <div className="col-lg-4 m-b30" key={ind}>
                    <div className="icon-bx-wraper style-2">
                      <div className="icon-media d-flex">
                        <img src={data.image} alt="" />
                        <h4 className="title">{data.title}</h4>
                      </div>
                      <div className="icon-content">
                        <p className="!text-red">{data.description}</p>
                        <Link
                          className="btn btn-primary btn-gradient btn-shadow"
                          to={"https://auth.fecotrade.com/login"}
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Most amazing features</h2>
            </div>
            <div className="row sp60">
              <OneStop />
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
        </section>
        <div className="container">
          <div className="form-wrapper-box style-1 text-center">
            <div className="section-head">
              <h4 className="title m-t0">How to Purchase from us ?</h4>
              <p>
                Fill out the below form and we will contact you via email &
                details
              </p>
            </div>
            <form className="dz-form" onSubmit={(e) => formDetails(e)}>
              <div className="form-wrapper">
                <div className="flex-1">
                  <div className="row g-3">
                    <div className="col-xl-3 col-md-6 ">
                      <input
                        name="dzName"
                        type="text"
                        required=""
                        placeholder="Wallet Address"
                        className="form-control"
                      />
                    </div>
                    <div className="col-xl-3 col-md-6 ">
                      <Dropdown className="select-drop">
                        <Dropdown.Toggle
                          as="div"
                          className="i-false select-drop-toggle"
                        >
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <img src={coin4} alt="" /> Bitcoin
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                setSelectText([coin3, "Ethereum"])
                              }
                            >
                              <img src={coin3} alt="" /> Ethereum
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => setSelectText([coin1, "Tether"])}
                            >
                              <img src={coin1} alt="" /> Tether
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown.Toggle>
                      </Dropdown>
                    </div>
                    <div className="col-xl-3 col-md-6 ">
                      <input
                        name="dzName"
                        type="text"
                        required=""
                        placeholder="How much worth in $?"
                        className="form-control"
                      />
                    </div>
                    <div className="col-xl-3 col-md-6 ">
                      <input
                        name="dzName"
                        type="text"
                        required=""
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <img className="bg-shape1" src={Shape1} alt="" />
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Fecotrade Ecosystem</h2>
            </div>
            <div className="row sp60">
              <FecoTradeEcoSystem />
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
        </section>
        <section className="content-inner bg-white blog-wrapper">
          <img className="bg-shape1" src={Shape1} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="section-head ">
                  <h6 className="sub-title text-primary">FROM OUR BLOG</h6>
                  <h2 className="title">Recent News &amp; Updates</h2>
                </div>
                <RecentNews />
              </div>
              <div className="col-xl-5 col-lg-12 m-b30 ">
                <div
                  className="dz-card style-2"
                  style={{ backgroundImage: "url(" + bloglg + ")" }}
                >
                  <div className="dz-category">
                    <ul className="dz-badge-list">
                      <li>
                        <Link to={"#"} className="dz-badge">
                          14 Fan 2022
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <h2 className="dz-title">
                      <Link to={"/blog-details"} className="text-white">
                        Directly support individuals Crypto
                      </Link>
                    </h2>
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <Link to={"#"}>
                            <img src={avatar3} alt="" className="me-2" />
                            <span>By Noare</span>
                          </Link>
                        </li>
                        <li className="post-date">
                          <Link to={"#"}>12 May 2022</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Our Team</h2>
            </div>
            <div className="row sp60">
              <OurTeam />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
