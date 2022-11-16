import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";

import Image from "next/image";
import avatar from "../public/avatar.png";

import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contactform from "./components/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thongs Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 px-10 dark:bg-gray-500 md:px-20 lg:px-60 dark:text-yellow-50">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">devedbyaki</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsBrightnessHighFill
                    className="cursor-pointer text-2xl hover:animate-pulse hover:scale-120 transition-transform"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl hover:animate-pulse hover:scale-120 transition-transform"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                )}
              </li>
              <li>
                <a
                  href="https://aquamarine-faythe-9.tiiny.site/"
                  download
                  className="bg-gradient-to-r from-cyan-500 to-purple-400 text-white px-4 py-2 rounded-md ml-8 hover:scale-110 font-sono-medium"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-6xl py-2 text-purple-400 font-sono">
              Thong Hoang
            </h2>
            <h3 className="text-2xl py-2 font-sono">
              Software Engineering student from Tampere.
            </h3>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 sm:pb-0">
              <Link href="https://twitter.com/aki_hoanq" target="_blank">
                <AiFillTwitterCircle />
              </Link>
              <Link
                href="https://www.linkedin.com/in/thong-hoang-04b114214/"
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
              <Link href="https://github.com/th0ng" target="_blank">
                <AiFillGithub />
              </Link>
            </div>
            <div className="mx-auto rounded-full md:h-96 md:w-96 flex items-center relative overflow-hidden mt-20 ">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-400 animate-pulse opacity-80"></div>
              <Image
                src={avatar}
                alt="My avater"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </section>

        <section className="pt-5">
          <About />
        </section>

        <section className="pt-5">
          <Tech />
        </section>

        <section className="pt-5 pb-8">
          <Projects />
        </section>

        <section className="py-5">
          <Contactform />
        </section>
      </main>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © 2022 - Deved By Aki</p>
        </div>
      </footer>
    </div>
  );
}
