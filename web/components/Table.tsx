// import React from "react";
// import { TableProps, TransactionData } from "../types/interface";
// import Pagination from "./Pagination";

// const Table: React.FC<TableProps> = ({ title, headers, data, limit }) => {
//   return (
//     <div className="flex">
//       <div className="flex flex-col p-4 bg-white rounded-lg">
//         <h1 className="text-2xl text-sky-500">{title}</h1>
//         <div className="overflow-x-auto">
//           <div className="inline-block min-w-full">
//             <div className="overflow-hidden">
//               <table aria-label="Transaction table">
//                 <thead className="border-b">
//                   <tr className="bg-white">
//                     {headers.map((header) => (
//                       <th
//                         key={header}
//                         scope="col"
//                         className="text-sm font-semibold px-6 py-4 text-left"
//                       >
//                         {header}
//                       </th>
//                     ))}
//                     <th
//                       scope="col"
//                       className="text-sm font-semibold px-6 py-4 text-left"
//                     >
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.slice(0, limit).map((item) => (
//                     <tr
//                       className="bg-white transition duration-300 ease-in-out hover:bg-gray-100"
//                       key={item.id}
//                     >
//                       {headers.map((header) => (
//                         <td
//                           className="px-6 py-4 whitespace-nowrap text-sm font-light"
//                           key={header}
//                         >
//                           {item[header.toLowerCase() as keyof TransactionData]}
//                         </td>
//                       ))}

//                       <td className="px-6 py-2 whitespace-nowrap text-sm font-lightcursor-pointer">
//                         Edit
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="p-4">
//                 <Pagination />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Table;

import React from "react";
import { TableProps, TransactionData } from "../types/interface";
import Pagination from "./Pagination";

const Table: React.FC<TableProps> = ({ title, headers, data, limit }) => {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl text-primary py-2">{title}</h1>
      <table className="table" aria-label="Transaction table">
        <thead className="border-b">
          <tr className="bg-white">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="text-sm font-semibold px-6 py-4 text-left"
              >
                {header}
              </th>
            ))}
            <th
              scope="col"
              className="text-sm font-semibold px-6 py-4 text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, limit).map((item) => (
            <tr
              className="bg-white transition duration-300 ease-in-out hover:bg-gray-100"
              key={item.id}
            >
              {headers.map((header) => (
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-light"
                  key={header}
                >
                  {item[header.toLowerCase() as keyof TransactionData]}
                </td>
              ))}

              <td className="px-6 py-2 whitespace-nowrap text-sm font-lightcursor-pointer">
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4">
        <Pagination />
      </div>
    </div>
  );
};
export default Table;
