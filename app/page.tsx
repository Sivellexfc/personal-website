"use client";
import React from "react";
import Image from "next/image";
import pp from "../public/pp.png";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card";
import { Link as ScrollLink, Element } from "react-scroll";

import im1 from "../public/management.jpg";
import im2 from "../public/colony_counter.jpeg";
import im3 from "../public/eticaret.png";
import im4 from "../public/arelya.jpg";
import im5 from "../public/noimage.jpg";
import im6 from "../public/noimage.jpg";

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
            Hakkımda
          </ScrollLink>

          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Eğitim
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Projeler
          </ScrollLink>

          <ScrollLink
            to="certificates"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Sertifikalar
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
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-6 md:px-20 my-16">
                  {/* Profil Fotoğrafı */}
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <Image
                      src={pp}
                      alt="profile-picture"
                      className="transition-all duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Bilgiler */}
                  <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
                      Musluhan Çavuş
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                      Yazılım Mühendisliği @ Bilgisayar Mühendisliği
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                      Izmir, Denizli, Türkiye
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
                      musluhan01@hotmail.com
                    </p>

                    {/* Butonlar */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-6"
                    >
                      <Button className="rounded-xl bg-gradient-to-r from-rose-600 to-indigo-300 text-white transition-transform hover:scale-105">
                        <a
                          href="resume.pdf"
                          download="MusluhanCavus_resume.pdf"
                          className="flex gap-2"
                        >
                          Özgeçmiş
                          <IoDownloadOutline />
                        </a>
                      </Button>
                      <Link
                        href="https://github.com/Sivellexfc"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/musluhan/"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </Link>
                    </motion.div>
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

          <Element name="education">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent inline-block">
                Eğitim
              </h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2021 - Present
                    </p>
                    <p className="font-semibold">Computer Engineering</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Pamukkale Universitesi
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2021'de başlamış olduğum olduğum Bilgisayar Mühendisliği bölümüne 4. sınıf olarak devam etmekteyim.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2024 Şubat - Temmuz
                    </p>
                    <p className="font-semibold">Computer Sience Engineering</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Polytechnic Institute of Porto
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2023-2024 akademik yılının bahar döneminde Erasmus+ Projesi kapsamında Portekiz’deki Porto Politeknik Enstitüsü’nde eğitim aldım.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2015 - 2019
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Bursa Cumhuriyet Anadolu Lisesi
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2015 yılında Bursa Cumhuriyet Anadolu Lisesi’ne kabul edildim ve 2019 yılında eğitimimi başarıyla tamamladım.
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
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent inline-block">
                Projeler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                <Card
                  className="bg-gray-50 dark:bg-zinc-900 border-gray-200
                 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    <Image
                      src={im1}
                      alt=""
                      className="rounded-lg w-full sm:w-64 h-auto sm:h-32 object-contain"
                    />
                    <div className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
                      <h3 className="font-medium">
                        Yazılım Projelerinde Süreç Yönetimi için Web Tabanlı
                        Proje Yönetim Sistemi (2025)
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Lisans Tez’i kapsamında web tabanlı Modern Süreç Yönetim
                        sisteminin geliştirilmesine hala devam etmekteyim.
                      </p>
                      <a
                        href="https://github.com/Sivellexfc/project-management-system-frontend"
                        className="text-sm text-indigo-500 dark:text-purple-500"
                      >
                        Source code
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-50 dark:bg-zinc-900 border-gray-200
                 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    <Image
                      src={im2}
                      alt=""
                      className="rounded-lg w-full sm:w-64 h-auto sm:h-32 object-contain"
                    />
                    <div className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
                      <h3 className="font-medium">Colony Counter 2024</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pamukkale Üniversitesi Gıda Mühendisliği bölümünden
                        Prof. Dr. Hakan KARACA’ya bakteri koloni sayımını
                        kolaylaştıran open-source bir uygulama geliştirdim.
                      </p>
                      <a
                        href="https://github.com/Sivellexfc/colony-counter-project"
                        className="text-sm text-indigo-500 dark:text-purple-500"
                      >
                        Source code
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-50 dark:bg-zinc-900 border-gray-200
                 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    <Image
                      src={im3}
                      alt=""
                      className="rounded-lg w-full sm:w-64 h-auto sm:h-32 object-contain"
                    />
                    <div className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
                      <h3 className="font-medium">E-ticaret Sitesi 2024</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        E-ticaret projemin backend’ini Java teknolojileri,
                        frontend’ini React ile geliştirdim.
                      </p>
                      <a
                        href="https://github.com/Sivellexfc/ecommerce-app-frontend-react"
                        className="text-sm text-indigo-500 dark:text-purple-500"
                      >
                        Source code
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-50 dark:bg-zinc-900 border-gray-200
                 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    <Image
                      src={im4}
                      alt=""
                      className="rounded-lg w-full sm:w-64 h-auto sm:h-32 object-contain"
                    />
                    <div className="flex-1 flex flex-col justify-between gap-2  text-center sm:text-left">
                      <h3 className="font-medium">Arelya Zemin&Tavan 2023</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Arelya mimarlık şirketi için kullanıcı dostu ve dikkat
                        çekici bir web sitesi geliştirdim.
                      </p>
                      <a
                        href="https://www.arelya.com.tr"
                        className="text-sm text-indigo-500 dark:text-purple-500"
                      >
                        Visit
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                  <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    {/* Resim */}
                    <Image
                      src={im5}
                      alt="Backend Blog Projesi 2022"
                      className="rounded-lg w-full sm:w-64 h-auto sm:h-32 object-contain"
                    />

                    {/* İçerik */}
                    <div className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
                      <h3 className="font-medium">Backend Blog Projesi 2022</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Bursa Büyükşehir Belediyesi JAVA Spring Boot Bootcamp’i
                        kapsamında bir blog sistemi backend’i geliştirdim.
                      </p>
                      <a
                        href="https://github.com/Sivellexfc/code16-final-blog-application"
                        className="text-sm text-indigo-500 dark:text-purple-500"
                      >
                        Source code
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-50 dark:bg-zinc-900 border-gray-200
                 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    {/* Resim */}
                    <Image
                      src={im6}
                      alt="What’s Inside Mobile App"
                      className="rounded-lg w-full sm:w-64 h-auto sm:h-32 object-contain"
                    />

                    {/* İçerik */}
                    <div className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
                      <h3 className="font-medium">
                        What’s Inside (Mobile App) 2022
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Flutter ile ürünlerin içeriğini analiz eden, kullanıcıya
                        uygun olup olmadığını gösteren bir mobil uygulama
                        geliştirdim.
                      </p>
                      <a
                        href="#"
                        className="text-sm text-indigo-500 dark:text-purple-500"
                      >
                        Detaylar
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          </Element>

          <Element name="certificates">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent inline-block">
                Sertifikalar
              </h2>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2024
                    </p>
                    <p className="font-semibold">
                      HangiKredi DevOps Okulu Eğitim Sertifikası
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      HangiKredi
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  HangiKredi’nin gerçekleştirmiş olduğu 30 Saatlik DevOps Okulu
                  programını başarıyla tamamladım. Bu eğitim kapsamında DevOps
                  konseptleri, Jenkins, Linux, Networking,
                  GIT,Orchestration,Kubernetes,, Monitoring ve Security
                  kavramlarında teknik bilgi edindim ve pratik yapma imkanı
                  buldum.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2025
                    </p>
                    <p className="font-semibold">HCCDA - Tech Essentials</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Huawei
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Huawei Certified Cloud Developer Associate (HCCDA) - Tech
                  Essential sertifikası, bulut bilişim ve yazılım geliştirme
                  konularında temel yetkinlikleri kazandıran bir sertifikadır.
                  Huawei Cloud ekosisteminde uygulama geliştirme, mikro hizmet
                  mimarisi, API entegrasyonu ve temel bulut servisleri
                  konularında bilgi sahibi olduğumu gösterir.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2023
                    </p>
                    <p className="font-semibold">
                      Bursa Büyükşehir Belediyesi Back-End Web Development
                      Code16 Bootcamp
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Bursa Büyükşehir Belediyesi
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Bursa Büyükşehir Belediyesinin aracılığı ile gerçekleşen
                  Code16 Java Backend geliştirme bootcamp eğitimini başarıyla
                  tamamladım. Bu bootcampte Java ve Spring framework’te
                  derinlemesine bilgi ve deneyim kazandım.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      2024
                    </p>
                    <p className="font-semibold">
                      React: Revolution Build Modern Web Apps Bootcamp
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      techcareer.net
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Techcareer tarafından düzenlenmiş olan React: Revolution Build
                  Modern Web Apps Bootcamp programını başarıyla tamamlayarak bu
                  sertifikayı almaya hak kazandım.
                </p>
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
