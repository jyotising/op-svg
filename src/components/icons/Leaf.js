import * as React from "react";
const SvgLeaf = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#leaf_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 12c0 7.047-6.5 10-6.5 10s-6.5-2.312-6.5-10C5.5 4.313 12 2 12 2s6.5 2.953 6.5 10M12 18l2.5-2.5M12 14.5 9.5 12M12 11.5 14.5 9M12 22V7"
      />
    </g>
    <defs>
      <clipPath id="leaf_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLeaf;
