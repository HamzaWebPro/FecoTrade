import React from 'react';

// // import react icon
import { TbDeviceImacDollar } from 'react-icons/tb';
import { FaChartSimple } from "react-icons/fa6";
import { FaHammer } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

// Store icon in variable
const miningIcon = <TbDeviceImacDollar size={50} />
const stakingIcon = <FaChartSimple size={50} />
const tradingIcon = <FaHammer size={50} />

const cardData = [
    { icon: tradingIcon, title: 'What is Mining?', description: 'Mining is like a process of validating a block on the chain network and getting paid in Crypto. ' },
    { icon: miningIcon, title: 'What is Staking?', description: 'Staking crypto means locking up coins to maintain the security of a blockchain network and earning rewards in return. ' },
    { icon: stakingIcon, title: 'What is Trading', description: 'Cryptocurrency trading involves buying and selling digital assets to make a profit in many ways.' },
];

function BannerCard() {
    return (
        <>
            {cardData.map((data, index) => (
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" key={index}>
                    <Parallax
                     speed={index*20}
                    >
                    <div className="icon-bx-wraper style-1 box-hover" id='banner-background'>
                        <div className="icon-media flex justify-content-center align-items-center">
                            <div className="icon-info">
                                <div className='text-center'>
                                    <p>{data.icon}</p>
                                </div>
                            </div>
                        </div>
                        <div className="icon-content"><div className='text-center'>
                            <p className='title-font'>{data.title}</p>
                            <p><small>{data.description}</small></p>
                        </div>
                        </div>
                    </div>
                    </Parallax>
                </div>
            ))}
        </>
    )
}

export default BannerCard;
