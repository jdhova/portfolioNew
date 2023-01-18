import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@components/UI-Componets/Logo/Logo";
import { motion, useScroll } from "framer-motion";
import { HamburgerIcon } from "@components/UI-Componets/SVGIcons";

const Header = ({ section }) => {
  let HeaderRef = useRef(null);
  // let [section,setActiveNav] = useState(section)
  let [toggleMenu, setToggleMenu] = useState(false);
  let [NavLinkShow, setNavLinkShow] = useState(false);
  let { scrollYProgress } = useScroll({
    target: HeaderRef,
  });
  let [expandHeader, setExpandnessOfHeader] = useState(true);

  // useEffect(()=>{
  //   setActiveNav(section)
  // },[section])

  function scollYProgressDetector() {
    return Number(scrollYProgress.get().toFixed(3));
  }
  useEffect(() => {
    if (scollYProgressDetector() === 0) {
      setExpandnessOfHeader(false);
    }
    scrollYProgress.on("change", () => {
      if (scollYProgressDetector() === 0) {
        setExpandnessOfHeader(false);
      }
      if (scollYProgressDetector() > 0.04) {
        setExpandnessOfHeader(true);
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    function closeTheToggle() {
      if (window.innerWidth < 768) {
        setNavLinkShow(false);
      } else {
        setNavLinkShow(true);
      }
    }

    closeTheToggle();

    window.addEventListener("resize", () => {
      closeTheToggle();
    });
    return () => {
      window.removeEventListener("resize", () => {
        closeTheToggle();
      });
    };
  }, []);

  function toggleMobileNavMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <motion.header
      ref={HeaderRef}
      className={`bg-uiDark sticky origin-bottom top-0 z-10 `}
    >
      <div className={`max-container flex items-center py-4`}>
        <Link href="#!">
          <Logo
            expandWidth="250px"
            condition={!NavLinkShow ? false : expandHeader}
            width="160px"
          />
        </Link>

        <motion.ul
          initial={{ height: 0 }}
          animate={{
            height: NavLinkShow ? "auto" : toggleMenu ? "auto" : "0px",
          }}
          transition={{ duration: NavLinkShow ? 0 : 0.3 }}
          className=" overflow-hidden absolute h-0 md:h-auto  w-full top-full bg-uiDark left-0 px-4  items-center justify-center  font-RalewayFamily font-bold gap-7 md:static md:p-0 md:flex md:w-fit md:ml-20"
        >
          <li
            className={`"mt-5 md:mt-0 uppercase text-sm ${
              section === "about" ? "text-primary" : "text-white"
            }`}
          >
            <Link href="#about">About</Link>
          </li>
          <li
            className={`"mt-5 md:mt-0 uppercase text-sm ${
              section === "portfolio" ? "text-primary" : "text-white"
            }`}
          >
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li
            className={`"my-5 md:m-0 uppercase text-sm ${
              section === "contact" ? "text-primary" : "text-white"
            }`}
          >
            <Link href="#contact">Contact</Link>
          </li>
        </motion.ul>

        <button
          onClick={toggleMobileNavMenu}
          className="ml-auto md:hidden p-2"
          type="button"
          aria-expanded={toggleMenu ? true : false}
        >
          <HamburgerIcon color="#fff" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
