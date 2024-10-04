import * as React from "react";
const SvgSunrise = (props) => (
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
      d="M2 12h1.5M5 5l1 1M12 2v1.5M7 12a5 5 0 1 1 7.893 4.079M19 5l-1 1M22 12h-1.5M18.99 18.99l-.81-.81"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.75 14c-1.5 0-4.75.1-4.75 1.5s2.303 1.395 3.5 1.5c1 .087 2.731.844 2.5 2-.5 2.5-8.5 2-10.5 2"
    />
  </svg>
);
export default SvgSunrise;
