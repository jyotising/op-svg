import * as React from "react";
const SvgHamburgerOne = (props) => (
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
      d="M20 11v-.5a8 8 0 1 0-16 0v.5M4 17s-1 2.5 1 3.5 12 1 14 0 1-3.5 1-3.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 10.5H6a3.5 3.5 0 1 0 0 7h12a3.5 3.5 0 1 0 0-7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.5 14.5.796-.398A3 3 0 0 1 8.75 14l.212.085A2.5 2.5 0 0 0 11 14a2.5 2.5 0 0 1 2.038-.085l.48.192c.624.25 1.326.221 1.928-.08a2.36 2.36 0 0 1 2.108 0l.946.473"
    />
    <path
      fill="#333"
      d="M8.5 8.775a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11.875 7.4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgHamburgerOne;
