import * as React from "react";
const SvgQuadrilateral = (props) => (
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
      d="M14.019 4H3.5A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h16.206a1.5 1.5 0 0 0 1.375-2.101l-5.688-13A1.5 1.5 0 0 0 14.02 4Z"
    />
  </svg>
);
export default SvgQuadrilateral;
