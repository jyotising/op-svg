import * as React from "react";
const SvgPaperclip = (props) => (
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
      d="m13.061 18.718 7.071-7.071c1.414-1.415 2.121-4.95-.354-7.425s-6.01-1.768-7.424-.353l-9.546 9.545c-.707.708-1.768 3.182.353 5.304 2.122 2.121 4.597 1.06 5.304.353l9.192-9.192c.707-.707 1.06-2.475 0-3.535s-2.828-.708-3.535 0L7.404 13.06"
    />
  </svg>
);
export default SvgPaperclip;
