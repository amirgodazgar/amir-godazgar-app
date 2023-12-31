import { BaseSyntheticEvent, useMemo, useState } from "react";

export const UsePagination = (fetchedData: any) => {
  console.log("USE Pagination");
  const [currentPage, setCurrentPage] = useState<number | BaseSyntheticEvent>(
    1
  );

  const dataPerPage = 4;
  const lastIndex = (currentPage as number) * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const total = fetchedData?.length;
  const numberOfPages = Math.ceil(total / dataPerPage);
  const pages = Array(numberOfPages)
    .fill(0)
    .map((_, index) => index + 1);

  const data = useMemo(
    () => fetchedData.slice(firstIndex, lastIndex),
    [firstIndex, lastIndex, fetchedData]
  );

  return {
    data,
    pages,
    setCurrentPage,
  };
};
