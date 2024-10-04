import * as React from "react";
const SvgArena = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m22 13-10 5-10-5 10-5z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m12 3.5 10 5-10 5-10-5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M22 13v4l-10 5-10-5v-4l10 5zM22 7v6M2 13V7M12 18v-6M12 8V2"
    />
  </svg>
);
export default SvgArena;
