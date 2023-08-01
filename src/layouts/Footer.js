import React from 'react';
import { Link } from 'react-router-dom';

//images
import shape1 from './../assets/images/home-banner/shape1.png';
import bgimage from './../assets/images/background/bg1.jpg';
import logowhite from './../assets/images/logo-white.png';
import flags from './../assets/images/footer/world-map-with-flags1.png';

function Footer() {
    return (
        <>
            <footer className="site-footer style-1" id="footer">
                {/* <img className="bg-shape1" src={shape1} alt="" /> */}
                <div className="footer-top background-luminosity" style={{ backgroundImage: "url(" + bgimage + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12" >
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={"/"}><img src={`https://i.postimg.cc/W4xMbXZj/logo-facotradee.png`} alt="" /></Link>
                                    </div>
                                    <p>FecoTrade is the easiest and most efficient way to make money from cryptocurrency mining, trading & Coin-Staking. We have advanced mining cryptocurrency equipment, site, and maintenance facilities.</p>
                                    <div className="dz-social-icon transparent space-10">
                                        <ul>
                                            <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/Fecotrade"></a></li>{" "}
                                            <li><a target="_blank" className="fa-brands fa-telegram" href="https://t.me/fecotrade?fbclid=IwAR21inxpS5dtE-pXqB1kd1NWFWyQJFIiWf09Ig2WA8rUPs8hM9tYM7rGzhA"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/fecotrade"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-youtube" href="https://youtube.com/"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6" >
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Other Links</h4>
                                    <ul>
                                        <li><Link to={"/about-us"}>About Us</Link></li>
                                        <li><Link to={"/pricing"}>Mining Plan</Link></li>
                                        <li><Link to={"https://auth.fecotrade.com/login"}>Login</Link></li>
                                        <li><Link to={"/blog-grid"}>FAQ</Link></li>
                                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-12" >
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Resourse</h4>
                                    <ul>

                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://auth.fecotrade.com/">Terms and Condition</a></li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.coingecko.com/">Coin-Geco</a></li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://dogecoin.com/">What is Doge-Coin</a></li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.dailyfx.com/charts">Trading Chart</a></li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.coindesk.com/tag/bitcoin-mining/?fbclid=IwAR3ZbZv-hJnBEHW2d9zdQoncXY3WlM__uPmqi0dr4BPnEG0-UoguOopHug8">Crypto Mining</a></li>
                                        
                                        {/* <li><Link to={"https://auth.fecotrade.com/"}>Terms and Condition</Link></li>
                                        <li><Link to={"https://www.coingecko.com/?fbclid=IwAR1zuixhjC1Ecnl7CdgUcnladTsgrlW97cYVAJ0_vDEBxFTJT0fTAYlRNSU"}>Coin-Geco</Link></li>
                                        <li><Link to={"https://dogecoin.com/?fbclid=IwAR3_ith0D32HZc7TZ_qV5TDjjJ3CuKXNkAcqIvvpqmzkHrunoQ-yKnX5Sro#what-is-dogecoin"}>What is Doge-Coin</Link></li>
                                        <li><Link to={"https://www.dailyfx.com/charts"}>Trading Chart</Link></li>
                                        <li><Link to={"https://www.coindesk.com/tag/bitcoin-mining/?fbclid=IwAR3ZbZv-hJnBEHW2d9zdQoncXY3WlM__uPmqi0dr4BPnEG0-UoguOopHug8"}>Crypto Mining</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-lg-4 col-sm-6" >
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title">Blog Posts</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>What is cryptocurrency and how does it work.</Link></h6>
                                                <span className="post-date"> JUNE 18, 2023</span>
                                            </div>
                                        </div>
                                        <div className="post-separator"></div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>A cryptocurrency is a digital currency.</Link></h6>
                                                <span className="post-date"> June 20, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-xl-3 col-lg-4 col-sm-12" >
                                <div className="widget widget_locations">
                                    <h4 className="widget-title">Locations</h4>
                                    <div className="clearfix">
                                        <h6 className="title">Vladivostok</h6>
                                        <p>Prospekt Krasnogo Znameni, Vladivostok City, Russia</p>
                                        <img src={flags} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom text-center">
                    <div className="container">
                        <span className="copyright-text">Copyright © 2023 <a href="https://www.fecotrade.com" target="_blank">FecoTrade</a>. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
