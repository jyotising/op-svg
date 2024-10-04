import * as React from "react";
const SvgElectronicPen = (props) => (
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
      d="M19.718 9.025a3 3 0 1 0-4.243-4.243l-9.193 9.193a3 3 0 0 0 4.243 4.243z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 11.5 4 4M3 21.5l3-3"
    />
    <path fill="#333" d="M17.866 8.036a1 1 0 1 0-1.732-1 1 1 0 0 0 1.732 1" />
  </svg>
);
export default SvgElectronicPen;
