"use client";
import React from "react";
import Image from "next/image";
import pp from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card";
import { Link as ScrollLink, Element } from "react-scroll";

import im1 from "../public/1.png";
import im2 from "../public/2.jpg";
import im3 from "../public/3.png";
import im4 from "../public/4.png";
import im5 from "../public/5.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-evenly mb-12 p-1 border border-gray-800 dark:border-gray-200 dark:border-opacity-20 border-opacity-20 rounded-xl"
        >
          <ScrollLink
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-300}
            className="cursor-pointer"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-300}
            className="cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            offset={-300}
            className="cursor-pointer"
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-300}
            className="cursor-pointer"
          >
            Projects
          </ScrollLink>

          <ThemeToggle></ThemeToggle>
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <Element name="aboutme">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-1"
              >
                <div>
                  <div className="flex items-center justify-evenly px-20 my-[100px]">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={pp}
                        alt="profile-picture"
                        className="cursor-pointer transition-all duration-300 hover:scale-110 "
                      ></Image>
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                        Musluhan Çavuş
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">
                        Computer Engineer & Software Developer
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Bursa,Izmir,Denizli
                      </p>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 mt-6"
                      >
                        <Button className="rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">
                          Resume
                          <IoDownloadOutline></IoDownloadOutline>
                        </Button>
                        <Link
                          href="#"
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <FaGithub className="w-6 h-6"></FaGithub>
                        </Link>

                        <Link
                          href="#"
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <FaLinkedin className="w-6 h-6"></FaLinkedin>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Element>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Buildin Scalable Solutiouns for tomorrow
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Expert in cloud architecture with{" "}
                <span className="text-black dark:text-white">AWS </span>and{" "}
                <span className="text-black dark:text-white">Azure</span>. I
                specialize in designing and implementing lareg-scale distributed
                systems. With deep expertise in{" "}
                <span className="text-black dark:text-white">
                  Python, Kubernates and microservice architecture
                </span>
                .
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </motion.div>
          </section>

          <Element name="skills">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Experience
              </h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      July, 2024 - Present
                    </p>
                    <p className="font-semibold">System Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400">
                      Company X
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      July, 2024 - Present
                    </p>
                    <p className="font-semibold">System Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400">
                      Company X
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      July, 2024 - Present
                    </p>
                    <p className="font-semibold">System Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400">
                      Company X
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys.
                </p>
              </div>
            </motion.section>
          </Element>

          <Element name="education">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Education
              </h2>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      July, 2024 - Present
                    </p>
                    <p className="font-semibold">Computer Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Porto University
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown.
                </p>
              </div>
            </motion.section>
          </Element>

          <Element name="projects">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                      src={im1}
                      alt=""
                      className="rounded-lg mb-4 "
                    ></Image>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Next.js MySQL
                        </p>
                      </div>
                      <Button variant="ghost" size="icon"></Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                      src={im2}
                      alt=""
                      className="rounded-lg mb-4 "
                    ></Image>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Next.js MySQL
                        </p>
                      </div>
                      <Button variant="ghost" size="icon"></Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                      src={im3}
                      alt=""
                      className="rounded-lg mb-4 "
                    ></Image>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Next.js MySQL
                        </p>
                      </div>
                      <Button variant="ghost" size="icon"></Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                      src={im4}
                      alt=""
                      className="rounded-lg mb-4 "
                    ></Image>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Next.js MySQL
                        </p>
                      </div>
                      <Button variant="ghost" size="icon"></Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                      src={im5}
                      alt=""
                      className="rounded-lg mb-4 "
                    ></Image>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Next.js MySQL
                        </p>
                      </div>
                      <Button variant="ghost" size="icon"></Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          </Element>
          <p className="text-gray-600 justify-center flex">© 2025 Musluhan Çavuş</p>
        </main>
      </div>
    </div>
  );
}
