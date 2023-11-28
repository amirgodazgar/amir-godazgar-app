import { BaseSyntheticEvent } from "react";

type Props = {
  pages: number[];
  setCurrentPage: (page: number | BaseSyntheticEvent) => void;
};

const Pagination = (props: Props) => {
  console.log('Paaagination')

  const { pages, setCurrentPage } = props;

  const onClick = (page: number | BaseSyntheticEvent) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {pages.map((page) => (
        <button
          className="border py-2 px-4 mx-1"
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
