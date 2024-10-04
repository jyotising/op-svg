import * as React from "react";
const SvgAcceleration = (props) => (
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
      strokeWidth={2}
      d="M21 17.5h-4M15.5 21h-2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 11 4 8.5H2s2.743 5 4 5h16L19 11z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11 9.33 7H8l1.5 4M15 13.5l-6.4 6H7l2.133-6M16 5.5c0 .5-1.5 1-1.5 1h5s1.443 0 1.872-1.143c.443-1.178-.35-2.857-1.861-2.857S18 4 18 4s-.927-.286-1.5 0-.5 1-.5 1.5"
    />
  </svg>
);
export default SvgAcceleration;
