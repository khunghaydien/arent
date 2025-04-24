import clsx from "clsx";
import React from "react";
type CardRecordProps = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  className: string;
};
const CardRecord = ({
  children,
  title,
  subTitle,
  className,
}: CardRecordProps) => {
  return (
    <>
      <div className={clsx("flex justify-center w-full mt-14", className)}>
        <div className="max-w-[960px] w-full text-[22px] text-white bg-dark-500 px-6 pt-6 pb-4 flex gap-6">
          <div className="w-24">{title}</div>
          <div className="text-[22px]">{subTitle}</div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-[960px] w-full bg-dark-500 px-6 pb-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default CardRecord;
