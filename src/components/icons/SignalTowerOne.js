import * as React from "react";
const SvgSignalTowerOne = (props) => (
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
      d="m6 22 4-20h4l4 20"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M7.5 5h9" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 13h12M7.5 13.5l10 6M16.5 13.5l-9.5 6M15 5.5 7.5 13M9 5.5l7.5 7.5"
    />
  </svg>
);
export default SvgSignalTowerOne;
