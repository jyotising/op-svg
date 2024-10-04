import * as React from "react";
const SvgDarkMode = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m12.002 2 2.635 2.635h4.728v4.728L22 11.998l-2.635 2.639v4.728h-4.728L12.002 22l-2.639-2.635H4.635v-4.728L2 11.998l2.635-2.635V4.635h4.728z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M13.5 8.5c0 4-2.5 4.5-5 4.5 0 2 3.25 4 6 2s1-6.5-1-6.5"
    />
  </svg>
);
export default SvgDarkMode;
