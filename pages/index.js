import useSWR from 'swr';
import Image from 'next/image'
import { useState } from 'react';

const fetcher = async (url) => {
  return await fetch(url, {
    headers: {
      'X-RapidAPI-Key': 'f6e3012224msh989d04bf16d703fp14b80ajsn5586002f94ec',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  }).then(response => response.json());
}

export default function Home() {

  const [search, setSearch] = useState("");

  const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
  const { data, error } = useSWR(url, fetcher)

  if (error) return (
    <div className='flex items-center justify-center h-[70vh]'>
      <h1 className='text-xl font-bold'>Errr Page!
        <br />
        Connect to internet and refresh</h1>
    </div>
  )
  if (!data) return (
    <div className='grid h-[70vh] place-items-center text-xl font-bold' role="status">
      <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
  const posts = data.data.coins;
  const stats = data.data.stats;

  return (
    <div className='mx-auto pl-10-'>
      <div>
        <h1 className='text-center p-2 text-xl md:text-2xl font-bold'>
          Cryptocurrency price list
        </h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <table className="w-full relative border font-medium container mx-auto">
          <thead className='font-bold border '>
            <tr>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90'>ALL COINS</th>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90'>PRICE</th>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90 hidden md:table-cell'>MARKET CAP</th>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90'>24h</th>
            </tr>
          </thead>
          <tbody>
            {posts && posts

              .filter((coins) => {
                return coins.name.toLowerCase().includes(search.toLowerCase());
              })

              .map((coins, index) => {

                const price1 = Number(coins.price); // store the returned data as variable

                const price0 = price1 < 1 ? price1.toFixed(4) : price1 < 10 ? price1.toFixed(3) : price1.toFixed(2); // ternary condition of toFixed according to their various prices

                const price = price0 > 1000 ? (parseFloat(price0)).toLocaleString() : price0; // toLocaleSting adds a comma to number above 1000

                return (
                  <tr key={index} className='border'>
                    <td>
                      <table className='-mr-32 md:-mr-40 lg:-mr-56'>
                        <tbody>
                          <tr>
                            <td> </td>
                            <td className='px-4'>{Number(index) + 1}</td>
                            <td><Image src={coins.iconUrl} alt="logo" width={30} height={30} className='-z-10' /></td>
                            <td className='pl-4'>
                              <p>{coins.name}</p>
                              <p className='font-normal'>{coins.symbol}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <p>${price}</p>
                      <p className='md:hidden text-xs'>${(Number(coins.marketCap) / 1000000000).toFixed(2)}B</p>
                    </td>
                    <td className='hidden md:table-cell'>${(Number(coins.marketCap) / 1000000000).toFixed(2)} billion</td>
                    <td> {coins.change}%</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>

      <div className='container mx-auto sm:text-sm text-md grid gap-x-20 gap-y-10 xl:gap-x-24 lg:grid-cols-2 mt-20'>
        <div>
          <h1 className='text-xl md:text-2xl font-bold'>Cryptocurrency market statistics</h1>
          <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p>
          <div>
            <p> Crypto market cap <span className='float'> ${(Number(stats.totalMarketCap) / 1000000000000).toFixed(2)} trillion </span> </p>
            <hr />
            <p>24h volume <span className='float'>${(Number(stats.total24hVolume) / 1000000000).toFixed(2)} billion</span></p>
            <hr />
            <p> All coins<span className='float'>{stats.totalCoins}</span></p>
            <hr />
            <p> All crypto exchanges<span className='float'>{stats.totalExchanges}</span></p>
            <hr />
            <p> All crypto markets<span className='float'>{stats.totalMarkets}</span></p>
          </div>
        </div>
        <div className='bg-sky-100 rounded-lg  text-center'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam illo quam dolorum deserunt id ratione asperiores facilis voluptatum recusandae molestias nemo distinctio natus nulla repudiandae, eligendi ullam mollitia vero. </h1>
          <h1>View crypto prices in Telegram</h1>
          <p> Instant price updates. 10,000+ cryptocurrencies. Share with friends. </p>
          <button className='bg-blue-500'> View telegram Bot </button>
        </div>
      </div>
<div className='h-56'>

</div>
    </div>
  );
}

