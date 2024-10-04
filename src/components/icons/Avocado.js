import * as React from "react";
const SvgAvocado = (props) => (
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
      d="M16.5 9.5C15.5 7 16.5 2 12 2S8.5 7 7.5 9 5 12.5 5 15.5C5 20 8.75 22 12 22s7-2 7-6.5c0-2.5-1.5-3.5-2.5-6Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M15 15a3 3 0 0 1-6 0c0-1.657 1.343-3.75 3-3.75s3 2.093 3 3.75Z"
    />
  </svg>
);
export default SvgAvocado;
