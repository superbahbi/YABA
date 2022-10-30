"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Table from "@/components/Table";
import data from "@/mock_data/transaction.json";
import { ITransactionData, ITransactionProps } from "@/types/interface";
const Transaction: React.FC<ITransactionProps> = () => {
  const [transaction] = useState<ITransactionData[]>(data);
  const headers = ["ID", "Date", "Description", "Category", "Amount"];
  const limit = 20;
  return (
    <>
      <div className="flex w-full">
        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 w-full m-4">
          <div className="xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-1 p-4 rounded">
            <Card title="Transaction">
              <Table>
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transaction.slice(0, limit).map((item) => (
                    <tr key={item.id}>
                      {headers.map((header) => (
                        <td key={header}>
                          {item[header.toLowerCase() as keyof ITransactionData]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transaction;
