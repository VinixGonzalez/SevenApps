import React, { useLayoutEffect, useState, memo } from "react";

import Pagination from "react-js-pagination";
import { Content } from "./styles";

const CustomPagination = ({
  usersPerPage,
  totalUsers,
  currentPage,
  handlePageChange,
}) => {
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };

  const pageNumbers = [];

  const [width] = useWindowSize();

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Content>
      <Pagination
        activePage={currentPage || 1}
        itemsCountPerPage={usersPerPage}
        totalItemsCount={totalUsers}
        pageRangeDisplayed={width < 1100 ? 1 : 11}
        onChange={handlePageChange}
      />
    </Content>
  );
};

export default memo(CustomPagination);
