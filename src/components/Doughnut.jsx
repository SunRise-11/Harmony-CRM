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

const Doughnut = ({ Data, labels, flag }) => {
  const data = {
    labels: labels,
    datasets: [Data],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: flag,
        textAlign: "center",
        color: "white"
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
  Data: PropTypes.any.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  flag: PropTypes.bool,
};

Doughnut.defaultProps = {
  flag: false,
};

export default Doughnut;
