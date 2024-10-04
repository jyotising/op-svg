import * as React from "react";
const SvgBabyMeal = (props) => (
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
      d="M12 3H5a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 5 21h10"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 3v8.762L2.5 14M9.5 12l6 2"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M18.5 9v12" />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M15.5 6.667c0-3.111 2-4.667 3-4.667s3 1.556 3 4.667-6 3.11-6 0Z"
    />
  </svg>
);
export default SvgBabyMeal;
