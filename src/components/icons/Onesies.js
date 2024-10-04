import * as React from "react";
const SvgOnesies = (props) => (
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
      d="M3.5 10.5 2 5.5c.917-.667 4.5-3 10-3s9 2.333 10 3l-1.5 5H17v8c0 2-1.5 3.5-3.5 3.5h-3c-2 0-3.5-1.5-3.5-3.5v-8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 17s-4.5 0-4.5 5M7 17s4.5 0 4.5 5M14.906 2.75q.093.36.094.75a3 3 0 1 1-5.905-.75"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 3.495a18.2 18.2 0 0 0-6-.995 18.4 18.4 0 0 0-6.027.995M7 15.5v3M17 15.5v3M10.5 22h3"
    />
  </svg>
);
export default SvgOnesies;
