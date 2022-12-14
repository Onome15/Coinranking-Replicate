import React from 'react'

const MarketStats = ({ stats }) => {
    return (
        <div className='px-4 container text-sm md:text-base mx-auto'>
            <div className=' grid gap-x-20 gap-y-10 xl:gap-x-24 lg:grid-cols-2 mt-20'>
                <div>
                    <h1 className='text-xl md:text-2xl font-bold'>Cryptocurrency Market Statistics</h1>
                    <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p>
                    <div>
                        <p className='p-4'> Crypto market cap <span className='float'> ${(Number(stats.totalMarketCap) / 1000000000000).toFixed(2)} trillion </span> </p>
                        <hr />
                        <p className='p-4'>24h volume <span className='float'>${(Number(stats.total24hVolume) / 1000000000).toFixed(2)} billion</span></p>
                        <hr />
                        <p className='p-4'> All coins<span className='float'>{stats.totalCoins}</span></p>
                        <hr />
                        <p className='p-4'> All crypto exchanges<span className='float'>{stats.totalExchanges}</span></p>
                        <hr />
                        <p className='p-4'> All crypto markets<span className='float'>{stats.totalMarkets}</span></p>
                    </div>
                </div>
                <div className='bg-sky-50 rounded-lg p-12 text-center'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam illo quam dolorum deserunt id ratione asperiores facilis voluptatum recusandae molestias nemo distinctio natus nulla repudiandae, eligendi ullam mollitia vero. </h1>
                    <h1 className='text-xl md:text-2xl font-bold'>View crypto prices in Telegram</h1>
                    <p className='py-4'> Instant price updates. 10,000+ cryptocurrencies. Share with friends. </p>
                    <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-6 rounded-full">
                        View telegram Bot
                    </button>
                </div>

            </div>
            <div className='text-base mt-10 mb-5 md:mb-10 bg-sky-50 rounded-lg py-6 text-center grid lg:grid-cols-3'>
                <div className='lg:text-2xl'>
                    Coinranking API
                </div>
                
                    <div className='font-bold py-5 lg:py-0'>
                        Show cryptocurrency data on your website or app
                    </div>
                    <div>
                        <button className='bg-lime-700 hover:bg-blue-300 text-white font-bold py-2 px-6 rounded-full mr-5 lg:mr-0'> View API docs  </button>
                        <button className='bg-blue-900 hover:bg-blue-300 text-white font-bold py-2 px-6 rounded-full'> Generate API key  </button>
                    </div>
               
            </div>
        </div>
    )
}

export default MarketStats