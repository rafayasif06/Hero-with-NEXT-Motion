
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const variants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  };

  return (
    <section>
      <div className="relative w-full h-screen">
        <Image
          src="/Background.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className=" pl-5 pb-8 absolute left-0 bottom-0 text-3xl sm:text-3xl lg:text-5xl text-white font-normal font-ptSerif ">
          <p className="flex gap-3 overflow-hidden p-1 ">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Elevating
            </motion.span>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              your
            </motion.span>
          </p>
          <p className="flex gap-3 overflow-hidden p-1">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              daily
            </motion.span>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.75 }}
            >
              routine
            </motion.span>
          </p>
        </div>
      </div>
    </section>
  );
};
