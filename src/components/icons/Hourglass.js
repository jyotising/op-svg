import * as React from "react";
const SvgHourglass = (props) => (
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
      d="M4 2h16M4 22h16M6 2v6l4.5 5M18 22v-7.25l-4.5-4.25M6 22v-7l3.25-3.25"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 2v6l-3.25 3.75M9 16.5h.5M14.573 16.323l.354.354M12 19h.5"
    />
  </svg>
);
export default SvgHourglass;
