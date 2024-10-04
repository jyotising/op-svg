import * as React from "react";
const SvgBenz = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.34 17 12 12zM12 2v10zm8.66 15L12 12z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M21.685 14.5a10 10 0 0 1-1.023 2.5 10 10 0 0 1-1.52 2M9 2.458A10 10 0 0 1 12 2c1.045 0 2.053.16 3 .458zM2.315 14.5A10 10 0 0 0 3.338 17c.422.73.934 1.402 1.52 2z"
    />
  </svg>
);
export default SvgBenz;
