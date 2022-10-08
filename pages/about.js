import Image from "next/image";
import React from "react";
import avatar from "../public/img/profile.jpg";
export default function about() {
  return (
    <div className="relative  w-screen flex dark:bg-slate-900 overflow-hidden">
      <div className="w-full h-screen max-h-screen ">
        <main className=" w-full h-full min-h-full overflow-scroll  ">
          <div className=" w-10/12 sm:w-3/4 h-full mb-12  flex justify-center items-center mx-auto py-9">
            <div className=" grid grid-cols-1 gap-7 lg:gap-12 lg:grid-cols-3">
              <div className=" px-5 pt-28 sm:pt-0  flex justify-center items-center">
                <div className=" w-60 h-80 bg-gradient-to-tr from-sky-400 to-sky-100 dark:from-sky-800 dark:to-sky-900/40 rounded-2xl relative border-4 border-gray-300 dark:border-gray-600">
                  <div className=" absolute h-full w-full top-0 -left-2 -rotate-6 hover:-rotate-12  origin-bottom transition-all duration-500 border-4 rounded-2xl  border-gray-300 dark:border-gray-600 overflow-hidden">
                    <Image
                      className=" cursor-pointer"
                      alt="avatar"
                      src={avatar}
                      layout="fixed"
                      width={250}
                      height={320}></Image>
                  </div>
                </div>
              </div>

              <div className=" lg:col-span-2 lg:border-l-2 border-sky-500 px-1 lg:px-12 lg:py-6">
                <div className="">
                  <p className=" text-base font-medium  text-gray-500">
                    I am a Junior Web Developer. Hey, there 👋 I am Rasel Kazi
                    from Bangladesh. I am a self-taught web developer who always
                    passionate about expanding and broadening technical
                    knowledge by learning new technologies. I am always eager to
                    understand how and why of the technologies before deep
                    diving into it. Currently, I am expanding my knowledge on
                    Javascript
                  </p>
                </div>
                <div className=" flex justify-start items-center py-10 pb-20 md:pb-2">
                  <div className=" mr-4 sm:mr-14">
                    <h1 className=" text-base sm:text-xl font-semibold text-gray-400 dark:text-gray-600 capitalize tracking-widest">
                      contact us
                    </h1>
                    <div className=" flex mt-3 justify-between">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100074320713056"
                        className=" mr-4 px-3 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 
                dark:from-slate-800/25 dark:to-slate-700
                  shadow-lg text-2xl font-bold text-blue-500 cursor-pointer hover:translate-y-1 transition-all duration-300"
                        rel="noreferrer">
                        f
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
                        className=" px-2 mr-4 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 dark:from-slate-800/25 dark:to-slate-700 shadow-lg text-2xl font-bold text-sky-500 cursor-pointer hover:translate-y-1 transition-all duration-300"
                        rel="noreferrer">
                        in
                      </a>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
                        className=" p-2  rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 dark:from-slate-800/25 dark:to-slate-700 shadow-lg text-2xl font-bold text-red-800 cursor-pointer hover:translate-y-1 transition-all duration-300"
                        rel="noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-youtube w-5 h-5 t"
                          viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center mt-4">
                    <div className=" h-14 w-14 rounded-full border-4 border-sky-500 overflow-hidden">
                      <Image
                        className=" cursor-pointer rounded-full"
                        alt="avatar"
                        src={avatar}
                        layout="fixed"
                        width={50}
                        height={55}></Image>
                    </div>
                    <div className=" ml-5">
                      <h1 className=" text-base sm:text-xl font-semibold dark:text-gray-300">
                        Rasel kazi
                      </h1>
                      <p className=" text-sm sm:text-base  text-gray-400 dark:text-gray-600">
                        web developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
