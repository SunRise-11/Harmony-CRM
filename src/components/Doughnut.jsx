import React, { useState } from "react";
import { Doughnut as ReactDoughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
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

const Doughnut = ({ Data, labels }) => {
  const data = {
    labels: labels,
    datasets: [Data],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };

  return <ReactDoughnut data={data} options={options} />;
};

Doughnut.propTypes = {
  Data: PropTypes.any,
  labels: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default Doughnut;
