import * as React from "react";
const SvgTopic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#topic_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a9.97 9.97 0 0 0 1.684 5.556Q3.867 17.829 3 21q3.171-.867 3.444-.684A9.98 9.98 0 0 0 12 22Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.302 9.91h8.39M10.923 7.87 9.466 16.13M14.423 7.87l-1.457 8.261M7.302 14h8.39"
      />
    </g>
    <defs>
      <clipPath id="topic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTopic;
