import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//components
import Shape1 from "./../assets/images/home-banner/shape1.png";
import Shape3 from "./../assets/images/home-banner/shape3.png";
import PageLayout from "../layouts/PageLayout";




function Staking() {
    const nav = useNavigate();
    const formDetails = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };



    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // count down timer functionality
    const [targetDate, setTargetDate] = useState(new Date("2023-08-30T23:59:59"));
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
                <PageLayout pageTitle="Staking" />
                <section className="content-inner about-sec bg-primary-light">
                    <div className="container">
                        <div className="row about-bx2 style-1 align-items-center">
                            <div className="col-lg-6 about-content ps-lg-5 m-b30">
                                <div className="section-head">
                                    <h2 className="title">
                                        FECO TOKEN STAKING OPPORTUNITY!
                                    </h2>
                                    <p className="m-0 lh-base">
                                        Fecotrade is a decentralized, algorithmic protocol for mining, staking, and trading assets, that operates on the Fecotrade Network.
                                        We're going to live the staking features for our registered users soon.
                                    </p>
                                </div>
                                <Link
                                    to={"https://auth.fecotrade.com/register"}
                                    className="btn btn-lg btn-primary btn-shadow text-uppercase btn btn-warning"
                                >
                                    Join Today!
                                </Link>
                            </div>
                            <div className="col-lg-6 countdown-background">
                                <div className="countdown-wrapper">
                                    <div className="time-container mb-3">
                                        <h5 className="text-center mb-4">Staking Starts In</h5>
                                        <div className="d-flex justify-content-around ">
                                            <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                                                <h3 className="value mb-0 font-size">{formatTime(days)}</h3>
                                                <div className="label">Days</div>
                                            </div>
                                            <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                                                <h3 className="value mb-0 font-size">{formatTime(hours)}</h3>
                                                <span className="label">Hours</span>
                                            </div>
                                            <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                                                <h3 className="value mb-0 font-size">{formatTime(minutes)}</h3>
                                                <span className="label">Minutes</span>
                                            </div>
                                            <div className="time d-flex flex-column justify-content-center align-items-center mb-0">
                                                <h3 className="value mb-0 font-size">{formatTime(seconds)}</h3>
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
                    {/* <img className="bg-shape1" src={Shape1} alt="" />
                    <img className="bg-shape2" src={Shape3} alt="" />
                    <img className="bg-shape3" src={Shape3} alt="" />
                    <img className="bg-shape4" src={Shape3} alt="" /> */}
                </section>
            </div>
        </>
    );
}

export default Staking;
