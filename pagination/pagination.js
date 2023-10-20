import React from "react";
import { usePagination, DOTS } from "../components/usePagination";
import "./pagination.css";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  const onNext = () => {
    onPageChange(currentPage < lastPage ? currentPage + 1 : lastPage);
  };

  const onPrevious = () => {
    onPageChange(currentPage > 1 ? currentPage - 1 : 1);
  };
  return (
    <ul className={`pagination`}>
      {currentPage !== 1 && (
        <li key={0} className={`pagination-item`} onClick={onPrevious}>
          {" "}
          &lsaquo;
        </li>
      )}
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={`pagination-item ${
              currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {currentPage !== lastPage && (
        <li key={totalCount} className={`pagination-item`} onClick={onNext}>
          {" "}
          &rsaquo;
        </li>
      )}
    </ul>
  );
};

export default Pagination;
