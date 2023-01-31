"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Table from "@/components/Table";
import data from "@/mock_data/transaction.json";
import { ITransactionData } from "@/types/interface";
export default function Transactions() {
  const [transaction] = useState<ITransactionData[]>(data);
  const headers = ["ID", "Date", "Description", "Category", "Amount"];
  const limit = 20;
  return (
    <>
      <div className="flex w-full">
        <div className="m-4 grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">
          <div className="rounded p-4 sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-4">
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
}
