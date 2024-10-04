import * as React from "react";
const SvgFacePowder = (props) => (
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
      d="M12 18c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3ZM12 12c4.418 0 8-2.239 8-5s-3.582-5-8-5-8 2.239-8 5 3.582 5 8 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 5 9 6.5M15 7l-2.5 1.5M20 19c0 1.657-3.582 3-8 3s-8-1.343-8-3M20 19v-4M4 19v-4"
    />
    <path
      fill="#333"
      d="M12 16c1.933 0 3.5-.448 3.5-1s-1.567-1-3.5-1-3.5.448-3.5 1 1.567 1 3.5 1"
    />
  </svg>
);
export default SvgFacePowder;
