import * as React from "react";
const SvgBeer = (props) => (
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
      d="M12.75 9.5h3.75a1 1 0 0 1 1 1V22h-11V10.5a1 1 0 0 1 1-1h1.25"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 4H7.25a2.75 2.75 0 1 0 0 5.5H9.5v5.25a1.25 1.25 0 0 0 2.5 0V9.5h4.75a2.75 2.75 0 1 0 0-5.5H14.5s-.5-2-3-2-3 2-3 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.5 10.5H20a1 1 0 0 1 1 1V14a2 2 0 0 1-2 2h-1.5"
    />
  </svg>
);
export default SvgBeer;
