import * as React from "react";
const SvgHotel = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 2h20"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16h4v6h-4z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.5 6h1M7.5 9h1M11.5 6h1M11.5 9h1M15.5 6h1M15.5 9h1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22h20M14 16h1c.276 0 .505-.226.452-.497C15.176 14.083 13.735 13 12 13s-3.176 1.083-3.452 2.503c-.053.271.176.497.452.497h1"
    />
  </svg>
);
export default SvgHotel;
