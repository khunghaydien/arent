import { SVGProps } from "react";

export default function IconCommonClose({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
      <path d="M7 7L26 26" stroke="#FF963C" strokeWidth="3" />
      <path d="M7 26L26 7" stroke="#FF963C" strokeWidth="3" />
    </svg>
  );
}
