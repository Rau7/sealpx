import React from "react";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <section
      className="bg-coolGray-900"
      style={{
        backgroundImage: 'url("/assets/elements/pattern-dark.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <a className="block md:mx-auto mb-5 max-w-max" href="#">
            <Image
              className="h-8"
              src="/assets/logos/flex-ui-green.svg"
              alt="Footer logo"
              width={32}
              height={32}
            />
          </a>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                href="#"
              >
                Home
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                href="#"
              >
                About
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                href="#"
              >
                Skills
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                href="#"
              >
                Blog
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                href="#"
              >
                Pricing
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-coolGray-800" />
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-lg md:text-xl text-coolGray-400 font-medium text-center">
          © 2024 Alp Toker. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterComponent;
