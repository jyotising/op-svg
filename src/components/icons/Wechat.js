import * as React from "react";
const SvgWechat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#wechat_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.499 10.856a8 8 0 1 0-13.895 5.552l-.599 3.605 3.558-1.528q2.35.782 4.437.39"
      />
      <path
        fill="#333"
        d="M7.563 10.234A1.13 1.13 0 0 0 8.688 9.1a1.13 1.13 0 0 0-1.126-1.133A1.13 1.13 0 0 0 6.438 9.1a1.13 1.13 0 0 0 1.125 1.133M12.063 10.234A1.13 1.13 0 0 0 13.187 9.1a1.13 1.13 0 0 0-1.124-1.133A1.13 1.13 0 0 0 10.937 9.1a1.13 1.13 0 0 0 1.126 1.133"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.38 19.965A5.25 5.25 0 1 1 21 17.987M21.001 17.986 21.5 21l-2.12-1.035"
      />
      <path
        fill="#333"
        d="M17.844 15.4a.847.847 0 0 1-.844-.85c0-.47.378-.85.844-.85s.843.38.843.85c0 .469-.377.85-.843.85M14.469 15.4a.847.847 0 0 1-.844-.85c0-.47.378-.85.844-.85s.844.38.844.85c0 .469-.378.85-.844.85"
      />
    </g>
    <defs>
      <clipPath id="wechat_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWechat;
