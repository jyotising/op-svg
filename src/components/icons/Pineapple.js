import * as React from "react";
const SvgPineapple = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.25 7.25C10 7 10 6.575 10 5.5 10 3.567 12 2 12 2s1.5 1.567 1.5 3.5c0 .961 0 1.5-.25 1.75"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 8.5c-.605-1.46-2.069-3.284-3-4 2.706-.507 4.887 1.15 6 2.5M15 8c.726-1.348 2.152-2.847 3-3.5-2.822-.529-4.936 1.13-6 2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.363 8.687q-.413.364-.863.813c-2.095 2.095-2.449 5.932-2.499 7.64-.016.575-.012 1.161.205 1.693.233.572.731 1.37 1.794 2.167 2 1.5 8 1.5 10 0 1.058-.794 1.557-1.587 1.791-2.159.22-.537.224-1.13.207-1.71-.05-1.712-.406-5.54-2.498-7.631q-.45-.45-.862-.813c-2.13-1.883-5.146-1.883-7.275 0M16 9 5.5 14.5M8 9l10.5 5.5M17.5 20.5l-12-7M18.5 13.5l-12 7"
    />
  </svg>
);
export default SvgPineapple;
