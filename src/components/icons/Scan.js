import * as React from "react";
const SvgScan = (props) => (
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
      d="M3.5 12h17M12 3.5v17"
    />
    <path
      fill="#333"
      d="M4.5 2.5h-2v2h2zM9 2.5H7v2h2zM17 2.5h-2v2h2zM21.5 2.5h-2v2h2zM21.5 7h-2v2h2zM4.5 7h-2v2h2zM4.5 19.5h-2v2h2zM9 19.5H7v2h2zM17 19.5h-2v2h2zM21.5 19.5h-2v2h2zM21.5 15h-2v2h2zM4.5 15h-2v2h2z"
    />
  </svg>
);
export default SvgScan;
