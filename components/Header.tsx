import React from "react";
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <img src="/assets/images/logo.png" width={40} />
      </div>
      <div className="sm:col-span-9 mb:col-span-7">
        <span className="font-semibold lg:text-2xl md:text-3xl tracking-tight lg:px-10 px-4">
          SLOTH FINACE
        </span>
      </div>

      <div className="sm:col-span-2 mb:col-span-4">
        {
          router.pathname === "/" ?
          <a
            href="#"
            className="inline-block text-m px-4 py-2 leading-none border rounded border-black 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Launch App
          </a> :
          (router.pathname === "/farm" || router.pathname === "/info")  ? 
          <>
            <a
              href="#"
              className="inline-block text-m px-10 py-2 leading-none border rounded-full border-black 
              hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 bg-gray-300"
            >
              $1.0001
            </a>
            <a
              href="#"
              className="inline-block text-m px-10 ml-5 py-2 leading-none border rounded-full border-black 
              hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              0x47..6f2d
            </a>
          </>
          : null
        }
      </div>
    </>
  );
};

export default Header;
