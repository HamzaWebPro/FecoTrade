import React, { useState } from 'react';
import PageLayout from '../layouts/PageLayout';

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);
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

    ];
    // const handleAccordion = (index) => {
    //     setActiveIndex(index === activeIndex ? null : index);
    // };

    // const Accordion = ({ accordionData }) => {
    //     const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <div className="page-content">
                <PageLayout pageTitle="Faq" />
                <div className="clearfix section-wrapper1 bg-primary-light">
                    <div className="container">
                        <div className="content-inner-1">
                        {/* <div className="section-head text-center">
                                <h2 className="title">FAQ</h2>
                                <p className="">
                                    We have collected the most detailed answers to frequently asked questions. If you have not found the answer to your question, please contact us.
                                </p>
                            </div> */}
                        <div className='row'>
                            {accordionData.map((data, index) => (
                                <div
                                    className={`accordion-item ${activeIndex === index ? "active" : ""
                                        } col-6`}
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
                </div>
            </div>
        </>
    );
};

export default Faq;
