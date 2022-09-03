import React from "react";
import { PaginationProps } from "../types/interface";

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="btn-group">
          <button className="btn">1</button>
          <button className="btn btn-active">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
        </div>
      </div>
    </>
  );
};
export default Pagination;
