import * as React from "react";
const SvgFlipCamera = (props) => (
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
      d="M6 5.5h2.5l1-2h5l1 2H18v8H6z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10 17l2 2-2 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19c-5.523 0-10-2.239-10-5 0-.711.297-1.387.832-2M16 18.584c3.532-.772 6-2.534 6-4.584 0-.711-.297-1.387-.832-2"
    />
  </svg>
);
export default SvgFlipCamera;
