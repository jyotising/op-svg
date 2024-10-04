import * as React from "react";
const SvgTrapezoid = (props) => (
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
      d="M15.897 4H8.103A1.5 1.5 0 0 0 6.67 5.053l-4.062 13A1.5 1.5 0 0 0 4.04 20h15.92a1.5 1.5 0 0 0 1.431-1.947l-4.062-13A1.5 1.5 0 0 0 15.897 4Z"
    />
  </svg>
);
export default SvgTrapezoid;
