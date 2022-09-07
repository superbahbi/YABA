import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import Main from "../layouts/Main";
import data from "../mock_data/transaction.json";
import { TransactionData, TransactionProps } from "../types/interface";
const Transaction: React.FC<TransactionProps> = () => {
  const [transaction] = useState<TransactionData[]>(data);
  const headers = ["ID", "Date", "Description", "Category", "Amount"];
  const limit = 20;
  return (
    <>
      <Head>
        <title>yaba. | transaction</title>
        <meta property="og:title" content="transaction" key="title" />
      </Head>
      <Main>
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
                            {
                              item[
                                header.toLowerCase() as keyof TransactionData
                              ]
                            }
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
      </Main>
    </>
  );
};
export default Transaction;
