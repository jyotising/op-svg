import * as React from "react";
const SvgRenault = (props) => (
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
      d="M15 2H9L4 12h4.5L11 7h2l2.5 5H20zM15 22H9L4 12h4.5l2.5 5h2l2.5-5H20z"
    />
  </svg>
);
export default SvgRenault;
