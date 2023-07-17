import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//components
import BannerCard from "./../components/Home/BannerCard";
import OneStop from "./../components/Home/OneStop";
import RecentNews from "./../components/Home/RecentNews";

import Accordion from "react-bootstrap/Accordion";
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
import about2 from "./../assets/images/home-banner/btc-eth-ltch.gif";
import about3 from "./../assets/images/home-banner/animated-home.gif";
import about4 from "./../assets/images/home-banner/bitcoin-mining-pool.gif";
import about1 from "./../assets/images/about/about-1.jpg";

import { Parallax, useParallax } from "react-scroll-parallax";
import FecoTradeEcoSystem from "../components/Home/FecoTradeEcoSystem";
import { BsArrowDownCircle } from "react-icons/bs";
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

  // accordion faq data

  const accordionData = [
    {
      question: "What is Fecotrade?",
      answer:
        "Fectotrade is a Russian - registered fintech company with an extensive ecosystem of crypto asset management services. The main activity of the company are cryptocurrency mining, staking and trading.",
    },
    {
      question: "How it works?",
      answer:
        "Fecotrade is the pioneer solution for anyone who wants to get involved in cryptocurrency mining. With its powerful algorithms and easy-to-use interface, Fecotrade is the perfect way to start earning cryptocurrency directly from your browser.",
    },
     {
      question: "Is there any autorun and smart CPU controller?",
      answer:
        "Effortlessly increase your earnings with Fecotrade's autorun and smart CPU controller. Our application is easy to install and will run automatically using your computer's free CPU resources to generate profits.",
    },
         {
      question: "Is there any autorun and smart CPU controller?",
      answer:
        "Effortlessly increase your earnings with Fecotrade's autorun and smart CPU controller. Our application is easy to install and will run automatically using your computer's free CPU resources to generate profits.",
    },
    {
      question: "How you confirm the safety of user account?",
      answer:
        "Your funds and account are secured with our advanced security features. No one can access your newly mined bitcoins except you.",
    },
      {
      question: "Do you use advance hardware for mining?",
      answer:
        "We are using the latest hardware like ASIC Miner & Mining rigs to ensure a high-speed mining experience in a cost-effective manner",
    },
        {
      question: "Can I have more than one account?",
      answer:
        "No, Absolutely Not! Since We give Generation Commission and Many Bonuses for all of our users, You can not register more than ONE account with One email and One Device even for your family. If we find more than one account for a user, We will block all of that user accounts without any warning.",
    },
    // Add more questions and answers here...
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // count down timer functionality
  const [targetDate, setTargetDate] = useState(new Date("2024-09-17T23:59:59"));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  const totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

  const progressBarWidth = `${(((totalSeconds / (60 * 60 * 24)) * 100).toFixed(2)) / 100}%`;

  console.log(progressBarWidth, "kk");
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
                  platform in the world who offers a robust selection of trading
                  options and features.
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
                  <h2 className="title">
                    Leading Platform for Cryptocurrency Mining!
                  </h2>
                  <p className="m-0 lh-base">
                    Fecotrade is affordable and easy-to-use cloud mining
                    service. We have the cheapest source of renewable
                    electricity in the world. If you’re looking to mine Crypto
                    asset, We are a great choice, allowing you to mine
                    cryptocurrencies without owning any equipment.
                  </p>
                  <p>
                    Fectotrade is a Russian - registered fintech company with an
                    extensive ecosystem of crypto asset management services. The
                    main activity of the company are cryptocurrency mining,
                    staking and trading. Our team consists of professional
                    traders with real experience and high profit rates. Unique
                    trading strategies allow our clients to receive high stable
                    profits against their funds.
                  </p>
                </div>
                <Link
                  to={"https://auth.fecotrade.com/register"}
                  className="btn btn-lg btn-primary btn-shadow text-uppercase"
                >
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
                  Trust comes from experience. Many of the pleased customers may
                  function as a guide for you.
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
              <p>Fecotrade exists to improve your systematic trading profitability and to help you succeed at a career in quantitative finance. And you don't need to learn any complicated financial trading skills, all of this is done by our expert team.</p>
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
                              onClick={() => setSelectText([coin3, "Ethereum"])}
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
              <p>Our plan is to create a highly scalable, decentralized, permissionless and open-source platform used to build crypto DApps. Fecotrade blockchain ecosystem will consist the following products.</p>
            </div>
            <div className="row sp60">
              <FecoTradeEcoSystem />
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
        </section>
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
            <div className="col-lg-6 about-content ps-lg-5 m-b30">
                <div className="section-head">
                  <h2 className="title">
                    Leading Platform for Cryptocurrency Mining!
                  </h2>
                  <p className="m-0 lh-base">
                    Fecotrade is affordable and easy-to-use cloud mining
                    service. We have the cheapest source of renewable
                    electricity in the world. If you’re looking to mine Crypto
                    asset, We are a great choice, allowing you to mine
                    cryptocurrencies without owning any equipment.
                  </p>
                  <p>
                    Fectotrade is a Russian - registered fintech company with an
                    extensive ecosystem of crypto asset management services. The
                    main activity of the company are cryptocurrency mining,
                    staking and trading. Our team consists of professional
                    traders with real experience and high profit rates. Unique
                    trading strategies allow our clients to receive high stable
                    profits against their funds.
                  </p>
                </div>
                <Link
                  to={"https://auth.fecotrade.com/register"}
                  className="btn btn-lg btn-primary btn-shadow text-uppercase"
                >
                  Start Mining Today
                </Link>
              </div>
              <div className="col-lg-6 py-4">
                
              <div className="countdown-wrapper">
              <div className="time-container mb-5">
                <h5 className="text-center mb-4">Your event</h5>
                 <div className="d-flex justify-content-around ">
                 <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                    <h3 className="value mb-0">{formatTime(days)}</h3>
                    <div className="label">Days</div>
                  </div>
                  <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                    <h3 className="value mb-0">{formatTime(hours)}</h3>
                    <span className="label">Hours</span>
                  </div>
                  <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                    <h3 className="value mb-0">{formatTime(minutes)}</h3>
                    <span className="label">Minutes</span>
                  </div>
                  <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                    <h3 className="value mb-0">{formatTime(seconds)}</h3>
                    <span className="label">Seconds</span>
                  </div>
                 </div>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: progressBarWidth }}></div>
                </div>
              </div>
              </div>
             
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape3} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
       
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Our Professional Team</h2>
              <p>we are proud of our great team. He is one of the most motivated and enthusiastic people we have, and is always ready and willing to help out where needed.</p>
            </div>
            <div className="row sp60">
              <OurTeam />
            </div>
          </div>
        </section>
        
        <section className="clearfix section-wrapper1 bg-primary-light">
          <div className="container">
            <div className="content-inner-1">
              <div className="section-head text-center">
                <h2 className="title">FAQ</h2>
                <p className="">
                 We have collected the most detailed answers to frequently asked questions. If you have not found the answer to your question, please contact us.
                </p>
              </div>
              <div className="">
                {accordionData.map((data, index) => (
                  <div
                    className={`accordion-item ${activeIndex === index ? "active" : ""
                      }`}
                    key={index}
                  >
                    <div
                      className="accordion-title"
                      onClick={() => handleAccordion(index)}
                    >
                      <h3>{data.question}</h3>
                      <span
                        className={`accordion-icon ${activeIndex === index ? "active" : ""
                          }`}
                      ></span>
                    </div>
                    {activeIndex === index && (
                      <div className="accordion-content">
                        <p>{data.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
}

export default Home;
