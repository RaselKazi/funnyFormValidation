import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import avatar from "../public/img/profile.jpg";
import logo from "../public/logo.png";
export default function Home() {
  const [ariaX, setAriaX] = useState(0);
  const [ariaY, setAriaY] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [position, setPosition] = useState(false);
  const [shake, setShake] = useState(false);
  const router = useRouter();
  const move = () => {
    setShow(true);
    setShake(true);
    setPosition(true);
    setAriaX(Math.min(Math.random() * 100, 90));
    setAriaY(Math.min(Math.random() * 100, 90));
    setTimeout(function () {
      setShake(false);
    }, 800);
  };
  const FixedBan = () => {
    setShow(false);
    setPosition(false);
    setAriaX(0);
    setAriaY(0);
  };
  const handelSubmit = () => {
    const pas =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const emailInput = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email || password || emailInput.test(email) || pas.test(password)) {
      router.push("/about");
    } else {
      handelButton();
    }
  };
  const handelButton = () => {
    const pas =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const emailInput = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email && emailInput.test(email)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
    if (password && pas.test(password)) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
    if (!email || !password || !emailInput.test(email) || !pas.test(password)) {
      move();
    } else {
      setShow(false);
      setAriaX(0);
      setAriaY(0);
    }
  };
  return (
    <div className=" p-5 py-10  h-screen w-screen flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
      <Image
        className=" opacity-20 absolute "
        src="/img/background.jpg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        quality={50}
      />

      <div>
        <div className=" flex justify-center items-center mt-20 pb-3">
          <Image
            className=" cursor-pointer rounded-full"
            alt="avatar"
            src={logo}
            layout="fixed"
            width={40}
            height={40}></Image>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
            className=" text-xl text-slate-50  pl-3 hover:text-gray-500 transition duration-300 cursor-pointer  z-40"
            rel="noreferrer">
            Learn with Kazi
          </a>
        </div>
        <h1 className="text-2xl sm:text-4xl text-slate-50 pb-4 sm:pb-10">
          Good to see you again
        </h1>
      </div>
      <div className=" z-30 max-w-2xl rounded-2xl shadow-xl p-4 sm:px-8 sm:pt-20 bg-slate-900/40  backdrop-blur-sm border border-sky-500/30 ">
        <div className=" sm:w-96">
          <input
            className={` w-full   py-1  sm:py-2 px-4  border-2
          rounded-md outline-none   transition duration-500 bg-slate-900/10 sm:text-2xl  text-sky-500 ${
            emailCheck
              ? " border-red-500/60  focus:border-red-600"
              : " border-sky-500/40  focus:border-sky-600 "
          }   ${!emailCheck || shake ? "active" : ""}`}
            onFocus={FixedBan}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
          />
          <p className=" text-red-500 py-1">
            {`${emailCheck ? " Invalid Email " : "*"}`}
          </p>
        </div>

        <div className=" sm:w-96">
          <input
            className={` w-full py-1  sm:py-2 px-4  border-2
          rounded-md outline-none   transition duration-500 bg-slate-900/10 sm:text-2xl  text-sky-500 ${
            passwordCheck
              ? " border-red-500/60  focus:border-red-600"
              : " border-sky-500/40  focus:border-sky-600 "
          }   ${!passwordCheck || shake ? "active" : ""}`}
            onFocus={FixedBan}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <p className=" text-red-500 py-1">
            {`${
              passwordCheck
                ? "Input Password  [8-15 characters which contain at least one lowercase , uppercase , digit, and Symbol ]"
                : "*"
            }`}
          </p>
        </div>
        <div className={`  h-20  `}>
          <div
            style={{
              position: "fixed",
              display: `${show ? " none  " : " block"}`,
            }}
            onTouchStart={handelButton}
            onMouseEnter={handelButton}
            onClick={handelSubmit}
            className={` py-2 px-6 mb-4 cursor-pointer rounded-md bg-sky-500 text-white capitalize text-xl transition-all duration-100 z-50  shadow-lg shadow-blue-400/50`}>
            Login
          </div>
        </div>
      </div>
      {show && (
        <div>
          <div
            style={{
              top: `${ariaX}%`,
              left: `${ariaY}%`,
              position: "fixed",
            }}
            onTouchStart={handelButton}
            onMouseEnter={handelButton}
            className={` py-2 px-6 mb-4 cursor-pointer rounded-md bg-sky-500 text-white capitalize text-xl transition-all duration-100 z-50  shadow-lg shadow-blue-400/50`}>
            Login
          </div>
        </div>
      )}

      <div className=" py-10 ">
        <h1 className=" text-base sm:text-xl font-semibold text-gray-400 dark:text-gray-400 capitalize tracking-widest">
          contact us
        </h1>

        <div className=" flex justify-between items-center w-full ">
          <div className=" flex justify-center items-center mt-4 mr-10">
            <div className=" h-14 w-14  overflow-hidden">
              <Image
                className=" cursor-pointer rounded-full"
                alt="avatar"
                src={logo}
                layout="fixed"
                width={50}
                height={50}></Image>
            </div>
            <div className=" ml-5 z-40">
              <h1 className=" text-base sm:text-xl font-semibold dark:text-gray-200">
                YouTube
              </h1>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
                className=" text-sm sm:text-base text-gray-400 dark:text-gray-400 hover:text-gray-500 transition duration-300 cursor-pointer "
                rel="noreferrer">
                learn with kazi
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
                height={50}></Image>
            </div>
            <div className=" ml-5 z-40">
              <h1 className=" text-base sm:text-xl font-semibold dark:text-gray-200">
                Linkedin
              </h1>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
                className=" text-sm sm:text-base  text-gray-400 dark:text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300 "
                rel="noreferrer">
                @rasel-kazi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
