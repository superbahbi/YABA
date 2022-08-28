import React from "react";
import Main from "../layouts/Main";

import Progress from "../components/Progress";
import { OverviewProps } from "../types/interface";
import { IconTicket, IconCollege, IconTravel } from "../assets/icons";
import LineGraph from "../components/Graph/LineGraph";
import DougnutGraph from "../components/Graph/DougnutGraph";
import { faker } from "@faker-js/faker";
// export const doughnutData = {
//   labels: ["Food", "Rent", "Investment", "Transporation", "Loan", "Other"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 3, 2],
//       backgroundColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
const Overview: React.FC<OverviewProps> = ({}) => {
  const income = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 500, max: 1000 })
  );
  const expense = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 500, max: 1000 })
  );
  const bugetBreakdownData = [25, 30, 15, 15, 7, 8];
  return (
    <>
      <Main>
        <div className="flex w-full">
          <div className="grid grid-cols-4 gap-4 w-full">
            <div className="col-span-3 h-96 bg-white p-4 rounded">
              <LineGraph
                title="Income vs Expenses"
                income={income}
                expense={expense}
              />
            </div>
            <div className="col-span-1 bg-white p-4 rounded">
              <DougnutGraph
                title="Budget Breakdown"
                data={bugetBreakdownData}
              />
            </div>
            <div className="row-span-3 bg-white p-4 rounded">
              <div className="text-midnight text-lg font-semibold">
                <h1 className="">Goal Budget</h1>
              </div>
              <div className="flex flex-col w-full">
                <Progress
                  title="Travel"
                  currentProgress={32}
                  totalProgress={100}
                  icon={<IconTravel />}
                  color="bg-sky-200"
                />
                <Progress
                  title="College"
                  currentProgress={40}
                  totalProgress={100}
                  icon={<IconCollege />}
                  color="bg-rose-200"
                />
                <Progress
                  title="Music"
                  currentProgress={82}
                  totalProgress={100}
                  icon={<IconTicket />}
                  color="bg-cyan-200"
                />
              </div>
            </div>
            <div className="col-span-1 bg-white p-4 rounded">4</div>
            <div className="col-span-1 bg-white p-4 rounded">5</div>
            <div className="row-span-2 bg-white p-4 rounded">6</div>
            <div className="col-span-2 bg-white p-4 rounded">7</div>
            <div className="col-span-1 bg-white p-4 rounded">8</div>
            <div className="col-span-2 bg-white p-4 rounded">9</div>
          </div>
        </div>
      </Main>
    </>
  );
};
export default Overview;
