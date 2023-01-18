const HamburgerIcon = ({ size = "24", color = "#A3A2A2", className = "" }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" />
    </svg>
  );
};

export default HamburgerIcon;
