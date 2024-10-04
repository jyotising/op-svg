import * as React from "react";
const SvgMedicationTime = (props) => (
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
      d="M14.5 2.5h-8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2M10.5 2.5v4M7.5 2.5v4M13.5 2.5v4M13.5 20H4a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V13M17 16v2h2"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 2.5h8M6.5 7.5h8"
    />
  </svg>
);
export default SvgMedicationTime;
