import * as React from "react";
const SvgBone = (props) => (
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
      d="M21.762 8.657c0-2.12-1.768-2.12-3.006-3.358s-1.237-3.006-3.358-3.006c-1.415 0-2.652 1.591-2.652 2.652 0 1.06.354 1.768 1.06 2.475l-6.363 6.364c-.707-.707-1.415-1.06-2.475-1.06s-2.652 1.237-2.652 2.65c-.177 2.299 1.945 2.3 3.005 3.36 1.061 1.06 1.061 3.182 3.36 3.005 1.413 0 2.65-1.591 2.65-2.652 0-1.06-.353-1.767-1.06-2.475l6.364-6.364c.707.708 1.414 1.061 2.475 1.061 1.06 0 2.652-1.237 2.652-2.652Z"
    />
  </svg>
);
export default SvgBone;
