import * as React from "react";
const SvgFamily = (props) => (
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
      d="M5 9.5s-2.571 1-3 4.5M19 9.5s2.571 1 3 4.5M9 9.5s2.4.583 3 3.5M15 9.5s-2.4.583-3 3.5M10 17s-2.1.375-3 3M14 17s2.1.375 3 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgFamily;
