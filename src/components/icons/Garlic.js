import * as React from "react";
const SvgGarlic = (props) => (
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
      d="M13.5 10.5c0 4 1.5 3 2 5.5.512 2.562-1.631 5-4.25 5-2.62 0-4.75-2.388-4.75-5 0-2.305 1.25-3.75 2.5-4.5S11.5 10 11.5 8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.5 11.5c.5 0 2.75 1 3 3.5.226 2.262-1.25 5.75-7.5 6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 20c-3.923 0-5.999-2.352-6-5 0-2.853 4-5.5 5-6s1.5-1.476 1.5-2.5v-2c0-.69.31-1 1-1H14c.57 0 1 .5 1 1V6c0 1.026.635 1.836 1.544 2.29.38.189.78.37 1.19.538C19.39 9.505 22 10.573 22 13.5c0 2.44-1.701 4.5-3 4.5"
    />
  </svg>
);
export default SvgGarlic;
