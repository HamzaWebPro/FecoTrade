import React from 'react';

// // import react icon
import { TbDeviceImacDollar } from 'react-icons/tb';
import { FaChartSimple } from "react-icons/fa6";
import { FaHammer } from 'react-icons/fa';

// Store icon in variable
const miningIcon = <TbDeviceImacDollar size={50} />
const stakingIcon = <FaChartSimple size={50} />
const tradingIcon = <FaHammer size={50} />

const cardData = [
    { icon: miningIcon, title: 'Mining', description: 'For each of the blockchain algorithms that we have proposed, we are providing some of the highest performance mining systems available.' },
    { icon: stakingIcon, title: 'Staking', description: 'Earn daily rewards on your idle tokens. Simple & Secure. Search popular coins and start earning.' },
    { icon: tradingIcon, title: 'Trading', description: 'Supercharged features to make you happy and lorem ipsum sit dolor amet' },
];

function BannerCard() {
    return (
        <>
            {cardData.map((data, index) => (
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" key={index}>
                    <div className="icon-bx-wraper style-1 box-hover">
                        <div className="icon-media flex justify-content-center align-items-center">
                            <div className="icon-info">
                                <div className='text-center'>
                                    <p>{data.icon}</p>
                                </div>
                            </div>
                        </div>
                        <div className="icon-content"><div className='text-center'>
                            <h6>{data.title}</h6>
                            <p className='text-black'><small>{data.description}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BannerCard;




// import React from 'react';

// // import coin1 from './../../assets/images/coins/coin1.png';
// // import coin3 from './../../assets/images/coins/coin3.png';
// // import coin4 from './../../assets/images/coins/coin4.png';

// // import react icon
// import { TbDeviceImacDollar } from 'react-icons/tb';
// import { FaChartSimple } from "react-icons/fa6";
// import { FaHammer } from 'react-icons/fa';



// const miningIcon = <TbDeviceImacDollar size={50} />
// const stakingIcon = <FaChartSimple size={50} />
// const tradingIcon = <FaHammer size={50} />

// const cardData = [
//     { icon: miningIcon, title: 'Mining', description: 'For each of the blockchain algorithms that we have proposed, we are providing some of the highest performance mining systems available.' },
//     { icon: stakingIcon, title: 'Staking', description: 'Earn daily rewards on your idle tokens. Simple & Secure. Search popular coins and start earning.' },
//     { icon: tradingIcon, title: 'Trading', description: 'Supercharged features to make you happy and lorem ipsum sit dolor amet' },
// ];

// function BannerCard() {
//     return (
//         <>
//             {cardData.map((data, index) => (
//                 <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" key={index}>
//                     <div className="icon-bx-wraper style-1 box-hover">
//                         <div className="icon-media">
//                             <img src={data.image} alt="" />
//                             <div className="icon-info">
//                                 <h5 className="title">{data.title}</h5>
//                                 <span>{data.subtitle}</span>
//                             </div>
//                         </div>

//                         <div className='text-center'>
//                             <p>{data.icon}</p>
//                         </div>

//                         <div className='text-center'>
//                             <h6>{data.title}</h6>
//                             <p className='text-black'><small>{data.description}</small></p>
//                         </div>
//                         <div className="icon-content">

//                             <ul className="price">
//                                 <li>
//                                     <h6 className="mb-0 amount">{data.title}</h6>
//                                     <span className={`percentage ${index === 2 ? "text-green" : "text-red"}`}>{data.percent}%</span>
//                                 </li>
//                                 <li>
//                                     <span>Latest price</span>
//                                     <span>24h change</span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default BannerCard;