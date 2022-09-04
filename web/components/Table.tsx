import React from "react";
import { TableProps } from "../types/interface";
import Pagination from "./Pagination";

const Table: React.FC<TableProps> = ({ children }) => {
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
