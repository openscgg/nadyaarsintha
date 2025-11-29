"use client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";
import "./Home.css";

export default function Home() {
  const photos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg",
    "/images/foto6.jpg",
  ];

  return (
    <>
      <div className="">
        <nav className="fixed bg-neutral-950 z-10 w-full px-8 py-4 flex items-center justify-between">
          <div className="absolute flex justify-center w-full">
            <div>
              <h4 className="font-script text-amber-100">Nadya Arsintha</h4>
            </div>
          </div>

          <div className="gap-4 hidden md:flex">
            <FontAwesomeIcon icon={faEnvelope} className="w-4" />
            <FontAwesomeIcon icon={faInstagram} className="w-4" />
          </div>

          <ul className="md:flex gap-4 hidden">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Portfolio</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>

          <div className="block md:hidden">
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </div>
        </nav>

        <section className="bg-[url('/images/nadya-medium-closeup.jpeg')] bg-[100%_17%] bg-cover h-screen w-full flex items-center">
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative container flex flex-col justify-center items-center px-6 py-20 mx-auto max-w-6xl">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center font-bold flex flex-wrap gap-3 mb-6 mt-16 font-delight 
        text-4xl sm:text-5xl md:text-6xl"
            >
              <span className="text-amber-100">Fashion</span> & Runway Model
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center text-base sm:text-lg md:text-xl max-w-2xl"
            >
              Easygoing, fun, cheerful — confident in front of the camera and
              quick to learn new poses.
            </motion.p>
          </div>
        </section>

        <section className="sticky bg-linear-to-b from-neutral-950 via-neutral-950 to-amber-900 top-0 bg-cover h-screen flex items-center">
          <div className="relative container flex flex-col justify-center px-8 py-20 mx-auto max-w-6xl">
            <motion.h1
              className="text-6xl font-bold mb-4 font-delight text-amber-100"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Hi, I’m Nadya Arsintha.
            </motion.h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              <motion.p
                className="mb-8 w-[80%]"
                variants={{
                  hidden: { opacity: 0, y: 15, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                Based in Bandung, Indonesia. I’m an aspiring model currently
                focusing on building a strong and diverse portfolio...
              </motion.p>

              {[
                "Height 5'5\" (165 cm)",
                "Weight 44 kg",
                'Bust 32" (82 cm)',
                'Waist 25" (64 cm)',
                'Hips 35" (89 cm)',
                "Shoe 39 (EU)",
                "Hair black",
                "Eyes dark brown.",
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  className="w-[80%]"
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.98 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="sticky top-0 bg-transparent bg-cover h-screen flex items-center ">
          <div className="flex justify-center w-full ">
            <img
              src="/images/pose-1.jpeg"
              className="w-[300px] h-[500px] object-cover bg-amber-600 container flex flex-col justify-center rounded-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </section>

        <section className="sticky top-0 bg-transparent bg-cover h-screen ml-32 pt-16 flex items-center">
          <div className="flex justify-start w-full ">
            <img
              src="/images/pose-2.jpeg"
              className="w-[300px] h-[500px] object-cover bg-amber-400 container flex flex-col justify-center rounded-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </section>

        <section className="sticky top-0 bg-transparent bg-cover h-screen mr-32 pt-32 flex items-center  ">
          <div className="flex justify-end w-full ">
            <img
              src="/images/pose-3.jpeg"
              className="w-[300px] h-[500px] object-cover bg-amber-400 container flex flex-col justify-center rounded-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </section>

        <section className="relative bg-amber-900 min-h-screen px-6 md:px-10 py-20">
          <div className="container mx-auto max-w-6xl">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-delight mb-12 text-amber-100"
            >
              My Portfolio
            </motion.h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large image on left */}
              <motion.img
                src="/images/pose-2.jpeg"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
              w-full min-h-[600px] md:h-full
              object-cover rounded-2xl shadow-lg
            "
              />

              {/* Right Grid */}
              <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full">
                {photos.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-xl shadow-md"
                  >
                    <img
                      src={src}
                      className="
                    w-full h-full object-cover 
                    transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]
                    hover:scale-[1.03]
                  "
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-neutral-950 px-8 py-20">
          <div className="container mx-auto max-w-6xl">
            {/* Top Section */}
            <div className="border-b border-neutral-700 pb-10 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold font-delight text-amber-100 mb-6">
                Work with me
              </h1>

              <div className="space-y-6 max-w-xl text-neutral-300 leading-relaxed">
                <p>
                  fashion/lookbook, runway & brand show, beauty & skincare
                  campaigns, catalogue & e-commerce.
                </p>

                <p>
                  I bring energy and confidence to every shoot — reliable,
                  professional, and always excited to create. Open to
                  collaborations and agency representation.
                </p>
              </div>
            </div>

            {/* Middle Navigation */}
            <div className="mb-10">
              <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-neutral-300 text-lg">
                <li>
                  <Link href="#" className="hover:text-amber-200 transition">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-3 text-neutral-300 text-lg">
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4" />
                nadnadyaarsinthaa@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faInstagram} className="w-4" />
                @nanadyath
              </p>
            </div>
          </div>
        </section>

        <footer className="relative bg-neutral-950 py-6">
          <p className="text-neutral-500 text-center text-sm">
            &copy; {new Date().getFullYear()} Nadya Arsintha. All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
