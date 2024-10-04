import * as React from "react";
const SvgCandy = (props) => (
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
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 14a2 2 0 0 1-2-2"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.344 8.406-6.39-.923 5.467-5.466zM15.656 15.656l6.39.923-5.467 5.467z"
    />
  </svg>
);
export default SvgCandy;
