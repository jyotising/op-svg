import * as React from "react";
const SvgRock = (props) => (
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
      d="M11.75 10.25c-.577 0-2.174-.084-4.193 2.224-1.201 1.372-1.414 3.043-1.325 4.205.042.552.602.856 1.117.651.372-.149.78-.334 1.073-.53.866-.576.577-1.153.866-2.019.288-.865 1.442-1.442 2.596-1.154 1.153.289 1.595 1.165 1.73 2.02.136.853-.364 1.853-1.442 2.307-1.189.5-1.73 0-3.173-.288-.751-.15-1.503.507-1.936.983a.76.76 0 0 0-.058.96c.144.2.33.431.552.653.577.577 2.884 2.307 5.192 2.019 2.307-.288 4.327-2.02 5.192-4.038.865-2.02.559-4.743-1.441-6.243"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.5 12-4.936-9.88c-.115-.23-.388-.338-.611-.21-.52.3-1.13.861-.932 1.734.256 1.125 2.77 9.88 3.479 11.356"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 13.5-.474-9.655c-.012-.25-.207-.456-.457-.44-.6.038-1.407.274-1.612 1.153C15.194 5.682 15.007 7.363 15 9"
    />
  </svg>
);
export default SvgRock;
