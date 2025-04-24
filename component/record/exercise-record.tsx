import React, { useMemo } from "react";
import CardRecord from "./card-record";
export type ExerciseRecordItem = {
  label: string;
  time: string;
  kcal: string;
};
type ExerciseRecordProps = {
  data: ExerciseRecordItem[];
};
const ExerciseRecord = ({ data }: ExerciseRecordProps) => {
  return (
    <CardRecord title={"MY EXERCISE"} subTitle={"2021.05.21"} className="exercise-record">
      <div className="pr-6 h-[210px] overflow-y-scroll flex flex-wrap justify-between">
        {data.map(({ label, time, kcal }, index) => (
          <div
            className="pb-[2px] border-b border-dark-400 w-[416px] text-white"
            key={index}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="text-white text-[15px] flex-1 ">{label}</div>
              <div className="text-primary-300 text-[18px]">{time}</div>
            </div>
            <div className="text-primary-300 text-[15px] ml-4">{kcal}</div>
          </div>
        ))}
      </div>
    </CardRecord>
  );
};

export default ExerciseRecord;
