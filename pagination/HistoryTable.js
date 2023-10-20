import React, { useState, useEffect } from "react";
import Pagination from "../services/pagination";

function HistoryTable(props) {
    const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 1;
  const [gotoPage, setGotoPage] = useState();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setGotoPage(pageNumber);
  };
  
  return (
    <div className="col-md-3">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalPages}
                pageSize={itemsPerPage}
                onPageChange={(page) => handlePageChange(page)}
              />
            </div>
  );
}
