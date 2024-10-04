import * as React from "react";
const SvgHotAirBalloon = (props) => (
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
      d="M19.5 9.176c0 4.751-4 8.824-7.5 8.824s-7.5-4.073-7.5-8.824C4.5 5.326 7.446 2 12 2s7.5 3.327 7.5 7.176"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12.5 2c1.85 1.91 3.5 5.06 3.5 8 0 2.903-1.69 6.096-3.5 8M11.5 2C9.342 4.044 8 6.853 8 10c0 3.108 1.388 5.962 3.5 8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 8.009s2.533.509 4.5 0S19 6.5 19 6.5M4.5 10S7 11.25 9 11.75s4 .25 4 .25M15 17.5l-.003.015zm-.003.015-.697 3.533S12.937 22 12 22s-2.3-.952-2.3-.952L9 17.5l3 .5z"
    />
  </svg>
);
export default SvgHotAirBalloon;
