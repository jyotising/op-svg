import * as React from "react";
const SvgShade = (props) => (
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
      d="M12 3c-4.97 0-9 4.017-9 8.972V13c0-1.239 1.007-2.5 2.25-2.5S7.5 11.761 7.5 13c0-1.239 1.007-2.5 2.25-2.5S12 11.761 12 13c0-1.239 1.007-2.5 2.25-2.5s2.25 1.261 2.25 2.5c0-1.239 1.007-2.5 2.25-2.5S21 11.761 21 13v-1.028C21 7.017 16.97 3 12 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 13s-.75-2.75.5-5.5S12 3 12 3M16.5 13s.25-2.25-1-5.5S12 3 12 3M12 12.5v7.25a2.25 2.25 0 1 1-4.5 0v-.66M12 12.5V3M12 3V2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.25 10.5c1.243 0 2.25 1.261 2.25 2.5 0-1.239 1.007-2.5 2.25-2.5M14.25 10.5C13.007 10.5 12 11.761 12 13c0-1.239-1.007-2.5-2.25-2.5M5.25 10.5c1.243 0 2.25 1.261 2.25 2.5 0-1.239 1.007-2.5 2.25-2.5M7.867 4A9 9 0 0 1 12 3c1.49 0 2.895.361 4.133 1"
    />
  </svg>
);
export default SvgShade;
