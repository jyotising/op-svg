import * as React from "react";
const SvgSpeedOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#speed-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.149 9.39s-1.615 4.55-2.382 5.345a2 2 0 1 1-2.878-2.778c.768-.795 5.26-2.567 5.26-2.567Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.425 19.425c1.9-1.9 3.075-4.526 3.075-7.425 0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12c0 2.9 1.175 5.525 3.075 7.425M12 2v2M19.423 5.571 17.868 6.83M21.261 13.616l-1.948-.45M2.739 13.616l1.949-.45M4.577 5.571 6.132 6.83"
      />
    </g>
    <defs>
      <clipPath id="speed-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpeedOne;
