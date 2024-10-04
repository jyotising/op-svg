import * as React from "react";
const SvgGateMachine = (props) => (
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
      d="M3 17v4h3v-4zM18 17v4h3v-4zM12 7v1.5M12 3v1M12 13v2M4.5 3v14M19.5 3v14M12 19v2M10 10.5H4.5V15zM14 10.5h5.5V15z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9 7.5H4.5M15 7.5h4.5"
    />
  </svg>
);
export default SvgGateMachine;
