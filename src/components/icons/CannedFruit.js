import * as React from "react";
const SvgCannedFruit = (props) => (
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
      d="M7.5 12s-.25 1.5.5 4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.783 6C19.363 7.405 20 9.321 20 10.969c0 1.939-.673 5.706-1.157 8.17a2.94 2.94 0 0 1-2.9 2.361H8.02c-1.393 0-2.601-.957-2.88-2.321C4.656 16.819 4 13.2 4 10.969 4 9.129 4.722 7.316 5.414 6"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M5.793 3.228A.5.5 0 0 1 6.213 3h11.574a.5.5 0 0 1 .42.228l1.294 2a.5.5 0 0 1-.42.772H4.919a.5.5 0 0 1-.42-.772z"
    />
  </svg>
);
export default SvgCannedFruit;
