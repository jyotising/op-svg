import * as React from "react";
const SvgEyebrow = (props) => (
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
      d="M12 20c4.97 0 9-5 9-5s-4.03-5-9-5-9 5-9 5 4.03 5 9 5Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 3C10.5 3 5 4.75 3.5 6S3 9.5 4 9s7.6-2.9 10-3.5 5.833.417 7 1c-1.167-1-3.5-3.5-7-3.5Z"
    />
  </svg>
);
export default SvgEyebrow;
