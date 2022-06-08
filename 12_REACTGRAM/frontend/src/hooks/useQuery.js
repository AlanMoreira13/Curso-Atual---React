import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import Search from "../pages/Search/Search";

export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
