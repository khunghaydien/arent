"use client";
import { ButtonLoadMore } from "@/component/button";
import {
  API_GET_RECORD_CHART,
  API_GET_RECORD_DIARY,
  API_GET_RECORD_EXERCISE,
} from "@/component/const";
import { useFetchData } from "@/component/hook/useFetchData";
import { useFetchPaginationData } from "@/component/hook/useFetchPaginationData";
import BodyRecord, { ChartDataRecord } from "@/component/record/body-record";
import DiaryRecord, { DiaryRecordItem } from "@/component/record/diary-record";
import ExerciseRecord, {
  ExerciseRecordItem,
} from "@/component/record/exercise-record";
import { FilterRecord } from "@/component/record/filter-record";
import { useTranslations } from "next-intl";
import React from "react";
const Page = () => {
  const t = useTranslations();
  const handleScrollToKey = (key: string) => {
    const scrollToClass = document.querySelector(`.${key}`) as HTMLElement;

    if (scrollToClass) {
      scrollToClass.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const { data } = useFetchData<ChartDataRecord>(API_GET_RECORD_CHART);
  const {
    items: diary,
    hasMore,
    loadMore,
  } = useFetchPaginationData<DiaryRecordItem>(API_GET_RECORD_DIARY);
  const { items: exercise } = useFetchPaginationData<ExerciseRecordItem>(
    API_GET_RECORD_EXERCISE
  );
  return (
    <>
      <FilterRecord onClick={handleScrollToKey} />
      <BodyRecord lineChart={data?.lineChart} />
      <ExerciseRecord data={exercise} />
      <DiaryRecord data={diary} />
      {hasMore && (
        <ButtonLoadMore label={t("recordLoadMore")} onClick={loadMore} />
      )}
    </>
  );
};

export default Page;
