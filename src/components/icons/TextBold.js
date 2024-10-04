import * as React from "react";
const SvgTextBold = (props) => (
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
      d="M12 12c2.753 0 4.984-2.239 4.984-5S14.753 2 12 2H5.5v10zM14.016 22C16.768 22 19 19.761 19 17s-2.232-5-4.984-5H5.5v10z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextBold;
