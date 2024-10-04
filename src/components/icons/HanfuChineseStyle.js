import * as React from "react";
const SvgHanfuChineseStyle = (props) => (
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
      d="M4.5 4.5 9 2h6l4.5 2.5 2 8-4 2V22h-11v-7.5l-4-2zM9 2l3 5.25"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 2-3 5.25-5.5 7.25"
    />
  </svg>
);
export default SvgHanfuChineseStyle;
