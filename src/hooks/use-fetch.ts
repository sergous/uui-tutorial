import { useState, useEffect } from "react";

export function useFetch(url: string, opts: any) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then((res: any) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url]);
  return [response, loading, hasError];
}
