const SectionHeader = ({ heading = "Heading", desc }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-3xl uppercase">{heading}</h3>
      {desc && (
        <p className="mt-3 font-InterFamily text-xl text-gray-500 font-light">
          {desc}
        </p>
      )}
      <hr className="mt-10 w-10 h-[2px] mx-auto bg-uiDark" />
    </div>
  );
};

export default SectionHeader;
