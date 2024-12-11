import React from "react";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28 bg-coolGray-900"
      style={{
        backgroundImage: 'url("/assets/elements/pattern-dark2.svg")',
        backgroundPosition: "center",
      }}
      id="about"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                  About Me
                </span>
                <h3 className="mb-4 text-3xl md:text-4xl text-white font-bold tracking-tighter">
                  Alp Toker
                </h3>
                <p className="text-lg md:text-xl leading-8 text-coolGray-400 font-semibold">
                  Fullstack Developer and Designer
                </p>
              </div>
              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap lg:justify-center items-center -mb-2">
                  <a
                    className="inline-block py-3 px-6 mb-2 w-full md:w-auto md:mr-5 text-lg leading-7 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <p className="mb-6 text-lg font-medium leading-7 text-coolGray-400">
              Dedicated Fullstack Developer with 4+ years of experience,
              specialising in both frontend and backend development. Proven
              track record of delivering high-quality solutions and driving
              project success. Versatile and capable of working with various
              technologies, including React.js, Next.js, PHP, SQL, Django, and
              Angular. Skilled in creating seamless user experiences and robust
              backend systems. Committed to continuous learning and staying
              updated with the latest industry trends.
            </p>
            <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-white">
              Header 1
            </h3>
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-400">
              Flex integrates customer data and marketing tools:
            </p>
            <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-coolGray-400">
              <li>
                <span className="text-lg font-medium leading-8 text-coolGray-400">
                  Enterprise software for startups
                </span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-coolGray-400">
                  Time is money. Stop jumping from tool to tool with all the
                  hassle of integrations.
                </span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-coolGray-400">
                  Now you can manage your entire business on one platform.
                </span>
              </li>
            </ol>
            <p className="text-lg font-medium leading-7 text-coolGray-400">
              With a single point of view, Flex integrates customer data and
              marketing tools in one flexible cloud platform that lets you get
              business results wherever they show up.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image
              className="w-full"
              src="/assets/images/rich-text/photo-men.png"
              alt="AlpProfile"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
