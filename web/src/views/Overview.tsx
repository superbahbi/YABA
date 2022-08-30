import React from "react";
import Main from "../layouts/Main";

import Progress from "../components/Progress";
import { OverviewProps } from "../types/interface";
import {
  IconTicket,
  IconCollege,
  IconTravel,
  IconCash,
  IconCard,
  IconGraph,
} from "../assets/icons";
import LineGraph from "../components/Graph/LineGraph";
import DougnutGraph from "../components/Graph/DougnutGraph";
import { faker } from "@faker-js/faker";
import Calendar from "../components/Calendar";
import Balance from "../components/Balance";

const Overview: React.FC<OverviewProps> = () => {
  const income = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 2000, max: 2500 })
  );
  const expense = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 1800, max: 1950 })
  );
  const bugetBreakdownData = [25, 30, 15, 15, 7, 8];
  return (
    <>
      <Main>
        <div className="flex w-full">
          <div className="grid xl:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full m-4">
            <div className="xl:col-span-4 md:col-span-2 sm:col-span-1 bg-white p-4 rounded">
              <div className="text-midnight text-lg font-semibold pb-2">
                <h1 className="">Spending</h1>
              </div>
              <div className="flex flex-col w-full h-96">
                <LineGraph
                  title="Income vs Expenses"
                  income={income}
                  expense={expense}
                />
              </div>
            </div>
            <div className="xl:col-span-2 md:col-span-1 sm:col-span-1 bg-white p-4 rounded min-w-xs ">
              <div className="text-midnight text-lg font-semibold  pb-2">
                <h1 className="">Scheduler</h1>
              </div>
              <div className="flex flex-col w-full">
                <Calendar />
              </div>
            </div>
            <div className="row-span-3 bg-white p-4 rounded">
              <div className="text-midnight text-lg font-semibold pb-2">
                <h1 className="">Goal Budget</h1>
              </div>
              <div className="flex flex-col w-full">
                <Progress
                  title="Travel"
                  currentProgress={32}
                  totalProgress={100}
                  icon={<IconTravel strokeColor="text-sky-600" />}
                  color="bg-sky-200"
                />
                <Progress
                  title="College"
                  currentProgress={40}
                  totalProgress={100}
                  icon={<IconCollege strokeColor="text-rose-600" />}
                  color="bg-rose-200"
                />
                <Progress
                  title="Music"
                  currentProgress={82}
                  totalProgress={100}
                  icon={<IconTicket strokeColor="text-cyan-600" />}
                  color="bg-cyan-200"
                />
              </div>
            </div>
            <div className="md:col-span-1 bg-white p-4 rounded">
              <div className="text-midnight text-lg font-semibold pb-2">
                <h1 className="">Accounts</h1>
              </div>
              <div className="flex flex-col w-full">
                <Balance
                  title="Cash"
                  amount={parseFloat(faker.finance.amount())}
                  icon={<IconCash strokeColor="text-sky-600" />}
                />
                <Balance
                  title="Credit card"
                  amount={parseFloat(faker.finance.amount())}
                  icon={<IconCard strokeColor="text-sky-600" />}
                />
                <Balance
                  title="Investment"
                  amount={parseFloat(faker.finance.amount())}
                  icon={<IconGraph strokeColor="text-sky-600" />}
                />
              </div>
            </div>
            <div className="md:col-span-1 bg-white p-4 rounded">
              <div className="text-midnight text-lg font-semibold  pb-2">
                <h1 className="">Credit Cards</h1>
              </div>
              <div className="flex flex-col w-full"></div>
            </div>
            <div className="md:col-span-3 sm:col-span-1 row-span-3 bg-white p-4 rounded">
              <div className="text-midnight text-lg font-semibold  pb-2">
                <h1 className="">Budget Breakdown</h1>
              </div>
              <div className="flex flex-col w-full h-96">
                <DougnutGraph
                  title="Budget Breakdown"
                  data={bugetBreakdownData}
                />
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-1 bg-white p-4 rounded">
              7
            </div>
            <div className="md:col-span-1 bg-white p-4 rounded">8</div>
            <div className="md:col-span-1 bg-white p-4 rounded">9</div>
          </div>
        </div>
      </Main>
    </>
  );
};
export default Overview;
