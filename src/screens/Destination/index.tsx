import React from "react";
import { Header } from "../../common";
import { HeaderRoute } from "../../types";
import { DestinationComp } from "../../components";
import { motion } from "framer-motion";

function Destination() {
  return (
    <div className="flex flex-1 min-h-full flex-col bg-fixed bg-destinationMobileBG bg-cover md:bg-destinationTabBG lg:bg-destinationDesktopBG">
      <div>
        <Header from={HeaderRoute.Destination} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        animate={{
          opacity: 1,
        }}
        className="flex flex-1 m-6 bg-transparent"
      >
        <DestinationComp />
      </motion.div>
    </div>
  );
}

export default Destination;
