import * as React from "react";
const SvgDrink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M5 8h14" />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M7.076 9.071A1 1 0 0 1 8.074 8h7.852a1 1 0 0 1 .997 1.071l-.857 12a1 1 0 0 1-.997.929H8.93a1 1 0 0 1-.997-.929z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 5V3a1 1 0 0 1 1-1h1.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M7.36 5.836A1 1 0 0 1 8.348 5h7.306a1 1 0 0 1 .986.836L17 8H7z"
    />
  </svg>
);
export default SvgDrink;
