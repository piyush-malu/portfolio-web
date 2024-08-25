import React from "react";
import Image from "../assets/images/piyush.jpg";
import LT from "../assets/images/LT.png";
import soundCloud from "../assets/images/soundCloud.png";
import Snazzy from "../assets/images/Snazzy.png";
import MyInfo from "./MyInfo";
import { motion } from "framer-motion";
import { knownTechStack ,lambdatestWorkEx,soundCloudEx,snazzyWorkEx} from "../utils/constants";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Contact from "./Contact";
import Lambdatest from "../assets/images/Lambdatest.svg";
import snazzy from "../assets/images/snazzy.svg";
const Content = () => {

  return (
    <div className="flex-col flex-1 order-1 col-span-4 md:order-none">
      <div className="container max-w-full mx-auto 2xl:max-w-6xl">
        {/*End of profile section */}
        <section
          className="min-h-[calc(100vh*0.80)] flex mb-52 justify-center"
          id="about"
        >
          <div className="flex flex-col items-center m-auto space-x-0 space-y-7 md:space-y-0 md:space-x-7 lg:flex-row">
            <img
              className="w-64 md:mb-6 h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover"
              src={Image}
              alt="Your Image"
            />
            <MyInfo />
          </div>
        </section>

        {/* End of profile section */}

        {/* Projects */}
        <section className="w-full min-h-screen" id="work">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-2 text-3xl font-bold sm:pr-5">
              Work Experience and Projects💻{" "}
            </h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <a
              href="https://github.com/piyush-malu"
              className="pl-2 text-sm text-right sm:pl-5 hover:text-link-color"
            >
              Visit Archive
            </a>
          </div>
          <h1 className="pr-2 pb-2 text-xl font-bold sm:pr-5">
            GitHub Calendar 🗓
          </h1>
          <GitHubCalendar
            username="piyush-malu"
            fontSize={16}
            blockSize={14}
            hideColorLegend
          >
            <ReactTooltip delayShow={10} html />
          </GitHubCalendar>
          <div className="flex flex-col mt-12 space-y-12 transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold flex center">
                  <img
                    src={Lambdatest}
                    className="mr-1 "
                    loading="lazy"
                    alt="Lambdatest"
                  />{" "}
                  LambdaTest- Jan 2022 - present
                </h3>
                <ul className="list-disc pl-5 text-slate-500 dark:text-slate-300">
                  {lambdatestWorkEx.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-slate-600">
                  React, Go ,Redux, TypeScript, Aws
                </p>
                <div className="flex items-center space-x-6 text-slate-400">
                  <a
                    href="https://analytics.lambdatest.com/"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <a href="https://analytics.lambdatest.com/" target="_blank">
                  <img
                    src={LT}
                    className="mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="LT"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <a href="https://snazzy.in/aligner-solution" target="_blank">
                  <img
                    src={Snazzy}
                    className="mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="Snazzy"
                  />
                </a>
              </div>
              <div className="flex flex-col space-y-4 lg:text-right">
                <h3 className="pb-2 text-xl font-extrabold flex center">
                <img
                    src={snazzy}
                    className="mr-1 "
                    loading="lazy"
                    alt="snazzy"
                  />{" "}
                  Snazzy Care - April 2021 - June 2021
                </h3>
                <ul className="list-disc pl-5 text-slate-500 dark:text-slate-300">
                  {snazzyWorkEx.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex items-center space-x-6 text-slate-400 lg:justify-end">
                  <a
                    href="https://snazzy.in/aligner-solution"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />

                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold">
                  Sound Cloud Player
                </h3>
                <ul className="list-disc pl-5 text-slate-500 dark:text-slate-300">
                  {soundCloudEx.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex items-center space-x-6 text-slate-400">
                  <a
                    href="https://github.com/piyush-malu/Sound-Cloud-Player"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <FaGithub className="svg-inline--fa fa-github h-7 w-7" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <a
                  href="https://drive.google.com/file/d/1KV-kqNSzK2Iwq1UrHIdWh2HCbVszHopd/view?usp=sharing"
                  target="_blank"
                >
                  <img
                    src={soundCloud}
                    className="mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="Mindfaqt"
                  />
                </a>
              </div>
            </div>

            {/* Add similar div blocks for other projects */}
            <button className="px-6 py-2 mx-auto mt-10 transition duration-300 ease-in-out bg-transparent border shadow-sm w-52 border-button-color text-button-color shadow-button-color hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
              <a href="https://github.com/piyush-malu" target="_blank">
                Show More
              </a>
            </button>
          </div>
        </section>
        {/* Projects */}

        {/*  Skills */}
        <section className="w-full min-h-screen" id="skills">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-5 text-3xl font-bold">
              🥷 Skills and Technologies
            </h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="transition-all duration-500 delay-300 translate-y-0 gap-y-4 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 motion-reduce:transition-none opacity-1 blur-0">
            <motion.div className="flex flex-wrap justify-between mt-8 text-sm font-medium text-black md:text-lg ">
              {knownTechStack.map((el, index) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                >
                  <div className="items-center hidden px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:flex w-52 bg-gray-50 md:m-4 hover:scale-125 md:w-48">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                  <div className="flex flex-col items-center w-32 px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:hidden bg-gray-50 hover:scale-125">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* End od skills */}

        {/* Contact */}
        <section className="flex flex-col w-full min-h-screen" id="contact">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <h1 className="px-5 text-3xl font-bold">📭 Contact</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="flex flex-col my-auto transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="mx-auto space-y-8">
              <h1 className="text-3xl font-extrabold text-center">
                Get in Touch
              </h1>
              <div>
                <Contact />
              </div>
              <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-x-5">
                <a
                  href="https://www.linkedin.com/in/piyush-malu-915a1816b/"
                  target="_blank"
                >
                  <button className="px-6 py-2 duration-300 bg-transparent border shadow-sm border-button-color shadow-button-color text-button-color hover:text-white hover:bg-button-color focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
                    Reach Out via Linkedin
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}

        <footer className="hidden mb-5 text-center md:block">
          <a
            href="https://github.com/piyush-malu"
            className="hover:text-link-color"
            target="_blank"
          >
            Code available on Github ❤️
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Content;
