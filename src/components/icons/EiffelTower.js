import * as React from "react";
const SvgEiffelTower = (props) => (
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
      d="M10.5 4c0 5.5-1.75 12.5-5 18M13.5 4c0 5.5 1.75 12.5 5 18M2 22h20"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 15h10M8.5 10.5h7M10 4h4M12 2v2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22s.406-1.406 1-2c.5-.5 1-1 2-1s1.5.5 2 1c.672.672 1 2 1 2"
    />
  </svg>
);
export default SvgEiffelTower;
