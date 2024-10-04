import * as React from "react";
const SvgPaperMoney = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#paper-money_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 3.5h-15A2.5 2.5 0 0 0 2 6v12a2.5 2.5 0 0 0 2.5 2.5h15A2.5 2.5 0 0 0 22 18V6a2.5 2.5 0 0 0-2.5-2.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 7.5 3 3 3-3M8.5 11.5h7M8.5 14.5h7M12 11.5V17"
      />
    </g>
    <defs>
      <clipPath id="paper-money_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperMoney;
