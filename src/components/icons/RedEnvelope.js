import * as React from "react";
const SvgRedEnvelope = (props) => (
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
      d="M19.5 2h-15v3L12 7l7.5-2zM19.5 8.5V22h-15V8.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.5 9.5 2.5 3 2.5-3M9 15.5h6M9 12.5h6M12 12.5v6"
    />
  </svg>
);
export default SvgRedEnvelope;
