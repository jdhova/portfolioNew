import ProjectCard from "@components/UI-Componets/Cards/ProjectCard";
import SectionHeader from "@components/UI-Componets/Section-Header/SectionHeader";
import { AnimatePresence, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
const ProjectSection = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) props.detectSection('portfolio');
  }, [isInView]);

  let [filterResult, setFilterResult] = useState(props.Filter_Tabs[0]);
  let [cardsData, setCardsData] = useState(props.Projects_Cards);

  useEffect(() => {
    if (filterResult === props.Filter_Tabs[0]) {
      setCardsData(props.Projects_Cards);
      return;
    }
    let cloneCardsData = props.Projects_Cards.filter((data) =>
      data.tags.includes(filterResult)
    );
    setCardsData(cloneCardsData);
  }, [filterResult]);

  return (
    <div className="bg-gray-50 py-20">
      <div ref={ref} id="portfolio" className="max-container">
        <SectionHeader
          heading={props.Header.heading}
          desc={props.Header.desc}
        />
        <div
          className="flex rounded-md shadow-sm mb-8 mx-auto w-fit"
          role="group"
        >
          <button
            style={{
              backgroundColor:
                filterResult === props.Filter_Tabs[0]
                  ? "var(--color-primary)"
                  : "#fff",
              color: filterResult === props.Filter_Tabs[0] ? "#fff" : "#000",
              fontWeight: filterResult === props.Filter_Tabs[0] ? "700" : "400",
            }}
            type="button"
            onClick={() => setFilterResult(props.Filter_Tabs[0])}
            className="uppercase px-3 transition duration-300 xs:px-4 py-2 text-xs xs:text-sm text-gray-900 border border-gray-200 rounded-l-lg "
          >
            {props.Filter_Tabs[0]}
          </button>
          {props.Filter_Tabs.slice(1, props.Filter_Tabs.length - 1).map(
            (data, index) => (
              <button
                key={data + index}
                onClick={() => setFilterResult(data)}
                style={{
                  backgroundColor:
                    filterResult === data ? "var(--color-primary)" : "#fff",
                  color: filterResult === data ? "#fff" : "#000",
                  fontWeight: filterResult === data ? "700" : "400",
                }}
                type="button"
                className="uppercase px-3 transition duration-300 xs:px-4 py-2 text-xs xs:text-sm text-gray-900  border-t border-b border-r border-gray-200"
              >
                {data}
              </button>
            )
          )}
          <button
            onClick={() => setFilterResult(props.Filter_Tabs.at(-1))}
            style={{
              backgroundColor:
                filterResult === props.Filter_Tabs.at(-1)
                  ? "var(--color-primary)"
                  : "#fff",
              color:
                filterResult === props.Filter_Tabs.at(-1) ? "#fff" : "#000",
              fontWeight:
                filterResult === props.Filter_Tabs.at(-1) ? "700" : "400",
            }}
            type="button"
            className="uppercase px-3 transition duration-300 xs:px-4 py-2 text-xs xs:text-sm text-gray-900 bg-white border border-gray-200 rounded-r-md "
          >
            {props.Filter_Tabs.at(-1)}
          </button>
        </div>

        <div className="grid justify-center  grid-cols-[minmax(0,350px)] sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,350px)] gap-8 md:gap-9">
          <AnimatePresence>
            {cardsData.map((data, index) => (
              <ProjectCard key={data.heading + index} {...data} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
