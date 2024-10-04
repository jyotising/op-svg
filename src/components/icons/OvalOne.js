import * as React from "react";
const SvgOvalOne = (props) => (
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
      strokeWidth={2}
      d="M12 22c3.866 0 7-4.477 7-10S15.866 2 12 2 5 6.477 5 12s3.134 10 7 10Z"
    />
  </svg>
);
export default SvgOvalOne;
