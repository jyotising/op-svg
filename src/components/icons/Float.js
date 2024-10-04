import * as React from "react";
const SvgFloat = (props) => (
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
      d="M12 20c5.523 0 10-3.582 10-8s-4.477-8-10-8S2 7.582 2 12s4.477 8 10 8Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14c2.761 0 5-1.343 5-3s-2.239-3-5-3-5 1.343-5 3 2.239 3 5 3Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8V4M16 9s1.313-2 3.5-2M8 9S7 7 4.5 7M9 13.5s-3 1-3.5 4.5M15 13.5s3.25 1 3.5 4.5"
    />
  </svg>
);
export default SvgFloat;
