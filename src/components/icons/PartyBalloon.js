import * as React from "react";
const SvgPartyBalloon = (props) => (
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
      d="M17 8c.5-4-1.436-6-4.936-6S6.5 4.5 7 8s3.627 6 5.064 6C13.5 14 16.5 12 17 8M12.5 14c-1 .485-2.5 1.944-2.5 3.5 0 1.555 5 .722 5 2.278C15 21.333 9.5 22 9.5 22"
    />
  </svg>
);
export default SvgPartyBalloon;
