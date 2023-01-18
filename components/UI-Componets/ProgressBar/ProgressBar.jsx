import { motion } from "framer-motion";
import React from "react";

const ProgressBar = ({
  heading = "something",
  className = "",
  percentage = "40",
}) => {
  return (
    <div className={`relative pb-3 ${className}`}>
      <h3 className="uppercase text-sm">{heading}</h3>
      <motion.span
        whileInView={{ scaleX: `100%` }}
        viewport={{ once:true,amount: "all" }}
        initial={{ scaleX: "0%", width: `${percentage}%`, originX: "0%" }}
        animate={{}}
        transition={{ easings: "easeOut", duration: 0.8, }}
        className="rounded-sm absolute bottom-0 left-0 h-2 bg-primary"
      >
        <motion.span
          viewport={{ once:true,amount: "some" }}
          initial={{ translateY: "30px", opacity: "0%" }}
          whileInView={{ translateY: "0px", opacity: "100%" }}
          transition={{ delay: 0.85 }}
          className="absolute -top-7 bg-uiDark text-white -right-3 text-xs rounded-full py-1 px-2"
        >
          {percentage}
          <sup>%</sup>
        </motion.span>
      </motion.span>
      <span className="rounded-sm w-full absolute bottom-0 left-0 h-2 bg-primary opacity-20"></span>
    </div>
  );
};

export default ProgressBar;
