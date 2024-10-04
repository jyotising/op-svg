import * as React from "react";
const SvgMessageSearch = (props) => (
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
      d="M12.75 18.5H10.5l-5 2.5v-2.5H2v-15h20V9"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.5 16 2.5 2M6 7.5h3M6 10.5h6"
    />
  </svg>
);
export default SvgMessageSearch;
