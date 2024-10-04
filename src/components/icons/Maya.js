import * as React from "react";
const SvgMaya = (props) => (
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
      d="M22 17H2v4h20zM20.5 13.5h-17V17h17zM19 10.5H5v3h14zM17.5 7.5h-11v3h11zM14 3.5h-4v4h4z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 7.5 7 21M14 7.5 17 21"
    />
  </svg>
);
export default SvgMaya;
