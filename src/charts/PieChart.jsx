import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

// Optional
const options = {
  title: "My Daily Activities",
};

export default function PieChart() {
  return <Chart chartType="PieChart" data={data} options={options} />;
}