import * as React from "react";
const SvgPin = (props) => (
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
      d="M5.348 8.752c1.32-1.319 2.887-1.283 4.591-.348l6.371-3.531-.36-2.48 5.656 5.657-2.473-.355-3.537 6.366c.892 1.819.97 3.271-.348 4.59l-3.89-3.888-8.136 6.015 5.997-8.155z"
    />
  </svg>
);
export default SvgPin;
