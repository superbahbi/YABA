import React from "react";
import { TransactionListProps } from "../types/interface";

const TransactionList: React.FC<TransactionListProps> = ({
  transaction,
  limit,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <h1 className="text-2xl text-sky-500 my-4">Transaction</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full" aria-label="Transaction table">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-700 px-6 py-4 text-left"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-700 px-6 py-4 text-left"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-700 px-6 py-4 text-left"
                      >
                        Desription
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-700 px-6 py-4 text-left"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-700 px-6 py-4 text-left"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-700 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction.slice(0, limit).map((item) => (
                      <tr
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        key={item.id}
                      >
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.id}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.date}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.description}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.category}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.amount}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          Edit
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center">
                  <nav aria-label="Transaction pagination">
                    <ul className="flex list-style-none">
                      <li className="page-item">
                        <a
                          className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                          href="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                          href="#"
                        >
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                          href="#"
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                          href="#"
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                          href="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionList;
