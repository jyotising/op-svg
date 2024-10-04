import * as React from "react";
const SvgIpo = (props) => (
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
      d="M2 9.157V3.5h20v5.656a2.75 2.75 0 0 0-1.818 2.594A2.75 2.75 0 0 0 22 14.344V20H2v-5.656a2.75 2.75 0 0 0 1.818-2.594A2.75 2.75 0 0 0 2 9.156Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 9v5.5M9 9v5.5"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 9h1.5a1.5 1.5 0 1 1 0 3H9zM16 14.5c.828 0 1.5-1.12 1.5-2.5s-.672-2.5-1.5-2.5-1.5 1.12-1.5 2.5.672 2.5 1.5 2.5Z"
    />
  </svg>
);
export default SvgIpo;
