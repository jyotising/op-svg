import * as React from "react";
const SvgJewelry = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M10 12c0-3.182 1.314-4.323 2-4.5.61.088 2 1.106 2 4.5s-1.39 4.5-2 4.5c-.686-.088-2-1.318-2-4.5Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M10 11.5c-.777-.769-3.191-.58-4-.5-.243.88.176 2.746 1.147 3.707C8.36 15.908 9.33 16.5 12 16.5M14 11.5c.718-.766 2.752-.58 3.5-.5.15.799.07 2.594-1.186 3.936C15.057 16.277 12.75 16.5 12 16.5"
    />
  </svg>
);
export default SvgJewelry;
