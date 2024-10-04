import * as React from "react";
const SvgTransform = (props) => (
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
      d="M6.857 10.286a3.429 3.429 0 1 0 0-6.857 3.429 3.429 0 0 0 0 6.857M17.143 20.571a3.429 3.429 0 1 0 0-6.857 3.429 3.429 0 0 0 0 6.857M12 22C6.479 22 2 17.523 2 12l3.334 1.667M12 2c5.523 0 10 4.477 10 10l-3.333-1.667"
    />
  </svg>
);
export default SvgTransform;
