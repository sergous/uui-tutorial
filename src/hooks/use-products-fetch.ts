import { useState, useEffect } from "react";
import { Product } from "@epam/uui-docs";
import { svc } from "../services";

export function useProductsFetch(
  first = 0,
  last = 10
): [Product[] | null, boolean, boolean] {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setLoading(true);
    svc
      .getProductItems()
      .then((res: any) => {
        setLoading(false);
        setResponse(res.slice(first, last));
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [first, last]);
  return [response, loading, hasError];
}
