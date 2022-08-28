import React from "react";
import { LineGraphProps } from "../../types/interface";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC<LineGraphProps> = ({ title, income, expense }) => {
  const options = {
    layout: {
      padding: {
        left: 10,
        right: 10,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        font: {
          size: 30,
          family: "Sora",
          weight: "bold",
        },
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const lineData = {
    labels,
    datasets: [
      {
        label: "Income",
        data: income,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
      {
        label: "Expenses",
        data: expense,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };
  return (
    <>
      <Line options={options} data={lineData} />
    </>
  );
};
export default LineGraph;
