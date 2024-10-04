import * as React from "react";
const SvgPowerSupply = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#power-supply_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.148 3H7.852a.5.5 0 0 0-.47.331l-3.336 9.29a.5.5 0 0 0-.02.263l.897 4.71a.5.5 0 0 0 .49.406h13.173a.5.5 0 0 0 .491-.407l.897-4.709a.5.5 0 0 0-.02-.263l-3.335-9.29a.5.5 0 0 0-.47-.331M12 18v4M12 6v3M8.25 11.701l1.5 2.598M15.75 11.701l-1.5 2.598"
      />
    </g>
    <defs>
      <clipPath id="power-supply_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPowerSupply;
