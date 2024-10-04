import * as React from "react";
const SvgGoogle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#google_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        d="m14.75 7.25-.47.883a1 1 0 0 0 1.302-.328zm2.5-3.75.832.555a1 1 0 0 0-.15-1.287zm4.75 7 .998-.067A1 1 0 0 0 22 9.5zm-10 0v-1a1 1 0 0 0-1 1zm0 3.5h-1a1 1 0 0 0 1 1zm4.75 0h1a1 1 0 0 0-1-1zm3 4.25-.79-.613zM15.582 7.805l2.5-3.75-1.664-1.11-2.5 3.75zM17.25 3.5a76 76 0 0 0 .68-.734l-.003-.002-.015-.014a2 2 0 0 0-.121-.1 4 4 0 0 0-.311-.222 7 7 0 0 0-1.176-.604C15.26 1.398 13.694 1 11.5 1v2c1.945 0 3.254.352 4.05.676.399.163.673.32.837.427a2 2 0 0 1 .193.14l-.001-.002-.004-.003-.003-.003-.002-.001v-.001zM11.5 1C9.153 1 6.545 2.05 4.526 3.885 2.489 5.735 1 8.43 1 11.75h2c0-2.68 1.192-4.86 2.87-6.385C7.568 3.825 9.71 3 11.5 3zM1 11.75C1 18.6 6.497 23 12 23v-2c-4.497 0-9-3.6-9-9.25zm21-1.25v-1H12v2h10zm-11 0V14h2v-3.5zm1 4.5h4.75v-2H12zm3.75-1c0 .349-.26.966-.96 1.54-.666.547-1.631.96-2.79.96v2c1.641 0 3.051-.586 4.06-1.414.976-.802 1.69-1.934 1.69-3.086zM12 16.5c-2.809 0-4.5-2.402-4.5-4.75h-2c0 3.152 2.309 6.75 6.5 6.75zm-4.5-4.75C7.5 9.582 9.522 7.5 12 7.5v-2c-3.522 0-6.5 2.918-6.5 6.25zM12 7.5c1 0 1.823.39 2.28.633l.94-1.766C14.676 6.079 13.5 5.5 12 5.5zM12 23c2.836 0 6.23-1.156 8.54-4.137l-1.58-1.226C17.094 20.044 14.335 21 12 21zm8.54-4.137c1.519-1.96 2.727-4.396 2.458-8.43l-1.996.133c.231 3.467-.771 5.431-2.042 7.071z"
      />
    </g>
    <defs>
      <clipPath id="google_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoogle;