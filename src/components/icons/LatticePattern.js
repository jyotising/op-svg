import * as React from "react";
const SvgLatticePattern = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lattice-pattern_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4h2M7 8h2M8 3v2M4 7v2M11 4h2M15 8h2M16 3v2M12 7v2M19 4h2M20 7v2M3 12h2M7 16h2M8 11v2M4 15v2M11 12h2M15 16h2M16 11v2M12 15v2M19 12h2M20 15v2M3 20h2M8 19v2M11 20h2M16 19v2M19 20h2"
      />
    </g>
    <defs>
      <clipPath id="lattice-pattern_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLatticePattern;
