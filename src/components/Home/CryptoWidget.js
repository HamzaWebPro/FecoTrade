import React from 'react'

const CryptoWidget = () => {
    const dwolla = window.cryptoCurrencyWidget;
  return (
    <>
    {/* CryptoWidget section */}
    <section className="bg-light py-5">
    

            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center">
                        {/* <h2 className="title text-[#362465]">Popular Cryptocurrencies</h2> */}
                    </div>
                </div>
                <div className="">
                <div className="binance-widget-marquee" data-cmc-ids="1,1027,1839,52,3408,74,5426,3890,5805,7083" data-theme="dark" data-transparent="false" data-locale="en"></div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-4 border__style mt-4">
                      
                      <iframe className="border__style" width="100%" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/fant-0x321162cd933e2be498cd2267a90534a804051b11/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                    </div>
                    <div className="col-lg-4 border__style mt-4">
                      <iframe className="border__style" width="100%" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/bnb-0x2170ed0880ac9a755fd29b2688956bd959f933f8/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                    </div>
                    <div className="col-lg-4 border__style mt-4">

                      <iframe className="border__style" width="100%" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/bnb-0xba2ae424d960c26247dd6c32edc70b295c744c43/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <iframe className="border__style" width="100%" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/bnb-0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <iframe className="border__style" width="100%" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/bnb-0x7083609fce4d1d8dc0c979aab8c869ea2c873402/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <iframe className="border__style" width="100%" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/eth-0xdac17f958d2ee523a2206206994597c13d831ec7/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                    </div>
                </div> */}
            </div>
        </section>
    </>
  )
}

export default CryptoWidget