import { faker } from "@faker-js/faker";
import {
  IconArrowDown,
  IconArrowUp,
  IconCollege,
  IconTicket,
  IconTravel,
} from "@/assets/icons";
import Balance from "@/components/Balance";
import Calendar from "@/components/Calendar";
import Card from "@/components/Card";
import CreditScore from "@/components/CreditScore";
import DougnutGraph from "@/components/Graph/DougnutGraph";
import LineGraph from "@/components/Graph/LineGraph";
import Progress from "@/components/Progress";
import Table from "@/components/Table";
import Trends from "@/components/Trends";
import balanceData from "@/mock_data/balance.json";
import investmentData from "@/mock_data/investment.json";
// import { userStore } from "@/store/userStore";
export default async function Overview() {
  // const { getCurrentUser } = userStore();
  // const user = getCurrentUser();
  // console.log("user:", user);
  const income = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 2000, max: 2500 })
  );
  const expense = Array.from(Array(12)).map(() =>
    faker.datatype.number({ min: 1800, max: 1950 })
  );
  const bugetBreakdownData = [25, 30, 15, 15, 7, 8];

  return (
    <>
      <div className="flex w-full">
        <div className="m-4 grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">
          <div className="rounded p-4 sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-4">
            <Card title="Spending">
              {/* <pre>{user}</pre> */}
              <div className="h-60 md:h-96">
                <LineGraph
                  income={income}
                  expense={expense}
                  labelColor="#A6ADBB"
                />
              </div>
            </Card>
          </div>
          <div className="min-w-xs rounded p-4 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 ">
            <Card title="Scheduler">
              <Calendar />
            </Card>
          </div>
          <div className="row-span-1 rounded p-4 md:col-span-2">
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
                  <div className="btn-outline btn-primary btn-sm btn mx-4">
                    Create a goal
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="rounded p-4 sm:col-span-1 md:col-span-4">
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
                        <span className="pr-1 font-bold">{item.symbol}</span>
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
          <div className="rounded p-4 md:col-span-3">
            <Card title="Accounts">
              <Balance data={balanceData} />
            </Card>
          </div>

          <div className="rounded p-4 md:col-span-3">
            <Card title="Credit Score">
              <CreditScore score={760} />
            </Card>
          </div>
          <div className="rounded p-4 md:col-span-2">
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

          <div className="row-span-3 rounded p-4 sm:col-span-1 md:col-span-2">
            <Card title="Budget Breakdown">
              <div className="h-96">
                <DougnutGraph data={bugetBreakdownData} labelColor="#A6ADBB" />
              </div>
            </Card>
          </div>

          <div className="rounded p-4 md:col-span-1">8</div>
          <div className="rounded p-4 md:col-span-1">9</div>
        </div>
      </div>
    </>
  );
}
