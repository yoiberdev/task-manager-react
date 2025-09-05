import { useMemo, useState } from "react";

type FilterFunction<T, F> = (item: T, filter: F) => boolean;

const useFilter = <T, F>(
  items: T[],
  filterFunction: FilterFunction<T, F>,
  defaultFilter: F
) => {
  const [currentFilter, setCurrentFilter] = useState<F>(defaultFilter);

  const filteredItems = useMemo(() => {
    return items.filter((item) => filterFunction(item, currentFilter));
  }, [items, currentFilter, filterFunction]);

  return {
    currentFilter,
    setCurrentFilter,
    filteredItems,
    allItems: items,
  };
};

export default useFilter;
