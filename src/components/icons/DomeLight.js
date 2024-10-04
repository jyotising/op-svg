import * as React from "react";
const SvgDomeLight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#dome-light_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4C6.477 4 2 8.477 2 14h20c0-5.523-4.477-10-10-10M12 2v2M12 19a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5M20.017 19.488l-1.034-1.476M5.137 18.113l-1.274 1.274M17 21l-.574-.82M7.567 20.237l-.707.707"
      />
    </g>
    <defs>
      <clipPath id="dome-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDomeLight;
