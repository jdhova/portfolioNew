import { motion } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({
  Icon,
  heading = "SOmething",
  desc = "lorem ipsum dolor",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <motion.div
      style={{ transformOrigin: "top" }}
      initial={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTap={isHovered ? handleMouseLeave : handleMouseEnter}
      animate={{
        boxShadow: isHovered
          ? "0px 15px 30px rgba(206, 206, 206, 0.4)"
          : "0px 15px 30px rgba(206, 206, 206, 0)",
      }}
      className="rounded-b-xl bg-white"
    >
      <motion.div
        animate={{
          backgroundColor: isHovered ? "var(--color-primary)" : "#FFF",
        }}
        transition={{ duration: "0.5" }}
        className={`border-primary p-6 border rounded-xl flex flex-col justify-center items-center`}
      >
        <motion.div
          layout
          initial={{
            backgroundColor: "var(--color-primary)",
            borderRadius: "100px",
          }}
          animate={{
            backgroundColor: isHovered ? "#FFF" : "var(--color-primary)",
            borderRadius: isHovered ? "30px" : "100px",
          }}
          transition={{ duration: 0.5, type: "tween" }}
          className={` flex justify-center items-center max-w-[10rem] w-full aspect-square`}
        >
          <Icon
            size="80"
            className={`max-w-[5rem] w-full aspect-square transition-all duration-500 ${
              isHovered ? "fill-primary" : "fill-white"
            }`}
          />
        </motion.div>
        <motion.h3
          initial={false}
          animate={{ color: isHovered ? "#fff" : "#000" }}
          className="uppercase mt-6 text-center text-xl xl:text-2xl"
        >
          {heading}
        </motion.h3>
      </motion.div>
      <motion.div
        style={{ transformOrigin: "bottom" }}
        initial={{ height: "0px" }}
        animate={{ height: isHovered ? "auto" : "0px" }}
        transition={{ duration: 0.3, easings: "easeIn" }}
        className="overflow-hidden "
      >
        <div className="py-8 px-6  ">
          <p className="text-lg text-center">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
