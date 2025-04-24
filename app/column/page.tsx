"use client";
import { ButtonLoadMore } from "@/component/button";
import ColumnFilter from "@/component/column/filter";
import ColumnList, { ColumnListItem } from "@/component/column/list";
import { API_GET_COLUMN_RECOMMEND } from "@/component/const";
import { useFetchPaginationData } from "@/component/hook/useFetchPaginationData";
import { useTranslations } from "next-intl";
import React, { useCallback } from "react";

const Page = () => {
  const t = useTranslations();
  const { items, hasMore, keywords, setKeywords, loadMore } =
    useFetchPaginationData<ColumnListItem>(API_GET_COLUMN_RECOMMEND);
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
      <ColumnFilter onClick={handleFilter} />
      <ColumnList data={items} />
      {hasMore && (
        <ButtonLoadMore label={t("columnLoadMore")} onClick={loadMore} />
      )}
    </>
  );
};

export default Page;
