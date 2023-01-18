import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { EyeIcon, GithubIcon, GlobeIcon, ThreeDotsIcon } from "../SVGIcons";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({
  heading = "SOMETHING",
  githubLink = "",
  tags = "",
  imageSrc = "",
  websiteLink = "",
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
      key={heading + websiteLink}
      layout
      animate={{scale:1,opacity:"100%"}}
      exit={{scale:0.5,opacity:"0%"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-xl p-4 shadow-lg font-RalewayFamily"
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? "0px 24px 30px rgba(19, 137, 114, 0.19)"
            : "0px 24px 30px rgba(19, 137, 114, 0)",
        }}
        className="w-full aspect-[16/9.5] rounded-3xl bg-primary"
      >
        <motion.div
          initial={false}
          animate={{
            translateY: isHovered ? "-30px" : "0px",
            border: isHovered
              ? "4px solid var(--color-primary)"
              : "0px solid #ffffff00",
          }}
          className="w-full h-full relative rounded-3xl overflow-hidden"
        >
          <Image
            className="object-cover"
            sizes="(max-width: 4000px) 100%"
            src={imageSrc}
            fill
            alt={heading}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-2"
            layout
            initial={{ opacity: "0%" }}
            animate={{
              opacity: isHovered ? "100%" : "0%",
              display: isHovered ? "flex" : "none",
            }}
            transition={{
              duration: 0.3,
              display: { delay: isHovered ? 0 : 0.4 },
            }}
            style={{
              background:
                "linear-gradient(360deg, rgba(15, 122, 101, 0.88) 0.01%, rgba(15, 122, 101, 0.8) 38.85%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              className="bg-white rounded p-1"
              href={imageSrc}
              target="_blank"
            >
              <EyeIcon size="25" className="fill-primary" />
            </Link>
            <Link className="bg-white rounded p-1" href="#!">
              <ThreeDotsIcon size="25" className="fill-primary" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="mt-7">
        <div className="flex gap-2">
          <p
            style={{
              display: "-webkit-box",
              minHeight: "56px",
              flex: "1",
              WebkitLineClamp: "2",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
            }}
            className="text-lg"
          >
            {heading}
          </p>
          <div className="flex gap-2">
            {websiteLink !== "" && (
              <Link
                className={`${styles.actionButton} rounded-md relative bg-uiDark w-8 h-8 overflow-hidden`}
                href={websiteLink}
                target="_blank"
              >
                <div className="transition-all duration-200 absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <GlobeIcon color="#fff" size="22" />
                </div>
                <div className="transition-all duration-200 absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <GlobeIcon color="#fff" size="22" />
                </div>
              </Link>
            )}
            {githubLink !== "" && (
              <Link
                className={`${styles.actionButton} rounded-md relative bg-uiDark w-8 h-8 overflow-hidden`}
                href={githubLink}
                target="_blank"
              >
                <div className="transition-all duration-200 absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <GithubIcon color="#fff" size="22" />
                </div>
                <div className="transition-all duration-200 absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <GithubIcon color="#fff" size="22" />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-3">
          {tags.map((data, index) => (
            <span key={data + index}>
              <span className="text-primary">#{data}</span>,{" "}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
