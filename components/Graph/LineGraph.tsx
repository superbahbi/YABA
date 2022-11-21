"use client";
import React from "react";
import { ILineGraphProps } from "../../types/interface";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph: React.FC<ILineGraphProps> = ({
  income,
  expense,
  labelColor = "#fff",
}) => {
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
        display: false,
        position: "top" as const,
        font: {
          size: 30,
          family: "Sora",
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        ticks: { color: labelColor, beginAtZero: true },
      },
      x: {
        ticks: { color: labelColor, beginAtZero: true },
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
        fill: true,
        label: "Expenses",
        data: expense,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        color: "rgb(53, 162, 235)",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        fill: true,
        label: "Income",
        data: income,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
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
