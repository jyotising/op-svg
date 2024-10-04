import * as React from "react";
const SvgVolumeMute = (props) => (
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
      d="m20.367 10.143-4.242 4.242M16.125 10.143l4.243 4.242"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v18c-3.5 0-6.1-4.58-6.1-4.58H3a1 1 0 0 1-1-1V8.505a1 1 0 0 1 1-1h2.9S8.5 3 12 3Z"
    />
  </svg>
);
export default SvgVolumeMute;
