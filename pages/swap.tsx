import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "react-select";

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
    <div
      className="bg-gray-200 overflow-auto flex flex-col h-screen"
    >
      <Header></Header>

      <div className="flex flex-col w-full items-center mt-24 flex-grow">
        <div className="max-w-lg bg-white rounded-lg shadow-md  border-2 border-gary-200 w-full p-3">
          <div className="flex w-full">
            <div className="w-1/2 text-left">Swap</div>
            <div className="w-1/2 text-right flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-lg bg-white rounded-lg border-2 border-gary-100 w-full mt-8 mb-2">
            <div className="flex w-full p-2">
              <div className="w-1/2 text-left">
                <Select
                  className="w-full rounded-lg border-0"
                  options={options}
                />
              </div>
              <div className="w-1/2 text-right">
                <input
                  className="text-right p-1 h-full w-full"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>

          <div className="max-w-lg bg-white rounded-lg border-2 border-gary-100 w-full mt-2">
            <div className="flex w-full p-2">
              <div className="w-1/2 text-left">
                <Select
                  className="w-full rounded-lg border-0"
                  options={options}
                />
              </div>
              <div className="w-1/2 text-right">
                <input
                  className="text-right p-1 h-full w-full"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full pb-5 mt-4">
            <button className="p-2 border-2 rounded-lg w-full font-medium border-gary-100">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
