import React, { useState } from "react";
import TransactionList from "../components/TransactionList";
import Main from "../layouts/Main";
import { TransactionData, TransactionProps } from "../types/interface";
import data from "../mock_data/transaction.json";
const Transaction: React.FC<TransactionProps> = () => {
  const [transaction] = useState<TransactionData[]>(data);

  return (
    <>
      <Main>
        <TransactionList transaction={transaction} limit={20} />
      </Main>
    </>
  );
};
export default Transaction;
