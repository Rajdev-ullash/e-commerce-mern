import React, { Fragment } from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import {
  FaBars,
  FaShippingFast,
  FaSearch,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import Marquee from "react-fast-marquee";
const MainNav = () => {
  return (
    <Fragment>
      <div className="w-full font-Roboto tracking-wide">
        <div className="container mx-auto px-3 sm:px-32 py-4">
          <div className="flex justify-between items-center">
            <div className="logo">
              <div className="flex gap-1">
                <h5 className="text-lg font-semibold">UniGa</h5>
              </div>
            </div>
            <div className="nav-item">
              <ul className="flex gap-4 cursor-pointer font-semibold">
                <li className="hover hover:text-red-500">Home</li>
                <li className="hover hover:text-red-500 group relative">
                  {/* on hover show a product 4 category */}
                  Shop
                  <div className="absolute hidden group-hover:block">
                    {/* w-96 h-48 bg-gray-400 card in middle position */}
                    <div className="w-[870px] h-64 -ml-60 mt-4 shadow hover:shadow-gray-400 bg-white transition hover:transition-all hover:duration-500 hover:ease-out ">
                      <div className="flex flex-row gap-4 px-2 py-2 justify-center items-center">
                        <div className="w-1/4 h-full mt-3 transition-all hover:-translate-y-1 duration-700">
                          <div className="flex flex-col gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                              alt=""
                              className="w-full object-cover h-48 rounded"
                            />
                            <div className="text-sm font-medium">
                              <span className="block text-center">
                                New Product
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/4 h-full mt-3 transition-all hover:-translate-y-1 duration-700">
                          <div className="flex flex-col gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                              alt=""
                              className="w-full object-cover h-48 rounded"
                            />
                            <div className="text-sm font-medium">
                              <span className="block text-center">
                                New Product
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/4 h-full mt-3 transition-all hover:-translate-y-1 duration-700">
                          <div className="flex flex-col gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                              alt=""
                              className="w-full object-cover h-48 rounded"
                            />
                            <div className="text-sm font-medium">
                              <span className="block text-center">
                                New Product
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/4 h-full mt-3 transition-all hover:-translate-y-1 duration-700">
                          <div className="flex flex-col gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                              alt=""
                              className="w-full object-cover h-48 rounded"
                            />
                            <div className="text-sm font-medium">
                              <span className="block text-center">
                                New Product
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="hover hover:text-red-500">About</li>
                <li className="hover hover:text-red-500">Contact</li>
              </ul>
            </div>
            <div className="helpline">
              <div className="flex flex-row gap-2 justify-center items-center hover:text-red-500 cursor-pointer">
                <RiCustomerService2Line className="text-xl" />
                <span className="block truncate text-sm font-medium">
                  (+92) 0123 456 789
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-nav bg-blue-900">
          <div className="container mx-auto px-3 sm:px-32 flex flex-row items-center">
            <div className="w-1/4 bg-orange-500 cursor-pointer group relative ">
              <div className="px-4 py-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="">
                    <h1 className="text-xl uppercase font-semibold text-white">
                      Top categories
                    </h1>
                  </div>
                  <div className="">
                    <FaBars className="text-2xl text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute hidden group-hover:block ">
                {/* category Name */}
                <div className="w-80 bg-white mt-4 shadow group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-200">Headphones</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Headphones</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Headphones</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Headphones</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-1/4 py-3 px-5">
              <div className="flex gap-4">
                <Marquee
                  gradient={false}
                  speed={20}
                  className="text-white font-semibold text-normal uppercase"
                >
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row px-2 gap-2 justify-center items-center">
                      <div className="icon">
                        <FaShippingFast className="text-normal" />
                      </div>
                      <div className="text">
                        <span className="block text-normal font-medium">
                          Free Shipping
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <div className="icon">
                        <RiSecurePaymentLine className="text-normal text-white" />
                      </div>
                      <div className="text">
                        <span className="block text-normal font-medium">
                          Secure Payment
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <div className="icon">
                        <AiOutlineGift className="text-normal" />
                      </div>
                      <div className="text">
                        <span className="block text-normal font-medium">
                          Gift Voucher
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <div className="icon">
                        <BsAward className="text-normal" />
                      </div>
                      <div className="text">
                        <span className="block text-normal font-medium">
                          Best Quality
                        </span>
                      </div>
                    </div>
                  </div>
                </Marquee>
                {/* next marquee will play after end of first marquee*/}

                {/* <Marquee gradient={false} speed={30} loop={true} delay={5}>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <div className="icon">
                        <AiOutlineGift className="text-normal" />
                      </div>
                      <div className="text">
                        <span className="block text-normal font-medium">
                          Gift Voucher
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <div className="icon">
                        <BsAward className="text-normal" />
                      </div>
                      <div className="text">
                        <span className="block text-normal font-medium">
                          Best Quality
                        </span>
                      </div>
                    </div>
                  </div>
                </Marquee> */}
              </div>
            </div>
            <div className="w-1/4 py-3 px-5">
              {/* search bar with search icon */}
              <div className="">
                <div className="relative flex flex-row items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                  <div className="absolute right-0 top-0 mt-3 mr-2">
                    <FaSearch className="text-normal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-9 text-white">
              {/* cart icon with cart count & price */}
              <div className="flex flex-row justify-center items-center bg-orange-500 py-2">
                <div className="flex flex-row gap-2 py-2">
                  <div className="icon flex flex-row gap-2 items-center">
                    <FaShoppingBag className="text-xl" />
                    <div className="text-cart">
                      <span className="block text-normal font-medium">
                        2 item
                      </span>
                    </div>
                  </div>
                  <div>-</div>
                  <div className="cart-price">
                    <span className="block text-normal font-medium">
                      $ 100.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainNav;
