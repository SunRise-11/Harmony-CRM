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
    <div className="bg-white rounded-[10px] shadow">
      <div className="px-8 py-5 flex flex-col items-start justify-center gap-y-1 border-[#F0F0F0] border">
        <div className="text-right text-blue-400 text-lg font-normal font-['Afek 1.5 AAA']">
          כמות לקוחות פעילים בחלוקה לפי חודשים
        </div>
        <div className="text-right text-blue-950 text-[36.95px] font-medium font-['Roboto']">
          3,021
        </div>
        <div className="text-right text-neutral-600 text-xs font-normal font-['Afek 1.5 AAA']">
          ב 6 חודשים האחרונים
        </div>
      </div>
      <div className="px-4 py-8">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
