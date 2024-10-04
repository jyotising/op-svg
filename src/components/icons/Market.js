import * as React from "react";
const SvgMarket = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#market_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m12 1.5.174.001C17.863 1.595 22.5 6.234 22.5 12.037l-.001.175C22.404 17.918 17.709 22.5 12 22.5l-.174-.001C6.137 22.405 1.5 17.766 1.5 12.037 1.5 6.175 6.232 1.5 12 1.5m7.19 11.194-8.657 2.168a1 1 0 0 1-.244.03l-.094-.005a1 1 0 0 1-.58-.256l-.845 2.94-.011.065c-.105.758.78 1.378 1.7.909l7.99-4.547.097-.057c.555-.35.769-.812.644-1.247M8.99 6.389c-.605-.464-1.58-.007-1.633 1.02L7.3 16.605c-.004.72.296 1.178.76 1.293l2.45-8.58.028-.082c.111-.294.349-.508.631-.599l-2.122-2.2zm1.54-.75c-.58-.305-1.086-.26-1.401.067l6.205 6.412c.243.25.328.595.26.911l2.968-.738.068-.025c.704-.292.795-1.364-.068-1.924l-7.934-4.648z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="market_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMarket;