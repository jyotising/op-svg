import * as React from "react";
const SvgPlayVolleyball = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path fill="#333" d="M20.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m8 12-1.135 5.63a1 1 0 0 1-1.405.75L2 17M19 15l-7.12-5.465a1 1 0 0 0-1.27.065l-2.42 2.215a.498.498 0 0 0 .045.775L13 16.075c.36.265.505.74.345 1.16L11.56 22"
    />
  </svg>
);
export default SvgPlayVolleyball;
