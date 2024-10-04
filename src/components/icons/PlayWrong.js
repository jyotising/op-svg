import * as React from "react";
const SvgPlayWrong = (props) => (
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
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M16.5 16.5l4 4M20.5 16.5l-4 4"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 12V8.536l3 1.732L16 12l-3 1.732-3 1.732z"
    />
  </svg>
);
export default SvgPlayWrong;
