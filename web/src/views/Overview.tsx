import React from "react";
import Main from "../layouts/Main";
import { OverviewProps } from "../types/interface";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Income vs Expenses",
    },
  },
};
export const doughtnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Budget breakdown",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const lineData = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Expenses",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const doughnutData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Overview: React.FC<OverviewProps> = ({}) => {
  return (
    <>
      <Main>
        <div className="text-blue  w-full flex">
          <div className="grid grid-cols-4 gap-4 w-full">
            <div className="col-span-3 bg-white p-4 rounded">
              <Line options={options} data={lineData} />
            </div>
            <div className="col-span-1 bg-white p-4 rounded">
              <Doughnut options={doughtnutOptions} data={doughnutData} />
            </div>
            <div className="row-span-3 bg-white p-4 rounded">3</div>
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
