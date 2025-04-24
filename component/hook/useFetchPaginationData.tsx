import { useState, useEffect, useCallback, useRef } from "react";
import axios, { CancelTokenSource } from "axios";

interface PaginatedResponse<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasMore: boolean;
}

interface UseFetchPaginationDataResponse<T> {
  items: T[];
  loading: boolean;
  hasMore: boolean;
  keywords: string[];
  setKeywords: (keywords: string[]) => void;
  loadMore: () => void;
}

export function useFetchPaginationData<T>(
  apiUrl: string
): UseFetchPaginationDataResponse<T> {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState<number>(1);
  const [keywords, setKeywordsState] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);
  const isInitialMount = useRef(true);
  const prevKeywordsRef = useRef<string[]>([]);

  const fetchData = useCallback(
    async (
      pageNum: number,
      searchKeywords: string[],
      isNewSearch: boolean = false
    ) => {
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel(
          "Operation canceled due to new request."
        );
      }
      cancelTokenSourceRef.current = axios.CancelToken.source();
      setLoading(true);
      console.log(
        `Hook Fetching: page=${pageNum}, keywords=${JSON.stringify(
          searchKeywords
        )}, isNewSearch=${isNewSearch}`
      );
      try {
        const response = await axios.get<PaginatedResponse<T>>(apiUrl, {
          params: {
            page: pageNum,
            keywords: searchKeywords,
          },
          paramsSerializer: (params) => {
            const parts: string[] = [];
            Object.entries(params).forEach(([key, value]) => {
              if (value === null || typeof value === "undefined") {
                return;
              }
              if (Array.isArray(value)) {
                value.forEach((val) => {
                  parts.push(
                    `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
                  );
                });
              } else {
                parts.push(
                  `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                );
              }
            });
            return parts.join("&");
          },
          cancelToken: cancelTokenSourceRef.current.token,
        });
        const data = response.data;
        setItems((prevItems) =>
          isNewSearch || pageNum === 1
            ? data.items
            : [...prevItems, ...data.items]
        );
        setHasMore(data.hasMore);
        setPage(data.currentPage);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.error("Failed to fetch data:", err);
        }
      } finally {
        setLoading(false);
        cancelTokenSourceRef.current = null;
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    const currentKeywordSet = new Set(keywords);
    const prevKeywordSet = new Set(prevKeywordsRef.current);
    const areKeywordsSame =
      keywords.length === prevKeywordsRef.current.length &&
      [...currentKeywordSet].every((value) => prevKeywordSet.has(value));
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (keywords.length === 0) {
        fetchData(1, []);
      } else {
        fetchData(1, keywords, true);
        prevKeywordsRef.current = keywords;
      }
      return;
    }
    if (!areKeywordsSame) {
      console.log("Keywords changed, initiating new search:", keywords);
      setItems([]);
      setPage(1);
      setHasMore(true);
      fetchData(1, keywords, true);
      prevKeywordsRef.current = keywords;
    }
    return () => {
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel(
          "Component unmounted or keywords changed."
        );
      }
    };
  }, [keywords, fetchData]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      fetchData(nextPage, keywords);
    }
  }, [loading, hasMore, page, keywords, fetchData]);

  const setKeywords = useCallback((newKeywords: string[]) => {
    setKeywordsState([...newKeywords].sort());
  }, []);

  return {
    items,
    loading,
    hasMore,
    keywords,
    setKeywords,
    loadMore,
  };
}
