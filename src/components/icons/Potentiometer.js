import * as React from "react";
const SvgPotentiometer = (props) => (
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
      d="M12 14c5.523 0 10-1.79 10-4s-4.477-4-10-4S2 7.79 2 10s4.477 4 10 4M12 2v7.5M8 17v4M12 17v5M16 17v4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 10v6.182s.555 1.198 2.25 2.332M22 10v6.182s-.555 1.198-2.25 2.332"
    />
  </svg>
);
export default SvgPotentiometer;
