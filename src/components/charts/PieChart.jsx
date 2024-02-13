import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import 'chart.js/auto';
import PropTypes from "prop-types";

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

const PieChart = ({ Data, labels }) => {
  const data = {
    labels: labels,
    datasets: [Data],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: true,
        textAlign: "center",
        color: "white",
        font: {
          size: 15
        }
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };
  return <Pie data={data} options={options} />;
};

PieChart.propTypes = {
  Data: PropTypes.any.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PieChart.defaultProps = {
  flag: false,
};

export default PieChart;
