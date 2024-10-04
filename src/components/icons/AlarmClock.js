import * as React from "react";
const SvgAlarmClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alarm-clock_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22.167A9.167 9.167 0 1 0 2.833 13 9.167 9.167 0 0 0 12 22.167Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.88 7.677v5.504l3.885 3.886M2 4.5 5.5 2M22 4.5 18.5 2"
      />
    </g>
    <defs>
      <clipPath id="alarm-clock_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarmClock;
