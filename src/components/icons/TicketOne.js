import * as React from "react";
const SvgTicketOne = (props) => (
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
      d="M2 4h3.5s.5 2.5 3 2.5 3-2.5 3-2.5H22v16H11.5s-.5-2.5-3-2.5-3 2.5-3 2.5H2z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.5 9.5v1M8.5 13.5v1M12.5 10.5H18M12.5 13.5H18"
    />
  </svg>
);
export default SvgTicketOne;
