import * as React from "react";
const SvgGobletOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#333" strokeWidth={2} clipPath="url(#goblet-one_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.868 12.06 2.475 2.475a6.5 6.5 0 0 0 9.193-9.192L12.06 2.868"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        d="m15 15 3 3"
      />
      <path d="M9.475 9.475c2.538-2.539 3.488-5.705 2.121-7.071-1.367-1.367-4.532-.418-7.07 2.12-2.54 2.54-3.489 5.705-2.122 7.072s4.532.417 7.07-2.121ZM20.06 20.06c1.172-1.171 1.647-2.596 1.061-3.181-.585-.586-2.01-.111-3.182 1.06-1.171 1.172-1.646 2.596-1.06 3.182s2.01.111 3.182-1.06Z" />
    </g>
    <defs>
      <clipPath id="goblet-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGobletOne;
