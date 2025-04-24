import React from "react";
export type ColumnListItem = {
  recommend: string;
  src: string;
  alt: string;
  date: string;
  time: string;
  comment: string;
  hashtag: string[];
};

type ColumnListProps = {
  data: ColumnListItem[];
};

const ColumnList = ({ data }: ColumnListProps) => {
  return (
    <div className="flex justify-center w-full mt-14 mb-[14px]">
      <div className="flex gap-2 flex-wrap justify-center max-w-[960px]">
        {data.map(({ src, alt, date, time, comment, hashtag }, index) => (
          <div className="mb-[10px]" key={index}>
            <div className="relative">
              <img src={src} alt={alt} className="w-[234px] h-[144px]" />
              <div className="absolute bottom-0 left-0 bg-primary-300 px-2 py-[7px] text-white text-[15px]">
                <span>{date}</span> <span className="ml-2">{time}</span>
              </div>
            </div>
            <div className="text-dark-500 max-w-[234px] line-clamp-2 overflow-hidden">
              {comment}
            </div>
            <div className="text-primary-400">
              {hashtag.map((item: string, index: number) => (
                <span key={index} className="mr-2">{`#${item}`}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnList;
