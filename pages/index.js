import Header from '../Components/Header';
import useSWR from 'swr'

const fetcher = async (url) => {
  return await fetch(url, {
   headers: {
         'X-RapidAPI-Key': 'f6e3012224msh989d04bf16d703fp14b80ajsn5586002f94ec',
         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
       }
 }).then(response => response.json());
}

export default function Home() {

  const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
  const { data, error } = useSWR( url, fetcher, { refreshInterval: 10 })

  if (error) return <div>failed to load</div>
  if (!data) return <div> </div>

  const posts = data.data.coins;

  console.log(posts);

  return (
    <div className='container'>
      <Header />
      <div>
        <h1 className='text-center p-2 text-xl md:text-2xl font-bold'>
          Cryptocurrency price list
        </h1>

        <table className="min-w-full relative border font-medium">
          <thead className='font-bold border '>
            <tr className=''>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90'>ALL COINS</th>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90'>PRICE</th>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90 hidden md:table-cell'>MARKET CAP</th>
              <th className='sticky top-0 text-left py-3 bg-white opacity-90'>24h</th>
            </tr>
          </thead>
          <tbody>
            {posts && posts.map((coins, index) => {

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
                          <td><img src={coins.iconUrl} alt="logo" width="30px" /></td>
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
              ) })}          
          </tbody>
        </table>
      </div>
    </div>
  );
}

