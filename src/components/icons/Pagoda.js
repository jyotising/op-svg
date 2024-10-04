import * as React from "react";
const SvgPagoda = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 8h6s1.212 1.336 2.25 1.714C17.9 9.951 19 10 19 10s-.621.387-1.05.572c-.543.232-1.45.428-1.45.428h-9s-.907-.196-1.45-.428C5.621 10.387 5 10 5 10s1.1-.049 1.75-.286C7.788 9.336 9 8 9 8ZM8.5 14h7s1.314 1.336 2.5 1.714c.744.237 2 .286 2 .286s-.71.387-1.2.571c-.62.233-1.8.429-1.8.429H7s-1.18-.196-1.8-.429C4.71 16.387 4 16 4 16s1.256-.049 2-.286C7.186 15.336 8.5 14 8.5 14ZM9 3.714C10.225 3.15 12 2 12 2s1.775 1.149 3 1.714c.386.178 1 .429 1 .429s-.363.278-.6.428c-.309.197-.9.429-.9.429h-5s-.591-.232-.9-.429c-.237-.15-.6-.428-.6-.428s.614-.25 1-.429Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 5v3M13.5 5v3M9.5 11v3M14.5 11v3M8 17v5h8v-5"
    />
  </svg>
);
export default SvgPagoda;
