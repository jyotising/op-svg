import * as React from "react";
const SvgPhoneOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#phone-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M20 2.5H4A1.5 1.5 0 0 0 2.5 4v16A1.5 1.5 0 0 0 4 21.5h16a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 20 2.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 6h-4v12h4zM18.5 6h-6v3h6z"
      />
      <path
        fill="#333"
        d="M12.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18.5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="phone-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneOne;
