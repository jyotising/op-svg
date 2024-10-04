import * as React from "react";
const SvgClothesHoodie = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clothes-hoodie_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v4.5m6.5-2.5v7.5zm-13 7.5V22h13v-3.5zm0 0H2V11c0-1.5 1-3.25 2.5-4.5S8 5 8 5l4 4zm0 0V11zm13 0H22V11c0-1.5-1-3.25-2.5-4.5S16 5 16 5l-4 4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 6.5C6 5.25 8 5 8 5l4 4 4-4s2 .25 3.5 1.5l1-2.25-1-2.25h-15l-1 2.25z"
      />
    </g>
    <defs>
      <clipPath id="clothes-hoodie_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClothesHoodie;
