import React from "react";
import Image from "next/image";

const PricingComponent = () => {
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28 bg-coolGray-900"
      style={{
        backgroundImage: 'url("/assets/elements/pattern-dark2.svg")',
        backgroundPosition: "center",
      }}
      id="pricing"
    >
      <div className="container px-4 mx-auto">
        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 font-medium uppercase rounded-9xl">
          Pricing
        </span>
        <h3 className="mb-4 text-3xl md:text-5xl text-white font-bold tracking-tighter">
          Flexible pricing plan for your website
        </h3>
        <p className="mb-12 text-lg md:text-xl text-coolGray-400 font-medium">
          Pricing that scales with your business immediately. We have always got
          a plan for you!
        </p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div
              className="flex flex-col items-center pt-10 px-8 pb-8  rounded-md shadow-md hover:scale-105 transition duration-500"
              style={{ backgroundColor: "rgb(43, 43, 43)" }}
            >
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                Pricing
              </span>
              <h3 className="mb-4 text-lg md:text-xl text-green-500 font-medium">
                Plan - A
              </h3>
              <div className="mb-4">
                <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                  $
                </span>
                <span className="text-5xl text-coolGray-900 font-medium">
                  100
                </span>
                <span className="text-3xl text-coolGray-900 font-medium">
                  /mo
                </span>
              </div>
              <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                Billed annually
              </p>
              <ul className="self-start mb-8">
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>500 team members</span>
                </li>
              </ul>
              <a
                className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Request a Demo
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div
              className="flex flex-col items-center pt-10 px-8 pb-8rounded-md shadow-md hover:scale-105 transition duration-500"
              style={{ backgroundColor: "rgb(43, 43, 43)" }}
            >
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                Pricing
              </span>
              <h3 className="mb-4 text-lg md:text-xl text-green-500 font-medium">
                Plan - B
              </h3>
              <div className="mb-4">
                <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                  $
                </span>
                <span className="text-5xl text-coolGray-900 font-medium">
                  250
                </span>
                <span className="text-3xl text-coolGray-900 font-medium">
                  /mo
                </span>
              </div>
              <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                Billed annually
              </p>
              <ul className="self-start mb-8">
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>500 team members</span>
                </li>
              </ul>
              <a
                className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Request a Demo
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div
              className="flex flex-col items-center pt-10 px-8 pb-8 rounded-md shadow-md hover:scale-105 transition duration-500"
              style={{ backgroundColor: "rgb(43, 43, 43)" }}
            >
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                Pricing
              </span>
              <h3 className="mb-4 text-lg md:text-xl text-green-500 font-medium">
                Plan - C
              </h3>
              <div className="mb-4">
                <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                  $
                </span>
                <span className="text-5xl text-coolGray-900 font-medium">
                  999
                </span>
                <span className="text-3xl text-coolGray-900 font-medium">
                  /year
                </span>
              </div>
              <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                Billed annually
              </p>
              <ul className="self-start mb-8">
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>Working materials in Figma</span>
                </li>
                <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>100GB cloud storage</span>
                </li>
                <li className="flex items-center text-coolGray-500 font-medium">
                  <Image
                    className="mr-3 w-full"
                    src="/assets/elements/pricing/checkbox-green.svg"
                    width={24}
                    height={24}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span>500 team members</span>
                </li>
              </ul>
              <a
                className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
