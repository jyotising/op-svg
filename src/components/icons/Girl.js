import * as React from "react";
const SvgGirl = (props) => (
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
      d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M13.615 8h-3.23L5 18h14zM13.5 18v4M10.5 18v4"
    />
  </svg>
);
export default SvgGirl;
