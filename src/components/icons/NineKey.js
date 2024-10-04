import * as React from "react";
const SvgNineKey = (props) => (
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
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12.25 7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 14.5c.41 1.097 1.274 2 2.75 2 1.519 0 2.75-1.343 2.75-3V10"
    />
  </svg>
);
export default SvgNineKey;
