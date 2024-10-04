import * as React from "react";
const SvgRattle = (props) => (
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
      d="M11.502 11.994a5.5 5.5 0 1 0 7.07-8.426 5.5 5.5 0 0 0-7.07 8.426"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.824 4.246C8.52 4.27 7.661 2.57 6.536 3.91c-1.016 1.211.247 2.818-.718 3.967M12.651 12.959 9.76 16.406c-.804.957-.841 2.558-1.806 3.707-.964 1.149-2.373 1.272-3.522.308s-1.272-2.373-.308-3.522c.964-1.15 2.534-1.464 3.337-2.422.804-.957 2.582-2.946 2.893-3.447M4.656 10.819a1.5 1.5 0 1 0 1.928-2.298 1.5 1.5 0 0 0-1.928 2.298M13.267 20.003a1.5 1.5 0 1 0 1.929-2.298 1.5 1.5 0 0 0-1.929 2.298M18.608 12.082c.315 1.57 1.426 4.134.431 4.931s-3.262-.78-3.843.691"
    />
  </svg>
);
export default SvgRattle;
