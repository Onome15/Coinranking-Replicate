import Header from '../Components/Header'

export default function Home({ crypto }) {

  return (
    <div className='container'>
      <Header />
      <div>
        <h1 className='text-center p-2 text-xl md:text-2xl font-bold'>
          Cryptocurrency price list
        </h1>
  
        <table className="min-w-full relative">
          <thead className='font-bold'>
            <tr className=''>
              <th className='sticky top-0 text-left bg-blue-200'>ALL COINS</th>
              <th className='sticky top-0 text-left bg-blue-200'>PRICE</th>
              <th className='sticky top-0 text-left bg-blue-200 invisible md:visible'>MARKET CAP</th>
              <th className='sticky top-0 text-left bg-blue-200'>24h</th>
            </tr>
          </thead>
          <tbody>
          {crypto.map((coins, index) => {

            return (
         <tr key={index}>
                    <td>
                      <table>
                        <tbody>
                        <tr>
                          <td> 🤍</td>
                          <td className='px-4'>{Number(index) + 1}</td>
                          <td><img src={coins.iconUrl} alt="logo" width="30px" /></td>
                          <td className='pl-4'>
                            {coins.name}
                            <p>{coins.symbol}</p>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <p>${(Number(coins.price)).toFixed(2)}</p>
                    <p className='md:hidden'>${(Number(coins.marketCap) / 1000000000).toFixed(2)}B</p>  
                    </td>
                    <td className='invisible md:visible'>${(Number(coins.marketCap) / 1000000000).toFixed(2)} billion</td>
                    <td> {coins.change}</td>
                  </tr>     
            )
          })}
 </tbody>
        </table>
        </div>
       
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f6e3012224msh989d04bf16d703fp14b80ajsn5586002f94ec',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  const res = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)

  const data = await res.json();
  const crypto = data.data.coins;

  return {
    props: {
      crypto,
    },
  };
}