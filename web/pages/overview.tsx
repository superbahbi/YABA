import { faker } from "@faker-js/faker";
import Head from "next/head";
import {
  IconArrowDown,
  IconArrowUp,
  IconCollege,
  IconTicket,
  IconTravel,
} from "../assets/icons";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Card from "../components/Card";
import CreditScore from "../components/CreditScore";
import DougnutGraph from "../components/Graph/DougnutGraph";
import LineGraph from "../components/Graph/LineGraph";
import Progress from "../components/Progress";
import Table from "../components/Table";
import Trends from "../components/Trends";
import Main from "../layouts/Main";
import balanceData from "../mock_data/balance.json";
import investmentData from "../mock_data/investment.json";
import { OverviewProps } from "../types/interface";
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
      <Head>
        <title>yaba. | overview</title>
        <meta property="og:title" content="Overview" key="title" />
      </Head>
      <Main>
        <div className="flex w-full">
          <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 w-full m-4">
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-1 p-4 rounded">
              <Card title="Spending">
                <div className="md:h-96 h-60">
                  <LineGraph
                    income={income}
                    expense={expense}
                    labelColor="#A6ADBB"
                  />
                </div>
              </Card>
            </div>
            <div className="xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 p-4 rounded min-w-xs ">
              <Card title="Scheduler">
                <Calendar />
              </Card>
            </div>
            <div className="row-span-1 md:col-span-2 p-4 rounded">
              <Card title="Goal Budget">
                <div>
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
                  <div className="">
                    <div className="btn btn-outline btn-primary btn-sm mx-4">
                      Create a goal
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="md:col-span-4 sm:col-span-1 p-4 rounded">
              <Card title="Investments">
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Symbol</th>
                      <th>Value</th>
                      <th className="flex justify-end">7 day change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investmentData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item.position ? <IconArrowUp /> : <IconArrowDown />}
                        </td>
                        <td>
                          <span className="font-bold pr-1">{item.symbol}</span>
                          <span>{item.company}</span>
                        </td>
                        <td>{item.value}</td>
                        <td className="flex justify-between">
                          <span
                            className={`text-${
                              item.position ? "green" : "red"
                            }-500`}
                          >
                            {item.change}
                          </span>
                          <span
                            className={`text-${
                              item.position ? "green" : "red"
                            }-500`}
                          >
                            {item.percent_change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </div>
            <div className="md:col-span-3 p-4 rounded">
              <Card title="Accounts">
                <Balance data={balanceData} />
              </Card>
            </div>

            <div className="md:col-span-3 p-4 rounded">
              <Card title="Credit Score">
                <CreditScore score={760} />
              </Card>
            </div>
            <div className="md:col-span-2 p-4 rounded">
              <Card title="Trends">
                <Trends title="Cash" amount={4865} barColor="success" />
                <Trends
                  title="Debt"
                  amount={1158}
                  maxProgress={4865}
                  barColor="accent"
                />
                <Trends title="Net" amount={4865 - 1158} barColor="success" />
              </Card>
            </div>

            <div className="md:col-span-2 sm:col-span-1 row-span-3 p-4 rounded">
              <Card title="Budget Breakdown">
                <div className="h-96">
                  <DougnutGraph
                    data={bugetBreakdownData}
                    labelColor="#A6ADBB"
                  />
                </div>
              </Card>
            </div>

            <div className="md:col-span-1 p-4 rounded">8</div>
            <div className="md:col-span-1 p-4 rounded">9</div>
          </div>
        </div>
      </Main>
    </>
  );
};
export default Overview;
