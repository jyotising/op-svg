import * as React from "react";
const SvgTajMahal = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14H4a1 1 0 0 0-1 1v7M16 14h4a1 1 0 0 1 1 1v7M10 12h4s2.583-2.84 2-4.5c-.377-1.075-1.219-1.67-2-2.5s-2-2-2-2-1.219 1.17-2 2-1.623 1.425-2 2.5c-.583 1.66 2 4.5 2 4.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22h20M8 12h8v10H8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 17v5M12 2v1.5M5 12v2M19 12v2M10 22h4"
    />
  </svg>
);
export default SvgTajMahal;
