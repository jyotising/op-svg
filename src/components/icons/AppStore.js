import * as React from "react";
const SvgAppStore = (props) => (
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
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 6.5 10.75 12l-.812 1.375-.407.688M7.5 17.5l.406-.687M6 14.5h5.5M15 14.5h3M9.5 6.5l1.75 2.75.438.688M16.5 17.5l-1.75-2.75-.875-1.375-.437-.687"
    />
  </svg>
);
export default SvgAppStore;
