import { BaseSyntheticEvent, useCallback } from "react";

type Props = {
  pages: number[];
  onCurrentPage: (page: number | BaseSyntheticEvent) => void;
};

const Pagination = (props: Props) => {
  console.log("Paaagination");

  const { pages, onCurrentPage } = props;

  const onClick = useCallback((page: number | BaseSyntheticEvent) => {
    onCurrentPage(page);
  }, []);

  return (
    <div>
      {pages.map((page) => (
        <button
          className="border py-2 px-4 mx-1 bg-slate-200 slate-800 rounded-lg"
          key={page.toString()}
          onClick={() => onClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
