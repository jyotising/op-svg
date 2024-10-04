import * as React from "react";
const SvgAppointment = (props) => (
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
      d="M12 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M2 20.5c0-4.418 4.03-8 9-8"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17 21.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 15.5v2h2"
    />
  </svg>
);
export default SvgAppointment;
