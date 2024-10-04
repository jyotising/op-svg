import * as React from "react";
const SvgPesticide = (props) => (
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
      d="M7.5 5.684V2h9v3.684l3 3.06V21a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V8.743z"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 11.5h4v6h-4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.5 5.75h9M15.5 11.5v3M15.5 17v.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 19v-9"
    />
  </svg>
);
export default SvgPesticide;
