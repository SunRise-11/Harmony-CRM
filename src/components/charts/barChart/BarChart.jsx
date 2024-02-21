import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import "chart.js/auto";
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

const BarChart = ({ Data, labels, defaultOptions, defaultData }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "#16BFD6",
        data: Data,
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
        offset: "3",
        align: "-16",
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
  return <Bar data={defaultData || data} options={defaultOptions || options} />;
};

BarChart.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.any),
  labels: PropTypes.arrayOf(PropTypes.any),
  defaultOptions: PropTypes.any,
  defaultData: PropTypes.any,
};

BarChart.defaultProps = {
  defaultOptions: null,
  defaultData: null,
  Data: null,
  labels: null,
};

export default BarChart;
