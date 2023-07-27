/* eslint-disable @next/next/no-img-element */
"use client" // this is a client component
import React from "react"
import Image from "next/image"
import TextLoop from "../../lib/TextLoop";
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  const loopItems = [
    "Web3.0 Developer.",
    "Metaverse Developer.",
    "AI Developer.",
    "Blockchain Developer.",
    "Web Developer.",
    "App Developer.",
    "Game Developer.",
  ];
  return (
    <section
      id="home"
      className="h-full items-center justify-center text-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-5 my-10 py-16 sm:py-32 md:py-40 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2">
          <img className="h-20 w-20" src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" alt="" />
          <Image
            src="/profile-pic.png"
            alt="profile-pic"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> Hi, I&#39;m Rana Rabees!</h1>
          <h1 className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m{" "}
            <span className="font-semibold text-teal-600">
              Full Stack
            </span> Developer. <br />
            <p className="font-semibold">
              Also I&#39;m a{" "}
              <TextLoop loopItems={loopItems} delay={3000} />
            </p><br />
          </h1>
          <Link
            to="projects"
            className="hover:cursor-pointer shadow-xl hover:shadow-2xl text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            My Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="hover:cursor-pointer active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="hover:cursor-pointer animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
