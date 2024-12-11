"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroComponent = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section
      className="overflow-hidden "
      style={{
        backgroundImage: 'url("/assets/elements/pattern-dark.svg")',
        backgroundPosition: "center",
      }}
      id="home"
    >
      <div className="relative bg-coolGray-900 overflow-hidden">
        <div className="bg-coolGray-900">
          <nav className="flex justify-between p-6 px-4">
            <div className="flex justify-between items-center w-full">
              <div className="w-1/2 xl:w-1/3">
                <Link href="#">
                  <Image
                    className="h-8"
                    src="/assets/logos/flex-ui-green.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="w-1/2 xl:w-1/3">
                <ul className="hidden xl:flex xl:justify-center">
                  <li className="mr-12">
                    <Link
                      className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                      href="#home"
                      scroll={true}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mr-12">
                    <Link
                      className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                      href="#about"
                      scroll={true}
                    >
                      About
                    </Link>
                  </li>
                  <li className="mr-12">
                    <Link
                      className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                      href="#skills"
                      scroll={true}
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="mr-12">
                    <Link
                      className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                      href="#blog"
                      scroll={true}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mr-12">
                    <Link
                      className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                      href="#pricing"
                      scroll={true}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                      href="#contact"
                      scroll={true}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="navbar-burger self-center xl:hidden"
            >
              <svg
                width={35}
                height={35}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-coolGray-800"
                  width={32}
                  height={32}
                  rx={6}
                  fill="currentColor"
                />
                <path
                  className="text-coolGray-400"
                  d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </nav>
          {mobileNavOpen && (
            <div
              className={`navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50`}
            >
              <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-coolGray-900">
                <nav className="relative p-6 h-full overflow-y-auto">
                  <div className="flex flex-col justify-between h-full">
                    <Link href="#">
                      <Image
                        className="h-8"
                        src="/assets/logos/flex-ui-green.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <ul className="py-6">
                      <li>
                        <Link
                          className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                          href="#home"
                          scroll={true}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                          href="#about"
                          scroll={true}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                          href="#skills"
                          scroll={true}
                        >
                          Skills
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                          href="#blog"
                          scroll={true}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                          href="#pricing"
                          scroll={true}
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                          href="#contact"
                          scroll={true}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <button
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  className="navbar-close absolute top-5 p-4 right-3"
                >
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.94004 5.99988L11.14 1.80655C11.2656 1.68101 11.3361 1.51075 11.3361 1.33321C11.3361 1.15568 11.2656 0.985415 11.14 0.859879C11.0145 0.734344 10.8442 0.663818 10.6667 0.663818C10.4892 0.663818 10.3189 0.734344 10.1934 0.859879L6.00004 5.05988L1.80671 0.859879C1.68117 0.734344 1.51091 0.663819 1.33337 0.663819C1.15584 0.663819 0.985576 0.734344 0.860041 0.859879C0.734505 0.985415 0.66398 1.15568 0.66398 1.33321C0.66398 1.51075 0.734505 1.68101 0.860041 1.80655L5.06004 5.99988L0.860041 10.1932C0.797555 10.2552 0.747959 10.3289 0.714113 10.4102C0.680267 10.4914 0.662842 10.5785 0.662842 10.6665C0.662842 10.7546 0.680267 10.8417 0.714113 10.9229C0.747959 11.0042 0.797555 11.0779 0.860041 11.1399C0.922016 11.2024 0.99575 11.252 1.07699 11.2858C1.15823 11.3197 1.24537 11.3371 1.33337 11.3371C1.42138 11.3371 1.50852 11.3197 1.58976 11.2858C1.671 11.252 1.74473 11.2024 1.80671 11.1399L6.00004 6.93988L10.1934 11.1399C10.2554 11.2024 10.3291 11.252 10.4103 11.2858C10.4916 11.3197 10.5787 11.3371 10.6667 11.3371C10.7547 11.3371 10.8419 11.3197 10.9231 11.2858C11.0043 11.252 11.0781 11.2024 11.14 11.1399C11.2025 11.0779 11.2521 11.0042 11.286 10.9229C11.3198 10.8417 11.3372 10.7546 11.3372 10.6665C11.3372 10.5785 11.3198 10.4914 11.286 10.4102C11.2521 10.3289 11.2025 10.2552 11.14 10.1932L6.94004 5.99988Z"
                      fill="#8896AB"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="pt-12 pb-28 md:pb-72">
          <div className="container px-4 mx-auto">
            <div className="mx-auto text-center max-w-3xl">
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">
                Lets Begin!
              </span>
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tighter">
                SeaL Digital Agency
              </h1>
              <p className="mb-8 mx-auto text-lg md:text-xl text-coolGray-400 font-medium max-w-3xl">
                We are a team of experienced developers, designers who are
                passionate about creating cutting-edge web and mobile
                applications
              </p>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <Link
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Request a Demo
                  </Link>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <Link
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-100 font-medium text-center bg-coolGray-700 hover:bg-coolGray-800 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-20 md:pb-32 mx-auto -mt-40 md:-mt-72">
        <div className="relative mx-auto max-w-max">
          <Image
            className="absolute z-20 -left-8 -top-8 w-28 md:w-auto"
            src="/assets/elements/wave-green.svg"
            alt="Wave"
            width={100}
            height={100}
          />
          <Image
            className="absolute -right-8 -bottom-8 w-28 md:w-auto"
            src="/assets/elements/wave-yellow.svg"
            alt="Wave"
            width={100}
            height={100}
          />
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-green-500 hover:text-green-600"
            width={64}
            height={64}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={32} cy={32} r={32} fill="currentColor" />
            <path
              className="text-white"
              d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative overflow-hidden rounded-7xl">
            <img src="/assets/images/headers/placeholder-video2.png" />
            <video
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none"
              poster="/assets/images/testimonials/video-frame.jpeg"
              muted
            >
              <source
                src="https://static.shuffle.dev/files/video-placeholder.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
