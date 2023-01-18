import ServiceCard from "@components/UI-Componets/Cards/ServiceCard";
import ProgressBar from "@components/UI-Componets/ProgressBar/ProgressBar";
import SectionHeader from "@components/UI-Componets/Section-Header/SectionHeader";
import {
  DatabaseIcon,
  DashboardIcon,
  RocketIcon,
  SpeedMeterIcon,
} from "@components/UI-Componets/SVGIcons";

import styles from "@styles/aboutSection.module.css";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

let servicesData = [SpeedMeterIcon, DatabaseIcon, DashboardIcon, RocketIcon];

const AboutSection = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) props.detectSection('about');
  }, [isInView]);


  /* ADDING ICON IN SERVICECARD_ARRAY */
  props.Services_Card.map((data, index) => {
    data.Icon = servicesData[index];
  });

  return (
    <div ref={ref} id="about" className="py-20 max-container ">
      <SectionHeader desc="" heading={props.Header.heading} />

      <div
        className={`${styles.cardContainer} grid grid-cols-[minmax(0,286px)] xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-start justify-center gap-12`}
      >
        {props.Services_Card.map(({ heading, desc, Icon }, index) => (
          <ServiceCard
            key={heading + index}
            desc={desc}
            heading={heading}
            Icon={Icon}
          />
        ))}
      </div>
      <div className="flex container flex-col md:flex-row mx-auto mt-28 gap-12 items-center">
        <div className="flex flex-col flex-[1.3] gap-6 items-center">
          <div className="shrink-0 w-full">
            <div className="relative w-5/6 xs:w-80 aspect-square mx-auto">
              <Image src="/About.png" fill alt="hello" />
            </div>
          </div>
          <div>
            <h3 className="text-xl text-primary text-center">
              {props.About_Jude.Jude.heading}
            </h3>
            <p className="max-w-lg text-lg leading-relaxed mt-3 text-center">
              {props.About_Jude.Jude.desc}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-1 w-full gap-y-5">
          {props.About_Jude.Skills.map(({ heading, percentage }, index) => (
            <ProgressBar
              key={heading + index}
              percentage={percentage}
              heading={heading}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
