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
          className="sticky top-[+30] left-0 w-full z-50 flex items-center justify-evenly mb-12 p-1 border bg-white dark:bg-black border-gray-800 dark:border-gray-200 dark:border-opacity-20 border-opacity-20 rounded-xl transition-all duration-300"
        >
          <ScrollLink
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
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
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
                        Musluhan Çavuş
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">
                        Computer Engineer & Software Developer
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Izmir, Denizli, Turkey
                      </p>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 mt-6"
                      >
                        <Button className="rounded-xl bg-gradient-to-r from-rose-600 to-indigo-300 text-white transition-transform hover:scale-105">
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
                Kullanıcı dostu, yenilikçi web çözümleri
              </h2>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                <span className="text-black dark:text-white">
                  React, Nextjs{" "}
                </span>
                frameworklerinde deneyim ve bilgi sahibi
                <span className="text-black dark:text-white">
                  {" "}
                  Frontend Developer
                </span>
                , Huawei Cloud HCCDA – Tech Essentials Sertifkalı Cloud
                geliştiricisi.{" "}
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Merhaba, ben Musluhan, Pamukkale Üniversitesi 4. sınıf
                bilgisayar mühendisliği öğrencisiyim. Web geliştirme alanında
                React, HTML, CSS, Tailwind gibi teknolojilerde derinlemesine
                bilgiye sahipken, Next.js ve Vue gibi modern frameworklerde
                çalışmalar yapıyorum. Uygulama geliştirme sürecinde, kullanıcı
                dostu ve etkili çözümler üretmek için en iyi uygulamaları ve
                güncel web teknolojilerini kullanmaya özen gösteriyorum. Ayrıca
                DevOps alanında kendimi geliştiriyor ve cloud
                teknolojileri,container teknolojileri, Kubernetes ile monitoring
                araçları üzerinde deneyim kazanıyorum. Bu alandaki bilgi
                birikimimi sürekli olarak genişletiyor ve yenilikçi çözümler
                üretmeye odaklanıyorum.
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
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent inline-block">
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

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2021 - Present
                    </p>
                    <p className="font-semibold">Computer Engineering</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Pamukkale University
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I am currently continuing my studies as a fourth-year student
                  in the Computer Engineering department, which I enrolled in
                  2021.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2024 FEB - JUNE
                    </p>
                    <p className="font-semibold">Computer Sience Engineering</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Polytechnic Institute of Porto
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I studied at the Polytechnic Institute of Porto in Portugal as
                  part of the Erasmus+ Project during the Spring semester of the
                  2023-2024 academic year.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2015 - 2019
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Bursa Cumhuriyet Anatolian High School
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  In 2015, I gained admission to Bursa Cumhuriyet Anatolian High
                  School and successfully completed my studies in 2019.
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
          <p className="text-gray-600 justify-center flex">
            © 2025 Musluhan Çavuş
          </p>
        </main>
      </div>
    </div>
  );
}
