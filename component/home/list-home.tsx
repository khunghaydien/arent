import React from "react";
export type ListHomeItem = {
  src: string;
  alt: string;
  date: string;
  meal: string;
};
type ListHomeProps = {
  data: ListHomeItem[];
};
const ListHome = ({ data }: ListHomeProps) => {
  return (
    <div className="flex justify-center w-full mt-6 mb-6">
      <div className="flex gap-2 flex-wrap justify-center max-w-[960px]">
        {data.map(({ src, alt, date, meal }: ListHomeItem, index) => (
          <div className="relative" key={index}>
            <img
              src={src}
              alt={alt}
              className="w-[234px] h-[234px] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-primary-300 px-2 py-[7px] text-white text-[15px]">
              {`${date}.${meal}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListHome;
