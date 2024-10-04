import * as React from "react";
const SvgSchool = (props) => (
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
      d="M2 16.5a1 1 0 0 1 1-1h3V12l6-4 6 4v3.5h3a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1H2z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 3v5" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6V3s-.75 1.5-3 0-3 0-3 0v3s.75-1.5 3 0 3 0 3 0M14 22v-6.5h-4V22M9 22h6"
    />
  </svg>
);
export default SvgSchool;
