import Header from '../Components/Header'

export default function Home({ crypto }) {

  return (
    <>
      <Header />
      <div>
        <h1 className='text-center p-2 text-xl md:text-2xl font-bold'>
          Cryptocurrency price list
        </h1>
        <table className="w-full border relative">
          <thead className='font-bold '>
            <tr>
              <th className='sticky top-0'>ALL COINS</th>
              <th className='sticky top-0'>PRICE</th>
              <th className='sticky top-0'>MARKET CAP</th>
              <th className='sticky top-0'>24h</th>
            </tr>
          </thead>

          {crypto.map((coins, index) => {
            return (
              <>
                <tbody>
                  <tr key={index}>
                    <td>
                      <table>
                        <tr>
                          <td> 🤍</td>
                          <td className='px-4'>{Number(index) + 1}</td>
                          <td><img src={coins.iconUrl} alt="logo" width="30px" /></td>
                          <td className='pl-4'>
                            {coins.name}
                            <p>{coins.symbol}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td>${(Number(coins.price)).toFixed(2)}</td>
                    <td>${(Number(coins.marketCap) / 1000000000).toFixed(2)} billion</td>
                    {/* <td> {coins.hVolume}</td> */}

                  </tr>
                </tbody>
                <hr />
              </>
            )
          })}

        </table>
      </div>
    </>
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