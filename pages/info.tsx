import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const bnb =
    "data:image/png;base64,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";
  const dog =
    "https://img2.thaipng.com/20180403/rfw/kisspng-dogecoin-cryptocurrency-digital-currency-doge-5ac3a787122c26.7280659415227718470745.jpg";
  const twin = "https://twindex.com/images/logo.png";

  const options = [
    {
      value: "BNB",
      label: (
        <div className="flex">
          <img className="rounded-full w-7 mr-2" src={bnb} /> BNB{" "}
        </div>
      ),
    },
    {
      value: "Dogecoin",
      label: (
        <div className="flex">
          <img className="rounded-full w-7 mr-2" src={dog} /> DOGE{" "}
        </div>
      ),
    },
    {
      value: "twin",
      label: (
        <div className="flex">
          <img className="rounded-full w-7 mr-2" src={twin} /> TWIN{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col h-screen overflow-auto">
      <Header></Header>

      <div className="flex flex-col w-full text-center mt-24 items-center flex-grow">
        <div className="max-w-2xl bg-white rounded-lg border-2 border-gary-200 w-full p-7 ">
          <div className="flex w-full text-lg justify-center font-bold text-gray-500">
            Total Value Locked
          </div>
          <div className="flex w-full justify-center mt-3 mb-7">
            <p className="text-6xl font-bold text-gray-500">$95,074,947</p>
          </div>
        </div>
        <div className="max-w-2xl w-full p-7 ">
          <div className="grid grid-cols-3 gap-5 w-full">
            <div>
              <p className="text-2xl font-bold text-gray-500 ">SLO SATE</p>
              <div className="bg-blue-700 font-bold w-full rounded-3xl p-3 mt-2 flex text-white justify-center">
                <img src="/assets/icons/m-white.png" className="w-8 pr-2" />{" "}
                Coinmarketcap
              </div>
              <div className="bg-coinGecko font-bold w-full rounded-3xl p-3 mt-2 flex text-white justify-center">
                <img
                  src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"
                  className="w-8 pr-2"
                />{" "}
                CoinGecko
              </div>
            </div>
            <div className="text-left">
              <p>DOP Price</p>
              <p>Total Trading Volume</p>
              <p>DOP Total Supply</p>
              <p>DOP Market Cap</p>
              <p>DOP Max Supply</p>
              <p>DOP/B</p>
            </div>
            <div className="text-left">
              <p>$ 1.04</p>
              <p>$ 275,623,872</p>
              <p>49,821,891</p>
              <p>$ 52,007,952.56</p>
              <p>100,000,000</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
