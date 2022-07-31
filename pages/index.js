import Header from '../Components/Header'
export default function Home({crypto}) {

  const vare = 43534;
  const ca = vare.toFixed(2);
  console.log(ca);

  return (
    <>
      <Header />
      <div>
        <h1 className='text-center p-2 text-xl md:text-2xl font-bold'>
          Cryptocurrency price list
        </h1>
        <table className="w-full">
          <thead>
            <tr>
              <td>ALL COINS</td>
              <td>PRICE</td>
              <td>MARKET CAP</td>
              <td>24h</td>
            </tr>
          </thead>
          <tbody>
{crypto.map((coins, index) => {
  return(
  <>
    <tr key={index}>
      <td> 
        {coins.name}
      <p>{coins.symbol}</p>
      </td>
      <td>${coins.price}</td>
      <td>${coins.marketCap}</td>
      <td> {coins.hVolume}</td>
    </tr>
  </>
  )
})}
          </tbody>
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
  props: { crypto,
   },
};

}