import axios, { CancelTokenSource, AxiosError } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseFetchDataResponse<T> {
  data: T | undefined;
  loading: boolean;
  error: AxiosError | Error | null;
}

export function useFetchData<T>(apiUrl: string): UseFetchDataResponse<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | Error | null>(null);
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

  const fetchData = useCallback(async (url: string) => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel(
        "Operation canceled due to new request."
      );
    }
    cancelTokenSourceRef.current = axios.CancelToken.source();
    setLoading(true);
    setError(null);
    setData(undefined);

    try {
      const response = await axios.get<{ data: T }>(url, {
        cancelToken: cancelTokenSourceRef.current.token,
      });
      const responseData = response.data.data;
      setData(responseData);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Request canceled:", err.message);
      } else {
        console.error("Failed to fetch data:", err);
        setError(err as AxiosError | Error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (apiUrl) {
      fetchData(apiUrl);
    }
    return () => {
      if (cancelTokenSourceRef.current) {
        console.log("Canceling request on unmount or dependency change");
        cancelTokenSourceRef.current.cancel(
          "Operation canceled due to component unmount or dependency change."
        );
        cancelTokenSourceRef.current = null;
      }
    };
  }, [apiUrl, fetchData]);

  return {
    data,
    loading,
    error,
  };
}
