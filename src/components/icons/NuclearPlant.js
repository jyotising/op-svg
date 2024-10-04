import * as React from "react";
const SvgNuclearPlant = (props) => (
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
      d="M2 22h20M6 7h12"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h10l.439 3.509q.06.49.218.96l1.667 5.002q.176.53.231 1.084L20 22H4l.445-4.445Q4.5 17 4.676 16.47l1.667-5.001q.158-.47.218-.961z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 4 .414-.414A2 2 0 0 1 13.83 3h.342a2 2 0 0 0 1.415-.586L16 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.5 15.5a3.506 3.506 0 0 0 2.136 3.224M15.5 15.5a3.505 3.505 0 0 1-2.136 3.224M9.467 13.085A3.5 3.5 0 0 1 12 12a3.5 3.5 0 0 1 2.533 1.085"
    />
    <path fill="#333" d="M12 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgNuclearPlant;
