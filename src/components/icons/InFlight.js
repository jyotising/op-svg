import * as React from "react";
const SvgInFlight = (props) => (
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
      strokeWidth={2}
      d="M6 20c0-3.59 2.686-6.5 6-6.5s6 2.91 6 6.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6.5 18.5c0 .5 1.25 1 2 .5s.98-1.753 1.75-1.537S11 19.25 12 20s2.75.5 3.5-.75-.04-1.588.53-2.399c.38-.54.866-.408.97-.351"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 10.5h1M16.076 11.235l.848.53M7.076 11.765l.848-.53M19.53 14.067l.5.866M4.03 14.933l.5-.866M20.947 18.503l.105.994M2.447 19.497l.105-.994"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M21 5 4.5 9" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 3.5 6.5 3-6 1.5L6 4.5zM4.5 9 3 7"
    />
  </svg>
);
export default SvgInFlight;
