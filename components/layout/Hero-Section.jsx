import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* 
1)  0px to 350px is Heading Opacity value
2)  100px to 350px y Heading position value
*/
const HeroSection = (props) => {
  let videoRef = useRef(null);
  let { scrollY } = useScroll();
  let y = useMotionValue(0);
  let [InitialOpacity, setInitialOpacity] = useState(0);
  let [InitialYPosition, setInitialYPosition] = useState(0);
  let headingAnimation = useTransform(y, [0, 360], [0, -160]);
  let opacity = useTransform(scrollY, [0, 360], [1, 0]);

  function headingLocationDetector() {
    let percentage = scrollY.get() - 100;
    percentage = percentage / 260;
    percentage = percentage * 100;
    percentage = Math.floor(percentage);
    return percentage;
  }

  useEffect(() => {
    videoRef.current.play();

    if (scrollY.get() < 360) {
      setInitialOpacity(
        `${100 - (scrollY.get() / 360) * 100}%`
      ); /*Return Opacity in Percentage like 0%,20%,65% */
    }
    scrollY.on("change", () => {
      if (scrollY.get() > 100 && scrollY.get() < 360) {
        /* Retrun Percentage of 100 to 360px scoll */
        let percentage = headingLocationDetector();
        headingAnimation.set(-percentage);
      }
    });
  }, []);

  useEffect(() => {
    let Initialpercentage = headingLocationDetector();
    setInitialYPosition(-Initialpercentage);
  }, [scrollY.get()]);

  const transitionConfig = {
    duration: 0.8,
    easings: "easeIn",
    delay: scrollY.get() > 100 && scrollY.get() < 360 ? 0 : 0.3,
    opacity: {
      duration: 1,
    },
  };

  return (
    <div className="sticky top-0 left-0 -z-[1]">
      {/* Video Banner Container */}
      <div className={`w-full h-[100vh] overflow-hidden relative z-10`}>
        <video
          ref={videoRef}
          className={`-z-[2] max-w-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full`}
          poster="/video/video-thumbnail.webp"
          preload="auto"
          loop
          muted
        >
          <source src="/video/bg-video.mp4" />
        </video>
        <div className="z-[1] flex justify-center items-center absolute left-0 top-0 min-w-full min-h-full bg-[rgba(0,0,0,0.85)]">
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            animate={{
              translateY:
                scrollY.get() > 100 && scrollY.get() < 360
                  ? InitialYPosition
                  : 0,
              opacity: scrollY.get() < 10 ? 1 : InitialOpacity,
            }}
            transition={transitionConfig}
            style={{ translateY: headingAnimation, opacity }}
            className={`container mx-auto max-w-4xl px-4 md:px-0`}
          >
            <h2 className="banner-heading">
              {props.heading[0]}
              <span className={`text-primary`}>{props.heading[1]}</span>
              {props.heading[2]}
            </h2>
          </motion.div>

          <motion.a
            href="#!"
            className="absolute left-1/2 -translate-x-1/2 bottom-20"
          >
            <motion.svg
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 40, opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeOut",
                repeatDelay: 0.2,
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
