import * as React from "react";
const SvgPointOut = (props) => (
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
      d="M18.5 22H8.738a.13.13 0 0 1-.109-.06L3.93 14.363a2.047 2.047 0 1 1 3.505-2.116l1.232 2.098V3.97a1.971 1.971 0 0 1 3.942 0v4.664c0 .293.232.533.524.543l5.811.194c.589.02 1.056.503 1.056 1.092V20.5a1.5 1.5 0 0 1-1.5 1.5"
    />
  </svg>
);
export default SvgPointOut;
