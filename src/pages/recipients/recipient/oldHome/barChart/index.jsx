import InlineSVG from "react-inlinesvg";
import infoSVG from "../../../../../assets/icons/info.svg";
import BarChart from "../../../../../components/charts/barChart/BarChart";

const RecipientBarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const barData = [
    [5, 10, 10, -90, -40, -70],
    [-30, 30, -90, -30, 40, -50],
    [90, 80, -30, -40, 30, 70],
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        data: barData[0],
        backgroundColor: "#63ABFD",
        borderColor: "#165BAA",
        borderWidth: 2,
      },
      {
        data: barData[1],
        backgroundColor: "#E697FF",
        borderColor: "#A155B9",
        borderWidth: 2,
      },
      {
        data: barData[2],
        backgroundColor: "#FFA5CB",
        borderColor: "#F765A3",
        borderWidth: 2,
      },
      // {
      //   backgroundColor: "#63ABFD",
      //   data: barData,
      //   barThickness: 17,
      // },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderRadius: 10,
      },
    },
    responsive: true,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 40, // this will create a grid line every 40 units
        },
      },
    },
    // scales: {
    //   y: {
    //     min: 22,
    //     max: 25,
    //     beginAtZero: true,
    //   },
    // },
  };
  return (
    <div className="recipient-bar-charts">
      <div className="recipient-bar-charts-header">
        <div>
          <div className="recipient-bar-charts-header-title">
            הסתגלות לקוחות פעילים בחלוקה לפי חודשים
          </div>
          <div className="recipient-bar-charts-header-count">3,021</div>
          <div className="recipient-bar-charts-header-period">
            ב 6 חודשים האחרונים
          </div>
        </div>
        <InlineSVG src={infoSVG} />
      </div>
      <div className="recipient-bar-charts-line"></div>
      <div className="recipient-bar-charts-board">
        <BarChart defaultData={data} defaultOptions={options} />
      </div>
    </div>
  );
};

export default RecipientBarChart;
