"use client";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { discussion } from "../constants/discussionForum";
import { marketStories } from "../constants/marketStories";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Discussion Forum");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex justify-center bg-[#172053] text-white space-x-4 py-2 fixed w-full ">
        <button
          className={`text-lg ${
            activeSection === "Discussion Forum"
              ? "font-semibold  border-b-2 border-red-500"
              : ""
          }`}
          onClick={() => setActiveSection("Discussion Forum")}
        >
          Discussion Forum
        </button>
        <button
          className={`text-lg ${
            activeSection === "Market Stories"
              ? "font-semibold  border-b-2 border-red-500"
              : ""
          }`}
          onClick={() => setActiveSection("Market Stories")}
        >
          Market Stories
        </button>
      </div>
      <div className="flex h-screen  ">
        <div
          className={`bg-[#172053] text-white w-64 ${
            isOpen ? "md:block fixed top-0 h-screen z-50 " : "hidden"
          }`}
        >
          <ul className="">
            <div className="py-4 pl-4 flex items-center justify-between relative">
              <h1>
                <FaUserLarge size={32} />
              </h1>
              <span className="relative right-6">Hello, User</span>
              <span className="h-2 w-2 bg-red-600 rounded-full absolute right-5 top-4"></span>
              <h1 className="pr-4">
                <IoNotificationsSharp size={32} />
              </h1>
            </div>
            <hr />
            <div className="pt-4 flex flex-col items-center ">
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full flex px-4 items-center">
                <BiSolidMessageDetail size={20} className="mr-2" />
                Discussion Forum
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full flex px-4 items-center">
                <BiSolidDollarCircle size={20} className="mr-2" />
                Market Stories
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full  px-10">
                Sentiment
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full  px-10">
                Market
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full  px-10">
                Sector
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full  px-10">
                Watchlist
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full  px-10">
                Events
              </li>
              <li className="cursor-pointer hover:bg-[#131432] py-2 w-full  px-10">
                News/Interview
              </li>
            </div>
          </ul>
        </div>

        <div className="flex-grow relative">
          <div
            className={`h-screen ${
              isOpen ? "max-[768px]:ml-64  z-50 fixed  ml-64 top-[45%]" : ""
            }`}
          >
            <div className={`h-16 ${isOpen ? "" : "relative top-[42%]"}`}>
              <button
                className="text-white bg-[#172053] py-6 "
                onClick={toggleSidebar}
              >
                <FaCaretRight />
              </button>
            </div>
            <div className="p-3 overflow-y-auto">{children}</div>
          </div>
        </div>
      
      <div className="flex justify-between w-[90vw] max-[768px]:hidden ">
        <div className={`${isOpen? "md:ml-36":""}`}>
          <h1 className="lg:text-3xl text-2xl text-red-600 font-semibold mb-6 mt-2 bg-gray-200 w-72">
            Discussion Forum
          </h1>
          <div className="space-y-8">
            {discussion.map((item, index) => (
              <div
                className="w-[50vw] h-32   rounded-md shadow-md shadow-gray-500 "
                key={index}
              >
                <div className="flex items-center relative pt-2 pl-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="pl-2">{item.name}</h1>
                  <span className="ml-2 px-2 bg-blue-700 rounded-xl text-xs text-white">
                    {item.sector}
                  </span>
                  <span className="text-xs text-blue-700 absolute right-2 font-medium">
                    {item.updated}
                  </span>
                </div>
                <p className="text-sm pl-14 pt-2">{item.description}</p>
                <div className="flex mt-3 justify-between px-8 items-center text-xs font-semibold ">
                  <h1 className="flex items-center space-x-1">
                    <FaRegHeart size={18} />
                    <span>2k</span>
                  </h1>
                  <h1 className="flex items-center space-x-1">
                    <FiEye size={18} />
                    <span>2k</span>
                  </h1>
                  <h1 className="flex items-center space-x-1">
                    <FiMessageSquare size={18} />
                    <span>2k Comments</span>
                  </h1>
                  <h1 className="flex items-center space-x-1">
                    <FiShare2 size={18} />
                    <span>Share</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[25vw] ">
          <h1 className="lg:text-3xl text-2xl text-red-600 font-semibold mb-6 mt-2 bg-gray-200 w-64">
            Market Stories
          </h1>
          <div className="space-y-6">

          {marketStories.map((item,index) =>(

          <div className="flex flex-col w-72   " key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-72 h-36"
                src="https://v1.tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-4 py-4">
                <div className="font-bold text-lg mb-2">{item.name}</div>
                <p className="text-gray-700 text-xs">
                 {item.description}
                </p>
              </div>
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
          
     {/* Mobile Responsive */}
     <div className="w-full mr-6 mt-2 md:hidden relative top-12  ">
            {activeSection === "Discussion Forum" && (
              <div className="flex flex-col items-center ">
               
                <div className="space-y-8 ">
                  {discussion.map((item, index) => (
                    <div
                      className="w-full h-36 rounded-md shadow-md shadow-gray-500"
                      key={index}
                    >
                      {/* Discussion Forum Content */}
                      <div className="flex items-center relative pt-2 pl-2">
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                          <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <h1 className="pl-2">{item.name}</h1>
                        <span className="ml-2 px-2 bg-blue-700 rounded-xl text-xs text-white">
                          {item.sector}
                        </span>
                        <span className="text-xs text-blue-700 absolute right-2 font-medium">
                          {item.updated}
                        </span>
                      </div>
                      <p className="text-xs pl-14 pt-2">{item.description}</p>
                      <div className="flex mt-3 justify-between px-6 items-center text-xs font-semibold">
                        <h1 className="flex items-center space-x-1">
                          <FaRegHeart size={18} />
                          <span>2k</span>
                        </h1>
                        <h1 className="flex items-center space-x-1">
                          <FiEye size={18} />
                          <span>2k</span>
                        </h1>
                        <h1 className="flex items-center space-x-1">
                          <FiMessageSquare size={18} />
                          <span>2k Comments</span>
                        </h1>
                        <h1 className="flex items-center space-x-1">
                          <FiShare2 size={18} />
                          <span>Share</span>
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Market Stories Section */}
            {activeSection === "Market Stories" && (
              <div className="flex flex-col items-center">
               
                <div className="space-y-6">
                  {marketStories.map((item, index) => (
                    <div className="flex flex-col w-72 " key={index}>
                      {/* Market Stories Content */}
                      <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img
                          className="w-72 h-36"
                          src="https://v1.tailwindcss.com/img/card-top.jpg"
                          alt="Sunset in the mountains"
                        />
                        <div className="px-4 py-4">
                          <div className="font-bold text-lg mb-2">
                            {item.name}
                          </div>
                          <p className="text-gray-700 text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
      </div>
    </>
  );
};

export default Layout;
