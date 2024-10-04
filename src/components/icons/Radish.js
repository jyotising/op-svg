import * as React from "react";
const SvgRadish = (props) => (
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
      d="M18.5 11.6C18.5 16 12 22 12 22s-6.5-6-6.5-10.4C5.5 7.955 8.41 5 12 5s6.5 2.955 6.5 6.6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 2v3M9 2.5 11 5M15 2.5 13 5M6 10h4M14.5 13.5H18M8 17h3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.906 7.5A6.64 6.64 0 0 0 5.5 11.6c0 2.777 2.59 6.192 4.5 8.333"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M18.5 11.6c0 1.387-.646 2.933-1.53 4.4"
    />
  </svg>
);
export default SvgRadish;
