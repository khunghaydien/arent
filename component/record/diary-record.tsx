import React from "react";
export type DiaryRecordItem = {
  date: string;
  time: string;
  title: string;
  content: string;
};
type DiaryRecordProps = {
  data: DiaryRecordItem[];
};
const DiaryRecord = ({ data }: DiaryRecordProps) => {
  return (
    <>
      <div className="flex justify-center w-full mt-14 diary-record">
        <div className="max-w-[960px] w-full text-[22px] text-dark-500">
          MY DIARY
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-[30px]">
        <div className="flex gap-3 flex-wrap justify-center max-w-[960px] w-full mt-4">
          {data.map(({ date, time, title, content }, index) => (
            <div
              className="p-4 w-[231px] h-[231px] border-[2px] border-[#707070] text-left text-dark-500"
              key={index}
            >
              <div className="text-[18px]">{date}</div>
              <div className="text-[18px] mb-2">{time}</div>
              <div className="text-[12px]">{title}</div>
              <div className="text-[12px] line-clamp-5">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiaryRecord;
