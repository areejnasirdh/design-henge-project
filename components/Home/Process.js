"use client";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Process() {
  return (
    <div className="home_process_main">
      <Container fluid className="container-width-2">
        <div className="py-[60px]">
          <div className="flex flex-col justify-center items-center mx-auto max-w-[90rem] space-y-6 mb-10 md:-mb-10 lg:-mb-20 2xl:-mb-28">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: "0.7",
              }}
              className="blueGrayHeading text-center"
            >
              PROCESS WE FOLLOW
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-5 md:mt-24  mx-auto max-w-[90rem] items-center justify-center mb-24 md:mb-0">
            <Image
              src="/images/process-img.png"
              width={450}
              height={450}
              alt=""
              className="hidden lg:block object-contain min-w-[30rem] -ml-16 md:min-w-[18rem] md:max-w-[18rem] md:-ml-0 lg:w-[21rem] lg:min-w-[21rem] xl:w-[23rem] xl:min-w-[27rem] 2xl:w-[32rem] 2xl:min-w-[32rem] 2xl:h-[90%] md:col-span-2"
            />
            <div className="flex flex-col space-y-[80px] md:col-span-3 2xl:max-w-4xl content">
              <motion.div
               initial={{ y: 100, opacity: 0 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               transition={{
                 duration: "0.7",
               }}
                className="overflow-hidden flex flex-col md:flex-row space-y-3 md:space-y-0 md:items-center md:space-x-3 lg:space-x-8 xl:space-x-5"
              >
                <h1 className="text-blue-primary text-8xl lg:text-[8rem] xl:text-[10rem] font-bebas stroke">
                  01
                </h1>
                <div className="flex flex-col space-y-0 lg:space-y-5">
                  <h3 className="font-medium uppercase text-3xl md:text-[25px] lg:text-[30px] xl:text-[45px] font-bebas">
                    Ideas, Brainstorm, Strategize
                  </h3>
                  <p className="text-sm md:text-xs lg:text-sm font-light max-w-[455px]">
                    We immerse ourselves in understanding your brand&apos;s
                    essence, target audience, and market landscape to uncover
                    actionable insights.
                  </p>
                </div>
              </motion.div>

              <motion.div
                 initial={{ y: 100, opacity: 0 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 transition={{
                   duration: "0.7",
                 }}
                className="overflow-hidden flex flex-col md:flex-row-reverse space-y-3 md:space-y-0 md:items-center lg:mr-[130px] "
              >
                <h1 className="text-blue-primary text-8xl lg:text-[8rem] xl:text-[10rem] font-bebas stroke ml-2">
                  02
                </h1>
                <div className="flex flex-col space-y-0 lg:space-y-5">
                  <h3 className="font-medium uppercase text-3xl lg:text-[30px] xl:text-[45px] font-bebas">
                    Content, designing, tech
                  </h3>
                  <p className="text-sm md:text-xs lg:text-sm font-light max-w-[455px]">
                    We then brainstorm and collaborate to translate insights
                    into innovative concepts, crafting compelling strategies and
                    designs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: "0.7",
                }}
                className="overflow-hidden flex flex-col md:flex-row space-y-3 md:space-y-0 md:items-center md:space-x-3 lg:space-x-8 xl:space-x-5"
              >
                <h1 className="text-blue-primary text-8xl lg:text-[8rem] xl:text-[10rem] font-bebas stroke">
                  03
                </h1>
                <div className="flex flex-col space-y-0 lg:space-y-5">
                  <h3 className="font-medium uppercase text-3xl lg:text-[30px] xl:text-[45px] font-bebas">
                    perform, experience, examine
                  </h3>
                  <p className="text-sm md:text-xs lg:text-sm font-light max-w-[455px]">
                    We continuously refine and enhance our work based on client
                    feedback, ensuring the final result exceeds expectations
                    while delivering on time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Process;
