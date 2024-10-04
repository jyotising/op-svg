import * as React from "react";
const SvgPrescription = (props) => (
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
      d="M4 4a1 1 0 0 1 1-1h8.5v6H20v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 3 20 9M13.512 3v6.04H20"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 15h6M10 12v6"
    />
  </svg>
);
export default SvgPrescription;
