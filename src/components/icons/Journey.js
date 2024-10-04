import * as React from "react";
const SvgJourney = (props) => (
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
      d="M12 20a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 5.5c.902.504 1.75 1.25 1.68 2.223-.058.777-.723.95-.862 1.513-.138.562.666 1.175-.695 2.082-.907.605-3.637 1.754-5.623.682"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.75 12.25c-1.5.944-3.716 3.51-2.75 5.25 1.25 2.25 6 .345 11.5-4C19 9.154 21.115 2.803 21.115 2.803L18.5 3.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13 20s.25-2.5 2-4 4-1.5 4-1.5"
    />
  </svg>
);
export default SvgJourney;
