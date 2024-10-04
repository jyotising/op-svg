import * as React from "react";
const SvgKitchenKnife = (props) => (
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
      d="M7 15v5c0 3 4 3 4 0v-5M11 18.5H7"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M7 3a1 1 0 0 1 1-1h8.317c.16 0 .317.037.444.133C17.271 2.513 18.6 3.79 19 7c.386 3.091-.684 6.182-1.19 7.427a.93.93 0 0 1-.876.573H7z"
    />
    <path fill="#333" d="M11 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgKitchenKnife;
