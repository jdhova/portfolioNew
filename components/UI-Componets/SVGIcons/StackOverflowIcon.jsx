import React from "react";

const StackOverflowIcon = ({
  size = "24",
  color = "#A3A2A2",
  className = "",
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M17.36 20.33V14.95H19.15V22.13H3V14.95H4.8V20.33H17.36ZM6.77 14.45L7.14 12.69L15.93 14.54L15.56 16.3L6.77 14.45M7.93 10.24L8.69 8.63L16.83 12.41L16.07 14.03L7.93 10.24M10.19 6.25L11.34 4.87L18.24 10.63L17.09 12L10.19 6.25M14.64 2L20 9.21L18.56 10.28L13.2 3.07L14.64 2M6.59 18.54V16.74H15.57V18.54H6.59Z" />
    </svg>
  );
};

export default StackOverflowIcon;
