import * as React from "react";
const SvgCircleFour = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-four_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M20.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.098 7.872a4.5 4.5 0 0 0 3.72-1.966 7.3 7.3 0 0 1 2.342 2.25A4.5 4.5 0 0 0 16 12c0 1.671.911 3.13 2.264 3.906a7.3 7.3 0 0 1-2.213 2.266 4.5 4.5 0 0 0-3.953-2.347c-1.7 0-3.18.943-3.945 2.334a7.3 7.3 0 0 1-2.247-2.342 4.5 4.5 0 0 0 1.966-3.719c0-1.54-.774-2.9-1.954-3.71a7.26 7.26 0 0 1 2.47-2.47 4.5 4.5 0 0 0 3.71 1.954"
      />
    </g>
    <defs>
      <clipPath id="circle-four_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleFour;
