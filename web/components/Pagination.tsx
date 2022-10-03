import React from "react";
import { IPaginationProps } from "../types/interface";

const Pagination: React.FC<IPaginationProps> = () => {
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
