import { motion } from "framer-motion";
import React from "react";
import { Header } from "../../common";
import { TechonologyComp } from "../../components";
import { HeaderRoute } from "../../types";

function Technology() {
  return (
    <div className="flex flex-1 flex-col min-h-full bg-fixed bg-technologyMobileBG bg-cover md:bg-technologyTabBG lg:bg-technologyDesktopBG">
      <div>
        <Header from={HeaderRoute.Technology} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        animate={{
          opacity: 1,
        }}
        className="flex flex-1 mt-6 bg-transparent"
      >
        <TechonologyComp />
      </motion.div>
    </div>
  );
}

export default Technology;
