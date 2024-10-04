import * as React from "react";
const SvgNaturalMode = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 13.5c-2.828 0-4.967-2.171-4.967-5L7 3.5l2.5 2 2.5-3 2.5 3 2.5-2v5c0 2.829-2.171 5-5 5M11.743 21.657c.781-.781-.169-2.997-2.121-4.95-1.953-1.952-4.169-2.902-4.95-2.121-.781.78.169 2.997 2.121 4.95 1.953 1.952 4.17 2.902 4.95 2.12"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12.415 21.485c.78.781 2.997-.169 4.95-2.121 1.952-1.953 2.902-4.169 2.12-4.95-.78-.781-2.997.169-4.95 2.121-1.952 1.953-2.902 4.169-2.12 4.95"
    />
  </svg>
);
export default SvgNaturalMode;
