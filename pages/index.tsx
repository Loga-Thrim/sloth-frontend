import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 flex justify-center min-h-screen">
      <div className="grid grid-cols-12 py-7">
        <Header></Header>

        <div className="font-semibold sm:text-5xl mb:text-2xl py-5 col-span-12">
          BEST STABLE YIELD FARMING <br />
          FOR HODLER
        </div>

        <div className="col-span-12 items-center flex-col">
          <div className="mx-auto sm:mt-10 mb:mt-4 text-m">
            &nbsp; We find the best yield farming for your asset to maximizing the
            Rewards 🏆 <br />
            And using optimal times to convert rewards into BTC ETH BNB or
            whatever!
          </div>

          <div className="mx-auto mt-7">
            <a
              href="#"
              className="inline-block text-xl px-16 py-3 leading-none border rounded border-black hover:text-teal-500
                  hover:bg-white mt-4 lg:mt-0 sm:ml-0 mb:ml-2"
            >
              Launch App
            </a>
            <span className="px-5"></span>
            <a
              href="#"
              className="inline-block text-xl px-16 py-3 leading-none border rounded border-black hover:text-teal-500
                hover:bg-white mt-4 lg:mt-0 sm:ml-0 mb:ml-2"
            >
              Buy $SLO
            </a>
          </div>
        </div>

        <div className="col-span-12 h-14"></div>
        <div className="col-span-12 sm:h-10 mb:h-0"></div>
        <div className="sm:col-span-4 mb:col-span-12 mx-auto sm:text-left mb:text-center">
          <span className="text-5xl">$0.5001</span> <br />
          <span className="text-m">SLO Price</span>
        </div>
        <div className="sm:col-span-4 mb:col-span-12 mx-auto sm:text-left mb:text-center sm:mt-0 mb:mt-6">
          <span className="text-5xl">$5M</span> <br />
          <span className="text-m">Total Trending Volumn, 24h</span>
        </div>
        <div className="sm:col-span-4 mb:col-span-12 mx-auto sm:text-left mb:text-center sm:mt-0 mb:mt-6">
          <span className="text-5xl">$100M</span> <br />
          <span className="text-m">Total Value Lock</span>
        </div>

        <div className="col-span-12 h-20"></div>
        <div className="sm:col-span-6 grid mb:col-span-12">
          <div className="font-semibold text-3xl">Farming</div> <br />
          <div className="text-gray-400">
            Liquidity Providers earn fees in stablecoin currency for every{" "}
            <br />
            swap made through the underlying liquidity pools. Liquidity{" "}
            <br />
            Providers also receive LP tokens, which can be staked to <br />
            earn high yields.
          </div> <br />
          <div className="font-semibold text-3xl">Each Transactions</div> <br />
          <div className="text-gray-400">
            - Liquidity Fee 0.3% <br />
            <br />
            - - - 0.20% pay to holder <br />
            <br />
            - - - 0.05% dev fund
          </div>
        </div>
        <div className="sm:col-span-3 mb:col-span-6 mx-auto sm:mt-0 mb:mt-10">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              width: 160,
              borderRadius: "50%",
              border: "1px solid rgba(0, 0, 0, .4)",
            }}
          >
            SLO
          </div> <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              width: 160,
              borderRadius: "50%",
              border: "1px solid rgba(0, 0, 0, .4)",
            }}
          >
            BNB
          </div>
        </div>
        <div className="sm:col-span-3 mb:col-span-6 sm:mt-0 mb:mt-10">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              width: 160,
              borderRadius: "50%",
              border: "1px solid rgba(0, 0, 0, .4)",
            }}
          >
            BUSD
          </div> <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              width: 160,
              borderRadius: "50%",
              border: "1px solid rgba(0, 0, 0, .4)",
            }}
            className=""
          >
            USDT
          </div>
        </div>

        <div className="grid grid-cols-12 col-span-12 mt-20 pt-10 pb-10 rounded-lg border border-black">
          <img src="/assets/images/logo.png" alt="" className="mx-auto col-span-12" />
          <span className="font-semibold sm:text-3xl mb:text-xl col-span-12 mx-auto pt-10 pb-10">
            SLOTH CONTRACT ADDRESS
          </span>
          <span className="sm:text-2xl mb:text-m mx-auto col-span-12 pb-10 break-all">
            0xea90DC6F64d18771Ca1dac8098526a9082265B42
          </span>
          <div className="sm:col-span-4 mb:col-span-12 mx-auto">
            <a
              href="#"
              className="text-xl px-16 py-3 leading-none border rounded border-black hover:text-teal-500
                  hover:bg-white mt-4 lg:mt-0"
            >
              Live Chart
            </a>
          </div>
          <div className="sm:col-span-4 mb:col-span-12 mx-auto sm:mt-0 mb:mt-14">
            <a
              href="#"
              className="text-xl px-16 py-3 leading-none border rounded border-black hover:text-teal-500
                  hover:bg-white mt-4 lg:mt-0 col-span-4"
            >
              Buy SLO Token
            </a>
          </div>
          <div className="sm:col-span-4 mb:col-span-12 mx-auto sm:mt-0 mb:mt-14">
            <a
              href="#"
              className="text-xl px-16 py-3 leading-none border rounded border-black hover:text-teal-500
                  hover:bg-white mt-4 lg:mt-0 col-span-4"
            >
              Farming
            </a>
          </div>
        </div>

        <div className="col-span-12 sm:h-24 mb:h-14"></div>
        <div className="sm:col-span-6 mb:col-span-12 mx-auto">
          <div
            style={{
              borderRadius: "50%",
              width: 350,
              height: 350,
              border: "1px solid black",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                background: "rgba(0, 0, 0, .4)",
                width: 1,
                height: 175,
                top: "25%",
                left: "49%",
              }}
            ></div>
            <img
              src="/assets/images/circleline.png"
              style={{
                width: 175,
                position: "absolute",
                right: "1%",
                top: "38.5%",
                transform: "translate(0, -50%)",
              }}
              alt=""
            />
            <span
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "45%",
                left: "50%",
                color: 'rgba(0, 0, 0, .6)'
              }}
              className="font-semibold text-9xl"
            >
              250M
            </span>
            <span
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "65%",
                left: "50%",
                width: "100%",
                textAlign: "center",
                color: 'rgba(0, 0, 0, .6)'
              }}
              className="text-xl mt-4"
            >
              MAX TOTAL SUPPLY
            </span>
          </div>
        </div>
        <div className="sm:col-span-6 mb:col-span-12 mx-auto sm:mt-0 mb:mt-10">
          <span className="font-semibold text-3xl">Tokenomics</span>
          <div className="sm:mt-16 mb:mt-4 leading-9 text-gray-500">
            Token Distribution <br />
            - 250,000,000 max total supply <br />
            - 200,000,000 for fair launch (80%) <br />
            - 25,000,000 for dev fund (10%) <br />
            - 15,000,000 for war chest (6%) <br />- 10,000,000 for marketing
            (4%)
          </div>
        </div>

        <footer className="grid grid-cols-12 col-span-12 mt-24 pt-24 pb-24">
          <span className="font-semibold text-4xl col-span-12 mx-auto">
            Join Our Community
          </span>
          <div className="grid grid-cols-12 mx-auto col-span-12 pt-14 pb-14">
            <div></div>
            <img className="col-span-2 m-3" src="/assets/icons/git.png" alt="" width={35} />
            <img className="col-span-2 m-3" src="/assets/icons/twiter.png" alt="" width={35} />
            <img className="col-span-2 m-3" src="/assets/icons/m.png" alt="" width={35} />
            <img className="col-span-2 m-3" src="/assets/icons/turtle.png" alt="" width={35} />
            <img className="col-span-2 m-3" src="/assets/icons/tele.png" alt="" width={35} />
          </div>
          <div className="col-span-12 flex justify-center">
            <span className="font-semibold text-m ml-5 mr-5">Audited by</span>
            <img
              className="ml-5 mr-5"
              src="/assets/icons/audited1.png"
              style={{ maxHeight: 20 }}
              alt=""
            />
            <img
              className="ml-5 mr-5"
              src="/assets/icons/audited2.png"
              style={{ maxHeight: 20 }}
              alt=""
            />
          </div>
        </footer>

      </div>
    </div>
  );
}
