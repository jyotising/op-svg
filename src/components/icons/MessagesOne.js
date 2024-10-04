import * as React from "react";
const SvgMessagesOne = (props) => (
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
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 11.5c0 1.931-1.352 3.578-3.25 4.217A5.5 5.5 0 0 1 12 16c-2 0-4.5 1-4.5 1l.566-1.223c.282-.608.102-1.315-.285-1.861A4.16 4.16 0 0 1 7 11.5C7 9.015 9.239 7 12 7s5 2.015 5 4.5Z"
    />
  </svg>
);
export default SvgMessagesOne;
