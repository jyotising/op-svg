import * as React from "react";
const SvgCherry = (props) => (
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
      d="M7 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M18.5 5c-1.326.406-4.186 1.507-5.86 3.13C10.128 10.565 9.5 12.25 9 13.5M18.5 5c-.558.66-1.642 2.298-1.978 4.195C16.018 12.04 16.5 13.75 17 15M15 2l7 6"
    />
  </svg>
);
export default SvgCherry;
