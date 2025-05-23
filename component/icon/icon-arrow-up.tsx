import React, { SVGProps } from "react";

const IconArrowUp = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      {...props}
    >
      <path
        d="M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z"
        fill="#777777"
      />
    </svg>
  );
};

export default IconArrowUp;
