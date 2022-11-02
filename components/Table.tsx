import React from "react";
import { ITableProps } from "../types/interface";
import Pagination from "./Pagination";

const Table: React.FC<ITableProps> = ({ children }) => {
  return (
    <div>
      <table className="table w-full">{children}</table>
      <div className="p-4">
        <Pagination />
      </div>
    </div>
  );
};
export default Table;
