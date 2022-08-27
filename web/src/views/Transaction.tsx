import React, { useState } from "react";
import Main from "../layouts/Main";
import { TransactionData, TransactionProps } from "../types/interface";
import data from "../mock_data/transaction.json";
import Table from "../components/Table";
const Transaction: React.FC<TransactionProps> = () => {
  const [transaction] = useState<TransactionData[]>(data);

  return (
    <>
      <Main>
        <Table
          title="Transaction"
          headers={["ID", "Date", "Description", "Category", "Amount"]}
          data={transaction}
          limit={20}
        />
      </Main>
    </>
  );
};
export default Transaction;
