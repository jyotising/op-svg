import * as React from "react";
const SvgCakeTwo = (props) => (
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
      d="M20 8.95 15.529 4 4.5 8.95V15H20z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 9h8.693c.031 0 .057.026.057.057v1.755a1.438 1.438 0 0 0 2.875 0V9.058c0-.031.026-.057.057-.057H20"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M4.75 11.979q-.451.226-.839.478C2.71 13.24 2 14.206 2 15.25 2 17.874 6.477 20 12 20s10-2.126 10-4.75c0-1.07-.744-2.056-2-2.85"
    />
  </svg>
);
export default SvgCakeTwo;
