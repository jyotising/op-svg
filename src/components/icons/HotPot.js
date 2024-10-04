import * as React from "react";
const SvgHotPot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hot-pot_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5.5V2M16 5.5v-2M8 5.5v-2M22 8.5H2c0 2.793 1.789 5.251 4.5 6.682 1.578.833 3.468 1.318 5.5 1.318s3.922-.485 5.5-1.318c2.711-1.43 4.5-3.89 4.5-6.682M5.233 19.5h13.534M6.5 15.182 4.5 22M17.5 15.182l2 6.818M10 12.5h4"
      />
    </g>
    <defs>
      <clipPath id="hot-pot_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHotPot;
