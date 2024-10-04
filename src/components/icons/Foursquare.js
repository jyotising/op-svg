import * as React from "react";
const SvgFoursquare = (props) => (
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
      d="M19 2H7v20l5-9h4zM17.5 7.5h-5M18.318 4.5l-1.636 6"
    />
  </svg>
);
export default SvgFoursquare;
