"use client";
import { useTranslations } from "next-intl";
import { ButtonLoadMore } from "@/component/button";
import FilterHome from "@/component/home/filter-home";
import ListHome, { ListHomeItem } from "@/component/home/list-home";
import BannerHome, { ChartProps } from "@/component/home/banner-home";
import { useFetchPaginationData } from "@/component/hook/useFetchPaginationData";
import { useCallback } from "react";
import { useFetchData } from "@/component/hook/useFetchData";
import { API_GET_HOME_CHART, API_GET_HOME_MEAL } from "@/component/const";
export default function HomePage() {
  const t = useTranslations();

  const { items, hasMore, keywords, setKeywords, loadMore } =
    useFetchPaginationData<ListHomeItem>(API_GET_HOME_MEAL);
  const { data } = useFetchData<ChartProps>(API_GET_HOME_CHART);

  const handleFilter = useCallback(
    (key: string) => {
      const keyExists = keywords.includes(key);
      let newKeywords: string[];
      if (keyExists) {
        newKeywords = keywords.filter((currentKey) => currentKey !== key);
      } else {
        newKeywords = [...keywords, key];
      }
      setKeywords(newKeywords);
    },
    [keywords, setKeywords]
  );

  return (
    <>
      <BannerHome
        lineChart={data?.lineChart}
        doughnutChart={data?.doughnutChart}
      />
      <FilterHome onClick={handleFilter} />
      <ListHome data={items} />
      {hasMore && (
        <ButtonLoadMore label={t("loadMoreHomePage")} onClick={loadMore} />
      )}
    </>
  );
}
