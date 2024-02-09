import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const labels = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני"];

  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "#16BFD6",
        data: [25, 24, 23, 24, 23, 25],
        barThickness: 17,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        anchor: "end",
        offset: 3,
        align: "right",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 22,
        max: 25,
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="bar-chart">
      <div>
        <div>כמות לקוחות פעילים בחלוקה לפי חודשים</div>
        <div>3,021</div>
        <div>ב 6 חודשים האחרונים</div>
      </div>
      <div className="bar-chart-main">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
