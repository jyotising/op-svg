import * as React from "react";
const SvgBanana = (props) => (
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
      d="M8 16c-1.4-.467-3.017-1.586-3.738-2.713a.86.86 0 0 1-.122-.521l.123-1.875c.026-.405.504-.62.835-.385C6.165 11.265 8.114 12.5 9.5 12.5c3.5 0 6.5-1.25 8-4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 21.5c5-1 9.621-6.242 8.434-11.53L21 8V4l-3-.5C18 9.97 16.5 15 10 16c-2.988.46-5.853-.193-8.065-1.46L2.5 18c1 2.5 5.5 4.5 10.5 3.5"
    />
  </svg>
);
export default SvgBanana;
