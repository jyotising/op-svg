import * as React from "react";
const SvgRedEnvelopes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#red-envelopes_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 2H4v20h16z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 5c-2 2.881-3.84 4.66-5.84 5.446m-4.292-.057C7.868 9.603 6 7.88 4 5z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13.5A2.25 2.25 0 1 0 12 9a2.25 2.25 0 0 0 0 4.5Z"
      />
    </g>
    <defs>
      <clipPath id="red-envelopes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRedEnvelopes;
