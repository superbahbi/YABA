import { faker } from "@faker-js/faker";
import Head from "next/head";
import {
  IconCard,
  IconCash,
  IconCollege,
  IconGraph,
  IconTicket,
  IconTravel,
} from "../assets/icons";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import DougnutGraph from "../components/Graph/DougnutGraph";
import LineGraph from "../components/Graph/LineGraph";
import Progress from "../components/Progress";
import Main from "../layouts/Main";
import { OverviewProps } from "../types/interface";

export default function Overview(): OverviewProps {
  const income = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 2000, max: 2500 })
  );
  const expense = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 1800, max: 1950 })
  );
  const bugetBreakdownData = [25, 30, 15, 15, 7, 8];
  const balance = Array.from([2000, 3000, 5000].map((item) => item));

  return (
    <>
      <Head>
        <title>YABA. | Overview</title>
        <meta property="og:title" content="Overview" key="title" />
      </Head>
      <Main>
        <div className="flex w-full">
          <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full m-4">
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-1 p-4 rounded">
              <div className="flex flex-col w-full ">
                <div className="shadow-lg rounded-lg overflow-hidden bg-base-300">
                  <div className="py-3 px-5 border-b-2 border-base-100">
                    <div className="text-primary text-lg font-semibold">
                      <h1>Spending</h1>
                    </div>
                  </div>
                  <div className="p-10 md:h-96 h-60">
                    <LineGraph
                      income={income}
                      expense={expense}
                      labelColor="#A6ADBB"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 p-4 rounded min-w-xs ">
              <div className="flex flex-col w-full">
                <div className="shadow-lg rounded-lg overflow-hidden bg-base-300">
                  <div className="py-3 px-5 border-b-2 border-base-100">
                    <div className="text-primary text-lg font-semibold">
                      <h1>Scheduler</h1>
                    </div>
                  </div>
                  <div className="py-10">
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-3 p-4 rounded">
              <div className="text-primary text-lg font-semibold pb-2">
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
            <div className="md:col-span-1 p-4 rounded">
              <div className="text-primary text-lg font-semibold pb-2">
                <h1 className="">Accounts</h1>
              </div>
              <div className="flex flex-col w-full">
                <Balance
                  title="Cash"
                  amount={balance[0]}
                  icon={<IconCash strokeColor="text-accent" />}
                />
                <Balance
                  title="Credit card"
                  amount={balance[1]}
                  icon={<IconCard strokeColor="text-accent" />}
                />
                <Balance
                  title="Investment"
                  amount={balance[2]}
                  icon={<IconGraph strokeColor="text-accent" />}
                />
              </div>
            </div>
            <div className="md:col-span-1 p-4 rounded">
              <div className="text-primary text-lg font-semibold  pb-2">
                <h1 className="">Credit Cards</h1>
              </div>
              <div className="flex flex-col w-full"></div>
            </div>
            <div className="md:col-span-3 sm:col-span-1 row-span-3 p-4 rounded">
              <div className="flex flex-col w-full">
                <div className="shadow-lg rounded-lg overflow-hidden bg-base-300">
                  <div className="py-3 px-5 border-b-2 border-base-100">
                    <div className="text-primary text-lg font-semibold">
                      <h1>Budget Breakdown</h1>
                    </div>
                  </div>
                  <div className="p-10 h-96">
                    <DougnutGraph
                      data={bugetBreakdownData}
                      labelColor="#A6ADBB"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-1 p-4 rounded">7</div>
            <div className="md:col-span-1 p-4 rounded">8</div>
            <div className="md:col-span-1 p-4 rounded">9</div>
          </div>
        </div>
      </Main>
    </>
  );
}
