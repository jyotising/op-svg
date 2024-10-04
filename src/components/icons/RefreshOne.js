import * as React from "react";
const SvgRefreshOne = (props) => (
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
      d="m11.328 9.207-2.12 2.121a1 1 0 0 0 0 1.414l2.12 2.122a1 1 0 0 0 1.415 0l2.121-2.122a1 1 0 0 0 0-1.414l-2.121-2.121a1 1 0 0 0-1.415 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M20.06 8a9 9 0 0 0-8.064-5C8.462 3 5.473 5.037 4 8M4 4v4M7.39 8H4M4 16a9 9 0 0 0 8.065 5c3.533 0 6.522-2.037 7.995-5M20.06 20v-4M16.67 16h3.39"
    />
  </svg>
);
export default SvgRefreshOne;
