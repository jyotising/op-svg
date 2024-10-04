import * as React from "react";
const SvgMailEdit = (props) => (
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
      d="M22 12V4.5H2v15h10M17.5 19.5l4-3.5-2-2-4 3.5v2z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 4.5 12 12l10-7.5"
    />
  </svg>
);
export default SvgMailEdit;
