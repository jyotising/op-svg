import * as React from "react";
const SvgStapler = (props) => (
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
      d="M21 17.5v4H3v-4h12.5M19.192 10.903 4.157 5.431 2.789 9.189l12.088 4.4M4.185 5.39l7.256 2.69a.015.015 0 0 0 .02-.01A2.64 2.64 0 0 0 9.9 4.674l-4.75-1.761a.045.045 0 0 0-.058.026zM8.377 11.36l-.684 1.88a.5.5 0 0 1-.64.299l-3.29-1.197a.5.5 0 0 1-.298-.641l.684-1.88"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M18 18.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
  </svg>
);
export default SvgStapler;
