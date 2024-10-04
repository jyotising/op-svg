import * as React from "react";
const SvgStarOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#star-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m8.436 16.522-.437 5.83c-.03.41.333.692.659.509 2.306-1.292 9.531-6.037 13.193-16.466.168-.478-.283-.91-.669-.64-2.163 1.514-6.89 4.645-9.81 5.242 0 0 1.87-1.3 2.99-3.294a.6.6 0 0 0-.022-.623l-4.084-5.885c-.242-.35-.738-.205-.826.24L8.16 7.904 2.191 13.11c-.299.261-.238.789.107.928zM18.987 14.225c-.378.527-1.192 1.611-1.943 2.274-.15.133-.13.355.042.463l3.971 2.493c.24.15.562-.028.522-.288-.185-1.192-.717-3.676-2.063-4.98-.15-.145-.409-.13-.529.038"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="star-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarOne;
